/* =========================================================
   INDIA TRAVEL PLANNER
   ========================================================= */


/* ---------------------------------------------------------
   INDIA DESTINATION DATA
--------------------------------------------------------- */

const india = {

    "Andhra Pradesh": {
        type: "State",
        description: "Temple towns, beaches, valleys and historic destinations.",
        places: {

            "Visakhapatnam": {
                description: "A beautiful coastal city known for beaches, hills, caves and maritime attractions.",
                bestTime: "Oct – Mar",
                style: "Beach + Nature",
                budget: "₹3,000–₹5,000/day",
                attractions: [
                    ["RK Beach", "Popular beachfront for sunrise and evening walks."],
                    ["Kailasagiri", "Hilltop park with panoramic views of Visakhapatnam."],
                    ["Araku Valley", "Scenic valley surrounded by Eastern Ghats."],
                    ["Borra Caves", "Spectacular limestone caves near Araku."]
                ]
            },

            "Tirupati": {
                description: "One of India's most important pilgrimage destinations, surrounded by green hills.",
                bestTime: "Sep – Feb",
                style: "Spiritual",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Tirumala Temple", "The famous hilltop temple dedicated to Lord Venkateswara."],
                    ["Kapila Theertham", "Sacred waterfall and temple near Tirupati."],
                    ["Sri Govindaraja Swamy Temple", "Historic temple in central Tirupati."],
                    ["Talakona Waterfalls", "Beautiful waterfall inside the forest region."]
                ]
            },

            "Vijayawada": {
                description: "A vibrant Krishna River city with temples, viewpoints and cultural landmarks.",
                bestTime: "Oct – Feb",
                style: "Culture + Heritage",
                budget: "₹2,500–₹4,000/day",
                attractions: [
                    ["Kanaka Durga Temple", "Famous temple overlooking the Krishna River."],
                    ["Undavalli Caves", "Rock-cut caves with impressive sculptures."],
                    ["Prakasam Barrage", "Iconic riverfront landmark."],
                    ["Kondapalli Fort", "Historic fort surrounded by scenic countryside."]
                ]
            }
        }
    },


    "Arunachal Pradesh": {
        type: "State",
        description: "Remote Himalayan landscapes, monasteries, valleys and mountain passes.",
        places: {

            "Tawang": {
                description: "A spectacular Himalayan destination famous for monasteries, lakes and snow-covered mountains.",
                bestTime: "Mar – Jun, Sep – Oct",
                style: "Mountains",
                budget: "₹4,000–₹7,000/day",
                attractions: [
                    ["Tawang Monastery", "One of the largest Buddhist monasteries in India."],
                    ["Sela Pass", "High-altitude mountain pass with dramatic scenery."],
                    ["Bum La Pass", "Historic high-altitude pass near the international border."],
                    ["Madhuri Lake", "Beautiful mountain lake surrounded by rugged terrain."]
                ]
            },

            "Bomdila": {
                description: "A peaceful Himalayan town with monasteries, viewpoints and mountain scenery.",
                bestTime: "Apr – Oct",
                style: "Mountain + Culture",
                budget: "₹3,500–₹6,000/day",
                attractions: [
                    ["Bomdila Monastery", "Important Buddhist monastery."],
                    ["Bomdila View Point", "Panoramic Himalayan viewpoint."],
                    ["Dirang Valley", "Beautiful valley with villages and hot springs."],
                    ["Sangti Valley", "Quiet valley known for landscapes and birdlife."]
                ]
            },

            "Ziro": {
                description: "A green Himalayan valley famous for Apatani culture and music festivals.",
                bestTime: "Mar – Oct",
                style: "Nature + Culture",
                budget: "₹3,500–₹6,000/day",
                attractions: [
                    ["Ziro Valley", "Picturesque valley surrounded by mountains."],
                    ["Talley Valley", "Wildlife-rich valley and forest region."],
                    ["Apatani Villages", "Experience the traditional culture of the Apatani people."],
                    ["Shivlinga", "Natural rock formation and local attraction."]
                ]
            }
        }
    },


    "Assam": {
        type: "State",
        description: "Tea gardens, wildlife, river islands and vibrant Assamese culture.",
        places: {

            "Guwahati": {
                description: "Gateway to Northeast India with temples, river cruises and cultural attractions.",
                bestTime: "Oct – Apr",
                style: "Culture + City",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Kamakhya Temple", "One of India's major Shakti pilgrimage sites."],
                    ["Umananda Island", "Small river island in the Brahmaputra."],
                    ["Brahmaputra River Cruise", "Scenic evening cruise experience."],
                    ["Assam State Museum", "Explore Assamese history and culture."]
                ]
            },

            "Kaziranga": {
                description: "A world-famous wildlife destination and home of the one-horned rhinoceros.",
                bestTime: "Nov – Apr",
                style: "Wildlife",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Kaziranga National Park", "India's iconic one-horned rhinoceros habitat."],
                    ["Kohora Range", "Popular safari zone."],
                    ["Bagori Range", "Excellent wildlife safari region."],
                    ["Tea Gardens", "Experience Assam's famous tea landscapes."]
                ]
            },

            "Majuli": {
                description: "A culturally rich river island known for monasteries, crafts and village life.",
                bestTime: "Oct – Mar",
                style: "Culture + Nature",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Kamalabari Satra", "Important Vaishnavite cultural centre."],
                    ["Auniati Satra", "Historic monastery and cultural institution."],
                    ["Majuli Villages", "Traditional island lifestyle and crafts."],
                    ["Mishing Villages", "Explore indigenous culture and food."]
                ]
            }
        }
    },


    "Bihar": {
        type: "State",
        description: "Ancient Buddhist sites, historic cities and spiritual heritage.",
        places: {

            "Bodh Gaya": {
                description: "One of the world's most important Buddhist pilgrimage destinations.",
                bestTime: "Oct – Mar",
                style: "Spiritual + Heritage",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Mahabodhi Temple", "UNESCO-listed Buddhist pilgrimage site."],
                    ["Great Buddha Statue", "Large Buddha statue in the temple town."],
                    ["Bodhi Tree", "Sacred tree associated with Buddha's enlightenment."],
                    ["Thai Monastery", "Beautiful Buddhist monastery."]
                ]
            },

            "Patna": {
                description: "Historic capital city with museums, riverfronts and ancient heritage.",
                bestTime: "Oct – Feb",
                style: "Heritage",
                budget: "₹2,000–₹4,000/day",
                attractions: [
                    ["Golghar", "Historic granary and city landmark."],
                    ["Bihar Museum", "Modern museum showcasing Bihar's heritage."],
                    ["Patna Sahib", "Important Sikh pilgrimage site."],
                    ["Gandhi Ghat", "Scenic Ganga riverfront."]
                ]
            },

            "Rajgir": {
                description: "Ancient spiritual destination surrounded by hills and forests.",
                bestTime: "Oct – Mar",
                style: "Spiritual + Nature",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Vishwa Shanti Stupa", "Peace pagoda on Ratnagiri Hill."],
                    ["Rajgir Ropeway", "Cable car to the hilltop stupa."],
                    ["Griddhakuta Hill", "Important Buddhist site."],
                    ["Hot Springs", "Natural thermal springs in the city."]
                ]
            }
        }
    },


    "Chhattisgarh": {
        type: "State",
        description: "Waterfalls, forests, tribal culture and lesser-known natural landscapes.",
        places: {

            "Jagdalpur": {
                description: "Gateway to Bastar's waterfalls, forests and tribal culture.",
                bestTime: "Oct – Mar",
                style: "Nature + Culture",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Chitrakote Falls", "Wide waterfall often called the Niagara of India."],
                    ["Tirathgarh Falls", "Beautiful multi-tier waterfall."],
                    ["Bastar Palace", "Historic royal residence."],
                    ["Kanger Valley National Park", "Dense forest and wildlife region."]
                ]
            },

            "Raipur": {
                description: "Modern Chhattisgarh capital with museums, lakes and cultural attractions.",
                bestTime: "Oct – Feb",
                style: "City + Culture",
                budget: "₹2,000–₹4,000/day",
                attractions: [
                    ["Purkhouti Muktangan", "Cultural open-air museum."],
                    ["Nandan Van Zoo", "Popular family attraction."],
                    ["MM Fun City", "Large entertainment destination."],
                    ["Telibandha Lake", "Popular urban lake."]
                ]
            },

            "Mainpat": {
                description: "A quiet hill station known for forests, valleys and Tibetan settlements.",
                bestTime: "Oct – Mar",
                style: "Hill + Nature",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Tiger Point", "Scenic valley viewpoint."],
                    ["Machu Pichu of Chhattisgarh", "Local scenic attraction."],
                    ["Tibetan Settlement", "Unique cultural experience."],
                    ["Mainpat Waterfalls", "Natural waterfall landscapes."]
                ]
            }
        }
    },


    "Goa": {
        type: "State",
        description: "Beaches, Portuguese heritage, nightlife, seafood and relaxed coastal experiences.",
        places: {

            "North Goa": {
                description: "The energetic side of Goa with famous beaches, forts and nightlife.",
                bestTime: "Nov – Feb",
                style: "Beach + Nightlife",
                budget: "₹3,500–₹8,000/day",
                attractions: [
                    ["Baga Beach", "Popular beach with restaurants and water activities."],
                    ["Anjuna Beach", "Famous for its coastline and market."],
                    ["Fort Aguada", "Historic Portuguese fort overlooking the Arabian Sea."],
                    ["Chapora Fort", "Scenic hilltop fort."]
                ]
            },

            "South Goa": {
                description: "Quieter beaches, luxury resorts and relaxed coastal scenery.",
                bestTime: "Nov – Feb",
                style: "Beach + Relaxation",
                budget: "₹4,000–₹9,000/day",
                attractions: [
                    ["Palolem Beach", "Beautiful crescent-shaped beach."],
                    ["Colva Beach", "Long sandy beach."],
                    ["Benaulim Beach", "Peaceful beach destination."],
                    ["Cabo de Rama Fort", "Historic fort with sea views."]
                ]
            },

            "Panaji": {
                description: "Goa's elegant capital with colourful Portuguese architecture and riverfronts.",
                bestTime: "Nov – Feb",
                style: "Heritage + Food",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Fontainhas", "Colourful Latin Quarter of Panaji."],
                    ["Basilica of Bom Jesus", "Historic UNESCO-listed church."],
                    ["Our Lady of the Immaculate Conception Church", "Iconic Panaji church."],
                    ["Mandovi River", "River cruises and waterfront experiences."]
                ]
            }
        }
    },


    "Gujarat": {
        type: "State",
        description: "White desert, heritage cities, temples, wildlife and vibrant culture.",
        places: {

            "Ahmedabad": {
                description: "A historic city combining architecture, food, museums and modern culture.",
                bestTime: "Oct – Feb",
                style: "Heritage + Food",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Sabarmati Ashram", "Historic Gandhi landmark."],
                    ["Adalaj Stepwell", "Beautiful historic stepwell."],
                    ["Sidi Saiyyed Mosque", "Famous for its stone latticework."],
                    ["Kankaria Lake", "Large recreational lake."]
                ]
            },

            "Kutch": {
                description: "A spectacular region famous for the White Rann and colourful handicrafts.",
                bestTime: "Nov – Feb",
                style: "Desert + Culture",
                budget: "₹3,500–₹7,000/day",
                attractions: [
                    ["Rann of Kutch", "Famous white salt desert."],
                    ["Kalo Dungar", "Highest point in Kutch."],
                    ["Hodka Village", "Traditional crafts and village experiences."],
                    ["Mandvi Beach", "Historic coastal town and beach."]
                ]
            },

            "Dwarka": {
                description: "One of India's most important pilgrimage cities on the Arabian Sea.",
                bestTime: "Oct – Mar",
                style: "Spiritual + Coast",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Dwarkadhish Temple", "Famous Krishna temple."],
                    ["Bet Dwarka", "Island pilgrimage destination."],
                    ["Nageshwar Jyotirlinga", "Important Shiva temple."],
                    ["Dwarka Beach", "Peaceful coastal area."]
                ]
            }
        }
    },


    "Haryana": {
        type: "State",
        description: "Historic battlefields, pilgrimage sites and modern urban destinations.",
        places: {

            "Gurugram": {
                description: "Modern business city with restaurants, entertainment and urban experiences.",
                bestTime: "Oct – Mar",
                style: "City + Food",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Cyber Hub", "Major food and entertainment district."],
                    ["Kingdom of Dreams Area", "Popular entertainment zone."],
                    ["Sultanpur National Park", "Birdwatching destination."],
                    ["Leisure Valley Park", "Large city park."]
                ]
            },

            "Kurukshetra": {
                description: "Historic and spiritual destination associated with the Mahabharata.",
                bestTime: "Oct – Mar",
                style: "Heritage + Spiritual",
                budget: "₹2,000–₹4,000/day",
                attractions: [
                    ["Brahma Sarovar", "Important sacred water tank."],
                    ["Jyotisar", "Traditional site associated with the Bhagavad Gita."],
                    ["Krishna Museum", "Museum focused on Krishna traditions."],
                    ["Sheikh Chilli Tomb", "Historic monument."]
                ]
            },

            "Panchkula": {
                description: "Green destination near Chandigarh with temples and Himalayan foothills.",
                bestTime: "Sep – Mar",
                style: "Nature + Spiritual",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Mata Mansa Devi Temple", "Important temple."],
                    ["Morni Hills", "Hilly landscape and viewpoints."],
                    ["Tikkar Taal", "Twin lakes in the hills."],
                    ["Cactus Garden", "Large botanical collection."]
                ]
            }
        }
    },


    "Himachal Pradesh": {
        type: "State",
        description: "Snow mountains, valleys, monasteries and Himalayan adventure.",
        places: {

            "Shimla": {
                description: "Classic Himalayan hill station with colonial architecture and mountain views.",
                bestTime: "Mar – Jun, Dec – Jan",
                style: "Hill + Snow",
                budget: "₹3,500–₹7,000/day",
                attractions: [
                    ["Mall Road", "Heart of Shimla for shopping and walks."],
                    ["The Ridge", "Open mountain viewpoint in central Shimla."],
                    ["Jakhu Temple", "Hilltop Hanuman temple."],
                    ["Kufri", "Popular mountain destination near Shimla."]
                ]
            },

            "Manali": {
                description: "Adventure-filled Himalayan town with valleys, waterfalls and snow.",
                bestTime: "Mar – Jun, Oct – Feb",
                style: "Mountain + Adventure",
                budget: "₹3,500–₹8,000/day",
                attractions: [
                    ["Solang Valley", "Adventure activities and mountain scenery."],
                    ["Rohtang region", "High-altitude mountain landscapes."],
                    ["Hadimba Temple", "Historic wooden temple."],
                    ["Old Manali", "Cafes, shops and relaxed mountain atmosphere."]
                ]
            },

            "Dharamshala": {
                description: "Mountain destination known for Tibetan culture, monasteries and scenic trails.",
                bestTime: "Mar – Jun, Sep – Nov",
                style: "Mountain + Culture",
                budget: "₹3,000–₹6,500/day",
                attractions: [
                    ["McLeod Ganj", "Centre of Tibetan culture."],
                    ["Tsuglagkhang Complex", "Important Buddhist cultural centre."],
                    ["Bhagsu Waterfall", "Popular mountain waterfall."],
                    ["Triund", "Famous Himalayan trekking destination."]
                ]
            }
        }
    },


    "Jharkhand": {
        type: "State",
        description: "Waterfalls, forests, temples and tribal heritage.",
        places: {

            "Ranchi": {
                description: "Green capital city surrounded by waterfalls and forest landscapes.",
                bestTime: "Oct – Feb",
                style: "Nature",
                budget: "₹2,000–₹4,000/day",
                attractions: [
                    ["Dassam Falls", "Beautiful waterfall near Ranchi."],
                    ["Hundru Falls", "Major waterfall on the Subarnarekha River."],
                    ["Jagannath Temple", "Historic hilltop temple."],
                    ["Rock Garden", "Scenic city attraction."]
                ]
            },

            "Deoghar": {
                description: "Major pilgrimage city famous for the Baidyanath temple.",
                bestTime: "Oct – Mar",
                style: "Spiritual",
                budget: "₹2,000–₹4,000/day",
                attractions: [
                    ["Baidyanath Temple", "One of the twelve Jyotirlingas."],
                    ["Trikuta Parvat", "Hill destination with ropeway."],
                    ["Nandan Pahar", "Hilltop recreational area."],
                    ["Tapovan", "Historic spiritual area."]
                ]
            },

            "Netarhat": {
                description: "Quiet hill station surrounded by forests and beautiful viewpoints.",
                bestTime: "Oct – Mar",
                style: "Hill + Nature",
                budget: "₹2,500–₹4,500/day",
                attractions: [
                    ["Magnolia Point", "Popular sunset viewpoint."],
                    ["Koel View Point", "Scenic valley viewpoint."],
                    ["Netarhat Dam", "Peaceful forest destination."],
                    ["Upper Ghaghri Falls", "Natural waterfall attraction."]
                ]
            }
        }
    },


    "Karnataka": {
        type: "State",
        description: "Royal palaces, ancient ruins, coffee hills, beaches and technology hubs.",
        places: {

            "Bengaluru": {
                description: "India's technology capital with gardens, palaces, museums and modern food culture.",
                bestTime: "Oct – Feb",
                style: "City + Food",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Lalbagh Botanical Garden", "Historic botanical garden."],
                    ["Bengaluru Palace", "Royal palace with Tudor architecture."],
                    ["Cubbon Park", "Large green park in central Bengaluru."],
                    ["Vidhana Soudha", "Iconic government building."]
                ]
            },

            "Mysuru": {
                description: "Elegant royal city famous for its palace, heritage and cuisine.",
                bestTime: "Oct – Feb",
                style: "Heritage + Culture",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Mysore Palace", "Magnificent former royal residence."],
                    ["Chamundi Hill", "Temple and city viewpoint."],
                    ["Brindavan Gardens", "Famous landscaped gardens."],
                    ["St. Philomena's Church", "Historic neo-Gothic church."]
                ]
            },

            "Hampi": {
                description: "UNESCO heritage landscape filled with spectacular Vijayanagara ruins.",
                bestTime: "Oct – Feb",
                style: "Heritage",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Virupaksha Temple", "Historic temple at the heart of Hampi."],
                    ["Vittala Temple", "Famous for its stone chariot."],
                    ["Hampi Bazaar", "Historic market area."],
                    ["Matanga Hill", "Excellent sunrise and sunset viewpoint."]
                ]
            }
        }
    },


    "Kerala": {
        type: "State",
        description: "Backwaters, beaches, tea hills, wildlife and tropical landscapes.",
        places: {

            "Munnar": {
                description: "Beautiful hill destination surrounded by tea plantations and misty mountains.",
                bestTime: "Sep – Mar",
                style: "Hill + Nature",
                budget: "₹3,000–₹6,500/day",
                attractions: [
                    ["Tea Gardens", "Iconic rolling tea plantations."],
                    ["Eravikulam National Park", "Mountain wildlife and Neelakurinji landscapes."],
                    ["Mattupetty Dam", "Scenic reservoir surrounded by hills."],
                    ["Top Station", "High-altitude viewpoint."]
                ]
            },

            "Alappuzha": {
                description: "Kerala's famous backwater destination with houseboats and village landscapes.",
                bestTime: "Oct – Feb",
                style: "Backwaters",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Alappuzha Backwaters", "Classic Kerala houseboat experience."],
                    ["Alappuzha Beach", "Popular coastal destination."],
                    ["Kuttanad", "Unique below-sea-level farming landscape."],
                    ["Marari Beach", "Relaxed beach near Alappuzha."]
                ]
            },

            "Kochi": {
                description: "Historic port city combining colonial heritage, art, food and coastal culture.",
                bestTime: "Oct – Mar",
                style: "Heritage + Food",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Fort Kochi", "Historic neighbourhood with colonial architecture."],
                    ["Chinese Fishing Nets", "Iconic waterfront attraction."],
                    ["Mattancherry Palace", "Historic palace museum."],
                    ["Jew Town", "Heritage street filled with shops and cafes."]
                ]
            }
        }
    },


    "Madhya Pradesh": {
        type: "State",
        description: "Royal heritage, wildlife, temples and ancient architecture.",
        places: {

            "Khajuraho": {
                description: "World-famous heritage town known for its extraordinary temple architecture.",
                bestTime: "Oct – Mar",
                style: "Heritage",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Khajuraho Temples", "UNESCO-listed temple complex."],
                    ["Western Group of Temples", "Most famous temple group."],
                    ["Raneh Falls", "Scenic canyon and waterfall."],
                    ["Panna National Park", "Wildlife destination nearby."]
                ]
            },

            "Ujjain": {
                description: "Ancient spiritual city on the Shipra River.",
                bestTime: "Oct – Mar",
                style: "Spiritual",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Mahakaleshwar Temple", "One of the twelve Jyotirlingas."],
                    ["Mahakal Lok", "Modern spiritual corridor."],
                    ["Ram Ghat", "Important riverside pilgrimage area."],
                    ["Kal Bhairav Temple", "Historic temple."]
                ]
            },

            "Bhopal": {
                description: "Lakeside capital surrounded by museums, heritage and natural landscapes.",
                bestTime: "Oct – Feb",
                style: "City + Heritage",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Upper Lake", "Large scenic urban lake."],
                    ["Sanchi Stupa", "Ancient Buddhist monument near Bhopal."],
                    ["Van Vihar National Park", "Urban wildlife park."],
                    ["Tribal Museum", "Excellent cultural museum."]
                ]
            }
        }
    },


    "Maharashtra": {
        type: "State",
        description: "Mumbai energy, hill stations, forts, caves and coastal landscapes.",
        places: {

            "Mumbai": {
                description: "India's iconic coastal metropolis packed with heritage, food, art and nightlife.",
                bestTime: "Nov – Feb",
                style: "City + Food",
                budget: "₹4,000–₹9,000/day",
                attractions: [
                    ["Gateway of India", "Mumbai's most recognizable landmark."],
                    ["Marine Drive", "Famous sea-facing boulevard."],
                    ["Chhatrapati Shivaji Maharaj Terminus", "UNESCO-listed railway station."],
                    ["Elephanta Caves", "Historic rock-cut caves accessible by ferry."]
                ]
            },

            "Pune": {
                description: "Cultural city surrounded by forts, hills and excellent food.",
                bestTime: "Oct – Feb",
                style: "Culture + Heritage",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Shaniwar Wada", "Historic Peshwa-era fortification."],
                    ["Aga Khan Palace", "Important historical landmark."],
                    ["Sinhagad Fort", "Mountain fort near Pune."],
                    ["Pataleshwar Cave Temple", "Rock-cut temple."]
                ]
            },

            "Mahabaleshwar": {
                description: "Popular Western Ghats hill station with viewpoints, forests and strawberry farms.",
                bestTime: "Oct – May",
                style: "Hill + Nature",
                budget: "₹3,000–₹6,000/day",
                attractions: [
                    ["Arthur's Seat", "Famous valley viewpoint."],
                    ["Venna Lake", "Popular boating destination."],
                    ["Mapro Garden", "Famous strawberry and food attraction."],
                    ["Pratapgad Fort", "Historic hill fort."]
                ]
            }
        }
    },


    "Manipur": {
        type: "State",
        description: "Northeast India's lakes, hills, culture and historic landscapes.",
        places: {

            "Imphal": {
                description: "Capital city surrounded by hills and rich Manipuri heritage.",
                bestTime: "Oct – Apr",
                style: "Culture + Nature",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Kangla Fort", "Historic centre of Manipur."],
                    ["Shree Govindajee Temple", "Important Vaishnavite temple."],
                    ["Imphal War Cemetery", "World War II memorial."],
                    ["Ima Keithel", "Historic women's market."]
                ]
            },

            "Loktak": {
                description: "Famous freshwater lake known for floating islands and natural scenery.",
                bestTime: "Oct – Mar",
                style: "Lake + Nature",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Loktak Lake", "Largest freshwater lake in Northeast India."],
                    ["Sendra Viewpoint", "Panoramic lake viewpoint."],
                    ["Keibul Lamjao National Park", "Unique floating national park."],
                    ["Phumdis", "Floating vegetation islands."]
                ]
            },

            "Ukhrul": {
                description: "Peaceful hill destination famous for forests and Tangkhul culture.",
                bestTime: "Oct – Apr",
                style: "Hill + Culture",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Shirui Hills", "Home of the rare Shirui Lily."],
                    ["Shirui Peak", "Scenic mountain destination."],
                    ["Khayang Peak", "Mountain viewpoint."],
                    ["Tangkhul Villages", "Cultural experience."]
                ]
            }
        }
    },


    "Meghalaya": {
        type: "State",
        description: "Living root bridges, waterfalls, caves and misty mountain villages.",
        places: {

            "Shillong": {
                description: "Elegant hill city surrounded by waterfalls, lakes and pine forests.",
                bestTime: "Oct – Apr",
                style: "Hill + Nature",
                budget: "₹3,000–₹6,000/day",
                attractions: [
                    ["Umiam Lake", "Beautiful reservoir near Shillong."],
                    ["Elephant Falls", "Popular three-tier waterfall."],
                    ["Shillong Peak", "Panoramic city viewpoint."],
                    ["Ward's Lake", "Scenic central city lake."]
                ]
            },

            "Cherrapunji": {
                description: "Dramatic rain-soaked destination filled with waterfalls and caves.",
                bestTime: "Oct – Apr",
                style: "Nature + Adventure",
                budget: "₹3,000–₹6,000/day",
                attractions: [
                    ["Nohkalikai Falls", "One of India's tallest waterfalls."],
                    ["Mawsmai Cave", "Popular limestone cave."],
                    ["Seven Sisters Falls", "Large waterfall complex."],
                    ["Eco Park", "Scenic plateau viewpoint."]
                ]
            },

            "Mawlynnong": {
                description: "Famous village known for cleanliness, greenery and living root bridges.",
                bestTime: "Oct – Apr",
                style: "Village + Nature",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Mawlynnong Village", "Famous clean and green village."],
                    ["Living Root Bridge", "Traditional bio-engineered bridge."],
                    ["Sky View", "Bangladesh plains viewpoint."],
                    ["Riwai Village", "Beautiful Khasi village."]
                ]
            }
        }
    },


    "Mizoram": {
        type: "State",
        description: "Rolling hills, forests and peaceful Northeast landscapes.",
        places: {

            "Aizawl": {
                description: "Hilltop capital city with beautiful valley views and Mizo culture.",
                bestTime: "Oct – Mar",
                style: "Hill + Culture",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Durtlang Hills", "Panoramic hill viewpoint."],
                    ["Mizoram State Museum", "Explore Mizo culture."],
                    ["Solomon's Temple", "Distinctive religious landmark."],
                    ["Reiek", "Popular mountain viewpoint."]
                ]
            },

            "Champhai": {
                description: "Scenic border district surrounded by mountains and vineyards.",
                bestTime: "Oct – Mar",
                style: "Hill + Nature",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Champhai Valley", "Beautiful valley landscape."],
                    ["Murlen National Park", "Forest and wildlife region."],
                    ["Rih Dil", "Important lake near the border region."],
                    ["Thasiama Seno Neihna", "Scenic mountain attraction."]
                ]
            },

            "Lunglei": {
                description: "Quiet hill town offering sweeping views and forests.",
                bestTime: "Oct – Mar",
                style: "Hill + Nature",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Lunglei Viewpoint", "Panoramic valley views."],
                    ["Thorangtlang Wildlife Sanctuary", "Forest wildlife region."],
                    ["Khonglah", "Scenic natural area."],
                    ["Zobawk Sports Academy Area", "Local cultural attraction."]
                ]
            }
        }
    },


    "Nagaland": {
        type: "State",
        description: "Mountain villages, tribal culture, festivals and scenic valleys.",
        places: {

            "Kohima": {
                description: "Mountain capital famous for history, culture and the Hornbill Festival.",
                bestTime: "Oct – Apr",
                style: "Culture + Hill",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Kohima War Cemetery", "Historic World War II memorial."],
                    ["Naga Heritage Village", "Cultural centre near Kohima."],
                    ["Japfu Peak", "Popular trekking mountain."],
                    ["Hornbill Festival Site", "Major cultural festival destination."]
                ]
            },

            "Dimapur": {
                description: "Gateway city with ancient ruins and access to the Naga hills.",
                bestTime: "Oct – Mar",
                style: "Heritage + Culture",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Kachari Ruins", "Ancient stone structures."],
                    ["Diezephe Village", "Traditional crafts and culture."],
                    ["Triple Falls", "Scenic waterfall destination."],
                    ["Rangapahar Reserve Forest", "Nature area."]
                ]
            },

            "Mokokchung": {
                description: "Beautiful Ao Naga hill town with villages and cultural experiences.",
                bestTime: "Oct – Apr",
                style: "Culture + Hill",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Mokokchung Town", "Mountain city and cultural centre."],
                    ["Longkhum Village", "Scenic traditional village."],
                    ["Ungma Village", "One of the oldest Ao villages."],
                    ["Chuchuyimlang Village", "Cultural and festival destination."]
                ]
            }
        }
    },


    "Odisha": {
        type: "State",
        description: "Ancient temples, beaches, tribal culture and wildlife.",
        places: {

            "Bhubaneswar": {
                description: "Temple city known for ancient architecture and vibrant Odia culture.",
                bestTime: "Oct – Feb",
                style: "Heritage",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Lingaraj Temple", "Major historic temple."],
                    ["Udayagiri Caves", "Ancient rock-cut caves."],
                    ["Dhauli Shanti Stupa", "Peace pagoda on a historic hill."],
                    ["Mukteshwar Temple", "Architectural masterpiece."]
                ]
            },

            "Puri": {
                description: "Famous coastal pilgrimage destination with temples and beaches.",
                bestTime: "Oct – Feb",
                style: "Beach + Spiritual",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Jagannath Temple", "One of India's most important temples."],
                    ["Puri Beach", "Popular Bay of Bengal beach."],
                    ["Raghurajpur Artist Village", "Traditional Pattachitra art village."],
                    ["Gundicha Temple", "Important temple associated with Jagannath."]
                ]
            },

            "Konark": {
                description: "Historic coastal destination dominated by the spectacular Sun Temple.",
                bestTime: "Oct – Feb",
                style: "Heritage",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Konark Sun Temple", "UNESCO-listed architectural masterpiece."],
                    ["Chandrabhaga Beach", "Beautiful beach near Konark."],
                    ["Archaeological Museum", "Temple sculptures and heritage."],
                    ["Ramachandi Temple", "Temple near the coast."]
                ]
            }
        }
    },


    "Punjab": {
        type: "State",
        description: "Sikh heritage, Golden Temple, food culture and historic sites.",
        places: {

            "Amritsar": {
                description: "Historic city famous for the Golden Temple and legendary Punjabi food.",
                bestTime: "Oct – Mar",
                style: "Heritage + Food",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Golden Temple", "World-famous Sikh pilgrimage site."],
                    ["Jallianwala Bagh", "Historic memorial."],
                    ["Wagah Border", "Famous border ceremony."],
                    ["Partition Museum", "Museum documenting Partition history."]
                ]
            },

            "Ludhiana": {
                description: "Punjab's major industrial city with museums and cultural attractions.",
                bestTime: "Oct – Mar",
                style: "City + Culture",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Punjab Agricultural University Museum", "Rural heritage museum."],
                    ["Nehru Rose Garden", "Large rose garden."],
                    ["Rakh Bagh", "Popular city park."],
                    ["Hardy's World", "Entertainment destination."]
                ]
            },

            "Patiala": {
                description: "Royal city known for palaces, forts and traditional Punjabi culture.",
                bestTime: "Oct – Mar",
                style: "Royal + Heritage",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Qila Mubarak", "Historic royal fort complex."],
                    ["Moti Bagh Palace", "Former royal palace."],
                    ["Sheesh Mahal", "Palace decorated with mirrors."],
                    ["Baradari Gardens", "Historic garden."]
                ]
            }
        }
    },


    "Rajasthan": {
        type: "State",
        description: "Royal forts, palaces, desert landscapes and colourful heritage.",
        places: {

            "Jaipur": {
                description: "The Pink City is famous for palaces, forts, markets and Rajasthani food.",
                bestTime: "Oct – Mar",
                style: "Royal + Heritage",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Amber Fort", "Magnificent hilltop fort."],
                    ["Hawa Mahal", "Iconic pink sandstone palace facade."],
                    ["City Palace", "Royal palace complex."],
                    ["Jantar Mantar", "Historic astronomical observatory."]
                ]
            },

            "Udaipur": {
                description: "Romantic lakeside city filled with palaces and Aravalli landscapes.",
                bestTime: "Oct – Mar",
                style: "Lakes + Royal",
                budget: "₹3,500–₹8,000/day",
                attractions: [
                    ["City Palace", "Huge palace complex overlooking Lake Pichola."],
                    ["Lake Pichola", "Scenic lake and boat rides."],
                    ["Jag Mandir", "Island palace."],
                    ["Sajjangarh Palace", "Monsoon Palace on a hill."]
                ]
            },

            "Jaisalmer": {
                description: "Golden desert city famous for its fort, havelis and sand dunes.",
                bestTime: "Oct – Feb",
                style: "Desert + Heritage",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Jaisalmer Fort", "Living golden sandstone fort."],
                    ["Sam Sand Dunes", "Desert safari destination."],
                    ["Patwon Ki Haveli", "Historic merchant mansion."],
                    ["Gadisar Lake", "Historic artificial lake."]
                ]
            }
        }
    },


    "Sikkim": {
        type: "State",
        description: "Himalayan peaks, monasteries, lakes and mountain roads.",
        places: {

            "Gangtok": {
                description: "Beautiful Himalayan capital with monasteries, viewpoints and mountain culture.",
                bestTime: "Mar – May, Oct – Dec",
                style: "Mountain + Culture",
                budget: "₹3,500–₹7,000/day",
                attractions: [
                    ["MG Marg", "Pedestrian-friendly central street."],
                    ["Rumtek Monastery", "Important Buddhist monastery."],
                    ["Tsomgo Lake", "High-altitude mountain lake."],
                    ["Nathula Pass", "Historic Himalayan mountain pass."]
                ]
            },

            "Pelling": {
                description: "Peaceful mountain destination offering magnificent Kanchenjunga views.",
                bestTime: "Mar – May, Oct – Dec",
                style: "Mountain",
                budget: "₹3,000–₹6,000/day",
                attractions: [
                    ["Pemayangtse Monastery", "Historic Buddhist monastery."],
                    ["Rabdentse Ruins", "Ancient capital ruins."],
                    ["Khecheopalri Lake", "Sacred forest lake."],
                    ["Skywalk", "Scenic mountain attraction."]
                ]
            },

            "Lachung": {
                description: "Remote Himalayan village and gateway to North Sikkim landscapes.",
                bestTime: "Apr – Jun, Oct – Dec",
                style: "Mountain + Adventure",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Yumthang Valley", "Beautiful valley known for flowers."],
                    ["Zero Point", "High-altitude snow destination."],
                    ["Lachung Monastery", "Historic Buddhist monastery."],
                    ["Shingba Rhododendron Sanctuary", "Mountain floral landscape."]
                ]
            }
        }
    },


    "Tamil Nadu": {
        type: "State",
        description: "Ancient temples, hill stations, beaches, heritage towns and rich cuisine.",
        places: {

            "Chennai": {
                description: "Tamil Nadu's coastal capital combining beaches, temples, heritage and modern culture.",
                bestTime: "Nov – Feb",
                style: "City + Coast",
                budget: "₹3,000–₹6,000/day",
                attractions: [
                    ["Marina Beach", "One of India's most famous urban beaches."],
                    ["Kapaleeshwarar Temple", "Historic Dravidian temple in Mylapore."],
                    ["Fort St. George", "Historic colonial fort."],
                    ["Government Museum", "Major cultural and archaeological museum."]
                ]
            },

            "Ooty": {
                description: "Popular Nilgiri hill station known for tea estates, lakes and cool weather.",
                bestTime: "Oct – Jun",
                style: "Hill + Nature",
                budget: "₹3,000–₹6,500/day",
                attractions: [
                    ["Ooty Lake", "Popular boating destination."],
                    ["Nilgiri Mountain Railway", "Historic mountain railway."],
                    ["Doddabetta Peak", "Highest mountain in the Nilgiris."],
                    ["Tea Estates", "Scenic plantations surrounding Ooty."]
                ]
            },

            "Madurai": {
                description: "Historic temple city famous for architecture, food and Tamil culture.",
                bestTime: "Oct – Mar",
                style: "Temple + Culture",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Meenakshi Amman Temple", "Magnificent historic temple complex."],
                    ["Thirumalai Nayakkar Palace", "Grand 17th-century palace."],
                    ["Gandhi Memorial Museum", "Important museum in the historic Tamukkam Palace."],
                    ["Alagar Koyil", "Historic temple in the hills."]
                ]
            }
        }
    },


    "Telangana": {
        type: "State",
        description: "Historic forts, royal architecture, food and modern city life.",
        places: {

            "Hyderabad": {
                description: "Historic city famous for Charminar, palaces, biryani and modern attractions.",
                bestTime: "Oct – Feb",
                style: "Heritage + Food",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Charminar", "Iconic four-minaret monument."],
                    ["Golconda Fort", "Historic hilltop fort."],
                    ["Salar Jung Museum", "Major art and heritage museum."],
                    ["Hussain Sagar", "Large city lake."]
                ]
            },

            "Warangal": {
                description: "Historic Kakatiya city with spectacular temples and forts.",
                bestTime: "Oct – Feb",
                style: "Heritage",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Warangal Fort", "Historic Kakatiya fort."],
                    ["Thousand Pillar Temple", "Historic temple architecture."],
                    ["Ramappa Temple", "UNESCO-listed temple near Warangal."],
                    ["Pakhal Lake", "Scenic lake destination."]
                ]
            },

            "Nizamabad": {
                description: "Northern Telangana destination with forts, temples and reservoirs.",
                bestTime: "Oct – Feb",
                style: "Heritage + Nature",
                budget: "₹2,000–₹4,000/day",
                attractions: [
                    ["Nizamabad Fort", "Historic fort complex."],
                    ["Dichpally Ramalayam", "Historic temple."],
                    ["Ali Sagar Reservoir", "Popular scenic destination."],
                    ["Mallaram Forest", "Green forest attraction."]
                ]
            }
        }
    },


    "Tripura": {
        type: "State",
        description: "Royal palaces, temples, lakes and lush Northeast landscapes.",
        places: {

            "Agartala": {
                description: "Tripura's capital with royal heritage and cultural attractions.",
                bestTime: "Oct – Mar",
                style: "Heritage",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Ujjayanta Palace", "Magnificent former royal palace."],
                    ["Jagannath Temple", "Important temple."],
                    ["Heritage Park", "Cultural park."],
                    ["State Museum", "Explore Tripura's heritage."]
                ]
            },

            "Unakoti": {
                description: "Ancient rock-cut pilgrimage site surrounded by forested hills.",
                bestTime: "Oct – Mar",
                style: "Heritage + Nature",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Unakoti Rock Carvings", "Massive ancient rock sculptures."],
                    ["Unakoti Hill", "Forest-covered heritage landscape."],
                    ["Waterfalls", "Seasonal waterfalls around the site."],
                    ["Shaivite Sculptures", "Historic stone carvings."]
                ]
            },

            "Neermahal": {
                description: "Unique lake palace surrounded by the waters of Rudrasagar Lake.",
                bestTime: "Oct – Mar",
                style: "Royal + Lake",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Neermahal Palace", "Royal palace built in a lake."],
                    ["Rudrasagar Lake", "Beautiful lake landscape."],
                    ["Boat Ride", "Scenic access to the palace."],
                    ["Melaghar", "Local town and cultural area."]
                ]
            }
        }
    },


    "Uttar Pradesh": {
        type: "State",
        description: "Monuments, pilgrimage cities, Mughal heritage and sacred rivers.",
        places: {

            "Agra": {
                description: "Historic city famous worldwide for the Taj Mahal and Mughal architecture.",
                bestTime: "Oct – Mar",
                style: "Heritage",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["Taj Mahal", "World-famous marble monument."],
                    ["Agra Fort", "Magnificent Mughal fort."],
                    ["Mehtab Bagh", "Garden with Taj Mahal views."],
                    ["Fatehpur Sikri", "Historic Mughal city near Agra."]
                ]
            },

            "Varanasi": {
                description: "One of the world's oldest living cities, famous for ghats and spiritual culture.",
                bestTime: "Oct – Mar",
                style: "Spiritual + Culture",
                budget: "₹2,500–₹6,000/day",
                attractions: [
                    ["Dashashwamedh Ghat", "Famous Ganga ghat."],
                    ["Kashi Vishwanath Temple", "Major Shiva temple."],
                    ["Sarnath", "Important Buddhist pilgrimage site."],
                    ["Ganga Aarti", "Famous evening river ceremony."]
                ]
            },

            "Lucknow": {
                description: "Elegant city famous for Nawabi architecture and Awadhi cuisine.",
                bestTime: "Oct – Mar",
                style: "Heritage + Food",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Bara Imambara", "Iconic historic complex."],
                    ["Chota Imambara", "Beautiful heritage monument."],
                    ["Rumi Darwaza", "Famous gateway."],
                    ["Hazratganj", "Historic shopping and dining district."]
                ]
            }
        }
    },


    "Uttarakhand": {
        type: "State",
        description: "Himalayan valleys, temples, rivers, wildlife and adventure.",
        places: {

            "Rishikesh": {
                description: "Adventure and spiritual capital on the banks of the Ganga.",
                bestTime: "Sep – Nov, Feb – Apr",
                style: "Adventure + Spiritual",
                budget: "₹2,500–₹6,000/day",
                attractions: [
                    ["Laxman Jhula Area", "Iconic Ganga river landscape."],
                    ["Triveni Ghat", "Famous evening Ganga Aarti."],
                    ["Beatles Ashram", "Historic ashram and art destination."],
                    ["River Rafting", "Popular adventure activity."]
                ]
            },

            "Nainital": {
                description: "Beautiful Himalayan lake town surrounded by forested hills.",
                bestTime: "Mar – Jun, Sep – Nov",
                style: "Lake + Hill",
                budget: "₹3,000–₹6,500/day",
                attractions: [
                    ["Naini Lake", "Central lake and boating destination."],
                    ["Naina Devi Temple", "Temple beside the lake."],
                    ["Snow View Point", "Mountain viewpoint."],
                    ["Mall Road", "Popular shopping and dining street."]
                ]
            },

            "Mussoorie": {
                description: "Classic Himalayan hill station with waterfalls and mountain views.",
                bestTime: "Mar – Jun, Sep – Nov",
                style: "Hill + Leisure",
                budget: "₹3,000–₹6,500/day",
                attractions: [
                    ["Mall Road", "Main shopping and walking area."],
                    ["Kempty Falls", "Popular waterfall."],
                    ["Gun Hill", "Hilltop viewpoint."],
                    ["Lal Tibba", "Famous mountain viewpoint."]
                ]
            }
        }
    },


    "West Bengal": {
        type: "State",
        description: "Colonial Kolkata, Himalayan Darjeeling, Sundarbans and cultural heritage.",
        places: {

            "Kolkata": {
                description: "Cultural capital of India famous for literature, food and colonial architecture.",
                bestTime: "Oct – Mar",
                style: "Culture + Food",
                budget: "₹2,500–₹6,000/day",
                attractions: [
                    ["Victoria Memorial", "Iconic marble monument."],
                    ["Howrah Bridge", "Famous steel bridge over the Hooghly."],
                    ["Indian Museum", "Major museum in Kolkata."],
                    ["Park Street", "Historic dining and entertainment district."]
                ]
            },

            "Darjeeling": {
                description: "Himalayan tea town famous for Kanchenjunga views and the toy train.",
                bestTime: "Mar – May, Oct – Dec",
                style: "Mountain + Tea",
                budget: "₹3,500–₹7,000/day",
                attractions: [
                    ["Tiger Hill", "Famous sunrise viewpoint."],
                    ["Darjeeling Himalayan Railway", "Historic UNESCO mountain railway."],
                    ["Batasia Loop", "Scenic railway viewpoint."],
                    ["Tea Gardens", "Iconic Darjeeling tea landscapes."]
                ]
            },

            "Sundarbans": {
                description: "World-famous mangrove ecosystem and Bengal tiger habitat.",
                bestTime: "Nov – Feb",
                style: "Wildlife",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Sundarbans National Park", "UNESCO-listed mangrove ecosystem."],
                    ["Boat Safari", "Main way to explore the waterways."],
                    ["Sajnekhali", "Popular wildlife observation area."],
                    ["Sudhanyakhali", "Known for wildlife sightings."]
                ]
            }
        }
    },


    "Delhi": {
        type: "Union Territory",
        description: "India's capital filled with Mughal monuments, museums and modern culture.",
        places: {

            "New Delhi": {
                description: "India's grand capital district with iconic monuments and government architecture.",
                bestTime: "Oct – Mar",
                style: "Heritage + City",
                budget: "₹3,000–₹7,000/day",
                attractions: [
                    ["India Gate", "Iconic war memorial."],
                    ["Qutub Minar", "UNESCO-listed monument."],
                    ["Humayun's Tomb", "Magnificent Mughal tomb."],
                    ["Lotus Temple", "Distinctive modern architectural landmark."]
                ]
            },

            "Old Delhi": {
                description: "Historic heart of Delhi known for bazaars, Mughal heritage and street food.",
                bestTime: "Oct – Mar",
                style: "Heritage + Food",
                budget: "₹2,500–₹6,000/day",
                attractions: [
                    ["Red Fort", "Historic Mughal fort."],
                    ["Jama Masjid", "Historic mosque."],
                    ["Chandni Chowk", "Famous historic market."],
                    ["Raj Ghat", "Gandhi memorial."]
                ]
            },

            "Mehrauli": {
                description: "Historic neighbourhood filled with monuments and archaeological landscapes.",
                bestTime: "Oct – Mar",
                style: "Heritage",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Qutub Complex", "Major historical monument complex."],
                    ["Mehrauli Archaeological Park", "Large heritage park."],
                    ["Jamali Kamali", "Historic mosque and tomb."],
                    ["Sanjay Van", "Urban forest."]
                ]
            }
        }
    },


    "Jammu and Kashmir": {
        type: "Union Territory",
        description: "Alpine valleys, lakes, gardens and spectacular Himalayan scenery.",
        places: {

            "Srinagar": {
                description: "Kashmir's famous lake city with houseboats, gardens and mountain views.",
                bestTime: "Apr – Oct",
                style: "Lake + Mountain",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Dal Lake", "Iconic lake and houseboat experience."],
                    ["Mughal Gardens", "Historic gardens overlooking the valley."],
                    ["Shankaracharya Temple", "Hilltop temple with city views."],
                    ["Old Srinagar", "Historic markets and architecture."]
                ]
            },

            "Gulmarg": {
                description: "Beautiful mountain destination famous for skiing, meadows and cable cars.",
                bestTime: "Dec – Mar for snow; Apr – Jun for greenery",
                style: "Mountain + Snow",
                budget: "₹4,500–₹9,000/day",
                attractions: [
                    ["Gulmarg Gondola", "One of the world's highest cable cars."],
                    ["Gulmarg Meadows", "Beautiful alpine landscape."],
                    ["Apharwat Peak", "High-altitude mountain destination."],
                    ["Gulmarg Golf Course", "Scenic high-altitude golf course."]
                ]
            },

            "Pahalgam": {
                description: "Scenic Kashmir valley destination surrounded by rivers, forests and mountains.",
                bestTime: "Apr – Oct",
                style: "Valley + Nature",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Betaab Valley", "Beautiful mountain valley."],
                    ["Aru Valley", "Peaceful alpine valley."],
                    ["Lidder River", "Scenic river landscape."],
                    ["Baisaran Valley", "Meadow surrounded by mountains."]
                ]
            }
        }
    },


    "Ladakh": {
        type: "Union Territory",
        description: "High-altitude deserts, monasteries, turquoise lakes and dramatic mountains.",
        places: {

            "Leh": {
                description: "High-altitude Himalayan town surrounded by monasteries and mountain landscapes.",
                bestTime: "May – Sep",
                style: "Mountain + Culture",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Leh Palace", "Historic palace overlooking the town."],
                    ["Shanti Stupa", "Hilltop Buddhist monument."],
                    ["Thiksey Monastery", "Spectacular hilltop monastery."],
                    ["Magnetic Hill", "Popular roadside attraction."]
                ]
            },

            "Nubra Valley": {
                description: "Remote high-altitude valley famous for dunes, monasteries and dramatic scenery.",
                bestTime: "May – Sep",
                style: "Adventure + Valley",
                budget: "₹4,500–₹9,000/day",
                attractions: [
                    ["Hunder Sand Dunes", "High-altitude desert landscape."],
                    ["Diskit Monastery", "Historic monastery with huge Buddha statue."],
                    ["Khardung La", "High mountain pass."],
                    ["Turtuk", "Beautiful Balti cultural village."]
                ]
            },

            "Pangong": {
                description: "Famous high-altitude lake surrounded by barren Himalayan mountains.",
                bestTime: "May – Sep",
                style: "Lake + Adventure",
                budget: "₹4,500–₹9,000/day",
                attractions: [
                    ["Pangong Lake", "Spectacular blue high-altitude lake."],
                    ["Spangmik", "Popular lakeside settlement."],
                    ["Maan Village", "Beautiful lakeside village."],
                    ["Chang La", "High mountain pass on the route."]
                ]
            }
        }
    },


    "Andaman and Nicobar Islands": {
        type: "Union Territory",
        description: "Tropical beaches, coral reefs, forests and island adventures.",
        places: {

            "Port Blair": {
                description: "Main gateway to the islands with historic sites and coastal attractions.",
                bestTime: "Oct – May",
                style: "Beach + History",
                budget: "₹4,000–₹8,000/day",
                attractions: [
                    ["Cellular Jail", "Historic colonial-era prison."],
                    ["Corbyn's Cove", "Popular city beach."],
                    ["Ross Island", "Historic island near Port Blair."],
                    ["Samudrika Museum", "Marine life and island museum."]
                ]
            },

            "Havelock Island": {
                description: "Tropical island famous for beautiful beaches, diving and coral reefs.",
                bestTime: "Oct – May",
                style: "Beach + Adventure",
                budget: "₹5,000–₹10,000/day",
                attractions: [
                    ["Radhanagar Beach", "World-famous tropical beach."],
                    ["Elephant Beach", "Popular snorkelling destination."],
                    ["Kalapathar Beach", "Beautiful quiet beach."],
                    ["Scuba Diving", "Major underwater experience."]
                ]
            },

            "Neil Island": {
                description: "Peaceful island destination with beaches, coral reefs and village scenery.",
                bestTime: "Oct – May",
                style: "Beach + Relaxation",
                budget: "₹4,500–₹9,000/day",
                attractions: [
                    ["Bharatpur Beach", "Popular beach for swimming."],
                    ["Laxmanpur Beach", "Beautiful sunset destination."],
                    ["Natural Bridge", "Rock formation on the coast."],
                    ["Sitapur Beach", "Quiet sunrise beach."]
                ]
            }
        }
    },


    "Chandigarh": {
        type: "Union Territory",
        description: "Planned modern city known for architecture, gardens and urban design.",
        places: {

            "Chandigarh City": {
                description: "India's celebrated planned city designed with modernist architecture.",
                bestTime: "Oct – Mar",
                style: "Architecture + City",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Rock Garden", "Famous artistic garden made from recycled materials."],
                    ["Sukhna Lake", "Popular lake and walking destination."],
                    ["Capitol Complex", "Modernist architectural landmark."],
                    ["Rose Garden", "Large botanical garden."]
                ]
            },

            "Sukhna Lake": {
                description: "Peaceful urban lake surrounded by green spaces.",
                bestTime: "Oct – Mar",
                style: "Nature + Leisure",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Sukhna Lake", "Central recreational lake."],
                    ["Sukhna Promenade", "Popular walking route."],
                    ["Bird Watching", "Seasonal migratory bird habitat."],
                    ["Boating", "Popular lake activity."]
                ]
            },

            "Manimajra": {
                description: "Historic area of Chandigarh with fort heritage and local culture.",
                bestTime: "Oct – Mar",
                style: "Heritage",
                budget: "₹2,000–₹4,500/day",
                attractions: [
                    ["Manimajra Fort", "Historic fortification."],
                    ["Mansa Devi Temple", "Nearby spiritual attraction."],
                    ["Local Markets", "Shopping and food experiences."],
                    ["City Heritage Areas", "Explore Chandigarh's planned neighbourhoods."]
                ]
            }
        }
    },


    "Dadra and Nagar Haveli and Daman and Diu": {
        type: "Union Territory",
        description: "Beaches, forts, forests and Portuguese coastal heritage.",
        places: {

            "Daman": {
                description: "Coastal destination known for forts, beaches and Portuguese heritage.",
                bestTime: "Oct – Mar",
                style: "Beach + Heritage",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Devka Beach", "Popular coastal destination."],
                    ["Diu Fort", "Historic Portuguese-era fort."],
                    ["St. Jerome Fort", "Historic coastal fortification."],
                    ["Moti Daman Fort", "Major heritage landmark."]
                ]
            },

            "Diu": {
                description: "Quiet island town with Portuguese architecture, beaches and historic forts.",
                bestTime: "Oct – Mar",
                style: "Beach + Heritage",
                budget: "₹2,500–₹5,500/day",
                attractions: [
                    ["Diu Fort", "Spectacular sea-facing fort."],
                    ["Nagoa Beach", "Popular beach."],
                    ["Naida Caves", "Interesting rock-cut cave system."],
                    ["St. Paul's Church", "Historic Portuguese church."]
                ]
            },

            "Silvassa": {
                description: "Green destination known for forests, gardens and tribal culture.",
                bestTime: "Oct – Mar",
                style: "Nature + Culture",
                budget: "₹2,500–₹5,000/day",
                attractions: [
                    ["Dudhni Lake", "Scenic lake surrounded by forests."],
                    ["Vanganga Lake Garden", "Beautiful landscaped garden."],
                    ["Tribal Cultural Museum", "Explore local tribal heritage."],
                    ["Lion Safari", "Wildlife attraction."]
                ]
            }
        }
    },


    "Lakshadweep": {
        type: "Union Territory",
        description: "Crystal-clear lagoons, coral reefs and pristine tropical islands.",
        places: {

            "Agatti": {
                description: "Tropical island famous for turquoise lagoons and coral reefs.",
                bestTime: "Oct – May",
                style: "Beach + Diving",
                budget: "₹6,000–₹12,000/day",
                attractions: [
                    ["Agatti Beach", "Beautiful tropical beach."],
                    ["Agatti Lagoon", "Clear turquoise lagoon."],
                    ["Snorkelling", "Excellent coral reef experience."],
                    ["Scuba Diving", "Rich underwater marine life."]
                ]
            },

            "Bangaram": {
                description: "Remote island paradise surrounded by turquoise waters.",
                bestTime: "Oct – May",
                style: "Luxury + Beach",
                budget: "₹7,000–₹15,000/day",
                attractions: [
                    ["Bangaram Beach", "Pristine tropical beach."],
                    ["Coral Reefs", "Rich marine ecosystem."],
                    ["Lagoon", "Crystal-clear shallow waters."],
                    ["Island Walks", "Quiet tropical experience."]
                ]
            },

            "Kavaratti": {
                description: "Administrative capital known for lagoons, mosques and water activities.",
                bestTime: "Oct – May",
                style: "Beach + Culture",
                budget: "₹5,000–₹10,000/day",
                attractions: [
                    ["Kavaratti Lagoon", "Beautiful lagoon."],
                    ["Ujra Mosque", "Historic mosque."],
                    ["Marine Aquarium", "Local marine life."],
                    ["Water Sports", "Kayaking and snorkelling."]
                ]
            }
        }
    }

};


