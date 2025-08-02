import articles from "../../articles/articles.js";


const link = "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/";
const contentElement = document.querySelector('.article-list');
const categories = {DEV: 'Développement', ROBOTIC: 'Robotique', AI: 'Intelligence Artificielle', CYBER: 'Cyber-sécurité'};

function getRecentArticles(category) {
    return articles[category]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
}

function displayArticlesByCategory() {
    contentElement.innerHTML = '<h1 class="main-title">Dernières actualités</h1>';

    Object.keys(categories).forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = categories[category];
        categoryHeader.classList.add('category-title');
        contentElement.appendChild(categoryHeader);

        const recentArticles = getRecentArticles(category);
        const categoryList = document.createElement('div');
        categoryList.classList.add('article-grid');

        recentArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');

            const link = document.createElement('a');
            link.textContent = article.title;
            link.classList.add('article-link');
            link.href = '#';

            const articleInfo = document.createElement('div');
            articleInfo.classList.add('article-info');

            const dateElement = document.createElement('span');
            dateElement.textContent = new Date(article.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
            dateElement.classList.add('article-date');

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = article.description;
            descriptionElement.classList.add('article-description');

            articleInfo.appendChild(dateElement);
            articleInfo.appendChild(descriptionElement);

            articleCard.appendChild(link);
            articleCard.appendChild(articleInfo);

            link.addEventListener('click', (e) => {
                e.preventDefault();
                displayArticle(article);
            });

            categoryList.appendChild(articleCard);
        });

        contentElement.appendChild(categoryList);
    });
}

function displayArticle(article) {
    contentElement.innerHTML = '';
    const articleContainer = document.createElement('div');
    articleContainer.classList.add('full-article');

    const title = document.createElement('h1');
    title.textContent = article.title;
    title.classList.add('article-main-title');

    // Date with angled line effect
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('article-header');

    const dateElement = document.createElement('div');
    dateElement.classList.add('article-header-date');
    dateElement.textContent = new Date(article.date).toLocaleDateString('fr-FR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('article-header-description');
    descriptionElement.textContent = article.description;

    headerContainer.appendChild(dateElement);
    headerContainer.appendChild(descriptionElement);

    const articleContent = document.createElement('div');
    articleContent.classList.add('article-body');
    articleContent.innerHTML = article.content.join('');

    // Illustrations section
    const illustrationsSection = document.createElement('div');
    illustrationsSection.classList.add('article-illustrations');

    const illustrationsTitle = document.createElement('h2');
    illustrationsTitle.textContent = 'Illustrations';
    illustrationsSection.appendChild(illustrationsTitle);

    article.images.forEach(image => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const imgElement = document.createElement('img');
        imgElement.src = link + image.url;
        imgElement.alt = image.caption;
        imgElement.classList.add('article-image');

        const captionElement = document.createElement('em');
        captionElement.textContent = image.caption;

        imageWrapper.appendChild(imgElement);
        imageWrapper.appendChild(captionElement);
        illustrationsSection.appendChild(imageWrapper);
    });

    // Sources section
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

    // Assemble the full article
    articleContainer.appendChild(title);
    articleContainer.appendChild(headerContainer);
    articleContainer.appendChild(articleContent);
    articleContainer.appendChild(illustrationsSection);
    articleContainer.appendChild(sourcesSection);

    contentElement.appendChild(articleContainer);

    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

displayArticlesByCategory();