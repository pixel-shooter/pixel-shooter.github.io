/**
 * Pixel Shooter - Fast Live Game Search
 * Real-time instant game search with dropdown preview, keyboard navigation, and on-page grid filtering.
 */

(function () {
    // 63 Catalog games dataset
    const CATALOG_GAMES = [
        { "title": "Pixel Shooter", "href": "index.html", "img": "img/pixel-shooter.png", "category": "Shooting" },
        { "title": "Archery 2", "href": "game/archery-2.html", "img": "img/archery-2.png", "category": "Shooting" },
        { "title": "Among Shooter: Kill Impostor", "href": "game/among-shooter-kill-impostor.html", "img": "img/among-shooter-kill-impostor.png", "category": "Shooting" },
        { "title": "Apple Shooter Remastered", "href": "game/apple-shooter-1.html", "img": "img/apple-shooter-1.png", "category": "Shooting" },
        { "title": "Apple Shooter Championship", "href": "game/apple-shooter-champ.html", "img": "img/apple-shooter-champ.png", "category": "Shooting" },
        { "title": "Apple Shooter Classic", "href": "game/apple-shooter.html", "img": "img/apple-shooter.png", "category": "Shooting" },
        { "title": "FNaF Shooter", "href": "game/fnaf-shooter.html", "img": "img/fnaf-shooter.png", "category": "Shooting" },
        { "title": "FPS Assault Shooter", "href": "game/fps-assault-shooter.html", "img": "img/fps-assault-shooter.png", "category": "Shooting" },
        { "title": "Funny Shooter 2", "href": "game/funny-shooter-2.html", "img": "img/funny-shooter-2.png", "category": "Shooting" },
        { "title": "Funny Shooter", "href": "game/funny-shooter.html", "img": "img/funny-shooter.png", "category": "Shooting" },
        { "title": "GunSpin", "href": "game/gunspin.html", "img": "img/gunspin.png", "category": "Shooting" },
        { "title": "Huggy Wuggy Shooter", "href": "game/huggy-wuggy-shooter.html", "img": "img/huggy-wuggy-shooter.png", "category": "Shooting" },
        { "title": "Johnny Trigger: Action Shooter", "href": "game/johnny-trigger-action-shooter.html", "img": "img/johnny-trigger-action-shooter.png", "category": "Shooting" },
        { "title": "Killstreak 3D Shooter", "href": "game/killstreak-3d-shooter.html", "img": "img/killstreak-3d-shooter.png", "category": "Shooting" },
        { "title": "Military Shooter Training", "href": "game/military-shooter-training.html", "img": "img/military-shooter-training.png", "category": "Shooting" },
        { "title": "Mine Shooter", "href": "game/mine-shooter.html", "img": "img/mine-shooter.png", "category": "Shooting" },
        { "title": "Pro Shooter", "href": "game/pro-shooter.html", "img": "img/pro-shooter.png", "category": "Shooting" },
        { "title": "Rooftop Shooters", "href": "game/rooftop-shooters.html", "img": "img/rooftop-shooters.png", "category": "Shooting" },
        { "title": "Shooter 2D", "href": "game/shooter-2d.html", "img": "img/shooter-2d.png", "category": "Shooting" },
        { "title": "Squid Shooter", "href": "game/squid-shooter.html", "img": "img/squid-shooter.png", "category": "Shooting" },
        { "title": "Time Shooter 2", "href": "game/time-shooter-2.html", "img": "img/time-shooter-2.png", "category": "Shooting" },
        { "title": "Time Shooter 3: SWAT", "href": "game/time-shooter-3-swat.html", "img": "img/time-shooter-3-swat.png", "category": "Shooting" },
        { "title": "Time Shooter", "href": "game/time-shooter.html", "img": "img/time-shooter.png", "category": "Shooting" },
        { "title": "Zombie Shooter 3D", "href": "game/zombie-shooter-3d-1.html", "img": "img/zombie-shooter-3d-1.png", "category": "Shooting" },
        { "title": "Zombies Shooter: Part 2", "href": "game/zombies-shooter-part-2.html", "img": "img/zombies-shooter-part-2.png", "category": "Shooting" },
        { "title": "Ball Beez", "href": "game/ballbeez.html", "img": "https://pixel-shooter.github.io/game-pixel/ballbeez/logo.png", "category": "Arcade" },
        { "title": "Black Jump 1", "href": "game/black-jump-1.html", "img": "https://pixel-shooter.github.io/game-pixel/black-jump-1/logo.png", "category": "Action" },
        { "title": "Blue Mushroom Cat Run", "href": "game/blue-mushroom-cat-run.html", "img": "https://pixel-shooter.github.io/game-pixel/blue-mushroom-cat-run/logo.png", "category": "Action" },
        { "title": "Boxing Gang Stars", "href": "game/boxing-gang-stars.html", "img": "https://pixel-shooter.github.io/game-pixel/boxing-gang-stars/logo.png", "category": "Action" },
        { "title": "Break Many Bricks", "href": "game/break-many-bricks.html", "img": "https://pixel-shooter.github.io/game-pixel/break-many-bricks/logo.png", "category": "Puzzle" },
        { "title": "City Builder 1", "href": "game/city-builder-1.html", "img": "https://pixel-shooter.github.io/game-pixel/city-builder-1/logo.png", "category": "Arcade" },
        { "title": "Crazy Dunk 1", "href": "game/crazy-dunk-1.html", "img": "https://pixel-shooter.github.io/game-pixel/crazy-dunk-1/logo.png", "category": "Arcade" },
        { "title": "Cut 3d", "href": "game/cut-3d.html", "img": "https://pixel-shooter.github.io/game-pixel/cut-3d/logo.png", "category": "Arcade" },
        { "title": "Drag Race 3d", "href": "game/drag-race-3d-1.html", "img": "https://pixel-shooter.github.io/game-pixel/drag-race-3d-1/logo.png", "category": "Car" },
        { "title": "Draw Climber 2", "href": "game/draw-climber-2.html", "img": "https://pixel-shooter.github.io/game-pixel/draw-climber-2/logo.png", "category": "Action" },
        { "title": "Egg Wars", "href": "game/egg-wars.html", "img": "https://pixel-shooter.github.io/game-pixel/egg-wars/logo.png", "category": "Action" },
        { "title": "Endless Siege", "href": "game/endless-siege.html", "img": "https://pixel-shooter.github.io/game-pixel/endless-siege/logo.png", "category": "Shooting" },
        { "title": "Fireboy and Watergirl 1 Forest Temple", "href": "game/fireboy-and-watergirl-1-forest-temple.html", "img": "https://pixel-shooter.github.io/game-pixel/fireboy-and-watergirl-1-forest-temple/logo.png", "category": "Puzzle" },
        { "title": "Fireboy and Watergirl 2 Light Temple", "href": "game/fireboy-and-watergirl-2-light-temple.html", "img": "https://pixel-shooter.github.io/game-pixel/fireboy-and-watergirl-2-light-temple/logo.png", "category": "Puzzle" },
        { "title": "Fireboy and Watergirl 3 Ice Temple", "href": "game/fireboy-and-watergirl-3-ice-temple.html", "img": "https://pixel-shooter.github.io/game-pixel/fireboy-and-watergirl-3-ice-temple/logo.png", "category": "Puzzle" },
        { "title": "Fireboy and Watergirl 4 Crystal Temple", "href": "game/fireboy-and-watergirl-4-crystal-temple.html", "img": "https://pixel-shooter.github.io/game-pixel/fireboy-and-watergirl-4-crystal-temple/logo.png", "category": "Puzzle" },
        { "title": "Fireboy and Watergirl 5 Elements", "href": "game/fireboy-and-watergirl-5-elements.html", "img": "https://pixel-shooter.github.io/game-pixel/fireboy-and-watergirl-5-elements/logo.png", "category": "Puzzle" },
        { "title": "Fishing io", "href": "game/fishing-io.html", "img": "https://pixel-shooter.github.io/game-pixel/fishing-io/logo.png", "category": "Arcade" },
        { "title": "Flappy Bird", "href": "game/flappy-bird.html", "img": "https://pixel-shooter.github.io/game-pixel/flappy-bird/logo.png", "category": "Arcade" },
        { "title": "Geometry Dash", "href": "game/geometry-dash.html", "img": "https://pixel-shooter.github.io/game-pixel/geometry-dash/logo.png", "category": "Action" },
        { "title": "Getaway Shootout", "href": "game/getaway-shootout.html", "img": "https://pixel-shooter.github.io/game-pixel/getaway-shootout/logo.png", "category": "Shooting" },
        { "title": "Gun Mayhem 2", "href": "game/gun-mayhem-2.html", "img": "https://pixel-shooter.github.io/game-pixel/gun-mayhem-2/logo.png", "category": "Shooting" },
        { "title": "Gun Mayhem", "href": "game/gun-mayhem.html", "img": "https://pixel-shooter.github.io/game-pixel/gun-mayhem/logo.png", "category": "Shooting" },
        { "title": "Happy Wheels", "href": "game/happy-wheels.html", "img": "https://pixel-shooter.github.io/game-pixel/happy-wheels/logo.png", "category": "Action" },
        { "title": "Helix Jump", "href": "game/helix-jump.html", "img": "https://pixel-shooter.github.io/game-pixel/helix-jump/logo.png", "category": "Arcade" },
        { "title": "Idle Breakout", "href": "game/idle-breakout.html", "img": "https://pixel-shooter.github.io/game-pixel/idle-breakout/logo.png", "category": "Puzzle" },
        { "title": "Iron Snout", "href": "game/iron-snout.html", "img": "https://pixel-shooter.github.io/game-pixel/iron-snout/logo.png", "category": "Action" },
        { "title": "Madalin Stunt Cars 2", "href": "game/madalin-stunt-cars-2.html", "img": "https://pixel-shooter.github.io/game-pixel/madalin-stunt-cars-2/logo.png", "category": "Car" },
        { "title": "Madalin Stunt Cars 3", "href": "game/madalin-stunt-cars-3.html", "img": "https://pixel-shooter.github.io/game-pixel/madalin-stunt-cars-3/logo.png", "category": "Car" },
        { "title": "Moto X3M 4 Winter", "href": "game/moto-x3m-4-winter.html", "img": "https://pixel-shooter.github.io/game-pixel/moto-x3m-4-winter/logo.png", "category": "Car" },
        { "title": "Moto X3M Pool Party", "href": "game/moto-x3m-pool-party.html", "img": "https://pixel-shooter.github.io/game-pixel/moto-x3m-pool-party/logo.png", "category": "Car" },
        { "title": "Moto X3M Spooky Land", "href": "game/moto-x3m-spooky-land.html", "img": "https://pixel-shooter.github.io/game-pixel/moto-x3m-spooky-land/logo.png", "category": "Car" },
        { "title": "Moto X3M", "href": "game/moto-x3m.html", "img": "https://pixel-shooter.github.io/game-pixel/moto-x3m/logo.png", "category": "Car" },
        { "title": "Paper io 2", "href": "game/paper-io-2.html", "img": "https://pixel-shooter.github.io/game-pixel/paper-io-2/logo.png", "category": "Action" },
        { "title": "Pixel Gun Apocalypse 3", "href": "game/pixel-gun-apocalypse-3.html", "img": "https://pixel-shooter.github.io/game-pixel/pixel-gun-apocalypse-3/logo.png", "category": "Shooting" },
        { "title": "Pixel Gun Survival", "href": "game/pixel-gun-survival.html", "img": "https://pixel-shooter.github.io/game-pixel/pixel-gun-survival/logo.png", "category": "Shooting" },
        { "title": "Pixel Shooter", "href": "index.html", "img": "img/logo.png", "category": "Shooting" },
        { "title": "Retro Bowl", "href": "game/retro-bowl.html", "img": "https://pixel-shooter.github.io/game-pixel/retro-bowl/logo.png", "category": "Action" },
        { "title": "Rooftop Snipers", "href": "game/rooftop-snipers.html", "img": "https://pixel-shooter.github.io/game-pixel/rooftop-snipers/logo.png", "category": "Shooting" },
        { "title": "Run 3", "href": "game/run-3.html", "img": "https://pixel-shooter.github.io/game-pixel/run-3/logo.png", "category": "Action" },
        { "title": "Slope", "href": "game/slope.html", "img": "https://pixel-shooter.github.io/game-pixel/slope/logo.png", "category": "Action" },
        { "title": "Smash Karts", "href": "game/smash-karts.html", "img": "https://pixel-shooter.github.io/game-pixel/smash-karts/logo.png", "category": "Car" },
        { "title": "Snow Rider 3D", "href": "game/snow-rider-3d.html", "img": "https://pixel-shooter.github.io/game-pixel/snow-rider-3d/logo.png", "category": "Car" },
        { "title": "Soccer Random", "href": "game/soccer-random.html", "img": "https://pixel-shooter.github.io/game-pixel/soccer-random/logo.png", "category": "Action" },
        { "title": "Stickman Hook", "href": "game/stickman-hook.html", "img": "https://pixel-shooter.github.io/game-pixel/stickman-hook/logo.png", "category": "Action" },
        { "title": "Subway Surfers", "href": "game/subway-surfers.html", "img": "https://pixel-shooter.github.io/game-pixel/subway-surfers/logo.png", "category": "Action" },
        { "title": "Temple Run 2", "href": "game/temple-run-2.html", "img": "https://pixel-shooter.github.io/game-pixel/temple-run-2/logo.png", "category": "Action" },
        { "title": "Tunnel Rush", "href": "game/tunnel-rush.html", "img": "https://pixel-shooter.github.io/game-pixel/tunnel-rush/logo.png", "category": "Action" },
        { "title": "Vex 3", "href": "game/vex-3.html", "img": "https://pixel-shooter.github.io/game-pixel/vex-3/logo.png", "category": "Action" },
        { "title": "Vex 4", "href": "game/vex-4.html", "img": "https://pixel-shooter.github.io/game-pixel/vex-4/logo.png", "category": "Action" },
        { "title": "Vex 5", "href": "game/vex-5.html", "img": "https://pixel-shooter.github.io/game-pixel/vex-5/logo.png", "category": "Action" },
        { "title": "Vex 6", "href": "game/vex-6.html", "img": "https://pixel-shooter.github.io/game-pixel/vex-6/logo.png", "category": "Action" },
        { "title": "Vex 7", "href": "game/vex-7.html", "img": "https://pixel-shooter.github.io/game-pixel/vex-7/logo.png", "category": "Action" },
        { "title": "Volley Random", "href": "game/volley-random.html", "img": "https://pixel-shooter.github.io/game-pixel/volley-random/logo.png", "category": "Action" },
        { "title": "Water Sort Puzzle", "href": "game/water-sort-puzzle.html", "img": "https://pixel-shooter.github.io/game-pixel/water-sort-puzzle/logo.png", "category": "Puzzle" },
        { "title": "Wordle", "href": "game/wordle.html", "img": "https://pixel-shooter.github.io/game-pixel/wordle/logo.png", "category": "Puzzle" }
    ];

    window.ALL_GAMES = CATALOG_GAMES;

    function getRelativePrefix() {
        const path = window.location.pathname.replace(/\\/g, '/');
        if (path.includes('/catology/') || path.includes('/game/')) {
            return '../';
        }
        return './';
    }

    function formatHref(href) {
        const prefix = getRelativePrefix();
        if (href.startsWith('http')) return href;
        if (href.startsWith('./')) href = href.slice(2);
        if (href.startsWith('../')) href = href.slice(3);
        return prefix + href;
    }

    function formatImg(img) {
        if (!img) return getRelativePrefix() + 'img/logo.png';
        if (img.startsWith('http')) return img;
        const prefix = getRelativePrefix();
        if (img.startsWith('./')) img = img.slice(2);
        if (img.startsWith('../')) img = img.slice(3);
        return prefix + img;
    }

    function highlightMatch(text, query) {
        if (!query) return text;
        const index = text.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return text;
        const before = text.slice(0, index);
        const match = text.slice(index, index + query.length);
        const after = text.slice(index + query.length);
        return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
    }

    function escapeHtml(str) {
        return str.replace(/[&<>'"]/g, tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag));
    }

    function getCategoryColorClass(cat) {
        switch ((cat || '').toLowerCase()) {
            case 'shooting': return 'cat-shooting';
            case 'car': return 'cat-car';
            case 'action': return 'cat-action';
            case 'puzzle': return 'cat-puzzle';
            default: return 'cat-arcade';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('game-search-input');
        const clearBtn = document.getElementById('search-clear-btn');
        const dropdown = document.getElementById('search-dropdown');
        const resultsList = document.getElementById('search-results-list');

        if (!searchInput || !dropdown || !resultsList) return;

        let selectedIndex = -1;
        let currentMatches = [];

        function renderResults(query) {
            query = (query || '').trim().toLowerCase();
            selectedIndex = -1;

            if (!query) {
                dropdown.classList.remove('active');
                if (clearBtn) clearBtn.classList.remove('visible');
                filterOnPageCards('');
                return;
            }

            if (clearBtn) clearBtn.classList.add('visible');

            // Filter games
            currentMatches = CATALOG_GAMES.filter(g => {
                return g.title.toLowerCase().includes(query) ||
                       g.category.toLowerCase().includes(query);
            });

            // On-page grid filtering
            filterOnPageCards(query);

            if (currentMatches.length === 0) {
                resultsList.innerHTML = `
                    <div class="search-no-results">
                        <span class="search-no-results-icon">🔍</span>
                        <div class="search-no-results-text">No games found matching "<strong>${escapeHtml(query)}</strong>"</div>
                        <div class="search-no-results-hint">Try searching: <em>shooting, archery, car, runner, vex...</em></div>
                    </div>
                `;
            } else {
                let html = `
                    <div class="search-results-header">
                        <span>Found ${currentMatches.length} ${currentMatches.length === 1 ? 'game' : 'games'}</span>
                        <span class="search-key-hint">Press ↵ to play</span>
                    </div>
                `;

                currentMatches.slice(0, 8).forEach((game, idx) => {
                    const href = formatHref(game.href);
                    const catClass = getCategoryColorClass(game.category);
                    const titleHtml = highlightMatch(game.title, query);

                    html += `
                        <a href="${href}" class="search-result-item" data-index="${idx}">
                            <img src="${formatImg(game.img)}" alt="${escapeHtml(game.title)}" class="search-thumb" loading="lazy" />
                            <div class="search-info">
                                <div class="search-title">${titleHtml}</div>
                                <div class="search-meta">
                                    <span class="search-badge ${catClass}">${escapeHtml(game.category)}</span>
                                    <span class="search-unblocked-tag">🏫 Unblocked</span>
                                </div>
                            </div>
                            <svg class="search-arrow-icon" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                        </a>
                    `;
                });

                if (currentMatches.length > 8) {
                    html += `
                        <div class="search-results-footer">
                            +${currentMatches.length - 8} more games found
                        </div>
                    `;
                }

                resultsList.innerHTML = html;
            }

            dropdown.classList.add('active');
        }

        // Live on-page grid filtering if grid exists
        function filterOnPageCards(query) {
            const cards = document.querySelectorAll('.flow-game .throw-game');
            if (!cards || cards.length === 0) return;

            let visibleCount = 0;
            cards.forEach(card => {
                const titleElem = card.querySelector('.title-name, .card-game');
                const titleText = (titleElem ? titleElem.textContent : '').toLowerCase();
                if (!query || titleText.includes(query)) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Update badge if present
            const badge = document.querySelector('.more-game-badge');
            if (badge) {
                if (query) {
                    badge.textContent = `${visibleCount} Found`;
                } else {
                    badge.textContent = `${cards.length} Games`;
                }
            }
        }

        // Input events
        searchInput.addEventListener('input', function () {
            renderResults(this.value);
        });

        searchInput.addEventListener('focus', function () {
            if (this.value.trim()) {
                renderResults(this.value);
            }
        });

        // Clear button
        if (clearBtn) {
            clearBtn.addEventListener('click', function (e) {
                e.preventDefault();
                searchInput.value = '';
                renderResults('');
                searchInput.focus();
            });
        }

        // Keyboard navigation
        searchInput.addEventListener('keydown', function (e) {
            const items = resultsList.querySelectorAll('.search-result-item');
            if (!dropdown.classList.contains('active') || items.length === 0) {
                if (e.key === 'Enter' && searchInput.value.trim()) {
                    // Scroll to games grid if on page
                    const grid = document.getElementById('more-game') || document.querySelector('.flow-game');
                    if (grid) {
                        grid.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                return;
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelected(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                updateSelected(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                } else if (items.length > 0) {
                    items[0].click();
                }
            } else if (e.key === 'Escape') {
                dropdown.classList.remove('active');
            }
        });

        function updateSelected(items) {
            items.forEach((item, idx) => {
                if (idx === selectedIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        // Dismiss when clicking outside
        document.addEventListener('click', function (e) {
            const wrap = document.querySelector('.header-search-wrap');
            if (wrap && !wrap.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Global shortcut "/" to focus search
        document.addEventListener('keydown', function (e) {
            if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
        });
    });
})();
