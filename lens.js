/* A single, visibility-aware country tour, followed by the native picker. */
window.mountContinentalLens = (root, changeCountry, motionPreference) => {
  const panel = root.querySelector(".country-console");
  if (!panel) return () => {};
  const select = panel.querySelector("#country-select");
  const title = panel.querySelector(".lens-country");
  const count = panel.querySelector(".lens-count");
  const toggle = panel.querySelector(".lens-toggle");
  const choose = panel.querySelector(".lens-choose");
  const countries = [...select.options].map((option) => option.value);
  const controller = new AbortController();
  const { signal } = controller;
  let index = 0;
  let manual = false;
  let paused = false;
  let visible = false;
  let hovered = false;
  let focused = false;
  let timer;
  let animation;

  const clear = () => {
    clearTimeout(timer);
    timer = undefined;
  };
  const onScreen = () => {
    const rect = panel.getBoundingClientRect();
    return (
      Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0) >=
      rect.height * 0.5
    );
  };
  const display = () => {
    changeCountry(countries[index]);
    title.textContent = select.options[index].textContent;
    count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(countries.length).padStart(2, "0")}`;
    if (!motionPreference.matches && title.animate) {
      animation?.cancel();
      animation = title.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 450, easing: "cubic-bezier(.2,.7,.2,1)" },
      );
    }
  };
  const finish = (focus = false) => {
    manual = true;
    clear();
    animation?.cancel();
    panel.dataset.mode = "manual";
    title.hidden = true;
    select.hidden = false;
    toggle.hidden = true;
    choose.hidden = true;
    count.textContent = "Your perspective";
    panel
      .querySelector(".country-description")
      .setAttribute("aria-live", "polite");
    if (focus) select.focus({ preventScroll: true });
  };
  const schedule = () => {
    clear();
    if (
      manual ||
      paused ||
      !visible ||
      hovered ||
      focused ||
      document.hidden ||
      !onScreen()
    )
      return;
    timer = setTimeout(() => {
      if (document.hidden || !onScreen()) {
        schedule();
        return;
      }
      if (index === countries.length - 1) finish();
      else {
        index++;
        display();
        schedule();
      }
    }, 4000);
  };
  const listen = (element, event, handler) =>
    element.addEventListener(event, handler, { signal });
  listen(select, "change", () => {
    index = countries.indexOf(select.value);
    changeCountry(select.value);
    finish();
  });
  listen(toggle, "click", () => {
    paused = !paused;
    const action = paused ? "Resume country tour" : "Pause country tour";
    toggle.setAttribute("aria-label", action);
    toggle.title = action;
    toggle.querySelector("img").src =
      `assets/icons/${paused ? "play" : "pause"}.svg`;
    schedule();
  });
  listen(choose, "click", () => finish(true));
  listen(panel, "pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      hovered = true;
      schedule();
    }
  });
  listen(panel, "pointerleave", () => {
    hovered = false;
    schedule();
  });
  listen(panel, "focusin", () => {
    focused = true;
    schedule();
  });
  listen(panel, "focusout", (event) => {
    focused = panel.contains(event.relatedTarget);
    schedule();
  });
  listen(document, "visibilitychange", schedule);
  listen(motionPreference, "change", () => {
    if (motionPreference.matches) finish();
  });
  // Map clicks are an explicit selection and end the automatic tour.
  listen(root.querySelector(".hero-map"), "click", (event) => {
    const name = event.target.closest("[data-country]")?.dataset.country;
    const next = countries.indexOf(name);
    if (next < 0) return;
    index = next;
    display();
    finish();
  });
  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      schedule();
    },
    { threshold: 0.5 },
  );
  observer.observe(panel);
  panel.dataset.mode = "tour";
  select.hidden = true;
  title.hidden = false;
  display();
  if (motionPreference.matches) finish();
  return () => {
    clear();
    observer.disconnect();
    animation?.cancel();
    controller.abort();
  };
};
