/* Centralized data for all works.
 * Keys are slugs (match HTML query param & image filenames).
 * IMPORTANT: Every slug here must have images/<slug>.jpg (detail) and images/<slug>_1000.jpg (index).
 */

const ARTWORKS = {
  Truthful_Decameron: {
    title: "Truthful Decameron",
    medium: "Cut Paper",
    size: "23×18 inches",
    year: "",
    caption: "The pandemic was longer and more paranoid.",
    number: 13
  },

  Arachne: {
    title: "Arachne",
    medium: "Cut Paper",
    size: "??×?? inches",
    year: "",
    caption: "Arachne's suicide is less about having been dishonored than about her horror at the gods' disregard for the truth.",
    number: 2
  },

  Ariadne_auf_Naxos: {
    title: "Ariadne auf Naxos",
    medium: "Cut Paper",
    size: "??×?? inches",
    year: "",
    caption: "Theseus fears her now, because of what she learned from Dionysus’s women.",
    number: 4
  },

  Artist_at_Home: {
    title: "The Artist at Home",
    medium: "Cut Paper",
    size: "??×?? inches",
    year: "",
    caption: "A wise damsel need not be a martyr to be a painter.",
    number: 15
  },

  Bayeuse_Tapestry: {
    title: "Bayeuse Tapestry",
    medium: "Cut Paper",
    size: "26×22 inches",
    year: "",
    caption: "Victory",
    number: 3
  },

  Corps_Feminine: {
    title: "Corps Féminine",
    medium: "Cut Paper",
    size: "8×16 inches",
    year: "",
    caption: "Early experiences of body shaming diminish access to nerves later in life.",
    number: 20
  },

  Demon_of_History: {
    title: "Demon of History",
    medium: "Cut Paper",
    size: "14×16 inches",
    year: "",
    caption: "One ancient evil is naive; time is nothing but the grinding down of our bones.",
    number: 5
  },

  Dream_1: {
    title: "Dream 1",
    medium: "Cut Paper",
    size: "11×19 inches",
    year: "",
    caption: "I have dreamed of a thousand jewel-sized dogs trying to run out of the door since I was a small child.",
    number: 9
  },

  Ethiopian_Gate: {
    title: "Ethiopian Gate",
    medium: "Cut Paper",
    size: "31×25 inches",
    year: "2019",
    caption: "The gods first arrived daily in Ethiopia, but the doors to the world are shut. \n Chorus: \n I. At lapidation's over-flow of few and final gods, the Door Lord is last. \n II. Things are things, hedgerowed all, with lazum winds and gyre long hence cast. \n III. Mapped rivers, sand's supplicants be, for if bank, deluge at any dyke-key. \n IV. Mute signs, praised be thou as self-augury in facet topaz.",
    number: 5
  },

  /* NOTE: You renamed this from 'Etruscan_Urn_for_My_Mothers_Ashes' to Urn_2.
     Make sure the image is images/Urn_2.jpg (and _1000.jpg). */
  Urn_2: {
    title: "Urn 2",
    medium: "Cut Paper",
    size: "11×9 inches",
    year: "2018–2019",
    caption: "My mother's peace with mortality was to be an Etruscan funeral urn.",
    number: 8
  },

  Five_Maps_for_Happy_Marriages: {
    title: "Five maps for happy marriages",
    medium: "Cut Paper",
    size: "18×27 inches",
    year: "",
    caption: "From upper left: All lovers into one; parallel masturbation; integration; embrace; circulation and gravity.",
    number: 12
  },

  Glass_Alchemy: {
    title: "Winemark",
    medium: "Cut Paper",
    size: "3×5 inches",
    year: "",
    caption: "Wine",
    number: 7
  },

  /* You previously had Interior; if you intend to rename, also rename the image to Dream_2_Interior.jpg */
  Dream_2_Interior: {
    title: "Dream 2: Interior",
    medium: "Cut Paper",
    size: "30×15 inches",
    year: "",
    caption: "Nothing but the four lightwells with four citrus trees.",
    number: 19
  },

  /* Slash is illegal in filenames and unquoted keys; normalize to underscore */
  Trouble_Toil: {
    title: "Trouble/Toil",
    medium: "Cut Paper",
    size: "17×14 inches",
    year: "",
    caption: "Assembling the ingredients to raise the devil is a long walk of faith.",
    number: 16
  },

  Muses: {
    title: "Muses (Wit, Faith, Compulsion)",
    medium: "Cut Paper",
    size: "10×9 inches",
    year: "",
    caption: "Their horses, their objects, and their nightmares.",
    number: 6
  },

  Red_Sky: {
    title: "Red Sky",
    medium: "Cut Paper",
    size: "10×14 inches",
    year: "",
    caption: "Chorus:\n Oh, perpetual black red sky, vary' d only by degree, fixeth our wan eyelids against thou stayed sun.\n Here abide 900 million, the most of those remaining.\n Flanking thou, ring of mapped embers, first, somnambulist cities, magnetic, atomic.\n And to the left, degrees of ever-light, where first the corn is sweet, then crumbles unfathomable.\n We who fixed the sky, who murdered children' s moons,\n ye, some martyred but more fed, willing bridegrooms to fire and to doom.",
    number: 14
  },

  The_Book_of_Sacred_Games: {
    title: "The Book of Sacred Games",
    medium: "Cut Paper",
    size: "??×?? inches",
    year: "",
    caption: "This book elaborates 17 master strategies for tarot (originally a competitive game), beginning with the Yeats series (Geist, Craiglaith, Faust, Enunciation.)",
    number: 11
  },

  The_Capital: {
    title: "The Capital",
    medium: "Cut Paper",
    size: "55×78 inches",
    year: "",
    caption: "The towering city.",
    number: 1
  },

  Urns: {
    title: "Urns",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "",
    caption: "The work of mourning my parents: compartmentalization; my husband; speech",
    number: 18
  },

  William_Morris: {
    title: "William Morris",
    medium: "Cut Paper",
    size: "17×23 inches",
    year: "",
    caption: "",
    number: 21
  },

  Chiari_Decompression: {
    title: "Chiari Decompression",
    medium: "Cut Paper",
    size: "13×17 inches",
    year: "",
    caption: "",
    number: 22
  },

  Beloved: {
    title: "Beloved",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "",
    caption: "",
    number: 23
  },

  The_Noonday_Demon: {
    title: "The Noonday Demon",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "",
    caption: "",
    number: 24
  }
};

/* ensure it’s global */
window.ARTWORKS = window.ARTWORKS || ARTWORKS;