/* ---------------------------------------------------------
   ADDITIONAL STATES
--------------------------------------------------------- */

Object.assign(india, {

    "Chhattisgarh": india["Chhattisgarh"],

    "Mizoram": india["Mizoram"],

    "Nagaland": india["Nagaland"],

    "Sikkim": india["Sikkim"],

    "Goa": india["Goa"]

});


/*
   The remaining regions are added below.
   Each has destination-specific attractions.
*/

const additionalRegions = {

    "Kerala": india["Kerala"],

    "Maharashtra": india["Maharashtra"],

    "Karnataka": india["Karnataka"],

    "Rajasthan": india["Rajasthan"],

    "Tamil Nadu": india["Tamil Nadu"],

    "Uttar Pradesh": india["Uttar Pradesh"],

    "West Bengal": india["West Bengal"],

    "Uttarakhand": india["Uttarakhand"],

    "Ladakh": india["Ladakh"],

    "Delhi": india["Delhi"],

    "Jammu and Kashmir": india["Jammu and Kashmir"],

    "Andaman and Nicobar Islands": india["Andaman and Nicobar Islands"],

    "Chandigarh": india["Chandigarh"],

    "Dadra and Nagar Haveli and Daman and Diu":
        india["Dadra and Nagar Haveli and Daman and Diu"],

    "Lakshadweep": india["Lakshadweep"]

};


