// Camelot Condominiums Progress Tracker - Javascript Logic
document.addEventListener('DOMContentLoaded', () => {

  const buildingsData = [{
    "id": "b1",
    "name": "Building 1",
    "street": "Dover Lane",
    "units": "2500 - 2505",
    "startUnit": 2500,
    "endUnit": 2505,
    "coords": "182,367 131,353 160,247 211,261"
  },
{
    "id": "b2",
    "name": "Building 2",
    "street": "Dover Lane",
    "units": "2506 - 2511",
    "startUnit": 2506,
    "endUnit": 2511,
    "coords": "117,326 66,312 96,204 147,219"
  },
{
    "id": "b3",
    "name": "Building 3",
    "street": "Dover Lane",
    "units": "2512 - 2520",
    "startUnit": 2512,
    "endUnit": 2520,
    "coords": "137,185 79,185 79,47 137,47"
  },
{
    "id": "b4",
    "name": "Building 4",
    "street": "Dover Lane",
    "units": "2541 - 2545",
    "startUnit": 2541,
    "endUnit": 2545,
    "coords": "186,139 174,42 226,36 238,133"
  },
{
    "id": "b5",
    "name": "Building 5",
    "street": "Dover Lane",
    "units": "2531 - 2536",
    "startUnit": 2531,
    "endUnit": 2536,
    "coords": "267,197 147,197 147,150 267,150"
  },
{
    "id": "b6",
    "name": "Building 6",
    "street": "Essex Court",
    "units": "2530 - 2535",
    "startUnit": 2530,
    "endUnit": 2535,
    "coords": "302,158 289,49 337,44 349,152"
  },
{
    "id": "b7",
    "name": "Building 7",
    "street": "Essex Court",
    "units": "2540 - 2543",
    "startUnit": 2540,
    "endUnit": 2543,
    "coords": "361,205 273,205 273,161 361,161"
  },
{
    "id": "b8",
    "name": "Building 8",
    "street": "Essex Court",
    "units": "2550 - 2553",
    "startUnit": 2550,
    "endUnit": 2553,
    "coords": "444,195 366,195 366,151 444,151"
  },
{
    "id": "b9",
    "name": "Building 9",
    "street": "Essex Court",
    "units": "2500 - 2503",
    "startUnit": 2500,
    "endUnit": 2503,
    "coords": "499,267 450,266 453,182 501,183"
  },
{
    "id": "b10",
    "name": "Building 10",
    "street": "Essex Court",
    "units": "2510 - 2515",
    "startUnit": 2510,
    "endUnit": 2515,
    "coords": "455,168 445,61 491,56 501,163"
  },
{
    "id": "b11",
    "name": "Building 11",
    "street": "Essex Court",
    "units": "2520 - 2524",
    "startUnit": 2520,
    "endUnit": 2524,
    "coords": "444,116 358,116 358,63 444,63"
  },
{
    "id": "b12",
    "name": "Building 12",
    "street": "Bristol Terrace",
    "units": "2550 - 2554",
    "startUnit": 2550,
    "endUnit": 2554,
    "coords": "556,595 510,572 560,478 607,501"
  },
{
    "id": "b13",
    "name": "Building 13",
    "street": "Bristol Terrace",
    "units": "2540 - 2543",
    "startUnit": 2540,
    "endUnit": 2543,
    "coords": "674,487 581,487 581,439 674,439"
  },
{
    "id": "b14",
    "name": "Building 14",
    "street": "Bristol Terrace",
    "units": "2500 - 2504",
    "startUnit": 2500,
    "endUnit": 2504,
    "coords": "670,405 583,405 583,351 670,351"
  },
{
    "id": "b15",
    "name": "Building 15",
    "street": "Bristol Terrace",
    "units": "2510 - 2514",
    "startUnit": 2510,
    "endUnit": 2514,
    "coords": "729,430 670,430 670,333 729,333"
  },
{
    "id": "b16",
    "name": "Building 16",
    "street": "Bristol Terrace",
    "units": "2520 - 2523",
    "startUnit": 2520,
    "endUnit": 2523,
    "coords": "668,589 631,509 686,482 726,562"
  },
{
    "id": "b17",
    "name": "Building 17",
    "street": "Bristol Terrace",
    "units": "2530 - 2533",
    "startUnit": 2530,
    "endUnit": 2533,
    "coords": "675,676 677,592 730,593 727,676"
  },
{
    "id": "b18",
    "name": "Building 18",
    "street": "Bristol Terrace",
    "units": "2560 - 2563",
    "startUnit": 2560,
    "endUnit": 2563,
    "coords": "688,621 632,600 592,671 647,691"
  },
{
    "id": "b19",
    "name": "Building 19",
    "street": "Bristol Terrace",
    "units": "2570 - 2574",
    "startUnit": 2570,
    "endUnit": 2574,
    "coords": "648,702 588,678 541,757 603,781"
  },
{
    "id": "b20",
    "name": "Building 20",
    "street": "Stratford Drive",
    "units": "2595 - 2597",
    "startUnit": 2595,
    "endUnit": 2597,
    "coords": "461,649 409,646 414,567 466,570"
  },
{
    "id": "b21",
    "name": "Building 21",
    "street": "Stratford Drive",
    "units": "2590 - 2594",
    "startUnit": 2590,
    "endUnit": 2594,
    "coords": "465,735 412,735 412,661 465,661"
  },
{
    "id": "b22",
    "name": "Building 22",
    "street": "Stratford Drive",
    "units": "2580 - 2584",
    "startUnit": 2580,
    "endUnit": 2584,
    "coords": "470,792 374,792 374,740 470,740"
  },
{
    "id": "b23",
    "name": "Building 23",
    "street": "Stratford Drive",
    "units": "2570 - 2574",
    "startUnit": 2570,
    "endUnit": 2574,
    "coords": "372,799 316,799 316,702 372,702"
  },
{
    "id": "b24",
    "name": "Building 24",
    "street": "Stratford Drive",
    "units": "2560 - 2563",
    "startUnit": 2560,
    "endUnit": 2563,
    "coords": "388,687 344,687 344,609 388,609"
  },
{
    "id": "b25",
    "name": "Building 25",
    "street": "Stratford Drive",
    "units": "2510 - 2514",
    "startUnit": 2510,
    "endUnit": 2514,
    "coords": "318,613 245,548 281,507 354,572"
  },
{
    "id": "b26",
    "name": "Building 26",
    "street": "Stratford Drive",
    "units": "2530 - 2533",
    "startUnit": 2530,
    "endUnit": 2533,
    "coords": "225,721 176,720 180,642 229,644"
  },
{
    "id": "b30",
    "name": "Building 30",
    "street": "Stratford Drive",
    "units": "2520 - 2523",
    "startUnit": 2520,
    "endUnit": 2523,
    "coords": "177,628 100,625 101,578 178,580"
  },
{
    "id": "b31",
    "name": "Building 31",
    "street": "Stratford Drive",
    "units": "2500 - 2504",
    "startUnit": 2500,
    "endUnit": 2504,
    "coords": "183,489 91,489 91,433 183,433"
  }];

  const garagesData = [
    {
      "id": "g1",
      "name": "Garage 1",
      "street": "Essex Court",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "469,51 399,51 399,28 469,28"
    },
    {
      "id": "g2",
      "name": "Garage 2",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "178,52 140,52 140,32 178,32"
    },
    {
      "id": "g3",
      "name": "Garage 3",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "90,142 71,142 71,105 90,105"
    },
    {
      "id": "g4",
      "name": "Garage 4",
      "street": "Essex Court",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "533,146 512,146 512,72 533,72"
    },
    {
      "id": "g5",
      "name": "Garage 5",
      "street": "Essex Court",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "317,283 311,256 394,238 400,265"
    },
    {
      "id": "g6",
      "name": "Garage 6",
      "street": "Essex Court",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "533,222 512,222 512,181 533,181"
    },
    {
      "id": "g7",
      "name": "Garage 7",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "263,232 208,232 208,203 263,203"
    },
    {
      "id": "g8",
      "name": "Garage 8",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "238,306 218,306 218,270 238,270"
    },
    {
      "id": "g9",
      "name": "Garage 9",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "145,522 93,522 93,504 145,504"
    },
    {
      "id": "g10",
      "name": "Garage 10",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "143,577 92,577 92,560 143,560"
    },
    {
      "id": "g11",
      "name": "Garage 11",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "237,312 213,312 213,260 237,260"
    },
    {
      "id": "g12",
      "name": "Garage 12",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "279,616 236,581 251,563 293,598"
    },
    {
      "id": "g13",
      "name": "Garage 13",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "263,709 240,709 240,657 263,657"
    },
    {
      "id": "g14",
      "name": "Garage 14",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "587,600 568,593 590,539 609,546"
    },
    {
      "id": "g15",
      "name": "Garage 15",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "768,608 749,608 749,545 768,545"
    },
    {
      "id": "g16",
      "name": "Garage 16",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "763,683 732,683 732,667 763,667"
    },
    {
      "id": "g17",
      "name": "Garage 17",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "582,444 557,444 557,398 582,398"
    },
    {
      "id": "g18",
      "name": "Garage 18",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "562,689 542,689 542,643 562,643"
    },
    {
      "id": "g19",
      "name": "Garage 19",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "678,352 614,352 614,326 678,326"
    },
    {
      "id": "g20",
      "name": "Garage 20",
      "street": "Bristol Terrace",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "747,418 724,418 724,362 747,362"
    },
    {
      "id": "g21",
      "name": "Garage 21",
      "street": "Stratford Drive",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "502,651 472,651 472,606 502,606"
    },
    {
      "id": "g22",
      "name": "Garage 22",
      "street": "Stratford Drive",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "502,734 472,734 472,685 502,685"
    },
    {
      "id": "g23",
      "name": "Garage 23",
      "street": "Stratford Drive",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "309,794 288,794 288,746 309,746"
    },
    {
      "id": "g24",
      "name": "Garage 24",
      "street": "Stratford Drive",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "539,817 517,805 546,752 568,765"
    },
    {
      "id": "g25",
      "name": "Garage 25",
      "street": "Stratford Drive",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "443,818 390,818 390,793 443,793"
    },
    {
      "id": "g26",
      "name": "Garage 26",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "254,87 234,87 234,40 254,40"
    },
    {
      "id": "g27",
      "name": "Garage 27",
      "street": "Essex Court",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "277,92 276,41 296,40 297,91"
    },
    {
      "id": "g28",
      "name": "Garage 28",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "91,211 62,211 62,273 91,273"
    },
    {
      "id": "g29",
      "name": "Garage 29",
      "street": "Dover Lane",
      "units": "Garages",
      "startUnit": 0,
      "endUnit": 0,
      "coords": "325,666 307,666 307,628 325,628"
    }
  ];

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
  let activePhaseFilter = null;

  const projectAssignments = {};
  const phases = ['completed', 'now', 'next', 'later'];
  
  // Assign schedules to regular buildings
  buildingsData.forEach((b, idx) => {
      projectAssignments[b.id] = { 
          fences: phases[idx % 4], 
          landscaping: phases[(idx+1) % 4], 
          siding: phases[(idx+2) % 4], 
          chimneys: idx < 4 ? 'completed' : (idx < 7 ? 'now' : (idx < 13 ? 'next' : 'later')),
          roofs: phases[(idx+3) % 4],
          garageroofs: 'later' // default placeholder (not rendered)
      };
  });

  // Assign schedules to garage blocks
  garagesData.forEach((g, idx) => {
      projectAssignments[g.id] = {
          fences: 'later',
          landscaping: 'later',
          siding: 'later',
          chimneys: 'later',
          roofs: 'later',
          garageroofs: phases[idx % 4]
      };
  });

  function capitalize(str) {
      if(!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function renderMapOverlays() {
      if(!svgOverlay) return;
      svgOverlay.innerHTML = '';

      // Determine active dataset based on selection
      const activeDataset = (currentProject === 'garageroofs') ? garagesData : buildingsData;

      if (currentProject !== 'garageroofs') {
          // Create a mask to hide the overlapping portion of Building 18 under Building 17
          const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
          const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
          mask.setAttribute('id', 'b18-mask');

          const whiteRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          whiteRect.setAttribute('x', '0');
          whiteRect.setAttribute('y', '0');
          whiteRect.setAttribute('width', '789');
          whiteRect.setAttribute('height', '1024');
          whiteRect.setAttribute('fill', 'white');
          mask.appendChild(whiteRect);

          const b17 = buildingsData.find(x => x.id === 'b17');
          if (b17) {
              const blackPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
              blackPoly.setAttribute('points', b17.coords);
              blackPoly.setAttribute('fill', 'black');
              mask.appendChild(blackPoly);
          }

          defs.appendChild(mask);
          svgOverlay.appendChild(defs);
      }

      activeDataset.forEach(b => {
          const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
          poly.setAttribute('points', b.coords);
          poly.setAttribute('class', `map-building ${projectAssignments[b.id][currentProject]}`);
          poly.setAttribute('data-id', b.id);
          poly.setAttribute('data-unit', b.units);
          
          if (b.id === 'b18' && currentProject !== 'garageroofs') {
              poly.setAttribute('mask', 'url(#b18-mask)');
          }
          
          poly.addEventListener('mouseover', (e) => {
              tooltip.classList.add('visible');
              const unitLabel = b.units === 'Garages' ? 'Garage Block' : `Units ${b.units}`;
              tooltip.innerHTML = `
                <div class="tooltip-title">${b.name}</div>
                <div class="tooltip-street">${b.street} | ${unitLabel}</div>
                <div class="tooltip-phase">Phase: ${capitalize(projectAssignments[b.id][currentProject])}</div>
              `;
          });
          
          poly.addEventListener('mousemove', (e) => {
              tooltip.style.left = e.clientX + 10 + 'px';
              tooltip.style.top = e.clientY + 10 + 'px';
          });
          
          poly.addEventListener('mouseout', () => {
              tooltip.classList.remove('visible');
          });
          
          poly.addEventListener('click', () => {
              emptyDetails.style.display = 'none';
              detailsCard.style.display = 'block';
 
              detailBldgName.textContent = b.name;
              detailRoadBadge.textContent = b.street;
              detailUnits.textContent = b.units === 'Garages' ? 'Garage Block' : `Units ${b.units}`;
              
              const phaseStatus = projectAssignments[b.id][currentProject];
              detailProjectTitle.textContent = capitalize(currentProject === 'garageroofs' ? 'Garage Roofs' : currentProject);
              detailStatusBadge.textContent = capitalize(phaseStatus);
              detailStatusBadge.className = `project-phase-badge ${phaseStatus}`;
              detailsCard.className = `active-project-card ${phaseStatus}`;
              
              detailPhase.textContent = `Phase Status: ${capitalize(phaseStatus)}`;
              detailDesc.textContent = b.units === 'Garages' 
                  ? `This garage block is scheduled for roof updates during the ${phaseStatus} phase.`
                  : `This building is scheduled for ${currentProject} updates during the ${phaseStatus} phase.`;
              
              svgOverlay.querySelectorAll('.map-building').forEach(p => p.classList.remove('selected'));
              poly.classList.add('selected');
          });
          
          svgOverlay.appendChild(poly);
      });
      applyFilter();
  }
 
  function applyFilter() {
      const polygons = svgOverlay.querySelectorAll('.map-building');
      polygons.forEach(poly => {
          const bId = poly.getAttribute('data-id');
          const phase = projectAssignments[bId][currentProject];
          if (activePhaseFilter) {
              if (phase === activePhaseFilter) {
                  poly.classList.add('focused');
                  poly.classList.remove('dimmed');
              } else {
                  poly.classList.add('dimmed');
                  poly.classList.remove('focused');
              }
          } else {
              poly.classList.remove('focused');
              poly.classList.remove('dimmed');
          }
      });
  }
 
  function updateStats() {
      const counts = { completed: 0, now: 0, next: 0, later: 0 };
      const activeDataset = (currentProject === 'garageroofs') ? garagesData : buildingsData;
      
      activeDataset.forEach(b => {
          const phase = projectAssignments[b.id][currentProject];
          if (counts[phase] !== undefined) {
              counts[phase]++;
          }
      });
      
      const total = activeDataset.length;
      
      for (const phase in counts) {
          const count = counts[phase];
          const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
          
          const countElem = document.getElementById(`count-${phase}`);
          if (countElem) {
              countElem.textContent = `${count} (${percentage}%)`;
          }
          
          const barElem = document.getElementById(`bar-${phase}`);
          if (barElem) {
              barElem.style.width = `${percentage}%`;
          }
      }
  }
 
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentProject = tab.dataset.project;
          
          // update details panel if a building/garage is selected
          const activeBuildingPoly = document.querySelector('.map-building.selected');
          if (activeBuildingPoly) {
             const bId = activeBuildingPoly.getAttribute('data-id');
             const activeDataset = (currentProject === 'garageroofs') ? garagesData : buildingsData;
             const b = activeDataset.find(x => x.id === bId);
             if (b) {
                  const phaseStatus = projectAssignments[b.id][currentProject];
                  detailProjectTitle.textContent = capitalize(currentProject === 'garageroofs' ? 'Garage Roofs' : currentProject);
                  detailStatusBadge.textContent = capitalize(phaseStatus);
                  detailStatusBadge.className = `project-phase-badge ${phaseStatus}`;
                  detailsCard.className = `active-project-card ${phaseStatus}`;
                  detailPhase.textContent = `Phase Status: ${capitalize(phaseStatus)}`;
                  detailDesc.textContent = b.units === 'Garages' 
                      ? `This garage block is scheduled for roof updates during the ${phaseStatus} phase.`
                      : `This building is scheduled for ${currentProject} updates during the ${phaseStatus} phase.`;
             } else {
                  // If the selected element doesn't exist in the active dataset, reset details card
                  emptyDetails.style.display = 'block';
                  detailsCard.style.display = 'none';
             }
          }
          
          renderMapOverlays();
          updateStats();
          
          // Re-apply selection to the same building after re-rendering
          if (activeBuildingPoly) {
              const bId = activeBuildingPoly.getAttribute('data-id');
              svgOverlay.querySelectorAll(`.map-building[data-id="${bId}"]`).forEach(p => p.classList.add('selected'));
          }
      });
  });

  const legendItems = document.querySelectorAll('.legend-item');
  legendItems.forEach(item => {
      item.addEventListener('click', () => {
          const phase = item.dataset.phase;
          if (activePhaseFilter === phase) {
              activePhaseFilter = null;
              item.classList.remove('highlighted');
          } else {
              legendItems.forEach(li => li.classList.remove('highlighted'));
              activePhaseFilter = phase;
              item.classList.add('highlighted');
          }
          applyFilter();
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
  updateStats();
});
