document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  function renderNode(node) {
    app.innerHTML = "";

    // Mostra la domanda
    if (node.question) {
      const question = document.createElement("h1");
      question.textContent = node.question;
      app.appendChild(question);
    }

    // Mostra le opzioni
    if (node.options) {
      node.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.label;

        // Imposta il comportamento del bottone
        button.addEventListener("click", () => {
          if (option.next) {
            renderNode(option.next);
          } else if (option.result) {
            renderResult(option.result);
          }
        });

        app.appendChild(button);
      });
    }
  }

  function renderResult(result) {
    app.innerHTML = "";

    const resultMessage = document.createElement("h1");
    resultMessage.textContent = result;

    if (result.includes("✅")) resultMessage.style.color = "#4CAF50";
    else if (result.includes("❌")) resultMessage.style.color = "#F44336";
    else resultMessage.style.color = "#FFC107";

    app.appendChild(resultMessage);

    const restartButton = document.createElement("button");
    restartButton.textContent = "Torna all'inizio";
    restartButton.className = "neutral";
    restartButton.addEventListener("click", () => renderNode(decisionTree));

    app.appendChild(restartButton);
  }

  // Inizia con il nodo principale
  renderNode(decisionTree);
});
