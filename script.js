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

// PŘEPÍNÁNÍ KOUZEL/LEKTVARŮ V KNIHOVNĚ
function showSpell(spellId, btnElement) {
    // 1. Skryje všechna kouzla v pravém sloupci
    const spells = document.querySelectorAll('.spell-detail');
    spells.forEach(spell => spell.classList.remove('active-spell'));
    
    // 2. Zobrazí kliknuté kouzlo
    document.getElementById(spellId).classList.add('active-spell');

    // 3. Odstraní červenou barvu (třídu active-btn) ze všech tlačítek v menu
    const buttons = document.querySelectorAll('.kniha-btn');
    buttons.forEach(btn => btn.classList.remove('active-btn'));

    // 4. Přidá červenou barvu na to tlačítko, na které se právě kliklo
    btnElement.classList.add('active-btn');
}