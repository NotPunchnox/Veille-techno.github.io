import articles from "../../articles/articles.js";

const contentElement = document.querySelector('.article-list');
const categories = {DEV: 'Développement', ROBOTIC: 'Robotique', AI: 'Intelligence Artificielle', CYBER: 'Cyber-sécurité'};

function getArticles(category) {
    return articles[category].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function displayArticlesByCategory(categoryKey) {
    // Nettoyer le contenu précédent
    contentElement.innerHTML = '';

    // Créer un en-tête pour la catégorie
    const categoryHeader = document.createElement('h1');
    categoryHeader.textContent = categories[categoryKey];
    categoryHeader.classList.add('main-title');
    contentElement.appendChild(categoryHeader);

    console.log(categoryKey)

    // Récupérer les articles de la catégorie
    const categoryArticles = getArticles(categoryKey);

    // Créer une grille pour les articles
    const articleGrid = document.createElement('div');
    articleGrid.classList.add('article-grid');

    // Afficher chaque article
    categoryArticles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');

        const link = document.createElement('a');
        link.textContent = article.title;
        link.classList.add('article-link');
        link.href = '#';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            displayFullArticle(article);
        });

        const articleInfo = document.createElement('div');
        articleInfo.classList.add('article-info');

        const dateElement = document.createElement('span');
        dateElement.textContent = article.date;
        dateElement.classList.add('article-date');

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = article.description;
        descriptionElement.classList.add('article-description');

        articleInfo.appendChild(dateElement);
        articleInfo.appendChild(descriptionElement);

        articleCard.appendChild(link);
        articleCard.appendChild(articleInfo);

        articleGrid.appendChild(articleCard);
    });

    contentElement.appendChild(articleGrid);
}

function displayFullArticle(article) {
    // Nettoyer le contenu
    contentElement.innerHTML = '';

    // Conteneur principal de l'article
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('full-article');

    // Titre principal
    const title = document.createElement('h1');
    title.textContent = article.title;
    title.classList.add('article-main-title');

    // En-tête avec date et description
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('article-header');

    const dateElement = document.createElement('div');
    dateElement.classList.add('article-header-date');
    dateElement.textContent = article.date;

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('article-header-description');
    descriptionElement.textContent = article.description;

    headerContainer.appendChild(dateElement);
    headerContainer.appendChild(descriptionElement);

    // Contenu de l'article
    const articleContent = document.createElement('div');
    articleContent.classList.add('article-body');
    articleContent.innerHTML = article.content.join('');

    // Section Illustrations
    const illustrationsSection = document.createElement('div');
    illustrationsSection.classList.add('article-illustrations');

    const illustrationsTitle = document.createElement('h2');
    illustrationsTitle.textContent = 'Illustrations';
    illustrationsSection.appendChild(illustrationsTitle);

    article.images.forEach(image => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.caption;
        imgElement.classList.add('article-image');

        const captionElement = document.createElement('em');
        captionElement.textContent = image.caption;

        imageWrapper.appendChild(imgElement);
        imageWrapper.appendChild(captionElement);
        illustrationsSection.appendChild(imageWrapper);
    });

    // Section Sources
    const sourcesSection = document.createElement('div');
    sourcesSection.classList.add('article-sources');

    const sourcesTitle = document.createElement('h2');
    sourcesTitle.textContent = 'Sources';
    sourcesSection.appendChild(sourcesTitle);

    article.sources.forEach(source => {
        const sourceLink = document.createElement('a');
        sourceLink.href = source.url;
        sourceLink.textContent = source.title;
        sourceLink.classList.add('source-link');
        sourceLink.target = '_blank';
        sourceLink.rel = 'noopener noreferrer';

        sourcesSection.appendChild(sourceLink);
    });

    // Assembler l'article complet
    articleContainer.appendChild(title);
    articleContainer.appendChild(headerContainer);
    articleContainer.appendChild(articleContent);
    articleContainer.appendChild(illustrationsSection);
    articleContainer.appendChild(sourcesSection);

    contentElement.appendChild(articleContainer);

    // Remonter en haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Ajouter les gestionnaires d'événements pour la sidebar
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(link.tagName, link.id)
            
            // Trouver la clé de catégorie correspondante
            const categoryKey = Object.keys(categories).find(key => 
                key == link.id
            );

            console.log(categoryKey)
            
            if (categoryKey) {
                // Appeler la fonction pour afficher les articles de la catégorie
                displayArticlesByCategory(categoryKey);
                
                // Fermer la sidebar sur mobile
                const sidebar = document.querySelector('.sidebar');
                const toggleButton = document.getElementById('toggleButton');
                
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('collapsed');
                }
            }
        });
    });
});