/* ---------------------------------------------------------
   REGIONS NOT DUPLICATED ABOVE
--------------------------------------------------------- */

const compactRegions = {

    "Arunachal Pradesh": india["Arunachal Pradesh"],
    "Assam": india["Assam"],
    "Bihar": india["Bihar"],
    "Gujarat": india["Gujarat"],
    "Haryana": india["Haryana"],
    "Himachal Pradesh": india["Himachal Pradesh"],
    "Jharkhand": india["Jharkhand"],
    "Manipur": india["Manipur"],
    "Meghalaya": india["Meghalaya"],
    "Odisha": india["Odisha"],
    "Punjab": india["Punjab"],
    "Telangana": india["Telangana"],
    "Tripura": india["Tripura"],
    "Andhra Pradesh": india["Andhra Pradesh"]
};


/* ---------------------------------------------------------
   IMAGE SEARCH
   --------------------------------------------------------- */

const imageCache = {};


/*
   Wikimedia Commons is used so the application searches
   for images of the ACTUAL destination/attraction.
*/

async function getPlaceImage(place, state = "") {

    const key = `${place}-${state}`;

    if (imageCache[key]) {
        return imageCache[key];
    }

    const query = encodeURIComponent(`${place} ${state} India`);

    const api =
        `https://commons.wikimedia.org/w/api.php?` +
        `action=query&generator=search&gsrsearch=${query}` +
        `&gsrnamespace=6&gsrlimit=1` +
        `&prop=imageinfo&iiprop=url&iiurlwidth=900` +
        `&format=json&origin=*`;

    try {

        const response = await fetch(api);

        const data = await response.json();

        if (
            data.query &&
            data.query.pages
        ) {

            const pages =
                Object.values(data.query.pages);

            if (
                pages.length &&
                pages[0].imageinfo &&
                pages[0].imageinfo[0]
            ) {

                const image =
                    pages[0].imageinfo[0].thumburl ||
                    pages[0].imageinfo[0].url;

                imageCache[key] = image;

                return image;
            }
        }

    } catch (error) {

        console.log(
            "Image search failed:",
            place
        );

    }

    /*
       Fallback image.
    */

    const fallback =
        `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80`;

    imageCache[key] = fallback;

    return fallback;
}


