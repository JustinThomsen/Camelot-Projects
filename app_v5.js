
// Camelot Condominiums Progress Tracker - Javascript Logic
document.addEventListener('DOMContentLoaded', () => {

  const buildingsData = [
  {
    "id": "b1",
    "name": "Building 1",
    "street": "Dover Lane",
    "units": "2500 - 2505",
    "startUnit": 2500,
    "endUnit": 2505,
    "coords": "135,314 165,314 165,408 135,408"
  },
  {
    "id": "b2",
    "name": "Building 2",
    "street": "Dover Lane",
    "units": "2506 - 2511",
    "startUnit": 2506,
    "endUnit": 2511,
    "coords": "68,265 98,265 98,368 68,368"
  },
  {
    "id": "b3",
    "name": "Building 3",
    "street": "Dover Lane",
    "units": "2512 - 2520",
    "startUnit": 2512,
    "endUnit": 2520,
    "coords": "68,110 98,110 98,236 68,236"
  },
  {
    "id": "b4",
    "name": "Building 4",
    "street": "Dover Lane",
    "units": "2541 - 2545",
    "startUnit": 2541,
    "endUnit": 2545,
    "coords": "195,100 225,100 225,188 195,188"
  },
  {
    "id": "b5",
    "name": "Building 5",
    "street": "Dover Lane",
    "units": "2531 - 2536",
    "startUnit": 2531,
    "endUnit": 2536,
    "coords": "178,158 308,158 308,188 178,188"
  },
  {
    "id": "b6",
    "name": "Building 6",
    "street": "Essex Court",
    "units": "2530 - 2535",
    "startUnit": 2530,
    "endUnit": 2535,
    "coords": "335,100 365,100 365,208 335,208"
  },
  {
    "id": "b7",
    "name": "Building 7",
    "street": "Essex Court",
    "units": "2540 - 2543",
    "startUnit": 2540,
    "endUnit": 2543,
    "coords": "305,256 305,226 395,226 395,256"
  },
  {
    "id": "b8",
    "name": "Building 8",
    "street": "Essex Court",
    "units": "2550 - 2553",
    "startUnit": 2550,
    "endUnit": 2553,
    "coords": "421,240 421,210 511,210 511,240"
  },
  {
    "id": "b9",
    "name": "Building 9",
    "street": "Essex Court",
    "units": "2500 - 2503",
    "startUnit": 2500,
    "endUnit": 2503,
    "coords": "561,335 531,335 531,275 561,275"
  },
  {
    "id": "b10",
    "name": "Building 10",
    "street": "Essex Court",
    "units": "2510 - 2515",
    "startUnit": 2510,
    "endUnit": 2515,
    "coords": "561,255 531,255 531,160 561,160"
  },
  {
    "id": "b11",
    "name": "Building 11",
    "street": "Essex Court",
    "units": "2520 - 2524",
    "startUnit": 2520,
    "endUnit": 2524,
    "coords": "401,150 401,120 501,120 501,150"
  },
  {
    "id": "b12",
    "name": "Building 12",
    "street": "Bristol Terrace",
    "units": "2550 - 2554",
    "startUnit": 2550,
    "endUnit": 2554,
    "coords": "655,545 655,515 755,515 755,545"
  },
  {
    "id": "b13",
    "name": "Building 13",
    "street": "Bristol Terrace",
    "units": "2540 - 2543",
    "startUnit": 2540,
    "endUnit": 2543,
    "coords": "715,485 715,455 795,455 795,485"
  },
  {
    "id": "b14",
    "name": "Building 14",
    "street": "Bristol Terrace",
    "units": "2500 - 2504",
    "startUnit": 2500,
    "endUnit": 2504,
    "coords": "680,385 680,355 780,355 780,385"
  },
  {
    "id": "b15",
    "name": "Building 15",
    "street": "Bristol Terrace",
    "units": "2510 - 2514",
    "startUnit": 2510,
    "endUnit": 2514,
    "coords": "750,290 750,260 850,260 850,290"
  },
  {
    "id": "b16",
    "name": "Building 16",
    "street": "Bristol Terrace",
    "units": "2520 - 2523",
    "startUnit": 2520,
    "endUnit": 2523,
    "coords": "775,170 775,140 855,140 855,170"
  },
  {
    "id": "b17",
    "name": "Building 17",
    "street": "Bristol Terrace",
    "units": "2530 - 2533",
    "startUnit": 2530,
    "endUnit": 2533,
    "coords": "840,110 810,110 810,190 840,190"
  },
  {
    "id": "b18",
    "name": "Building 18",
    "street": "Bristol Terrace",
    "units": "2560 - 2563",
    "startUnit": 2560,
    "endUnit": 2563,
    "coords": "660,670 630,670 630,600 660,600"
  },
  {
    "id": "b19",
    "name": "Building 19",
    "street": "Bristol Terrace",
    "units": "2570 - 2574",
    "startUnit": 2570,
    "endUnit": 2574,
    "coords": "560,740 560,680 610,680 610,740"
  },
  {
    "id": "b20",
    "name": "Building 20",
    "street": "Stratford Drive",
    "units": "2595 - 2597",
    "startUnit": 2595,
    "endUnit": 2597,
    "coords": "465,580 435,580 435,540 465,540"
  },
  {
    "id": "b21",
    "name": "Building 21",
    "street": "Stratford Drive",
    "units": "2590 - 2594",
    "startUnit": 2590,
    "endUnit": 2594,
    "coords": "395,680 365,680 365,600 395,600"
  },
  {
    "id": "b22",
    "name": "Building 22",
    "street": "Stratford Drive",
    "units": "2580 - 2584",
    "startUnit": 2580,
    "endUnit": 2584,
    "coords": "305,735 275,735 275,655 305,655"
  },
  {
    "id": "b23",
    "name": "Building 23",
    "street": "Stratford Drive",
    "units": "2570 - 2574",
    "startUnit": 2570,
    "endUnit": 2574,
    "coords": "210,800 180,800 180,720 210,720"
  },
  {
    "id": "b24",
    "name": "Building 24",
    "street": "Stratford Drive",
    "units": "2560 - 2563",
    "startUnit": 2560,
    "endUnit": 2563,
    "coords": "110,845 80,845 80,785 110,785"
  },
  {
    "id": "b25",
    "name": "Building 25",
    "street": "Stratford Drive",
    "units": "2510 - 2514",
    "startUnit": 2510,
    "endUnit": 2514,
    "coords": "190,480 230,450 260,490 220,520"
  },
  {
    "id": "b26",
    "name": "Building 26",
    "street": "Stratford Drive",
    "units": "2530 - 2533",
    "startUnit": 2530,
    "endUnit": 2533,
    "coords": "115,550 85,550 85,490 115,490"
  },
  {
    "id": "b30",
    "name": "Building 30",
    "street": "Stratford Drive",
    "units": "2520 - 2523",
    "startUnit": 2520,
    "endUnit": 2523,
    "coords": "280,360 250,360 250,300 280,300"
  },
  {
    "id": "b31",
    "name": "Building 31",
    "street": "Stratford Drive",
    "units": "2500 - 2504",
    "startUnit": 2500,
    "endUnit": 2504,
    "coords": "370,470 340,470 340,390 370,390"
  },
  {
    "id": "mf",
    "name": "Maintenance Facility",
    "street": "Stratford Drive",
    "units": "MF",
    "startUnit": 0,
    "endUnit": 0,
    "coords": "695,805 655,765 675,745 715,785"
  }
];

  const svgOverlay = document.getElementById('svgOverlay');
  const tooltip = document.getElementById('mapTooltip');
  const detailsPanel = document.getElementById('detailsPanel');
  let currentProject = 'fences';

  // Hardcoded project assignments for simplicity
  const projectAssignments = {};
  buildingsData.forEach(b => {
      projectAssignments[b.id] = { fences: 'completed', landscaping: 'now', siding: 'next', roofs: 'later' };
  });

  function getUnitCoords(coordsStr, totalUnits, index) {
      if (!coordsStr) return "";
      const pts = coordsStr.split(' ').map(p => p.split(',').map(Number));
      if (pts.length !== 4) return coordsStr;
      
      const [p0, p1, p2, p3] = pts;
      function interp(A, B, t) {
          return [Math.round(A[0] + t*(B[0]-A[0])), Math.round(A[1] + t*(B[1]-A[1]))];
      }
      const t0 = index/totalUnits;
      const t1 = (index+1)/totalUnits;
      
      const pt0 = interp(p0, p3, t0);
      const pt1 = interp(p1, p2, t0);
      const pt2 = interp(p1, p2, t1);
      const pt3 = interp(p0, p3, t1);
      return `${pt0[0]},${pt0[1]} ${pt1[0]},${pt1[1]} ${pt2[0]},${pt2[1]} ${pt3[0]},${pt3[1]}`;
  }

  function renderMapOverlays() {
      if(!svgOverlay) return;
      svgOverlay.innerHTML = '';
      buildingsData.forEach(b => {
          const totalUnits = Math.max(1, Math.abs(b.endUnit - b.startUnit) + 1);
          const isDesc = b.endUnit < b.startUnit;
          for (let i = 0; i < totalUnits; i++) {
              const uNum = b.startUnit + (isDesc ? -i : i);
              const uCoords = getUnitCoords(b.coords, totalUnits, i);
              const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
              poly.setAttribute('points', uCoords);
              poly.setAttribute('class', `map-building ${projectAssignments[b.id][currentProject]}`);
              poly.setAttribute('data-id', b.id);
              poly.setAttribute('data-unit', uNum);
              svgOverlay.appendChild(poly);
          }
      });
  }

const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close mobile menu when links are clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      });
    });
  }

  // 2. Cursor-Tracking Spotlight Effect for Cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // 3. Dynamic Tag Filtering
  const tags = d
      const filterText = tag.textContent.trim();
      
      // Toggle active styling or filter cards
      let tagActive = tag.classList.toggle('active-filter');
      
      if (tagActive) {
        tag.style.borderColor = 'var(--accent-gold)';
        tag.style.color = 'var(--accent-gold)';
        tag.style.backgroundColor = 'rgba(234, 179, 8, 0.05)';
        
        // Filter cards containing this tag
        filterCards(filterText);
      } else {
        tag.style.borderColor = 'var(--border-color)';
        tag.style.color = 'var(--text-secondary)';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        
        // Reset filter
        resetFilters();
      }
    });
  });

  function filterCards(filterText) {
    cards.forEach(card => {
      const cardTags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.trim());
      if (cardTags.includes(filterText)) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.pointerEvents = 'all';
      } else {
        card.style.opacity = '0.2';
        card.style.transform = 'scale(0.98)';
        card.style.pointerEvents = 'none';
      }
    });
  }

  function resetFilters() {
    cards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'none';
      card.style.pointerEvents = 'all';
    });
    // Remove active styles from other tags
    tags.forEach(t => {
      t.classList.remove('active-filter');
      t.style.borderColor = 'var(--border-color)';
      t.style.color = 'var(--text-secondary)';
      t.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    });
  }
});

  
  // Call initially
  renderMapOverlays();
});
