import articles from "../../articles/articles.js";

const contentElement = document.querySelector('.article-list');
const categories = ['DEV', 'ROBOTIC', 'AI', 'CYBER'];

// Fonction pour trier et limiter les articles à 5 par catégorie
function getRecentArticles(category) {
    return articles[category]
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Trier par date
        .slice(0, 5); // Limiter à 5 articles
}

// Fonction pour afficher les articles par catégorie
function displayArticlesByCategory() {
    contentElement.innerHTML = ''; // Vider le contenu existant

    categories.forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category;
        categoryHeader.classList.add('article-title');
        contentElement.appendChild(categoryHeader);

        const recentArticles = getRecentArticles(category);
        const categoryList = document.createElement('ul');

        recentArticles.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = article.title;
            link.classList.add('link')
            link.href = '#';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                displayArticle(article);
            });
            listItem.appendChild(link);
            categoryList.appendChild(listItem);
        });

        contentElement.appendChild(categoryList);
    });
}

// Fonction pour afficher le contenu de l'article
function displayArticle(article) {
    contentElement.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = article.title;
    title.classList.add('article-title')
    // title.style = "color:#6f42c1"

    const description = document.createElement('p');
    description.innerHTML = `<p>${article.description}</p>`;

    const articleContent = document.createElement('div');
    articleContent.innerHTML = article.content.join('');

    contentElement.appendChild(title);
    contentElement.appendChild(description);
    contentElement.appendChild(articleContent);
    
    const illustrationsTitle = document.createElement('h2');
    illustrationsTitle.textContent = 'Illustrations';
    contentElement.appendChild(illustrationsTitle);

    article.images.forEach(i => {
        const imgParagraph = document.createElement('p');
        imgParagraph.innerHTML = `<img src='${i.url}' alt='${i.caption.split(' ')[0]}' class='article-image'/>  <em>${i.caption}</em>`;
        contentElement.appendChild(imgParagraph);
    });

    const sourcesTitle = document.createElement('h2');
    sourcesTitle.textContent = 'Sources';
    contentElement.appendChild(sourcesTitle);

    article.sources.forEach(i => {
        const sourceParagraph = document.createElement('p');
        sourceParagraph.innerHTML = `<a href='${i.url}'>${i.title}</a>`;
        contentElement.appendChild(sourceParagraph);
    });
}

// Afficher les articles par catégorie
displayArticlesByCategory();