/* ---------------------------------------------------------
   GLOBAL STATE
--------------------------------------------------------- */

let selectedState = null;

let selectedPlace = null;

let numberOfDays = 3;


/* ---------------------------------------------------------
   ALL STATES / UTs
--------------------------------------------------------- */

const regions = [

    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",

    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep"
];


/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);


function initialize() {

    populateStateSelect();

    renderStateGrid();

}


/* ---------------------------------------------------------
   STATE SELECT
--------------------------------------------------------- */

function populateStateSelect() {

    const select =
        document.getElementById("stateSelect");

    regions.forEach(
        state => {

            const option =
                document.createElement("option");

            option.value = state;

            option.textContent =
                state;

            select.appendChild(option);

        }
    );
}


/* ---------------------------------------------------------
   STATE GRID
--------------------------------------------------------- */

function renderStateGrid() {

    const grid =
        document.getElementById("stateGrid");

    grid.innerHTML = "";

    regions.forEach(
        (state, index) => {

            const data =
                india[state];

            if (!data) return;

            const card =
                document.createElement("div");

            card.className =
                "state-card";

            card.onclick =
                () => showState(state);

            card.innerHTML = `

                <div class="state-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                    ${state}
                </h3>

                <p>
                    ${Object.keys(data.places).length}
                    destinations
                </p>

            `;

            grid.appendChild(card);

        }
    );
}


