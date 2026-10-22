/* Route-scoped motion and native scroll-snap browsing; no scroll interception. */
(() => {
  let update = () => {};

  function mount(root, motionPreference) {
    const controller = new AbortController();
    const cleanups = [];
    const signal = controller.signal;
    const observe = (observer) => {
      cleanups.push(() => observer.disconnect());
      return observer;
    };
    const animated = [
      ...root.querySelectorAll(
        ".section-heading, .editor-note, .lead-story, .side-story, .pillar, .renaissance-visual, .renaissance-copy, .method-strip-inner > div, .pulse-inner > div, .pulse-form, .partnership-band .wrap > *, .methodology-grid section, .research-item, .article section",
      ),
    ];

    if (!motionPreference.matches && "IntersectionObserver" in window) {
      const reveals = observe(
        new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting)
                entry.target.style.setProperty(
                  "--reveal-offset",
                  entry.boundingClientRect.top < 0 ? "-18px" : "24px",
                );
              entry.target.classList.toggle("in-view", entry.isIntersecting);
            }
          },
          { rootMargin: "0px 0px -5% 0px", threshold: 0 },
        ),
      );
      animated.forEach((el) => {
        el.classList.add("scroll-reveal");
        reveals.observe(el);
      });
      cleanups.push(() =>
        animated.forEach((el) => {
          el.classList.remove("scroll-reveal", "in-view");
          el.style.removeProperty("--reveal-offset");
        }),
      );
    }

    const perspective = root.querySelector(".perspective");
    const pillars = [...root.querySelectorAll(".pillar")];
    const marker = root.querySelector(".perspective-marker");
    const progressTrack = root.querySelector(".perspective-track > span");
    const visual = root.querySelector(".renaissance-visual .visual-type");
    const article = root.querySelector(".article");
    let progressBar;
    if (article && root.querySelector(".share-button")) {
      progressBar = document.createElement("div");
      progressBar.className = "reading-progress";
      progressBar.setAttribute("role", "progressbar");
      progressBar.setAttribute("aria-label", "Reading progress");
      progressBar.setAttribute("aria-valuemin", "0");
      progressBar.setAttribute("aria-valuemax", "100");
      progressBar.innerHTML = "<span></span>";
      document.body.append(progressBar);
      cleanups.push(() => progressBar.remove());
    }

    update = () => {
      if (perspective) {
        const rect = perspective.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < innerHeight) {
          const focusLine = innerHeight * 0.54;
          const distances = pillars.map((el) =>
            Math.abs(el.getBoundingClientRect().top - focusLine),
          );
          const active = distances.indexOf(Math.min(...distances));
          pillars.forEach((el, i) =>
            el.classList.toggle("is-current", i === active),
          );
          marker.textContent = String(active + 1).padStart(2, "0");
          progressTrack.style.transform = `scaleX(${(active + 1) / pillars.length})`;
        }
      }
      if (visual && !motionPreference.matches) {
        const rect = visual.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < innerHeight)
          visual.style.setProperty(
            "--scene-y",
            `${Math.max(-18, Math.min(18, (innerHeight * 0.5 - rect.top - rect.height * 0.5) * 0.05))}px`,
          );
      }
      if (progressBar) {
        const rect = article.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(
            0,
            (120 - rect.top) / Math.max(1, rect.height - innerHeight + 120),
          ),
        );
        progressBar.firstElementChild.style.transform = `scaleX(${progress})`;
        progressBar.setAttribute(
          "aria-valuenow",
          String(Math.round(progress * 100)),
        );
      }
    };
    window.addEventListener("resize", update, { signal, passive: true });
    requestAnimationFrame(() => {
      if (!signal.aborted) update();
    });

    const catalogue = root.querySelector(".catalogue");
    if (catalogue) {
      const track = catalogue.querySelector(".catalogue-track");
      const items = [...track.children];
      const previous = catalogue.querySelector(".catalogue-prev");
      const next = catalogue.querySelector(".catalogue-next");
      const play = catalogue.querySelector(".catalogue-play");
      const label = catalogue.querySelector(".catalogue-mode");
      const count = catalogue.querySelector(".catalogue-count");
      let paused = motionPreference.matches || innerWidth < 900;
      let visible = false;
      let hovering = false;
      let focused = false;
      let timer;
      const stop = () => {
        clearTimeout(timer);
        timer = undefined;
      };
      const itemOffset = (i) => items[i].offsetLeft - items[0].offsetLeft;
      const current = () =>
        Math.max(
          0,
          items.reduce(
            (best, el, i) =>
              Math.abs(itemOffset(i) - track.scrollLeft) <
              Math.abs(itemOffset(best) - track.scrollLeft)
                ? i
                : best,
            0,
          ),
        );
      const maxScroll = () =>
        Math.max(0, track.scrollWidth - track.clientWidth);
      const isAtEnd = () => track.scrollLeft >= maxScroll() - 5;
      function sync() {
        const index = current();
        count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
        previous.disabled = track.scrollLeft < 5;
        next.disabled = isAtEnd();
        play.disabled = motionPreference.matches;
        const name = motionPreference.matches
          ? "Automatic browsing paused for reduced motion"
          : paused
            ? "Play catalogue"
            : "Pause catalogue";
        play.setAttribute("aria-label", name);
        play.title = name;
        play.querySelector("img").src =
          `assets/icons/${paused ? "play" : "pause"}.svg`;
        label.textContent = paused
          ? "Paused"
          : hovering || focused
            ? "On hold"
            : "Auto";
      }
      function schedule() {
        stop();
        sync();
        if (
          paused ||
          !visible ||
          hovering ||
          focused ||
          document.hidden ||
          motionPreference.matches
        )
          return;
        timer = setTimeout(() => {
          move(1, true);
          schedule();
        }, 6500);
      }
      function move(direction, automatic = false) {
        const nextIndex = Math.max(
          0,
          Math.min(items.length - 1, current() + direction),
        );
        const left =
          automatic && isAtEnd()
            ? 0
            : Math.min(maxScroll(), itemOffset(nextIndex));
        track.scrollTo({
          left,
          behavior: motionPreference.matches ? "instant" : "smooth",
        });
        if (!automatic) {
          paused = true;
          schedule();
        }
      }
      previous.addEventListener("click", () => move(-1), { signal });
      next.addEventListener("click", () => move(1), { signal });
      play.addEventListener(
        "click",
        () => {
          paused = !paused;
          schedule();
        },
        { signal },
      );
      track.addEventListener("scroll", sync, { signal, passive: true });
      track.addEventListener(
        "pointerdown",
        () => {
          paused = true;
          schedule();
        },
        { signal, passive: true },
      );
      track.addEventListener(
        "wheel",
        () => {
          paused = true;
          schedule();
        },
        { signal, passive: true },
      );
      track.addEventListener(
        "keydown",
        (event) => {
          if (event.target !== track) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            paused = true;
            track.scrollTo({
              left: event.key === "Home" ? 0 : maxScroll(),
              behavior: motionPreference.matches ? "instant" : "smooth",
            });
            schedule();
          }
        },
        { signal },
      );
      catalogue.addEventListener(
        "pointerenter",
        () => {
          hovering = true;
          schedule();
        },
        { signal },
      );
      catalogue.addEventListener(
        "pointerleave",
        () => {
          hovering = false;
          schedule();
        },
        { signal },
      );
      catalogue.addEventListener(
        "focusin",
        () => {
          focused = true;
          schedule();
        },
        { signal },
      );
      catalogue.addEventListener(
        "focusout",
        () => {
          queueMicrotask(() => {
            if (signal.aborted) return;
            focused = catalogue.contains(document.activeElement);
            schedule();
          });
        },
        { signal },
      );
      document.addEventListener("visibilitychange", schedule, { signal });
      window.addEventListener(
        "resize",
        () => {
          if (innerWidth < 900) paused = true;
          schedule();
        },
        { signal, passive: true },
      );
      const visibility = observe(
        new IntersectionObserver(
          (entries) => {
            visible = entries[0].isIntersecting;
            schedule();
          },
          { threshold: 0.25 },
        ),
      );
      visibility.observe(catalogue);
      cleanups.push(stop);
      sync();
    }

    return () => {
      controller.abort();
      cleanups.forEach((fn) => fn());
      if (visual) visual.style.removeProperty("--scene-y");
      update = () => {};
    };
  }
  window.StethoscopeExperience = { mount, update: () => update() };
})();
