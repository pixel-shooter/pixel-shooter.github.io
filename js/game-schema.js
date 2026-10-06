/**
 * Pixel Shooter - VideoGame Structured Data (Schema.org JSON-LD)
 * Centralizes and injects VideoGame schema into document head
 */
(function () {
    const GAME_SCHEMAS = {
        "airport-clash-3d.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Airport Clash 3D",
            "description": "Lead your squad of raiders to seize control of an abandoned airport in blood-pumping team deathmatches.",
            "image": "https://pixel-shooter.github.io/img/airport-clash-3d.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,140"
            }
        },
        "apple-shooter-champ.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Apple Shooter Championship",
            "description": "Test your archery precision by shooting apples off your companion's head without missing the target.",
            "image": "https://pixel-shooter.github.io/img/apple-shooter-champ.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1,890"
            }
        },
        "armedforces.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "ArmedForces.io",
            "description": "Engage in realistic multiplayer tactical operations across diverse military theaters and combat modes.",
            "image": "https://pixel-shooter.github.io/img/armedforces.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3,410"
            }
        },
        "cat-gunner.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Cat Gunner: Super Zombie",
            "description": "Equip lethal feline weaponry and wage war against mutated zombie hoards to rescue fellow kittens.",
            "image": "https://pixel-shooter.github.io/img/cat-gunner.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,750"
            }
        },
        "fire-free.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Free Fire Unblocked",
            "description": "Drop into an intense survival island, loot tactical weapons, and eliminate rivals to be the last survivor.",
            "image": "https://pixel-shooter.github.io/img/fire-free.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "4,820"
            }
        },
        "fnaf-shooter.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "FNaF Shooter",
            "description": "Explore eerie darkened pizzerias, conserve flashlight batteries, and unleash shotguns against Freddy's crew.",
            "image": "https://pixel-shooter.github.io/img/fnaf-shooter.png",
            "genre": ["Shooting", "Horror", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,840"
            }
        },
        "fps-assault-shooter.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "FPS Assault Shooter",
            "description": "Clear rooms, defuse hostile threats, and prove your elite counter-terrorist reflexes across urban zones.",
            "image": "https://pixel-shooter.github.io/img/fps-assault-shooter.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1,620"
            }
        },
        "fps-io.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "FPS.io",
            "description": "Fast-paced low-poly arena combat with unique hero classes, special abilities, and explosive firefights.",
            "image": "https://pixel-shooter.github.io/img/fps-io.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "2,310"
            }
        },
        "funny-battle.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Funny Battle Simulator",
            "description": "Deploy wacky troops, archers, and armored units to orchestrate hilarious physics-based ragdoll battles.",
            "image": "https://pixel-shooter.github.io/img/funny-battle.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,980"
            }
        },
        "getaway-shootout.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Getaway Shootout",
            "description": "Race and blast rivals using physics-driven jumping, weapon pickups, and chaotic traps to reach the getaway vehicle.",
            "image": "https://pixel-shooter.github.io/img/getaway-shootout.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,760"
            }
        },
        "gunspin.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "GunSpin",
            "description": "Time your trigger pulls with precision, collect coins, and upgrade bullet power to reach record distances.",
            "image": "https://pixel-shooter.github.io/img/gunspin.png",
            "genre": ["Shooting", "Arcade", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,210"
            }
        },
        "military-shooter-training.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Military Shooter Training",
            "description": "Hone your marksmanship skills through intense military shooting drills, reactive targets, and sniper trials.",
            "image": "https://pixel-shooter.github.io/img/military-shooter-training.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,670"
            }
        },
        "mine-shooter.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Mine Shooter: Huggy Attack",
            "description": "Defend voxel biomes from waves of invading monsters using assault rifles, rocket launchers, and TNT.",
            "image": "https://pixel-shooter.github.io/img/mine-shooter.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,490"
            }
        },
        "mr-bullet.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Mr Bullet",
            "description": "Use lethal ricochet geometry to eliminate spy targets, rescue hostages, and clear puzzle levels with one shot.",
            "image": "https://pixel-shooter.github.io/img/mr-bullet.png",
            "genre": ["Shooting", "Puzzle", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3,120"
            }
        },
        "mr-bullet-2-online.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Mr Bullet 2 Online",
            "description": "The hit puzzle shooter returns with new devious physics obstacles, explosive barrels, and enemy agent traps.",
            "image": "https://pixel-shooter.github.io/img/mr-bullet-2-online.png",
            "genre": ["Shooting", "Puzzle", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,050"
            }
        },
        "mr-bullet-3d.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Mr Bullet 3D",
            "description": "Step into a fully 3D perspective to calculate bounce angles and execute flawless assassinations.",
            "image": "https://pixel-shooter.github.io/img/mr-bullet-3d.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,890"
            }
        },
        "ninja-clash-heroes.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Ninja Clash Heroes",
            "description": "Pick your ancient Japanese warrior class and clash for shrine dominance in beautiful feudal arenas.",
            "image": "https://pixel-shooter.github.io/img/ninja-clash-heroes.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "2,870"
            }
        },
        "pinatamasters.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Piñata Masters",
            "description": "Shoot vibrant floating piñatas with an absurd arsenal of shurikens, laser blasters, and heavy weapons.",
            "image": "https://pixel-shooter.github.io/img/pinatamasters.png",
            "genre": ["Shooting", "Arcade", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1,920"
            }
        },
        "pixel-shooter.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Pixel Shooter",
            "description": "Engage in retro 2D pixel shooter warfare with an array of weapons, destructible environments, and smooth performance.",
            "image": "https://pixel-shooter.github.io/img/pixel-shooter.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1,420"
            }
        },
        "raft-wars.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Raft Wars",
            "description": "Help Simon defend his hidden treasure from ruthless pirates using bouncy tennis balls and rocket rafts.",
            "image": "https://pixel-shooter.github.io/img/raft-wars.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3,890"
            }
        },
        "raft-wars-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Raft Wars 2",
            "description": "Infiltrate the greedy waterpark developers to reclaim buried loot with upgraded paintball cannons and rafts.",
            "image": "https://pixel-shooter.github.io/img/raft-wars-2.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,640"
            }
        },
        "rooftop-shooters.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Rooftop Shooters",
            "description": "Physics-based rooftop duel where you must blast your opponent off building ledges before they knock you off.",
            "image": "https://pixel-shooter.github.io/img/rooftop-shooters.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,530"
            }
        },
        "rooftop-snipers.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Rooftop Snipers",
            "description": "Leap and shoot on high-rise rooftops to knock the enemy off the building in frantic two-player face-offs.",
            "image": "https://pixel-shooter.github.io/img/rooftop-snipers.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "3,210"
            }
        },
        "strike-force-heroes.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Strike Force Heroes",
            "description": "Customize soldiers, unlock high-tech armaments, and fight through gripping campaign missions and deathmatches.",
            "image": "https://pixel-shooter.github.io/img/strike-force-heroes.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "4,150"
            }
        },
        "time-shooter-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Time Shooter 2",
            "description": "Time only moves when you move! Dodge slow-motion bullets, grab weapons, and defeat orange crystal enemies.",
            "image": "https://pixel-shooter.github.io/img/time-shooter-2.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3,680"
            }
        },
        "time-shooter-3-swat.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Time Shooter 3: SWAT",
            "description": "Breach hostage rooms in slow-motion, utilize riot shields, and neutralize terrorist threats with pinpoint precision.",
            "image": "https://pixel-shooter.github.io/img/time-shooter-3-swat.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3,290"
            }
        },
        "tiny-rifles.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Tiny Rifles",
            "description": "Deploy infantry, snipers, and artillery along tactical trench lanes to overrun and capture enemy bunkers.",
            "image": "https://pixel-shooter.github.io/img/tiny-rifles.png",
            "genre": ["Shooting", "Strategy", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1,540"
            }
        },
        "xmas-rooftop-battles.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Xmas Rooftop Battles",
            "description": "Holiday-themed ragdoll shooting duel featuring Santa, elves, and explosive snowballs atop snowy rooftops.",
            "image": "https://pixel-shooter.github.io/img/xmas-rooftop-battles.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,940"
            }
        },
        "you-vs-100-skibidi-toilets.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "You vs 100 Skibidi Toilets",
            "description": "Fend off 100 waves of singing toilet monsters using machine guns, rocket launchers, and orbital strikes.",
            "image": "https://pixel-shooter.github.io/img/you-vs-100-skibidi-toilets.png",
            "genre": ["Shooting", "Action", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "3,560"
            }
        },
        "zombie-shooter-3d-1.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Zombie Shooter 3D",
            "description": "Fight off relentless waves of the walking dead in dark post-apocalyptic corridors with high-powered shotguns.",
            "image": "https://pixel-shooter.github.io/img/zombie-shooter-3d-1.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,730"
            }
        },
        "zombies-shooter-part-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Zombies Shooter: Part 2",
            "description": "The undead horde expands in scale and ferocity. Scavenge superior weapons and exterminate citywide infestations.",
            "image": "https://pixel-shooter.github.io/img/zombies-shooter-part-2.png",
            "genre": ["Shooting", "Shooting", "Action", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2,480"
            }
        },
        "2-player-dark-racing.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "2 Player Dark Racing",
            "description": "Compete in thrilling nighttime split-screen and solo circuit battles through neon-lit futuristic tracks.",
            "image": "https://pixel-shooter.github.io/game-pixel/2-player-dark-racing/logo.png",
            "genre": ["2 Player", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1820"
            }
        },
        "atv-ultimate-offroad.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "ATV Ultimate OffRoad",
            "description": "Drive powerful quad bikes through rugged dirt terrains, steep canyons, and high-adrenaline obstacles.",
            "image": "https://pixel-shooter.github.io/game-pixel/atv-ultimate-offroad/logo.png",
            "genre": ["Offroad", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1650"
            }
        },
        "boat-drift.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Boat Drift",
            "description": "Master hydroplane drift physics across winding river circuits and splash your way to victory.",
            "image": "https://pixel-shooter.github.io/game-pixel/boat-drift/logo.png",
            "genre": ["Water Racing", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1490"
            }
        },
        "burnin-rubber-5-xs.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Burnin Rubber 5 XS",
            "description": "Equip heavy machine guns and missile launchers to blast through rivals in explosive high-speed street warfare.",
            "image": "https://pixel-shooter.github.io/game-pixel/burnin-rubber-5-xs/logo.png",
            "genre": ["Combat Racing", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3780"
            }
        },
        "burnout-drift-hilltop.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Burnout Drift: Hilltop",
            "description": "Execute continuous drifts on mountain hairpins and earn points to unlock custom tuned drift machines.",
            "image": "https://pixel-shooter.github.io/game-pixel/burnout-drift-hilltop/logo.png",
            "genre": ["Drift", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2140"
            }
        },
        "car-speed-racing-tycoon.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Car Speed Racing Tycoon",
            "description": "Manage an elite racing empire, upgrade supercars, and dominate high-stakes velocity tournaments.",
            "image": "https://pixel-shooter.github.io/game-pixel/car-speed-racing-tycoon/logo.png",
            "genre": ["Tycoon", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1380"
            }
        },
        "construction-ramp-jumping.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Construction Ramp Jumping",
            "description": "Launch heavy construction trucks down colossal ramps, demolish demolition sites, and achieve maximum flight.",
            "image": "https://pixel-shooter.github.io/game-pixel/construction-ramp-jumping/logo.png",
            "genre": ["Stunt", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1920"
            }
        },
        "crazy-cars.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Crazy Cars",
            "description": "Zoom across colorful obstacle-laden obstacle parks, perform wild barrel rolls, and collect nitro boosters.",
            "image": "https://pixel-shooter.github.io/game-pixel/crazy-cars/logo.png",
            "genre": ["Arcade", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2350"
            }
        },
        "crazy-for-speed.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Crazy for Speed",
            "description": "Race exotic sports cars along alpine highways and city night strips with thrilling nitro acceleration.",
            "image": "https://pixel-shooter.github.io/game-pixel/crazy-for-speed/logo.png",
            "genre": ["Racing", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1730"
            }
        },
        "drift-escape.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Drift Escape",
            "description": "Outmaneuver endless police interceptors with precision drift turns and cause satisfying pursuit crashes.",
            "image": "https://pixel-shooter.github.io/game-pixel/drift-escape/logo.png",
            "genre": ["Police Chase", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2210"
            }
        },
        "highway-racer-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Highway Racer 2",
            "description": "Weave through dense highway traffic at breakneck speeds, narrowly dodging commuter vehicles for bonus cash.",
            "image": "https://pixel-shooter.github.io/game-pixel/highway-racer-2/logo.png",
            "genre": ["Highway", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2490"
            }
        },
        "hill-climb-pixel-car.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Hill Climb Pixel Car",
            "description": "Conquer treacherous pixelated peaks, balance fuel tanks, and upgrade custom retro 2D hill climbers.",
            "image": "https://pixel-shooter.github.io/game-pixel/hill-climb-pixel-car/logo.png",
            "genre": ["Climbing", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1560"
            }
        },
        "jump-in-to-the-plane.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Jump Into the Plane",
            "description": "Sling cars down sky-high ski jumps and try to land directly into the cargo hold of flying transport planes.",
            "image": "https://pixel-shooter.github.io/game-pixel/jump-in-to-the-plane/logo.png",
            "genre": ["Stunt", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1870"
            }
        },
        "kart-race-3d.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Kart Race 3D",
            "description": "Drift around tight kart circuits, grab tactical mystery power-ups, and cross the finish line in first place.",
            "image": "https://pixel-shooter.github.io/game-pixel/kart-race-3d/logo.png",
            "genre": ["Kart", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1640"
            }
        },
        "merge-battle-car.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Merge Battle Car",
            "description": "Combine armored speedsters to synthesize devastating battle vehicles and wage automated arena war.",
            "image": "https://pixel-shooter.github.io/game-pixel/merge-battle-car/logo.png",
            "genre": ["Merge", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1420"
            }
        },
        "mr-racer-car-racing.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Mr Racer - Car Racing",
            "description": "Experience console-grade 3D highway racing across multiple modes including challenge, chase, and career.",
            "image": "https://pixel-shooter.github.io/game-pixel/mr-racer-car-racing/logo.png",
            "genre": ["Racing", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3210"
            }
        },
        "night-city-racing.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Night City Racing",
            "description": "Cruise neon-soaked metropolitan expressways in hypercars, customize engine stats, and dominate street races.",
            "image": "https://pixel-shooter.github.io/game-pixel/night-city-racing/logo.png",
            "genre": ["Supercars", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3450"
            }
        },
        "parking-fury-3d-beach-city-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Parking Fury 3D: Beach City 2",
            "description": "Navigate intricate seaside streets, avoid patrol cars, and park luxury rides with surgical accuracy.",
            "image": "https://pixel-shooter.github.io/game-pixel/parking-fury-3d-beach-city-2/logo.png",
            "genre": ["Parking", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1810"
            }
        },
        "rally-racer-dirt.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Rally Racer Dirt",
            "description": "Tear through gravel, mud, and tarmac with real drift physics and realistic rally suspension simulation.",
            "image": "https://pixel-shooter.github.io/game-pixel/rally-racer-dirt/logo.png",
            "genre": ["Rally", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2080"
            }
        },
        "traffic-jam-3d-gh-pages.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Traffic Jam 3D",
            "description": "Push your driving limits on crowded multi-lane superhighways, meeting checkpoints before time runs out.",
            "image": "https://pixel-shooter.github.io/game-pixel/traffic-jam-3d-gh-pages/logo.png",
            "genre": ["Traffic", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2630"
            }
        },
        "traffic-mania.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Traffic Mania",
            "description": "Direct complex city intersections, time traffic signals, and prevent chaotic gridlock collisions.",
            "image": "https://pixel-shooter.github.io/game-pixel/traffic-mania/logo.png",
            "genre": ["Traffic Control", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "1310"
            }
        },
        "truck-loader-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Truck Loader 2",
            "description": "Operate an agile magnetic arm loader to solve physics puzzles and load freight into haulage trucks.",
            "image": "https://pixel-shooter.github.io/img/truck-loader-2.png",
            "genre": ["Puzzle Physics", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2120"
            }
        },
        "truck-loader-3.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Truck Loader 3",
            "description": "Return to the warehouse with new mechanical contraptions, buttons, ramps, and challenging shipping orders.",
            "image": "https://pixel-shooter.github.io/img/truck-loader-3.png",
            "genre": ["Puzzle Physics", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2340"
            }
        },
        "truck-loader-4.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Truck Loader 4",
            "description": "Master ultimate warehouse physics puzzles with upgraded magnetic grappling mechanisms and complex layouts.",
            "image": "https://pixel-shooter.github.io/img/truck-loader-4.png",
            "genre": ["Puzzle Physics", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2560"
            }
        },
        "stunt-biker-3d.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Stunt Biker 3D",
            "description": "Throttle extreme dirt bikes across impossible rooftop ramps, loop-the-loops, and death-defying sky tracks.",
            "image": "https://pixel-shooter.github.io/img/stunt-biker-3d.png",
            "genre": ["Bike Stunt", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2290"
            }
        },
        "monsters-wheels-2.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Monsters Wheels 2",
            "description": "Crush junk cars under giant monster wheels, trigger explosive nitro, and conquer industrial hill trails.",
            "image": "https://pixel-shooter.github.io/img/monsters-wheels-2.png",
            "genre": ["Monster Truck", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2470"
            }
        },
        "drive-mad.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Drive Mad",
            "description": "Balance high-torque pixel 4x4 trucks over tricky obstacles, bridges, and loops without flipping over.",
            "image": "https://pixel-shooter.github.io/img/drive-mad.png",
            "genre": ["Physics Stunt", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "5890"
            }
        },
        "eggycargame.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Eggy Car",
            "description": "Drive gently over hilly terrain while keeping a fragile egg safe in your pickup bed to set new distance records.",
            "image": "https://pixel-shooter.github.io/img/eggycargame.png",
            "genre": ["Hill Climb", "Car", "Racing", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "6120"
            }
        },
        "retro-bowl.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Retro Bowl",
            "description": "Play Retro Bowl unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/retro-bowl.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "basketball-frvr.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Basketball FRVR",
            "description": "Play Basketball FRVR unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/basketball-frvr.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "basketball-stars.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Basketball Stars",
            "description": "Play Basketball Stars unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/game-pixel/basketball-stars/logo.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "basketball-stars-2026.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Basketball Stars 2026",
            "description": "Play Basketball Stars 2026 unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/basketball-stars-2026.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "boxing-random.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Boxing Random",
            "description": "Play Boxing Random unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/boxing-random.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "dunkbrush.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Dunkbrush",
            "description": "Play Dunkbrush unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/Dunkbrush.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "hockey-taka.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Hockey Taka",
            "description": "Play Hockey Taka unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/hockey-taka.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "monster-truck-soccer.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Monster Truck Soccer",
            "description": "Play Monster Truck Soccer unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/monster-truck-soccer.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "penalty-shooters.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Penalty Shooters",
            "description": "Play Penalty Shooters unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/penalty-shooters.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "penalty-shooters-3.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Penalty Shooters 3",
            "description": "Play Penalty Shooters 3 unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/penalty-shooters-3.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "penalty-shooters-x.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Penalty Shooters X",
            "description": "Play Penalty Shooters X unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/penalty-shooters-x.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "penalty-superstar.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Penalty Superstar",
            "description": "Play Penalty Superstar unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/penalty-superstar.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "rail-surfers.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Rail Surfers",
            "description": "Play Rail Surfers unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/game-pixel/rail-surfers/logo.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "soccer-champ.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Soccer Champ",
            "description": "Play Soccer Champ unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/soccer-champ.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "soccer-physics.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Soccer Physics",
            "description": "Play Soccer Physics unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/soccer-physics.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "soccer-sprint.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Soccer Sprint",
            "description": "Play Soccer Sprint unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/soccer-sprint.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "soccer-world-cup.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Soccer World Cup",
            "description": "Play Soccer World Cup unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/soccer-world-cup.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "sports-heads-football-championship.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Sports Heads Football Championship",
            "description": "Play Sports Heads Football Championship unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/sports-heads-football-championship.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "swipe-basketball.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Swipe Basketball",
            "description": "Play Swipe Basketball unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/swipe-basketball.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "tap-goal.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Tap Goal",
            "description": "Play Tap Goal unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/tap-goal.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "tennis-open.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Tennis Open",
            "description": "Play Tennis Open unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/tennis-open.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "uno.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Uno",
            "description": "Play Uno unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/uno.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "volley-random.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Volley Random",
            "description": "Play Volley Random unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/volley-random.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "retro-bowl-college.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Retro Bowl College",
            "description": "Play Retro Bowl College unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/retro-bowl-college.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "football-legends-2026.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Football Legends 2026",
            "description": "Play Football Legends 2026 unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/football-legends-2026.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "football-penalty-2026.html": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Football Penalty 2026",
            "description": "Play Football Penalty 2026 unblocked free online on school Chromebook with smooth browser gameplay.",
            "image": "https://pixel-shooter.github.io/img/football-penalty-2026.png",
            "genre": ["Sports", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1,950"
            }
        },
        "pixel-shooter": {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Pixel Shooter",
            "description": "Engage in fast-paced retro 2D pixel shooter warfare with an array of weapons, destructible environments, and smooth browser performance.",
            "image": "https://pixel-shooter.github.io/img/logo.png",
            "genre": ["Shooting", "Action", "Arcade", "Unblocked Game"],
            "operatingSystem": "Any web browser (Chromebook, Windows, Mac, Linux, Mobile)",
            "applicationCategory": "BrowserGame",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1,420"
            }
        }
    };

    function injectSchema() {
        let path = window.location.pathname || "";
        let filename = path.substring(path.lastIndexOf("/") + 1).toLowerCase();

        let schemaData = null;
        if (GAME_SCHEMAS[filename]) {
            schemaData = GAME_SCHEMAS[filename];
        } else if (!filename || filename === "index.html") {
            schemaData = GAME_SCHEMAS["pixel-shooter"];
        }

        if (schemaData) {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.textContent = JSON.stringify(schemaData, null, 2);
            document.head.appendChild(script);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectSchema);
    } else {
        injectSchema();
    }
})();