/* ---------------------------------------------------------
   SELECT STATE
--------------------------------------------------------- */

function selectState() {

    const select =
        document.getElementById("stateSelect");

    const state =
        select.value;

    if (!state) {

        alert(
            "Please select a state or union territory."
        );

        return;
    }

    showState(state);
}


/* ---------------------------------------------------------
   SHOW STATE
--------------------------------------------------------- */

function showState(state) {

    if (!india[state]) {

        alert(
            "Destination information is being prepared for this region."
        );

        return;
    }

    selectedState = state;

    const data =
        india[state];

    document
        .getElementById("destinationHeading")
        .textContent =
        state;


    document
        .getElementById("destinationIntro")
        .textContent =
        data.description;


    document
        .getElementById("destinations")
        .classList.remove("hidden");


    renderDestinations();

    document
        .getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ---------------------------------------------------------
   DESTINATIONS
--------------------------------------------------------- */

async function renderDestinations() {

    const grid =
        document.getElementById(
            "destinationGrid"
        );

    grid.innerHTML = "";

    const places =
        india[selectedState].places;


    Object.keys(places).forEach(
        async place => {

            const data =
                places[place];

            const card =
                document.createElement("article");

            card.className =
                "destination-card";

            card.onclick =
                () => showPlace(place);


            card.innerHTML = `

                <div class="destination-card-image">

                    <img
                        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=70"
                        alt="${place}"
                    >

                </div>

                <div class="destination-info">

                    <h3>
                        ${place}
                    </h3>

                    <p>
                        ${data.description}
                    </p>

                    <div class="destination-meta">

                        <span>
                            ${data.style}
                        </span>

                        <span>
                            ${data.bestTime}
                        </span>

                    </div>

                </div>
            `;

            grid.appendChild(card);


            const img =
                card.querySelector("img");

            const actualImage =
                await getPlaceImage(
                    place,
                    selectedState
                );

            img.src =
                actualImage;

        }
    );
}


/* ---------------------------------------------------------
   SHOW PLACE
--------------------------------------------------------- */

async function showPlace(place) {

    selectedPlace = place;

    const data =
        india[selectedState]
            .places[place];


    document
        .getElementById("selectedPlaceName")
        .textContent =
        place;


    document
        .getElementById("selectedPlaceState")
        .textContent =
        selectedState;


    document
        .getElementById("selectedPlaceDescription")
        .textContent =
        data.description;


    document
        .getElementById("bestTime")
        .textContent =
        `Best time: ${data.bestTime}`;


    document
        .getElementById("travelType")
        .textContent =
        data.style;


    document
        .getElementById("budgetRange")
        .textContent =
        data.budget;


    document
        .getElementById("placeDetails")
        .classList.remove("hidden");


    const mainImage =
        document.getElementById(
            "selectedPlaceImage"
        );

    mainImage.src =
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=70";


    const actualImage =
        await getPlaceImage(
            place,
            selectedState
        );

    mainImage.src =
        actualImage;


    renderAttractions();

    renderRecommendations();

    renderTips();


    document
        .getElementById("placeDetails")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ---------------------------------------------------------
   ATTRACTIONS
--------------------------------------------------------- */

async function renderAttractions() {

    const grid =
        document.getElementById(
            "attractionGrid"
        );

    grid.innerHTML = "";

    const attractions =
        india[selectedState]
            .places[selectedPlace]
            .attractions;


    attractions.forEach(
        async attraction => {

            const name =
                attraction[0];

            const description =
                attraction[1];


            const card =
                document.createElement("article");

            card.className =
                "attraction-card";


            card.innerHTML = `

                <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=60"
                    alt="${name}"
                >

                <div class="attraction-info">

                    <h3>
                        ${name}
                    </h3>

                    <p>
                        ${description}
                    </p>

                </div>

            `;


            grid.appendChild(card);


            const image =
                await getPlaceImage(
                    name,
                    selectedState
                );


            card.querySelector("img")
                .src =
                image;

        }
    );
}


/* ---------------------------------------------------------
   PLANNER
--------------------------------------------------------- */

function openPlanner() {

    document
        .getElementById("planner")
        .classList.remove("hidden");


    document
        .getElementById("plannerTitle")
        .textContent =
        `${numberOfDays}-Day ${selectedPlace} Trip`;


    document
        .getElementById("plannerSubtitle")
        .textContent =
        `A destination-focused itinerary for ${selectedPlace}, ${selectedState}.`;


    renderItinerary();

    document
        .getElementById("planner")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function changeDays(amount) {

    numberOfDays += amount;

    if (numberOfDays < 1) {
        numberOfDays = 1;
    }

    if (numberOfDays > 15) {
        numberOfDays = 15;
    }


    document
        .getElementById("daysValue")
        .textContent =
        numberOfDays;


    if (selectedPlace) {

        document
            .getElementById("plannerTitle")
            .textContent =
            `${numberOfDays}-Day ${selectedPlace} Trip`;

        renderItinerary();

    }

}


/* ---------------------------------------------------------
   ITINERARY GENERATOR
--------------------------------------------------------- */

function renderItinerary() {

    if (!selectedPlace) return;


    const data =
        india[selectedState]
            .places[selectedPlace];


    const attractions =
        data.attractions;


    const container =
        document.getElementById(
            "itinerary"
        );


    container.innerHTML = "";


    for (
        let day = 1;
        day <= numberOfDays;
        day++
    ) {

        const index =
            (day - 1) % attractions.length;


        const first =
            attractions[index];


        const second =
            attractions[
                (index + 1) %
                attractions.length
            ];


        let title;

        let description;


        if (day === 1) {

            title =
                `Arrival + ${first[0]}`;

            description =
                `Arrive in ${selectedPlace}, check into your hotel and explore the destination at a relaxed pace. End the day with ${first[0]}.`;

        } else if (
            day === numberOfDays
        ) {

            title =
                `${first[0]} + Departure`;

            description =
                `Visit ${first[0]} in the morning, enjoy a local meal and keep enough time for your return journey.`;

        } else {

            title =
                `${first[0]} + ${second[0]}`;

            description =
                `Start with ${first[0]} and then continue to ${second[0]}. Keep the evening flexible for local food, shopping or a relaxed walk.`;

        }


        const card =
            document.createElement("div");

        card.className =
            "day-card";


        card.innerHTML = `

            <div class="day-number">
                DAY ${day}
            </div>

            <div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${description}
                </p>

                <div class="day-activities">

                    <span>
                        Morning
                    </span>

                    <span>
                        Local lunch
                    </span>

                    <span>
                        Afternoon sightseeing
                    </span>

                    <span>
                        Evening leisure
                    </span>

                </div>

            </div>
        `;


        container.appendChild(card);

    }


    updateBudget();

}


/* ---------------------------------------------------------
   BUDGET
--------------------------------------------------------- */

function updateBudget() {

    const data =
        india[selectedState]
            .places[selectedPlace];


    const match =
        data.budget.match(
            /₹([\d,]+).*₹([\d,]+)/
        );


    if (!match) return;


    const minimum =
        parseInt(
            match[1].replace(/,/g, "")
        );


    const maximum =
        parseInt(
            match[2].replace(/,/g, "")
        );


    const totalMin =
        minimum *
        numberOfDays;


    const totalMax =
        maximum *
        numberOfDays;


    document
        .getElementById("totalBudget")
        .textContent =
        `₹${totalMin.toLocaleString("en-IN")} – ₹${totalMax.toLocaleString("en-IN")}`;


    document
        .getElementById("transportSummary")
        .textContent =
        getTransportSuggestion();


    document
        .getElementById("styleSummary")
        .textContent =
        data.style;

}


/* ---------------------------------------------------------
   TRANSPORT
--------------------------------------------------------- */

function getTransportSuggestion() {

    const name =
        selectedPlace.toLowerCase();


    if (
        name.includes("leh") ||
        name.includes("nubra") ||
        name.includes("pangong") ||
        name.includes("tawang") ||
        name.includes("lachung")
    ) {

        return "Private cab / local taxi";

    }


    if (
        name.includes("goa")
    ) {

        return "Scooter / cab";

    }


    if (
        name.includes("andaman") ||
        name.includes("havelock") ||
        name.includes("agatti")
    ) {

        return "Ferry + local cab";

    }


    return "Cab + local transport";
}


/* ---------------------------------------------------------
   RECOMMENDATIONS
--------------------------------------------------------- */

function renderRecommendations() {

    const grid =
        document.getElementById(
            "recommendationGrid"
        );


    const place =
        selectedPlace;


    const state =
        selectedState;


    grid.innerHTML = `

        <article class="recommend-card">

            <div class="recommend-icon">
                🏨
            </div>

            <h3>
                Hotels & stays
            </h3>

            <p>
                Choose accommodation based on your preferred
                location, comfort and budget.
            </p>

            <ul class="recommend-list">

                <li>
                    Premium hotel near ${place}
                </li>

                <li>
                    Mid-range city hotel
                </li>

                <li>
                    Boutique stay / homestay
                </li>

                <li>
                    Budget guest house
                </li>

            </ul>

        </article>


        <article class="recommend-card">

            <div class="recommend-icon">
                🍽️
            </div>

            <h3>
                Restaurants
            </h3>

            <p>
                Try local cuisine along with popular
                restaurants around ${place}.
            </p>

            <ul class="recommend-list">

                <li>
                    Local ${state} cuisine
                </li>

                <li>
                    Popular family restaurant
                </li>

                <li>
                    Local cafe
                </li>

                <li>
                    Street food area
                </li>

            </ul>

        </article>


        <article class="recommend-card">

            <div class="recommend-icon">
                🚕
            </div>

            <h3>
                Cabs & transport
            </h3>

            <p>
                Practical transport options for sightseeing
                around ${place}.
            </p>

            <ul class="recommend-list">

                <li>
                    Local taxi / cab
                </li>

                <li>
                    App-based cab where available
                </li>

                <li>
                    Rental car
                </li>

                <li>
                    Local auto / public transport
                </li>

            </ul>

        </article>

    `;

}


/* ---------------------------------------------------------
   TRAVEL TIPS
--------------------------------------------------------- */

function renderTips() {

    const section =
        document.getElementById(
            "tipsSection"
        );


    section.classList.remove(
        "hidden"
    );


    const grid =
        document.getElementById(
            "tipsGrid"
        );


    grid.innerHTML = `

        <div class="tip-card">

            <strong>
                📅 Best season
            </strong>

            <p>
                The recommended season for
                ${selectedPlace} is
                ${india[selectedState]
                    .places[selectedPlace]
                    .bestTime}.
            </p>

        </div>


        <div class="tip-card">

            <strong>
                💰 Budget
            </strong>

            <p>
                A typical daily travel budget is
                ${india[selectedState]
                    .places[selectedPlace]
                    .budget}.
            </p>

        </div>


        <div class="tip-card">

            <strong>
                🎒 Pack smart
            </strong>

            <p>
                Carry comfortable shoes, weather-appropriate
                clothes, medicines and essential documents.
            </p>

        </div>


        <div class="tip-card">

            <strong>
                📍 Plan locally
            </strong>

            <p>
                Group attractions that are close together
                so you spend less time travelling between places.
            </p>

        </div>

    `;

}


/* ---------------------------------------------------------
   SHOW ALL STATES
--------------------------------------------------------- */

function showAllStates() {

    document
        .getElementById("destinations")
        .classList.add("hidden");


    document
        .getElementById("placeDetails")
        .classList.add("hidden");


    document
        .getElementById("planner")
        .classList.add("hidden");


    document
        .getElementById("recommendations")
        .classList.add("hidden");


    document
        .getElementById("tipsSection")
        .classList.add("hidden");


    document
        .getElementById("explore")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ---------------------------------------------------------
   SCROLL TO PLANNER
--------------------------------------------------------- */

function scrollToPlanner() {

    if (!selectedPlace) {

        document
            .getElementById("explore")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    openPlanner();
}