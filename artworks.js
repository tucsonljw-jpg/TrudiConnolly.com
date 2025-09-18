/* Centralized data for all works.
 * Keys are slugs (match HTML query param & image filenames).
 */

const ARTWORKS = {
  A_Truthful_Decameron: {
    title: "A Truthful Decameron",
    medium: "Cut Paper",
    size: "23×18 inches",
    year: "2020",
    caption: "Actual quarantine was longer, more solipsistic, hedonistic and grotesquely conspiratorial.",
    number: 13
  },

  Arachne: {
    title: "Arachne",
    medium: "Cut Paper",
    size: "??×?? inches",   // fill in
    year: "????",
    caption: "Arachne's suicide is less about having been dishonored than about her horror at the gods' disregard for the truth.",
    number: 2
  },

  Ariadne_auf_Naxos: {
    title: "Ariadne auf Naxos",
    medium: "Cut Paper",
    size: "??×?? inches",
    year: "????",
    caption: "Theseus fears her after the orgy.",
    number: 4
  },

  Artist_at_Home: {
    title: "The Artist at Home",
    medium: "Cut Paper",
    size: "??×?? inches",
    year: "????",
    caption: "A wise damsel need not be a martyr to be a painter.",
    number: 15
  },

  Bayeuse_Tapestry: {
    title: "Bayeuse Tapestry",
    medium: "Cut Paper",
    size: "26×22 inches",
    year: "[UNDATED]",
    caption: "Victory",
    number: 3
  },

  Corps_Feminine: {
    title: "Corps Féminine",
    medium: "Cut Paper",
    size: "8×16 inches",
    year: "2022–2024",
    caption: "Early experiences of body shaming diminish access to nerves later in life.",
    number: 20
  },

  Demon_of_History: {
    title: "Demon of History",
    medium: "Cut Paper",
    size: "14×16 inches",
    year: "2018",
    caption: "One single ancient evil is naive; time is nothing but the grinding down of our bones.",
    number: 2
  },

  Dream_1: {
    title: "Dream 1",
    medium: "Cut Paper",
    size: "11×19 inches",
    year: "2019",
    caption: "A repeating agony and ecstasy since my childhood: a thousand tiny jewel dogs attempt to roll out the door.",
    number: 9
  },

  Ethiopian_Gate: {
    title: "Ethiopian Gate",
    medium: "Cut Paper",
    size: "31×25 inches",
    year: "2019",
    caption: `Ethiopia was blessed as the first place the gods arrived daily, but their calcification begins when they find the gates to our realm shut.
The poem reads:
I. At lapidation's over-flow of few and final gods, Door Lord last.
II. Things are things, hedgerowed all, with lazum winds and gyre long hence cast.
III. Mapped rivers, sand's supplicants be, for if bank, deluge at any dyke-key.
IV. Mute signs, praised be thou as self-augury in facet topaz.`,
    number: null
  },

  Urn_2: {
    title: "Urn 2",
    medium: "Cut Paper",
    size: "11×9 inches",
    year: "2018–2019",
    caption: "My mother's peace with mortality was to be an Etruscan funeral urn.",
    number: 8
  },

  
 Five_maps_for_happy_marriages : {
    title: "Five maps for happy marriages",
    medium: "Cut Paper",
    size: "18×27 inches",
    year: "2020",
    caption: "From upper left: All lovers into one; parallel masturbation; integration; embrace; circulation and gravity.",
    number: 12
  },

  Glass_Alchemy: {
    title: "Glass Alchemy",
    medium: "Cut Paper",
    size: "3×5 inches",
    year: "[UNDATED]",
    caption: "Wine",
    number: 7
  },

  Dream_2_Interior: {
    title: "Dream 2: Interior",
    medium: "Cut Paper",
    size: "30×15 inches",
    year: "2021",
    caption: "The house has no windows but four lightwells with four citrus trees.",
    number: 19
  },

  Trouble/Toil: {
    title: "Trouble/Toil",
    medium: "Cut Paper",
    size: "17×14 inches",
    year: "[UNDATED]",
    caption: "Assembling the ingredients to raise the devil is a long walk of faith.",
    number: 16
  },

  Muses: {
    title: "Muses (Wit, Faith, Compulsion)",
    medium: "Cut Paper",
    size: "10×9 inches",
    year: "2019",
    caption: "Wit, Faith and Compulsion, their horses and their good and bad dreams.",
    number: 6
  },

  Red_Sky: {
    title: "Red Sky",
    medium: "Cut Paper",
    size: "10×14 inches",
    year: "2021",
    caption: `The poem reads:
Perpetual black red sky, vary' d only by degree, fixeth our wan eyelids against thou stay⟭ sun.
Here abide 900 million, the most of those remaining.
Flanking thou, ring of mapped embers, first, somnambulist cities, magnetic, atomic.
And to the left, degrees of ever-light, where first the corn is sweet, then crumbles unfathomable.
We who fixed the sky, who murdered children' s moons, ye, some martyred but more fed, willing bridegrooms to fire and to doom.`,
    number: 14
  },

  Strategies: {
    title: "Strategies",
    medium: "Cut Paper",
    size: "??×?? inches",  // to fill in
    year: "2019",
    caption: "This book elaborates 17 master strategies for tarot (originally a competitive game), beginning with the Yeats series (Geist, Craiglaith, Faust, Enunciation.)",
    number: 11
  },

  The_Capital: {
    title: "The Capital",
    medium: "Cut Paper",
    size: "55×78 inches",
    year: "[UNDATED]",
    caption: "The towering city.",
    number: 1
  },

  Urns: {
    title: "Urns",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "2022",
    caption: "The work of mourning my parents: compartmentalization; my husband; speech",
    number: 18
  }

    William_Morris: {
    title: "William Morris",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "2025",
    caption: "",
    number: 18
  }

    Chairi_Decompression: {
    title: "Chairi Decompression",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "202x",
    caption: "",
    number: 18
  }

    Beloved: {
    title: "Beloved",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "202x",
    caption: "",
    number: 18
  }

    The_Noonday_Demon: {
    title: "The Noonday Demon",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "202x",
    caption: "",
    number: 18
  }
};
;window.ARTWORKS = window.ARTWORKS || ARTWORKS;