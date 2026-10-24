const editorialPhotos = [
  {
    id: "parliament",
    title: "Parliament in Company Gardens, Cape Town",
    author: "Jonathan Beech",
    date: "15 August 2015",
    source:
      "https://commons.wikimedia.org/wiki/File:Parliament_in_company_gardens.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    id: "nairobi",
    title: "Nairobi skyline from Uhuru Park",
    author: "Raidarmax",
    date: "7 July 2012",
    source: "https://commons.wikimedia.org/wiki/File:Nairobi_City_Skyline.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    id: "noor",
    title: "Noor I and II, Ouarzazate Solar Power Station",
    author: "Richard Allaway",
    date: "17 October 2019",
    source:
      "https://commons.wikimedia.org/wiki/File:Noor_1_and_2_-_Ouarzazate_Solar_Power_Station_(48962353822).jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
];
function photoCredits() {
  return `${pageHead("Photography", "Places behind the stories.", "Credited contextual photography. These images do not imply a partnership, endorsement or reporting visit by the publication.")}<div class="wrap photo-credits-list">${editorialPhotos.map((p) => `<section><img src="assets/photos/${p.id}-640.webp" alt="${p.title}" width="640" height="400" loading="lazy"><div><h2>${p.title}</h2><p>Photograph by ${p.author} / ${p.date}.</p><p><a href="${p.source}" target="_blank" rel="noopener noreferrer">Original photograph, Wikimedia Commons ↗</a></p><p><a href="${p.licenseUrl}" target="_blank" rel="noopener noreferrer">${p.license} ↗</a></p><p>Display derivatives resized and converted to WebP; responsive framing may crop the view. Derivatives retain the original photograph's licence. No generative edits.</p></div></section>`).join("")}</div>`;
}
