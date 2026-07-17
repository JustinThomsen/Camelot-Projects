// Camelot Condominiums Progress Tracker - Javascript Logic
document.addEventListener('DOMContentLoaded', () => {

  const buildingsData = [{
    "id": "b1",
    "name": "Building 1",
    "street": "Dover Lane",
    "units": "2500 - 2505",
    "startUnit": 2500,
    "endUnit": 2505,
    "coords": "182,367 141,356 170,250 211,261"
  },
{
    "id": "b2",
    "name": "Building 2",
    "street": "Dover Lane",
    "units": "2506 - 2511",
    "startUnit": 2506,
    "endUnit": 2511,
    "coords": "117,326 76,315 106,207 147,219"
  },
{
    "id": "b3",
    "name": "Building 3",
    "street": "Dover Lane",
    "units": "2512 - 2520",
    "startUnit": 2512,
    "endUnit": 2520,
    "coords": "137,185 89,185 89,47 137,47"
  },
{
    "id": "b4",
    "name": "Building 4",
    "street": "Dover Lane",
    "units": "2541 - 2545",
    "startUnit": 2541,
    "endUnit": 2545,
    "coords": "196,138 184,41 226,36 238,133"
  },
{
    "id": "b5",
    "name": "Building 5",
    "street": "Dover Lane",
    "units": "2531 - 2536",
    "startUnit": 2531,
    "endUnit": 2536,
    "coords": "267,197 157,197 157,156 267,156"
  },
{
    "id": "b6",
    "name": "Building 6",
    "street": "Essex Court",
    "units": "2530 - 2535",
    "startUnit": 2530,
    "endUnit": 2535,
    "coords": "312,157 299,48 337,44 349,152"
  },
{
    "id": "b7",
    "name": "Building 7",
    "street": "Essex Court",
    "units": "2540 - 2543",
    "startUnit": 2540,
    "endUnit": 2543,
    "coords": "361,205 283,205 283,171 361,171"
  },
{
    "id": "b8",
    "name": "Building 8",
    "street": "Essex Court",
    "units": "2550 - 2553",
    "startUnit": 2550,
    "endUnit": 2553,
    "coords": "444,185 366,185 366,151 444,151"
  },
{
    "id": "b9",
    "name": "Building 9",
    "street": "Essex Court",
    "units": "2500 - 2503",
    "startUnit": 2500,
    "endUnit": 2503,
    "coords": "499,267 465,266 468,182 501,183"
  },
{
    "id": "b10",
    "name": "Building 10",
    "street": "Essex Court",
    "units": "2510 - 2515",
    "startUnit": 2510,
    "endUnit": 2515,
    "coords": "463,167 453,60 491,56 501,163"
  },
{
    "id": "b11",
    "name": "Building 11",
    "street": "Essex Court",
    "units": "2520 - 2524",
    "startUnit": 2520,
    "endUnit": 2524,
    "coords": "444,93 358,93 358,63 444,63"
  },
{
    "id": "b12",
    "name": "Building 12",
    "street": "Bristol Terrace",
    "units": "2550 - 2554",
    "startUnit": 2550,
    "endUnit": 2554,
    "coords": "562,594 507,573 544,474 599,495"
  },
{
    "id": "b13",
    "name": "Building 13",
    "street": "Bristol Terrace",
    "units": "2540 - 2543",
    "startUnit": 2540,
    "endUnit": 2543,
    "coords": "674,487 596,487 596,441 674,441"
  },
{
    "id": "b14",
    "name": "Building 14",
    "street": "Bristol Terrace",
    "units": "2500 - 2504",
    "startUnit": 2500,
    "endUnit": 2504,
    "coords": "673,408 586,399 593,339 679,348"
  },
{
    "id": "b15",
    "name": "Building 15",
    "street": "Bristol Terrace",
    "units": "2510 - 2514",
    "startUnit": 2510,
    "endUnit": 2514,
    "coords": "729,430 676,430 676,333 729,333"
  },
{
    "id": "b16",
    "name": "Building 16",
    "street": "Bristol Terrace",
    "units": "2520 - 2523",
    "startUnit": 2520,
    "endUnit": 2523,
    "coords": "653,578 644,476 706,470 716,573"
  },
{
    "id": "b17",
    "name": "Building 17",
    "street": "Bristol Terrace",
    "units": "2530 - 2533",
    "startUnit": 2530,
    "endUnit": 2533,
    "coords": "683,678 677,583 729,580 735,674"
  },
{
    "id": "b18",
    "name": "Building 18",
    "street": "Bristol Terrace",
    "units": "2560 - 2563",
    "startUnit": 2560,
    "endUnit": 2563,
    "coords": "664,683 601,683 601,595 664,595"
  },
{
    "id": "b19",
    "name": "Building 19",
    "street": "Bristol Terrace",
    "units": "2570 - 2574",
    "startUnit": 2570,
    "endUnit": 2574,
    "coords": "623,753 546,753 546,671 623,671"
  },
{
    "id": "b20",
    "name": "Building 20",
    "street": "Stratford Drive",
    "units": "2595 - 2597",
    "startUnit": 2595,
    "endUnit": 2597,
    "coords": "461,649 423,647 428,568 466,570"
  },
{
    "id": "b21",
    "name": "Building 21",
    "street": "Stratford Drive",
    "units": "2590 - 2594",
    "startUnit": 2590,
    "endUnit": 2594,
    "coords": "465,735 431,735 431,661 465,661"
  },
{
    "id": "b22",
    "name": "Building 22",
    "street": "Stratford Drive",
    "units": "2580 - 2584",
    "startUnit": 2580,
    "endUnit": 2584,
    "coords": "470,792 374,792 374,750 470,750"
  },
{
    "id": "b23",
    "name": "Building 23",
    "street": "Stratford Drive",
    "units": "2570 - 2574",
    "startUnit": 2570,
    "endUnit": 2574,
    "coords": "360,799 316,799 316,702 360,702"
  },
{
    "id": "b24",
    "name": "Building 24",
    "street": "Stratford Drive",
    "units": "2560 - 2563",
    "startUnit": 2560,
    "endUnit": 2563,
    "coords": "373,687 344,687 344,609 373,609"
  },
{
    "id": "b25",
    "name": "Building 25",
    "street": "Stratford Drive",
    "units": "2510 - 2514",
    "startUnit": 2510,
    "endUnit": 2514,
    "coords": "318,613 245,548 271,518 344,583"
  },
{
    "id": "b26",
    "name": "Building 26",
    "street": "Stratford Drive",
    "units": "2530 - 2533",
    "startUnit": 2530,
    "endUnit": 2533,
    "coords": "225,721 189,720 193,642 229,644"
  },
{
    "id": "b30",
    "name": "Building 30",
    "street": "Stratford Drive",
    "units": "2520 - 2523",
    "startUnit": 2520,
    "endUnit": 2523,
    "coords": "177,618 100,615 101,578 178,580"
  },
{
    "id": "b31",
    "name": "Building 31",
    "street": "Stratford Drive",
    "units": "2500 - 2504",
    "startUnit": 2500,
    "endUnit": 2504,
    "coords": "183,489 91,489 91,451 183,451"
  },
{
    "id": "mf",
    "name": "Maintenance Facility",
    "street": "Stratford Drive",
    "units": "MF",
    "startUnit": 0,
    "endUnit": 0,
    "coords": "695,805 655,765 675,745 715,785"
  }];

  const svgOverlay = document.getElementById('svgOverlay');
  const tooltip = document.getElementById('mapTooltip');
  const detailsPanel = document.getElementById('detailsPanel');
  
  const emptyDetails = document.getElementById('emptyDetails');
  const detailsCard = document.getElementById('detailsCard');
  const detailBldgName = document.getElementById('detailBldgName');
  const detailRoadBadge = document.getElementById('detailRoadBadge');
  const detailUnits = document.getElementById('detailUnits');
  const detailProjectTitle = document.getElementById('detailProjectTitle');
  const detailStatusBadge = document.getElementById('detailStatusBadge');
  const detailPhase = document.getElementById('detailPhase');
  const detailDesc = document.getElementById('detailDesc');

  let currentProject = 'fences';

  const projectAssignments = {};
  const phases = ['completed', 'now', 'next', 'later'];
  buildingsData.forEach((b, idx) => {
      projectAssignments[b.id] = { 
          fences: phases[idx % 4], 
          landscaping: phases[(idx+1) % 4], 
          siding: phases[(idx+2) % 4], 
          roofs: phases[(idx+3) % 4] 
      };
  });

  function capitalize(str) {
      if(!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function renderMapOverlays() {
      if(!svgOverlay) return;
      svgOverlay.innerHTML = '';
      buildingsData.forEach(b => {
          const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
          poly.setAttribute('points', b.coords);
          poly.setAttribute('class', `map-building ${projectAssignments[b.id][currentProject]}`);
          poly.setAttribute('data-id', b.id);
          poly.setAttribute('data-unit', b.units);
          
          poly.addEventListener('mouseover', (e) => {
              tooltip.classList.add('visible');
              const unitLabel = (b.id === 'mf') ? 'MF' : `Units ${b.units}`;
              tooltip.innerHTML = `
                <div class="tooltip-title">${b.name}</div>
                <div class="tooltip-street">${b.street} | ${unitLabel}</div>
                <div class="tooltip-phase">Phase: ${capitalize(projectAssignments[b.id][currentProject])}</div>
              `;
          });
          
          poly.addEventListener('mousemove', (e) => {
              tooltip.style.left = e.pageX + 10 + 'px';
              tooltip.style.top = e.pageY + 10 + 'px';
          });
          
          poly.addEventListener('mouseout', () => {
              tooltip.classList.remove('visible');
          });
          
          poly.addEventListener('click', () => {
              emptyDetails.style.display = 'none';
              detailsCard.style.display = 'block';

              detailBldgName.textContent = b.name;
              detailRoadBadge.textContent = b.street;
              detailUnits.textContent = `Units ${b.units}`;
              
              const phaseStatus = projectAssignments[b.id][currentProject];
              detailProjectTitle.textContent = capitalize(currentProject);
              detailStatusBadge.textContent = capitalize(phaseStatus);
              detailStatusBadge.className = `project-phase-badge ${phaseStatus}`;
              detailsCard.className = `active-project-card ${phaseStatus}`;
              
              detailPhase.textContent = `Phase Status: ${capitalize(phaseStatus)}`;
              detailDesc.textContent = `This building is scheduled for ${currentProject} updates during the ${phaseStatus} phase.`;
              
              svgOverlay.querySelectorAll('.map-building').forEach(p => p.classList.remove('selected'));
              poly.classList.add('selected');
          });
          
          svgOverlay.appendChild(poly);
      });
  }

  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentProject = tab.dataset.project;
          
          // update details panel if a building is selected
          const activeBuildingPoly = document.querySelector('.map-building.selected');
          if (activeBuildingPoly) {
             const bId = activeBuildingPoly.getAttribute('data-id');
             const b = buildingsData.find(x => x.id === bId);
             if (b) {
                  const phaseStatus = projectAssignments[b.id][currentProject];
                  detailProjectTitle.textContent = capitalize(currentProject);
                  detailStatusBadge.textContent = capitalize(phaseStatus);
                  detailStatusBadge.className = `project-phase-badge ${phaseStatus}`;
                  detailsCard.className = `active-project-card ${phaseStatus}`;
                  detailPhase.textContent = `Phase Status: ${capitalize(phaseStatus)}`;
                  detailDesc.textContent = `This building is scheduled for ${currentProject} updates during the ${phaseStatus} phase.`;
             }
          }
          
          renderMapOverlays();
          
          // Re-apply selection to the same building after re-rendering
          if (activeBuildingPoly) {
              const bId = activeBuildingPoly.getAttribute('data-id');
              svgOverlay.querySelectorAll(`.map-building[data-id="${bId}"]`).forEach(p => p.classList.add('selected'));
          }
      });
  });

  const toggleBtn = document.getElementById('toggleMapper');
  const mapperPanel = document.getElementById('mapperPanel');
  if (toggleBtn && mapperPanel) {
      toggleBtn.addEventListener('click', () => {
          const isHidden = mapperPanel.getAttribute('aria-hidden') === 'true';
          mapperPanel.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
      });
  }

  renderMapOverlays();
});
