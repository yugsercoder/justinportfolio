const projects = [
    {
        id: 1,
        title: "GG Cycle! Ride in Real Life, Race in the Game",
        category: "ar",
        summary: "Senior Developer - Capstone Project (Mar 2025 - May 2026)",
        description: "Developed a mobile game featuring augmented reality and GPS integration. Built using Unity (C#), integrating Mapbox for real-time GPS tracking and PlayFab for backend services.",
        tags: ["Unity", "C#", "Mapbox", "PlayFab", "AR"]
    }
];

function renderProjects(items) {
    const container = document.getElementById('projects-container');
    container.innerHTML = items.map(p => `
        <div class="project-card" onclick="openModal(${p.id})">
            <div>
                <h3>${p.title}</h3>
                <p>${p.summary}</p>
            </div>
            <div class="tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function filterProjects(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${category}'`));
    });

    if (category === 'all') {
        renderProjects(projects);
    } else {
        renderProjects(projects.filter(p => p.category === category));
    }
}

function openModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalCategory').innerText = project.category.toUpperCase();
    document.getElementById('modalDescription').innerText = project.description;
    document.getElementById('modalTags').innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');
    
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Render the initial projects when the script loads
renderProjects(projects);