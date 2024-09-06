document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const bodyElement = document.querySelector('body');
    const cardsContainer = document.querySelector('.cards');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    function toggleCardExpansion(card) {
        if (card.classList.contains('expanded')) {
            // Collapse the clicked card
            card.classList.remove('expanded');
            bodyElement.classList.remove('blur-background');
            cardsContainer.classList.remove('blur');
            card.classList.remove('focus'); // Remove focus class
        } else {
            // Collapse any other expanded cards
            document.querySelectorAll('.card.expanded').forEach(expandedCard => {
                expandedCard.classList.remove('expanded');
                expandedCard.classList.remove('focus'); // Remove focus class
            });

            // Expand the clicked card and apply the blur effect
            card.classList.add('expanded');
            card.classList.add('focus'); // Add focus class
            bodyElement.classList.add('blur-background');
            cardsContainer.classList.add('blur');
        }
    }

    function updateSidebarActiveLink() {
        const currentPage = window.location.pathname.split('/').pop();
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function handleSidebarLinkClick(event) {
        const href = this.getAttribute('href');
        // Update active state for sidebar links
        updateSidebarActiveLink();

        // Redirect to the corresponding page
        window.location.href = href;
    }

    // Add event listeners to each card
    cards.forEach(card => {
        card.addEventListener('click', function () {
            toggleCardExpansion(card);
        });
    });

    // Add event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', handleSidebarLinkClick);
    });

    // Update sidebar active link on page load
    updateSidebarActiveLink();
});
