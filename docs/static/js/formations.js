function toggleExpand(button) {
    // Trouver la boîte parent correspondant au bouton cliqué
    let formationsBox = button.closest(".formations-box");
    let hiddenText = formationsBox.querySelector(".hidden-text");

    if (formationsBox.classList.contains("expanded")) {
        formationsBox.classList.remove("expanded");
        hiddenText.style.display = "none";
        button.innerText = "Voir plus d'informations";
    } else {
        formationsBox.classList.add("expanded");
        hiddenText.style.display = "block";
        button.innerText = "Voir moins d'informations";
    }
}

function showLevelContent(level, button) {
    const levelContent = {
        1: `<p class="section-title">Description<br></p>
            <p>Le niveau 1 permet d'apprendre et d'acquérir les bases du Reiki.<br>Cette première étape vous permet d'activer votre canal Reiki, d'apprendre l'histoire et les fondamentaux du Reiki mais aussi les 5 idéaux de Mikao Usui. 
            Savoir lâcher-prise, prendre du temps pour soi, la loi de l'attraction ou encore le Gassho font aussi partie du 1er degré. <br> <br></p>
            <p>Les bienfaits de cette première initiation sont nombreux, en voici quelques-uns :</p>
            <ul>
                <li>Connecter à l'Énergie Reiki à travers les 4 initiations pour ouvrir le canal énergétique</li>
                <li>Apprendre à utiliser cette énergie pour vous et pour les autres</li>
                <li>Favoriser votre bien-être</li>
                <li>Prendre soin de votre équilibre intérieur</li>
                <li>Vivre en harmonie avec vous-même<br><br></li>
            </ul>
            <p class="section-title">Tarifs<br></p>
            <p class="price-desc-formation">Individuel ou en groupe : 250 € - 1 ou 2 jours</p>`,
        2: `<p class="section-title">Description<br></p>
            <p>Le 2ème degré va vous permettre de perfectionner votre pratique et d'affiner vos perceptions. Vous allez recevoir les symboles sacrés du Reiki.<br><br>
            Parmi les bienfaits de cette deuxième initiation : 
            <ul>
                <li>Renforcer votre connexion et votre capacité à canaliser l'énergie Reiki</li>
                <li>Découvrir et explorer les quatre symboles essentiels du Reiki</li>
                <li>Utiliser le Reiki pour travailler sur votre passé</li>
                <li>Apprendre à envoyer l'énergie Reiki à distance</li>
                <li>Détecter et dissoudre les blocages énergétiques<br><br></li>
            </ul>
            <p class="section-title">Tarifs<br></p>
            <p class="price-desc-formation">Individuel ou en groupe : 350 € - 2 jours</p>`,
        3: `<p class="section-title">Description</p>
            <p>Le 3ème degré s'adresse à ceux qui veulent aller encore plus loin ; il agit profondément sur votre esprit et contribue à l'éveil spirituel.<br><br>
            Certains bienfaits incontestables : 
            <ul>
                <li>Apprendre à interagir avec des dimensions plus subtiles pour des transformations et des libérations plus profondes.</li>
                <li>Recevoir le symbole du Maître, un outil puissant d'évolution spirituelle et d'amplification énergétique.</li>
                <li>Explorer la puissance de nouveaux outils.</li>
                <li>Découvrir les TJR, Techniques Japonaises de Reiki.</li>
            </ul><br>
            <p class="section-title">Tarifs</p>
            <p class="price-desc-formation">Individuel ou en groupe : 450 € - 2 jours</p>
            `,
        4: `<p>Niveau 4 : Formation Maître Reiki - voir ci-dessous.`,
    };

    // Trouver le container de niveau le plus proche du bouton cliqué
    const formationsBox = button.closest(".formations-box");
    const levelContentElement = formationsBox.querySelector(".level-content");
    
    // Met à jour le texte affiché
    if (levelContentElement) {
        levelContentElement.innerHTML = levelContent[level];
    }

    // Retire la classe active de tous les boutons dans ce bloc et l'ajoute au bouton cliqué
    const buttons = formationsBox.querySelectorAll(".level-buttons button");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (level === 4) {
        setTimeout(() => {
            document.getElementById("maitre-reiki").scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300); // Petite attente pour un effet plus fluide
    }
}

// Ouvre le popup
function openPopup() {
    document.getElementById("contactPopup").style.display = "block";
}

// Ferme le popup
function closePopup() {
    document.getElementById("contactPopup").style.display = "none";
}