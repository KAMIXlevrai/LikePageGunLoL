// Sélection des éléments
const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");

    // Afficher la boîte modale
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    };

    // Fermer la boîte modale
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Fermer la boîte en cliquant à l'extérieur
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };