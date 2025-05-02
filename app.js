// Define the categories and subcategories with their outcomes
const categories = [
  {
    name: '🧀 FORMAGGIO',
    subcategories: [
      { name: '🧀 PARMIGIANO', result: '✅ È Gianmaria-friendly!' },
      { name: '🧀 GRANA', result: '✅ È Gianmaria-friendly!' },
      {
        name: '🧀 ALTRO',
        question: 'È sciolto? 🤔',
        subcategories: [
          { name: '✔️ Sì', result: '✅ È Gianmaria-friendly!' },
          { name: '❌ No', result: '❌ Non è Gianmaria-friendly.' },
        ],
      },
    ],
  },
  // Add other categories (FRUTTA, VERDURA, etc.) as needed
];

// Utility functions for navigation and rendering
const historyStack = [];

function setBreadcrumbTitle(title) {
  document.getElementById('breadcrumb-title').textContent = title;
}

function updateGoBackVisibility() {
  const ricominciaButton = document.getElementById('ricomincia-button');
  ricominciaButton.style.display = historyStack.length > 1 ? 'inline-block' : 'none';
}

// Function to render the landing page
function showLandingPage() {
  historyStack.splice(0, historyStack.length); // Clear the navigation history
  document.getElementById('breadcrumb-title').textContent = 'Home';
  updateGoBackVisibility();

  document.getElementById('content').innerHTML = `
    <div class="logo">
      <img src="https://github.com/flixonasee/gfriendly/blob/a24c81f9ccf4d4fa2336e50d78c4f6d6abeae3fd/logo.svg?raw=true" alt="Gianmaria-Friendly Logo">
    </div>
    <div class="cover-img">
      <img src="https://github.com/flixonasee/gfriendly/blob/052e2db5076ce2a1a0c44093f07fc908e1f3d5fb/lol.gif?raw=true" alt="Cover Image">
    </div>
    <button id="start-button" class="category-button">Inizia</button>
  `;

  // Add event listener to the "Inizia" button
  document.getElementById('start-button').addEventListener('click', () => showCategories(categories));
}

// Function to show categories or subcategories
function showCategories(categories, title = 'Categorie') {
  historyStack.push({ screen: title, categories });
  setBreadcrumbTitle(title);
  updateGoBackVisibility();

  let categoriesHTML = '<h2 class="subtitle">Scegli una categoria:</h2>';
  categories.forEach((category, index) => {
    categoriesHTML += `
      <button class="category-button" onclick="handleCategoryClick(${index})">${category.name}</button>
    `;
  });
  document.getElementById('content').innerHTML = categoriesHTML;
}

// Handle category click
function handleCategoryClick(index) {
  const currentCategory = historyStack[historyStack.length - 1].categories[index];
  if (currentCategory.result) {
    showResult(currentCategory.result);
  } else if (currentCategory.question) {
    showQuestion(currentCategory.question, currentCategory.subcategories);
  } else if (currentCategory.subcategories) {
    showCategories(currentCategory.subcategories, currentCategory.name);
  }
}

// Show a question with options
function showQuestion(question, options) {
  historyStack.push({ screen: question, categories: options });
  setBreadcrumbTitle(question);
  updateGoBackVisibility();

  let questionHTML = `<h2 class="subtitle">${question}</h2>`;
  options.forEach((option, index) => {
    questionHTML += `
      <button class="category-button" onclick="handleCategoryClick(${index})">${option.name}</button>
    `;
  });
  document.getElementById('content').innerHTML = questionHTML;
}

// Show result
function showResult(resultMessage) {
  console.log("Result message:", resultMessage); // Debugging: Log the result message
  historyStack.push({ screen: 'Risultato' });
  setBreadcrumbTitle('Risultato');
  updateGoBackVisibility();

  // Check if the result is a success (contains "✅")
  const isSuccess = resultMessage.includes('✅');
  const animationHTML = isSuccess
    ? `<dotlottie-player src="https://lottie.host/e964d2a1-4e97-46bf-b237-1515d9ccf263/1LqL8L24Z7.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" loop autoplay></dotlottie-player>`
    : '';

  document.getElementById('content').innerHTML = `
    ${animationHTML}
    <h2 class="result">${resultMessage}</h2>
    <button class="category-button" onclick="showLandingPage()">🔄 Ricomincia</button>
  `;
}

// Go back to the previous screen
function goBack() {
  historyStack.pop();
  const previousScreen = historyStack[historyStack.length - 1];
  if (!previousScreen) {
    showLandingPage(); // If no previous screen, go to the landing page
    return;
  }

  if (previousScreen.categories) {
    showCategories(previousScreen.categories, previousScreen.screen);
  } else if (previousScreen.screen) {
    showQuestion(previousScreen.screen, previousScreen.categories);
  }
}

// Initialize the app
document.getElementById('start-button')?.addEventListener('click', () => showCategories(categories));
showLandingPage(); // Show the landing page on app load
