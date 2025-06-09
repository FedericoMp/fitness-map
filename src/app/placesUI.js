export const setPopupUI = (title, desc) => {
    return `
          <div class="card-body">
              <h5 class="card-subtitle text-body-secondary fs-medium">${title}</h5>
              <p class="my-2 text-truncate">${desc}</p>
              <a class="btn btn-dark btn-sm rounded fs-small text-bg-dark text-decoration-none" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">+ Info</a>
          </div>
        `;
}

// ----------------------------------------------------

export const setDetailsUI = (title, content, gmap) => {
    const textContent = content.map(c => `<p class="mb-1">• ${c}</p>`).join().replaceAll('>,<','><')
    return `
        <div class="offcanvas offcanvas-bottom rounded-top" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header rounded-top bg-body-tertiary">
              <h5 class="offcanvas-title d-flex align-items-center" id="offcanvasBottomLabel">${title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body pt-4">
            ${textContent}
            <a href=${gmap} class="mt-4 mb-2 badge text-bg-dark small text-white text-decoration-none gmaps-btn d-flex align-items-center" role="button" target="_blank"><span class="gis--poi-map-o me-2"></span> Google Maps Reference</a>
          </div>
      </div>
    `;
}