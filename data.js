const data = [
  {
    "event": "BIG BANG",
    "description": "Origin of the observable universe",
    "type": "cosmos",
    "age": 13800000000,
  },
  {
    "event": "ATOMS",
    "description": "Formation of first neutral atoms after recombination",
    "type": "cosmos",
    "age": 13799620000,
  },
  {
    "event": "FIRST STARS",
    "description": "First generation of stars formed",
    "type": "cosmos",
    "age": 13700000000,
  },
  {
    "event": "FIRST GALAXIES",
    "description": "Early galaxies formed",
    "type": "cosmos",
    "age": 12800000000,
  },
  {
    "event": "SOLAR SYSTEM",
    "description": "Formation of the Sun and planets",
    "type": "cosmos",
    "age": 4570000000,
  },
  {
    "event": "GREAT OXYGENATION EVENT",
    "description": "Oxygen began accumulating in Earth's atmosphere due to photosynthetic microorganisms",
    "type": "earth",
    "age": 2400000000,
  },
  {
    "event": "FIRST EUKARYOTES",
    "description": "Complex cells with nuclei appeared",
    "type": "earth",
    "age": 2100000000,
  },
  {
    "event": "CAMBRIAN EXPLOSION",
    "description": "Rapid diversification of animal life in oceans; most major animal body plans emerged",
    "type": "earth",
    "age": 539000000,
  },
  {
    "event": "ORDOVICIAN ERA (1st EXTINCTION EVENT)",
    "description": "Around 85% of marine species became extinct. Massive glaciation caused sea levels to fall, followed by rapid warming and environmental instability",
    "type": "earth",
    "age": 443000000,
  },
  {
    "event": "DEVONIAN AGE (2nd EXTINCTION EVENT)",
    "description": "Around 75% of species became extinct. Causes included fluctuating sea levels, global cooling and warming cycles, oxygen depletion in oceans and volcanic activity",
    "type": "earth",
    "age": 374000000,
  },
  {
    "event": "PANGAEA SUPERCONTINENT",
    "description": "Most landmasses merged into the supercontinent Pangaea. Interior regions became dry with desert-like climate and very low rainfall",
    "type": "earth",
    "age": 300000000,
  },
  {
    "event": "PERMIAN AGE (3rd EXTINCTION EVENT)",
    "description": "Largest extinction event in Earth's history; around 90–95% of marine species disappeared. Massive volcanic eruptions released huge amounts of carbon dioxide and sulphur dioxide, causing global warming, acid rain, ocean acidification and severe oxygen depletion. Ash and gases blocked sunlight, cooling the environment after intense warming",
    "type": "earth",
    "age": 252000000,
  },
  {
    "event": "PANGAEA STARTED SEPARATING",
    "description": "The supercontinent Pangaea began to break apart. Volcanic activity continued releasing greenhouse gases and sulphur compounds, contributing to unstable climate and ocean acidification",
    "type": "earth",
    "age": 245000000,
  },
  {
    "event": "FIRST DINOSAURS",
    "description": "Early dinosaurs such as Eoraptor evolved. They were relatively small and became ancestors of later dinosaur groups",
    "type": "dinosaur",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "LATE TRIASSIC AGE (4th EXTINCTION EVENT)",
    "description": "Around 80% of species became extinct due to massive volcanic activity associated with the opening of the Atlantic Ocean. High carbon dioxide levels caused global warming, acid rain and ocean acidification",
    "type": "earth",
    "age": 200000000,
  },
  {
    "event": "DINOSAURS BECAME DOMINANT",
    "description": "After the Triassic–Jurassic extinction event, dinosaurs became the dominant land animals. Unlike many reptiles, many dinosaurs were warm-blooded or partially warm-blooded, helping them survive changing climates. Crocodiles, turtles, early mammals and dinosaurs survived while many competing species disappeared",
    "type": "dinosaur",
    "age": 201000000,
  },
  {
    "event": "JURASSIC PERIOD",
    "description": "Dinosaurs became very large and diversified widely. Early birds and flying reptiles appeared. Pangaea separated further into Laurasia and Gondwana",
    "type": "dinosaur",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "CRETACEOUS PERIOD",
    "description": "Many varieties of dinosaurs evolved and dominated Earth. Flowering plants spread widely. Sea levels were high and global temperatures were warmer than today. Laurasia and Gondwana separated further and continents gradually moved toward modern positions",
    "type": "dinosaur",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "GRASS EVOLUTION",
    "description": "Early grasses appeared and began spreading across some ecosystems",
    "type": "earth",
    "age": 70000000,
  },
  {
    "event": "TYRANNOSAURUS REX AND TRICERATOPS",
    "description": "Large dinosaurs such as Tyrannosaurus rex and Triceratops flourished during the late Cretaceous period",
    "type": "dinosaur",
    "age": 68000000,
  },
  {
    "event": "CRETACEOUS PERIOD (5th EXTINCTION EVENT)",
    "description": "Around 76% of species became extinct after a massive asteroid about 10–15 km wide struck near the Yucatan Peninsula in present-day Mexico at extremely high speed. The impact generated shockwaves, heat pulses, wildfires, earthquakes, volcanic eruptions, acid rain and giant tsunamis. Dust and ash blocked sunlight for months to years, causing global cooling and collapse of plant life. Food chains collapsed as herbivores and then carnivores died. Small mammals, turtles, birds and scavengers survived more successfully. Carbon dioxide and sulphur released from rocks and volcanic activity later caused long-term global warming",
    "type": "earth",
    "age": 66000000,
  },
  {
    "event": "PALEOGENE PERIOD",
    "description": "After the extinction of non-avian dinosaurs, mammals diversified rapidly. Early horses, whales, bats, primates, snakes and many modern bird groups evolved",
    "type": "earth",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EARLY HOMININS",
    "description": "Human ancestors such as Australopithecus evolved in Africa and began walking upright",
    "type": "human",
    "age": 3000000,
  },
  {
    "event": "CONTROL OF FIRE",
    "description": "Early humans learned to control fire for warmth, cooking and protection",
    "type": "human",
    "age": 1000000,
  },
  {
    "event": "HOMO SAPIENS",
    "description": "Modern humans appeared in Africa",
    "type": "human",
    "age": 300000,
  },
  {
    "event": "ART",
    "description": "Earliest known cave paintings, carvings and symbolic art emerged",
    "type": "human",
    "age": 45000,
  },
  {
    "event": "MUSIC",
    "description": "Earliest known musical instruments such as bone flutes were created",
    "type": "human",
    "age": 40000,
  },
  {
    "event": "EARLY HUMAN MIGRATION THROUGH BERING LAND BRIDGE",
    "description": "Humans migrated from Siberia to Alaska through the Bering land bridge formed during the Ice Age when sea levels were lower",
    "type": "human",
    "age": 23000,
  },
  {
    "event": "EARLY SOUTH AMERICAN ARTWORK",
    "description": "Some of the oldest known artworks in South America indicate humans were already present before later migration waves from North America",
    "type": "human",
    "age": 23000,
  },
  {
    "event": "AGRICULTURE",
    "description": "Humans began organized farming and formed permanent settlements",
    "type": "human",
    "age": 12000,
  },
  {
    "event": "HOLOCENE EPOCH",
    "description": "Current geological epoch that began after the last Ice Age. Human civilization expanded rapidly during this period",
    "type": "earth",
    "age": 11700,
  },
  {
    "event": "HUMANS REACHED CENTRAL AMERICA",
    "description": "Human populations migrating through the Americas reached Central America after moving south from Alaska",
    "type": "human",
    "age": 11500,
  },
  {
    "event": "END OF LAST ICE AGE",
    "description": "Global temperatures increased and glaciers began melting rapidly, causing sea levels to rise and changing human migration routes",
    "type": "earth",
    "age": 10700,
  },
  {
    "event": "AMAZON GEOMETRIC POTTERY AND ROADS",
    "description": "Ancient geometric earthworks, pottery and road networks appeared in the Amazon region, indicating organized settlements and agriculture",
    "type": "human",
    "age": 8000,
  },
  {
    "event": "MODERN SCIENCE",
    "description": "Scientific Revolution established modern scientific methods and accelerated technological advancement",
    "type": "science",
    "age": 400,
  },
  {
    "event": "POSSIBLE 6th EXTINCTION EVENT",
    "description": "Many scientists consider current biodiversity loss as a possible sixth mass extinction driven by human activities such as climate change, habitat destruction, pollution and invasive species",
    "type": "earth",
    "age": 200,
  },
  {
    "event": "EMPEROR - BABUR",
    "description": "Founder of the Mughal Empire in India after the First Battle of Panipat",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - HUMAYUN",
    "description": "Second Mughal emperor and son of Babur",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - AKBAR",
    "description": "Third Mughal emperor known for expansion, administration and religious tolerance",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - JAHANGIR",
    "description": "Fourth Mughal emperor known for art, culture and administrative stability",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - SHAH JAHAN",
    "description": "Fifth Mughal emperor who commissioned the Taj Mahal",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - AURANGZEB",
    "description": "Sixth Mughal emperor under whom the Mughal Empire reached its greatest territorial extent",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - CHHATRAPATI SHIVAJI MAHARAJ",
    "description": "Founder of the Maratha Empire and pioneer of guerrilla warfare in India",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - SAMBHAJI MAHARAJ",
    "description": "Second ruler of the Maratha Empire and eldest son of Shivaji Maharaj",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - RAJARAM I",
    "description": "Maratha ruler who continued resistance against the Mughal Empire after Sambhaji",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - SHAHUJI MAHARAJ",
    "description": "Maratha ruler who strengthened the Maratha Confederacy after release from Mughal captivity",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "EMPEROR - BALAJI BAJI RAO",
    "description": "Peshwa of the Maratha Empire during its major territorial expansion",
    "type": "emperor",
    "age": null,
    "yearstart": 0,
    "yearend": 0
  },
  {
    "event": "FIRST TRANSATLANTIC TELEGRAPH CABLE",
    "description": "First successful telegraph communication cable laid between North America and Europe using copper lines between Canada and Ireland",
    "type": "electronics",
    "age": 168,
  },
  {
    "event": "PHONOGRAPH",
    "description": "Thomas Edison invented the phonograph, the first device capable of recording and reproducing sound",
    "type": "electronics",
    "age": 149,
  },
  {
    "event": "FIRST OP-AMP USING VACUUM TUBES",
    "description": "Early operational amplifiers were built using vacuum tube technology for analog computation and signal processing",
    "type": "electronics",
    "age": 85,
  },
  {
    "event": "uA702 OP-AMP INTEGRATED CIRCUIT",
    "description": "Fairchild Semiconductor introduced the uA702, one of the first monolithic integrated circuit operational amplifiers",
    "type": "electronics",
    "age": 63,
  },
  {
    "event": "LM741 OP-AMP",
    "description": "Fairchild Semiconductor released the LM741, a widely used general-purpose operational amplifier integrated circuit",
    "type": "electronics",
    "age": 58,
  },
  {
    "event": "PRESENT",
    "description": "Current era",
    "type": "present",
    "age": 0,
  }
]