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
  const articles = Array.from(document.querySelectorAll(".index article"));
  const shuffledArticles = shuffle(articles);
  const indexSection = document.querySelector(".index");
  shuffledArticles.forEach((article) => indexSection.appendChild(article));
}

// Function to navigate to a random active article
function navigateToRandomArticle() {
  const activeArticles = Array.from(
    document.querySelectorAll(".index article a:not(.inactive)")
  );
  if (activeArticles.length > 0) {
    const randomIndex = Math.floor(Math.random() * activeArticles.length);
    const randomArticle = activeArticles[randomIndex];
    openInIframe(randomArticle.href);
  } else {
    alert("No active articles available.");
  }
}

// Function to open a URL in the iframe
function openInIframe(url) {
  const iframe = document.getElementById("fullscreen-iframe");
  const closeButton = document.getElementById("close-button");
  iframe.src = url;
  iframe.style.display = "block";
  closeButton.style.display = "block";
}

// Function to close the iframe
function closeIframe() {
  const iframe = document.getElementById("fullscreen-iframe");
  const closeButton = document.getElementById("close-button");
  iframe.src = "";
  iframe.style.display = "none";
  closeButton.style.display = "none";
}

// Add event listener to the randomize button
const randomizeButton = document.getElementById("randomize-button");
if (randomizeButton) {
  randomizeButton.addEventListener("click", randomizeOrder);
}

// Add event listener to the random article button
const randomArticleButton = document.getElementById("random-article-button");
if (randomArticleButton) {
  randomArticleButton.addEventListener("click", navigateToRandomArticle);
}

// Add event listeners to article links
document.querySelectorAll(".index article a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    openInIframe(this.href);
  });
});

// Add event listener to the close button
const closeButton = document.getElementById("close-button");
if (closeButton) {
  closeButton.addEventListener("click", closeIframe);
}

// Add event listener for the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeIframe();
  }
});

// Shuffle the articles every 2 seconds
setInterval(randomizeOrder, 4000);
