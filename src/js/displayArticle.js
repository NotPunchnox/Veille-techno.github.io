import articles from "../../articles/articles.js";

const contentElement = document.querySelector('.article-list');
const categories = {DEV: 'Développement', ROBOTIC: 'Robotique', AI: 'Intelligence Artificielle', CYBER: 'Cyber-sécurité'};

function getRecentArticles(category) {
    return articles[category]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
}

function displayArticlesByCategory() {
    contentElement.innerHTML = '';

    Object.keys(categories).forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = categories[category];
        categoryHeader.classList.add('article-title');
        categoryHeader.style = "margin-left: 40px;"
        contentElement.appendChild(categoryHeader);

        const recentArticles = getRecentArticles(category);
        const categoryList = document.createElement('ul');

        recentArticles.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = article.title;
            link.classList.add('link')
            link.style = "margin-left: 80px;"
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

function displayArticle(article) {
    contentElement.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = article.title;
    title.classList.add('article-title');

    // Ajout de la date
    const dateElement = document.createElement('p');
    dateElement.textContent = new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
    dateElement.classList.add('article-date');

    const description = document.createElement('p');
    description.innerHTML = `<p>${article.description}</p>`;

    const articleContent = document.createElement('div');
    articleContent.innerHTML = article.content.join('');

    contentElement.appendChild(title);
    contentElement.appendChild(dateElement);
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

displayArticlesByCategory();
