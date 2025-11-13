const planetPositions = {
    sun: { x: 50, y: 50 }, 
    mercury: { x: 50, y: -1 },
    venus: { x: 0, y: 50 },
    earth: { x: 100, y: 50 },
    mars: { x: 50, y: 100 },
    jupiter: { x: 100, y: 50 },
    saturn: { x: 0, y: 50 }, 
    uranus: { x: 0, y: 50 },
    neptune: { x: 50, y: 0 } 
};

function getPlanetCardPosition(planet) {
    const position = planetPositions[planet];
    if (!position) return 'right-side';
    
    return position.x > 50 ? 'left-side' : 'right-side';
}

function updatePlanetInfo(planet) {
    const data = planetData[planet];
    if (!data) return;

    const planetContent = document.querySelector('.planet-info-content');
    const planetCard = document.getElementById('planet-info');
    
    const newPosition = getPlanetCardPosition(planet);
    
    planetContent.classList.add('fade-out');
    planetContent.classList.remove('fade-in');

    setTimeout(() => {
        planetCard.classList.remove('left-side', 'right-side');
        planetCard.classList.add(newPosition);

        document.getElementById('planet-name').textContent = data.name;
        document.getElementById('planet-type').textContent = data.type;
        document.getElementById('planet-description').textContent = data.description;
        document.getElementById('char-diameter').textContent = data.diameter;
        document.getElementById('char-mass').textContent = data.mass;
        document.getElementById('char-orbital').textContent = data.orbital;
        document.getElementById('char-rotation').textContent = data.rotation;
        document.getElementById('char-moons').textContent = data.moons;
        document.getElementById('char-temp').textContent = data.temp;

        const factsList = document.getElementById('fun-facts-list');
        factsList.innerHTML = '';
        data.facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            factsList.appendChild(li);
        });

        planetContent.classList.remove('fade-out');
        planetContent.classList.add('fade-in');
        
    }, 200);
}

$(window).on('load', function () {
    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function () {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
            
            const planetCard = document.getElementById('planet-info');
            planetCard.classList.add('right-side');
            
            setTimeout(() => {
                const planetContent = document.querySelector('.planet-info-content');
                planetContent.classList.add('fade-in');
            }, 500);
        });
    };

    var setView = function (view) {
        universe.removeClass().addClass(view);
    };

    $("#toggle-data").click(function (e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function (e) {
        var ref = $(this).attr("class").split(' ')[0];
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');

        updatePlanetInfo(ref);

        e.preventDefault();
    });

    $(".set-view").click(function () {
        body.toggleClass("view-3D view-2D");
    });

    $(".set-zoom").click(function () {
        body.toggleClass("zoom-large zoom-close");
    });

    $(".set-speed").click(function () {
        setView("scale-stretched set-speed");
    });

    $(".set-size").click(function () {
        setView("scale-s set-size");
    });

    $(".set-distance").click(function () {
        setView("scale-d set-distance");
    });

    $(".back-button").click(function (e) {
        e.preventDefault();
        location.href = "../Landing Page/index.html";
    });

    init();
});