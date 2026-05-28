const data = [
    {
        "event": "big bang",
        "description": "Origin of the observable universe",
        "type": "cosmos",
        "age": 13800000000
    },
    {
        "event": "atoms",
        "description": "Formation of first neutral atoms after recombination",
        "type": "cosmos",
        "age": 13799620000
    },
    {
        "event": "first stars",
        "description": "First generation of stars formed",
        "type": "cosmos",
        "age": 13700000000
    },
    {
        "event": "first galaxies",
        "description": "Early galaxies formed",
        "type": "cosmos",
        "age": 12800000000
    },
    {
        "event": "solar system",
        "description": "Formation of the Sun and planets",
        "type": "cosmos",
        "age": 4570000000
    },
    {
        "event": "great oxygenation event",
        "description": "Oxygen began accumulating in Earth's atmosphere due to photosynthetic microorganisms",
        "type": "earth",
        "age": 2400000000
    },
    {
        "event": "first eukaryotes",
        "description": "Complex cells with nuclei appeared",
        "type": "earth",
        "age": 2100000000
    },
    {
        "event": "cambrian explosion",
        "description": "Rapid diversification of animal life in oceans; most major animal body plans emerged",
        "type": "earth",
        "age": 539000000
    },
    {
        "event": "ordovician era (1st extinction event)",
        "description": "Around 85% of marine species became extinct. Massive glaciation caused sea levels to fall, followed by rapid warming and environmental instability",
        "type": "earth",
        "age": 443000000
    },
    {
        "event": "devonian age (2nd extinction event)",
        "description": "Around 75% of species became extinct. Causes included fluctuating sea levels, global cooling and warming cycles, oxygen depletion in oceans and volcanic activity",
        "type": "earth",
        "age": 374000000
    },
    {
        "event": "pangaea supercontinent",
        "description": "Most landmasses merged into the supercontinent Pangaea. Interior regions became dry with desert-like climate and very low rainfall",
        "type": "earth",
        "age": 300000000
    },
    {
        "event": "permian age (3rd extinction event)",
        "description": "Largest extinction event in Earth's history; around 90–95% of marine species disappeared. Massive volcanic eruptions released huge amounts of carbon dioxide and sulphur dioxide, causing global warming, acid rain, ocean acidification and severe oxygen depletion. Ash and gases blocked sunlight, cooling the environment after intense warming",
        "type": "earth",
        "age": 252000000
    },
    {
        "event": "first dinosaurs",
        "description": "Early dinosaurs such as Eoraptor evolved. They were relatively small and became ancestors of later dinosaur groups",
        "type": "dinosaur",
        "age": 249000000
    },
    {
        "event": "pangaea started separating",
        "description": "The supercontinent Pangaea began to break apart. Volcanic activity continued releasing greenhouse gases and sulphur compounds, contributing to unstable climate and ocean acidification",
        "type": "earth",
        "age": 245000000
    },
    {
        "event": "jurassic period",
        "description": "Dinosaurs became very large and diversified widely. Early birds and flying reptiles appeared. Pangaea separated further into Laurasia and Gondwana",
        "type": "dinosaur",
        "age": 201000000
    },
    {
        "event": "dinosaurs became dominant",
        "description": "After the Triassic–Jurassic extinction event, dinosaurs became the dominant land animals. Unlike many reptiles, many dinosaurs were warm-blooded or partially warm-blooded, helping them survive changing climates. Crocodiles, turtles, early mammals and dinosaurs survived while many competing species disappeared",
        "type": "dinosaur",
        "age": 201000000
    },
    {
        "event": "late triassic age (4th extinction event)",
        "description": "Around 80% of species became extinct due to massive volcanic activity associated with the opening of the Atlantic Ocean. High carbon dioxide levels caused global warming, acid rain and ocean acidification",
        "type": "earth",
        "age": 200000000
    },
    {
        "event": "cretaceous period",
        "description": "Many varieties of dinosaurs evolved and dominated Earth. Flowering plants spread widely. Sea levels were high and global temperatures were warmer than today. Laurasia and Gondwana separated further and continents gradually moved toward modern positions",
        "type": "dinosaur",
        "age": 145000000
    },
    {
        "event": "grass evolution",
        "description": "Early grasses appeared and began spreading across some ecosystems",
        "type": "earth",
        "age": 70000000
    },
    {
        "event": "tyrannosaurus rex and triceratops",
        "description": "Large dinosaurs such as Tyrannosaurus rex and Triceratops flourished during the late Cretaceous period",
        "type": "dinosaur",
        "age": 68000000
    },
    {
        "event": "paleogene period",
        "description": "After the extinction of non-avian dinosaurs, mammals diversified rapidly. Early horses, whales, bats, primates, snakes and many modern bird groups evolved",
        "type": "earth",
        "age": 66000000
    },
    {
        "event": "cretaceous period (5th extinction event)",
        "description": "Around 76% of species became extinct after a massive asteroid about 10–15 km wide struck near the Yucatan Peninsula in present-day Mexico at extremely high speed. The impact generated shockwaves, heat pulses, wildfires, earthquakes, volcanic eruptions, acid rain and giant tsunamis. Dust and ash blocked sunlight for months to years, causing global cooling and collapse of plant life. Food chains collapsed as herbivores and then carnivores died. Small mammals, turtles, birds and scavengers survived more successfully. Carbon dioxide and sulphur released from rocks and volcanic activity later caused long-term global warming",
        "type": "earth",
        "age": 66000000
    },
    {
        "event": "early hominins",
        "description": "Human ancestors such as Australopithecus evolved in Africa and began walking upright",
        "type": "human",
        "age": 3000000
    },
    {
        "event": "control of fire",
        "description": "Early humans learned to control fire for warmth, cooking and protection",
        "type": "human",
        "age": 1000000
    },
    {
        "event": "homo sapiens",
        "description": "Modern humans appeared in Africa",
        "type": "human",
        "age": 300000
    },
    {
        "event": "art",
        "description": "Earliest known cave paintings, carvings and symbolic art emerged",
        "type": "human",
        "age": 45000
    },
    {
        "event": "music",
        "description": "Earliest known musical instruments such as bone flutes were created",
        "type": "human",
        "age": 40000
    },
    {
        "event": "early south american artwork",
        "description": "Some of the oldest known artworks in South America indicate humans were already present before later migration waves from North America",
        "type": "human",
        "age": 23000
    },
    {
        "event": "early human migration through bering land bridge",
        "description": "Humans migrated from Siberia to Alaska through the Bering land bridge formed during the Ice Age when sea levels were lower",
        "type": "human",
        "age": 23000
    },
    {
        "event": "agriculture",
        "description": "Humans began organized farming and formed permanent settlements",
        "type": "human",
        "age": 12000
    },
    {
        "event": "holocene epoch",
        "description": "Current geological epoch that began after the last Ice Age. Human civilization expanded rapidly during this period",
        "type": "earth",
        "age": 11700
    },
    {
        "event": "humans reached central america",
        "description": "Human populations migrating through the Americas reached Central America after moving south from Alaska",
        "type": "human",
        "age": 11500
    },
    {
        "event": "end of last ice age",
        "description": "Global temperatures increased and glaciers began melting rapidly, causing sea levels to rise and changing human migration routes",
        "type": "earth",
        "age": 10700
    },
    {
        "event": "amazon geometric pottery and roads",
        "description": "Ancient geometric earthworks, pottery and road networks appeared in the Amazon region, indicating organized settlements and agriculture",
        "type": "human",
        "age": 8000
    },
    {
        "event": "modern science",
        "description": "Scientific Revolution established modern scientific methods and accelerated technological advancement",
        "type": "science",
        "age": 400
    },
    {
        "event": "the holocene epoch (6th extinction event)",
        "description": "Many scientists consider current biodiversity loss as a possible sixth mass extinction driven by human activities such as climate change, habitat destruction, pollution and invasive species. About 99% of the planet's species have been lost in the previous five mass extinctions Ongoing Reasons: Anthropogenic factors like climate change and introduction of invasive plant species",
        "type": "earth",
        "age": 200
    },
    {
        "event": "emperor - babur",
        "description": "Founder of the Mughal Empire in India after the First Battle of Panipat",
        "type": "emperor",
        "yearstart": 1526,
        "yearend": 1556
    },
    {
        "event": "emperor - humayun",
        "description": "Second Mughal emperor and son of Babur",
        "type": "emperor",
        "yearstart": 1556,
        "yearend": 1605
    },
    {
        "event": "emperor - akbar",
        "description": "Third Mughal emperor known for expansion, administration and religious tolerance",
        "type": "emperor",
        "yearstart": 1605,
        "yearend": 1627
    },
    {
        "event": "emperor - jahangir",
        "description": "Fourth Mughal emperor known for art, culture and administrative stability",
        "type": "emperor",
        "yearstart": 1627,
        "yearend": 1658
    },
    {
        "event": "emperor - shah jahan",
        "description": "Fifth Mughal emperor who commissioned the Taj Mahal",
        "type": "emperor",
        "yearstart": 1658,
        "yearend": 1674
    },
    {
        "event": "emperor - aurangzeb",
        "description": "Sixth Mughal emperor under whom the Mughal Empire reached its greatest territorial extent",
        "type": "emperor",
        "yearstart": 1674,
        "yearend": 1680
    },
    {
        "event": "emperor - chhatrapati shivaji maharaj",
        "description": "Founder of the Maratha Empire and pioneer of guerrilla warfare in India",
        "type": "emperor",
        "yearstart": 1680,
        "yearend": 1689
    },
    {
        "event": "emperor - sambhaji maharaj",
        "description": "Second ruler of the Maratha Empire and eldest son of Shivaji Maharaj",
        "type": "emperor",
        "yearstart": 1689,
        "yearend": 1708
    },
    {
        "event": "emperor - rajaram i",
        "description": "Maratha ruler who continued resistance against the Mughal Empire after Sambhaji",
        "type": "emperor",
        "yearstart": 1708,
        "yearend": 1749
    },
    {
        "event": "emperor - balaji baji rao",
        "description": "Peshwa of the Maratha Empire during its major territorial expansion",
        "type": "emperor",
        "yearstart": 1720,
        "yearend": 1761
    },
    {
        "event": "emperor - shahuji maharaj",
        "description": "Maratha ruler who strengthened the Maratha Confederacy after release from Mughal captivity",
        "type": "emperor",
        "yearstart": 1749,
        "yearend": 1770
    },
    {
        "event": "first transatlantic telegraph cable",
        "description": "First successful telegraph communication cable laid between North America and Europe using copper lines between Canada and Ireland",
        "type": "electronics",
        "yearstart": 1858
    },
    {
        "event": "phonograph",
        "description": "Thomas Edison invented the phonograph, the first device capable of recording and reproducing sound",
        "type": "electronics",
        "yearstart": 1877
    },
    {
        "event": "first op-amp using vacuum tubes",
        "description": "Early operational amplifiers were built using vacuum tube technology for analog computation and signal processing",
        "type": "electronics",
        "yearstart": 1941
    },
    {
        "event": "ua702 op-amp integrated circuit",
        "description": "Fairchild Semiconductor introduced the uA702, one of the first monolithic integrated circuit operational amplifiers",
        "type": "electronics",
        "yearstart": 1963
    }
]