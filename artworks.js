/* Centralized data for all works.
 * Keys are slugs (match HTML query param & image filenames).
 * IMPORTANT: Every slug here must have images/<slug>.jpg (detail) and images/<slug>_1000.jpg (index).
 */

const ARTWORKS = {
  A_Truthful_Decameron: {
    title: "A Truthful Decameron",
    medium: "Cut Paper",
    size: "23×18 inches",
    year: "",
    caption: "          The 14th century classic, The Decameron, tells of a group of young friends who flee to their country house and create a structure to enjoy themselves while they wait out the plague: telling each other a world of stories. By contrast, our own experience of plague, the Covid-19 pandemic, was defined by paranoia, isolation and a loss of time. In this image, the city burns in the background while here in the safety of the countryside, pleasures have to be tortured out and conspiracies abound.",
    number: 13
  },

  Arachne: {
    title: "Arachne",
    medium: "Cut Paper",
    size: "",
    year: "",
    caption: "          Many of my works are speculative manuscript pages from the library of one of my heroines, the Wise Damsel. As such, many of my works are commentaries on the classics. This piece portrays the Greek legend of Arachne, who was shamed by the Goddess Athena after beating the goddess in a weaving competition. Arachne then hangs herself. In this interpretation, Arachne’s suicide is actually motivated by her disdain for the gods’ disregard for truth.",
    number: 2
  },

  Ariadne_Auf_Naxos: {
    title: "Ariadne Auf Naxos",
    medium: "Cut Paper",
    size: "",
    year: "",
    caption: "          In the Greek Theseus legend, Theseus abandons his lover, Ariadne, on the island of Naxos, which belongs to Dyonisus, the wine god. In this rendering, Theseus has actually become afraid of Ariadne because she has participated in the god’s orgy rites. Specifically, the god’s women have seduced and torn the phalluses from heroes to revitalize the lush landscape with saguaros. This is also a love letter to the mythic landscape of the Sonoran Desert.",
    number: 4
  },

  The_Artist_at_Home: {
    title: "The Artist at Home",
    medium: "Cut Paper",
    size: "",
    year: "",
    caption: "          This is a self-portrait of me in my bedroom, joyfully surrounded by my husband, our animals and our specific art. I have always felt that Frida Khalo was treated as the weeping lady martyr of Surrealism. Here I insist that the female artist is completely entitled to pleasures in life and dreams.",
    number: 15
  },

  Bayeuse_Tapestry: {
    title: "Bayeuse Tapestry",
    medium: "Cut Paper",
    size: "26×22 inches",
    year: "",
    caption: "          The 230-foot English Bayeux Tapestry commemorates the Norman conquest of England in 1066 CE. The tapestry portrays the war’s origins, major characters’ identities, pivotal incidents, and the final Norman triumph over the Saxons. This piece portrays the war and victory of a group of female rebels, starting on the far coastline with their reasons for rebellion, following through the early incidents of the war and ending at the victory celebration in the foreground. There warriors and their leader stand in triumph, displaying the traps with which they catch their bat steeds. The setting is the far eastern coast of the Sonoran Desert.",
    number: 3
  },

  Corps_Feminine: {
    title: "Corps Féminine",
    medium: "Cut Paper, Thread",
    size: "8×16 inches",
    year: "",
    caption: "          This manuscript page is a religious lament showing the martyrdom of the female Saint of Flesh. Specifically, this piece elaborates upon the research demonstrating that early-life flesh (body) shaming diminishes access to nerves later in life. Thus, shame straightly diminishes the existence of its subject. Here, the pleasure of flesh is castrated and reconstructed as automation.",
    number: 20
  },

  The_Demon_of_History: {
    title: "The Demon of History",
    medium: "Cut Paper",
    size: "14×16 inches",
    year: "",
    caption: "          Another religious piece, this page portrays the Demon of History, a terrifying figure with no true face, merely an infinite series of references to previous faces. This piece cautions against looking for a transcendent origin or apex of time; rather time will grind our bones without boundaries or direction.",
    number: 5
  },

  Dream_1: {
    title: "Dream 1",
    medium: "Cut Paper",
    size: "11×19 inches",
    year: "",
    caption: "          Since I was a small child, I repeatedly dreamed of a thousand jewel-sized dogs trying to run out of the front door. In the dream, my overwhelming desire to keep every single one and the terror of losing any puts me in a state of ecstacy and agony.",
    number: 9
  },

  The_Ethiopian_Gate: {
    title: "The Ethiopian Gate",
    medium: "Cut Paper",
    size: "31×25 inches",
    year: "2019",
    caption: "          In Greek mythology, Ethiopia was the first country visited by the Gods each day as they crossed into the world from the East. Here, at one dawn, the gods arrive to find themselves locked out and progressively turn to stone. In the library of the “Wise Damsel”, this story is commented upon with a chorus that suggests that even after deaths of gods, transcendence is still possible: \n Chorus text: \n I. At lapidation's over-flow of few and final gods, the Door Lord is last. \n II. Things are things, hedgerowed all, with lazum winds and gyre long hence cast. \n III. Mapped rivers, sand's supplicants be, for if bank, deluge at any dyke-key.  \n IV. Mute signs, praised be thou as self-augury in facet topaz. ",
    number: 5
  },

  Funeral_Urn_1: {
    title: "Funeral Urn 1",
    medium: "Cut Paper",
    size: "11×9 inches",
    year: "2018–2019",
    caption: "          My mother's peace with mortality was supposed to accomplished by acquiring an Etruscan funeral urn for her remains. However, they are very old, rare and expensive. Here, I made one for her and included all the things I thought she'd want to have with her, including art, dancers, markers her accomplishments and her history and a beautiful view.",
    number: 8
  },

  Five_Maps_for_Happy_Marriages: {
    title: "Five maps for happy marriages",
    medium: "Cut Paper",
    size: "18×27 inches",
    year: "",
    caption: "          The “Wise Damsel” does not live in an ivory tower. As such, her library must provide advice for practical ethics and relationships. Here are shown 5 potential arrangements for happy marriages. From upper left: All lovers become a single one; parallel masturbation; total integration; the embrace of one lover by the other; circulation based on each other's gravity.",
    number: 12
  },

  Wine_Label: {
    title: "Wine Label",
    medium: "Cut Paper",
    size: "3×5 inches",
    year: "",
    caption: "          “Glass Alchemy” ",
    number: 7
  },

  Dream_2_Interior: {
    title: "Dream 2: Interior",
    medium: "Cut and Textured Paper",
    size: "30×15 inches",
    year: "",
    caption: "          All my life, I have had certain repeating dreams, several of which I have rendered in art pieces. Here is the dreamed-of house where, my dream suggests, I would be fully at ease. To the eye, the house is an elevated prison as there is no eyeline to the outside except for four open lightwells over four citrus trees. However, to sensation, this is an architectural design for the feeling of perfect safety.",
    number: 19
  },

  Toil_Trouble: {
    title: "Toil/Trouble",
    medium: "Cut Paper",
    size: "17×14 inches",
    year: "",
    caption: "          This comic piece derives from Shakespeare’s Macbeth, in which witches “toil and trouble” to call the Devil by boiling 23 of the most terrifying ingredients imaginable. This image is my own recipe for summoning the devil, which requires incredibly effort to acquire the most terrifying ingredients I can imagine, including the thumb of a musician, a loyal dog and a father’s semen. The precise ingredients, quantities and process are laid out in diagrams and instructions in the cauldron. Although this piece is comic, the “Wise Damsel” would indeed need a working knowledge of poisons.",
    number: 16
  },

  Muses: {
    title: "Muses: Wit, Faith, Compulsion",
    medium: "Cut Paper",
    size: "10×9 inches",
    year: "",
    caption: "          My three most saintly muses, Faith, Wits and Compulsion here appear with their horses, their totems and their nightmares. They join on the road to worthy stories.",
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
    size: "",
    year: "",
    caption: "          One of my central heroines, the Wise Damsel, represents a feminist revision of the classically educated young scholar who would have been instructed in the classics, ethics, politics, games and living. This page instructs the Wise Damsel to “Play to Win” at tarot (originally a betting game) and provides guides for winning strategies. The left-hand column lists the existential perspectives whose strategies the Wise Damsel will have to learn. The particular strategy here elaborated is the “WB Yeats” series. Each card explores one of his poetic works, finishing with the winning bet and card. I often feel that that this piece most closely represents my day-to-day thinking.",
    number: 11
  },

  The_Capital: {
    title: "The Capital",
    medium: "Cut Paper on Plastic Canvas",
    size: "55×78 inches",
    year: "",
    caption: "          The towering city",
    number: 1
  },

  Funeral_Urns_2: {
    title: "Funeral Urns 2",
    medium: "Cut Paper",
    size: "12×12 inches",
    year: "",
    caption: "          The work of mourning my immature relationship with my parents: compartmentalization; my husband; speech",
    number: 18
  },

  The_Tragedy_of_William_Morris: {
    title: "The Tragedy of William Morris",
    medium: "Cut Paper, Foam Board",
    size: "17×23 inches",
    year: "",
    caption: "          William Morris was a 19th century designer who advocated for the accessibility of beautiful art in the daily lives of regular people. He designed transcendent patterns and florals, and ran his company of craftspeople on communist principles. I cried when I found this poster and a set of sheets with his patterns on them in a corporate discount store. However, they were so beautiful that I bought them.",
    number: 21
  },

  Chiari_Decompression: {
    title: "Chiari Decompression",
    medium: "Cut Paper",
    size: "13×17 inches",
    year: "",
    caption: "          In 2023, I finally had a brain surgery to address a compression in my lower brain that caused devestating and hallucination-inducing headaches. The surgery was utterly effective, but I was so frightened that I almost refused to have it done. I began this piece before the surgery and finished it after I had recovered. It addresses the tension between the pure rationality-requiring aspect brain surgery and the manifest problems of cutting into a personality. The “Net of Hephaestus” is an object of Greek mythology that binds together two gods caught during intercourse so tightly that they cannot separate or hide. Ultimately, I did accept rational cutting into my tightly interwoven brain.",
    number: 22
  },

  Beloved: {
    title: "Beloved",
    medium: "Cut and Textrured Paper, Peacock Feathers",
    size: "10×16 inches",
    year: "",
    caption: "",
    number: 23
  },

  The_Noonday_Demon: {
    title: "The Noonday Demon",
    medium: "Cut Paper",
    size: "10×16 inches",
    year: "",
    caption: "          The Noonday Demon is personification of the feeling of loss and lethargy when the sun is directly overhead so that you're unable to see your shadow, the proof of your existence. In this version, the demon is just FRYING the character’s personhood.",
    number: 24
  },

  Hold_NIN: {
    title: "Hold/NIN",
    medium: "Cut Paper",
    size: "17×13 inches",
    year: "2025",
    caption: "",
    number: 25
  },

    Niece: {
    title: "Niece",
    medium: "",
    size: "",
    year: "2026",
    caption: "",
    number: 26
  },

    Withdrawal: {
    title: "Withdrawal",
    medium: "",
    size: "",
    year: "2026",
    caption: "",
    number: 27
  }

};

/* ensure it’s global */
window.ARTWORKS = window.ARTWORKS || ARTWORKS;
