let locationData = {};

// Načtení dat (proběhne jen pokud jsme na stránce, která má mapu a data potřebuje)
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        locationData = data;
    })
    .catch(error => console.error('Chyba při načítání dat lokací:', error));

// Přepínání sekcí na stránce ročníku
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Otevření detailu z mapy
function openModal(locationId) {
    const data = locationData[locationId];
    
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-desc').innerText = data.desc;
        
        // Nastavení URL pro tlačítko "Přečíst příběh frakce"
        const linkBtn = document.getElementById('modal-link');
        linkBtn.href = data.factionLink;

        document.getElementById('location-modal').style.display = 'block';
    }
}

// Zavření detailu
function closeModal() {
    document.getElementById('location-modal').style.display = 'none';
}