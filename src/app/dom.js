export const changeColorMap = () => {
    document.getElementById('inptStyle').addEventListener('change', (e) => {
        if (e.target.value === 'A color') {
            document.querySelector('#map>.leaflet-pane>.leaflet-tile-pane').style.filter = 'grayscale(0)';
        }
        if (e.target.value === 'Simple') {
            document.querySelector('#map>.leaflet-pane>.leaflet-tile-pane').style.filter = 'grayscale(1)';
        }
    })
}

// ----------------------------------------------------

// Add attributes to markers img
export const attMarker = () => {
    document.querySelectorAll('.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive').forEach(m => {
        m.setAttribute('alt','map-icon');
        m.setAttribute('title','map-icon');
    });
}

// ----------------------------------------------------

export const splashScreen = () => {
    
    const splashSC =  document.getElementById('splash-sc');
    if (splashSC) {
        document.getElementById('splash-sc').innerHTML = createSplashEL();
        const splash = document.getElementById('splash')
        
        if(splash) spBar(splash)
    }

}

const createSplashEL = () => {
    return `
        <div id="splash" class="bg-topography d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column">
                <div class="splash-header">
                    <h5 class="d-flex align-items-center wfit-content">
                        <span class="fs-4 healthicons--heart-cardiogram-outline"></span>
                        <b class="ms-1">Fitness Map</b>
                    </h5>
                </div>
                <div class="splash-content pt-2 mt-2 pb-3 mb-3 text-center opacity-50">
                    <b>Tarragona:</b>
                    <p class="m-0">Salou (Cap Salou)</p>
                    <p class="m-0">Vila Seca (La Pineda)</p>
                </div>
                <div id="loader">
                    <div id="progress" class="progress" role="progressbar" aria-label="Carga de App...">
                        <div class="progress-bar bg-dark"></div>
                    </div>
                    <small class="mt-2 d-block text-center opacity-25 anim-pulse">Cargando...</small>
                </div>
            </div>
        </div>
    `;
}

const spBar = (spEl) => {
    let index, width = 0;
    let internarlBar = document.querySelector('#progress>.progress-bar');
        internarlBar.style.width = `10%`;

    setInterval(() => {
        if(width >= 100) {
            clearInterval();
            index = 0;
            spTransition(spEl)
        } else {
            width++;
            internarlBar.style.width = width + "%";
        }
    }, 10);
}

const spTransition = (spEl) => {
    spEl.classList.add('hidde-el')
    setTimeout(() => spEl.style.opacity = 0, 1000)
    setTimeout(() => spEl.remove(), 2000)
}

// ----------------------------------------------------

export const shareUri = (path) => {
    document.getElementById('btn-share').addEventListener('click', () => {
        let sharecContentEl = document.getElementById('share-content');
        const btn = `
            <button id="btn-share" type="button" class="btn btn-dark wfit-content d-flex justify-content-center align-items-center" aria-label="Compartir">
                <span class="gis--map-share"></span>
            </button>
        `;
        const toast = (text) => `
            <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        ${text}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `;
        if(navigator.clipboard) {
            try {
                navigator.clipboard.writeText(path);
                // alert("Copied the text: " + path);
                sharecContentEl.innerHTML = btn + toast('La página fue copiada para compartir.');
            } catch (error) {
                // console.log(error)
                sharecContentEl.innerHTML = btn + toast('Se produjo un error.');
            }
          }
    })
}