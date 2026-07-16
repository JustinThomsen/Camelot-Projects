// Camelot Condominiums Progress Tracker - Javascript Logic

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Building Database & Default Coordinates ---
  // We specify startUnit, endUnit, and layout direction (vertical/horizontal) 
  // to dynamically slice the coordinates block into individual unit overlays.
  const buildingsData = [
    // Dover Lane (Red)
    { id: 'dl1', name: 'Building 1', street: 'Dover Lane', units: '2500 - 2505', startUnit: 2500, endUnit: 2505, direction: 'vertical', coords: '135,314 165,314 165,408 135,408' },
    { id: 'dl2', name: 'Building 2', street: 'Dover Lane', units: '2506 - 2511', startUnit: 2506, endUnit: 2511, direction: 'vertical', coords: '68,265 98,265 98,368 68,368' },
    { id: 'dl3', name: 'Building 3', street: 'Dover Lane', units: '2512 - 2520', startUnit: 2512, endUnit: 2520, direction: 'vertical', coords: '68,110 98,110 98,236 68,236' },
    { id: 'dl4', name: 'Building 4', street: 'Dover Lane', units: '2541 - 2545', startUnit: 2541, endUnit: 2545, direction: 'vertical', coords: '195,100 225,100 225,188 195,188' },
    { id: 'dl5', name: 'Building 5', street: 'Dover Lane', units: '2531 - 2536', startUnit: 2531, endUnit: 2536, direction: 'horizontal', coords: '178,158 308,158 308,188 178,188' },

    // Essex Court (Blue)
    { id: 'ec6', name: 'Building 6', street: 'Essex Court', units: '2530 - 2535', startUnit: 2530, endUnit: 2535, direction: 'vertical', coords: '335,100 365,100 365,208 335,208' },
    { id: 'ec7', name: 'Building 7', street: 'Essex Court'
        </div>
      `).join('');

      mapperPointsList.querySelectorAll('.point-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-index'));
          clickedPoints.splice(idx, 1);
          updateMapperSVG();
        });
      });
    }

    const selectedId = mapperBldgSelect.value;
    const bldg = buildingsData.find(b => b.id === selectedId);
    if (bldg) {
      bldg.coords = pointsStr;
      renderMapOverlays();
      // Highlight all unit segments of this selection
      document.querySelectorAll(`.map-building[data-id="${selectedId}"]`).forEach(el => {
        el.classList.add('selected');
      });
    }
  }

  if (mapperResetBtn) {
    mapperResetBtn.addEventListener('click', () => {
      clickedPoints = [];
      updateMapperSVG();
    });
  }

  if (mapperCopyBtn) {
    mapperCopyBtn.addEventListener('click', () => {
      mapperCoordsText.select();
      document.execCommand('copy');
      
      const originalText = mapperCopyBtn.textContent;
      mapperCopyBtn.textContent = 'Copied!';
      mapperCopyBtn.style.backgroundColor = '#10b981';
      
      setTimeout(() => {
        mapperCopyBtn.textContent = originalText;
        mapperCopyBtn.style.backgroundColor = '';
      }, 1500);
    });
  }

  function clearMapperVisuals() {
    clickedPoints = [];
    if (mapperPointsList) mapperPointsList.innerHTML = '';
    renderMapOverlays();
  }

  // --- 8. Initial Page Load Execution ---
  renderMapOverlays();
  updateStats();
  resetDetailsPanel();
});
