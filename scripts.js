// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to randomize the order of articles
  function randomizeOrder() {
    const articles = Array.from(document.querySelectorAll('.index article'));
    const shuffledArticles = shuffle(articles);
    const indexSection = document.querySelector('.index');
    shuffledArticles.forEach(article => indexSection.appendChild(article));
  }

  // Function to navigate to a random active article
  function navigateToRandomArticle() {
    const activeArticles = Array.from(document.querySelectorAll('.index article a:not(.inactive)'));
    if (activeArticles.length > 0) {
      const randomIndex = Math.floor(Math.random() * activeArticles.length);
      const randomArticle = activeArticles[randomIndex];
      window.location.href = randomArticle.href;
    } else {
      alert('No active articles available.');
    }
  }

  // Shuffle every x seconds
  setInterval(randomizeOrder, 4000);

  // Shuffle the articles on page load
  window.addEventListener('load', function () {
    randomizeOrder();
  });

  // Add event listener to the random article button
  const randomArticleButton = document.getElementById('random-article-button');
  if (randomArticleButton) {
    randomArticleButton.addEventListener('click', navigateToRandomArticle);
  }