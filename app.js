const alimenti = [
  { nome: "Parmigiano", status: "✅", note: "" },
  { nome: "Grana", status: "✅", note: "" },
  { nome: "Formaggio (altro)", status: "🤷", note: "Solo se sciolto" },
  { nome: "Melanzane", status: "❌", note: "Mai e poi mai" },
  { nome: "Pizza", status: "🤷", note: "Solo senza pezzi di cipolla" },
];

function showSuggestions(query) {
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.innerHTML = "";
  if (query.length === 0) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  const filtered = alimenti.filter(alimento => 
    alimento.nome.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length > 0) {
    filtered.forEach(alimento => {
      const li = document.createElement("li");
      li.textContent = alimento.nome;
      li.onclick = () => searchAlimento(alimento.nome);
      suggestionsBox.appendChild(li);
    });
    suggestionsBox.classList.remove("hidden");
  } else {
    suggestionsBox.classList.add("hidden");
  }
}

function searchAlimento(query) {
  const resultBox = document.getElementById("result");
  const suggestionsBox = document.getElementById("suggestions");
  const inputField = document.getElementById("search");

  const alimento = alimenti.find(
    item => item.nome.toLowerCase() === query.toLowerCase()
  );

  resultBox.innerHTML = "";

  if (alimento) {
    resultBox.innerHTML = `
      <p><strong>Nome:</strong> ${alimento.nome}</p>
      <p><strong>Stato:</strong> ${alimento.status}</p>
      <p><strong>Note:</strong> ${alimento.note || "Nessuna"}</p>
    `;
  } else {
    resultBox.innerHTML = `
      <p>"Questo alimento non è ancora nel database!"</p>
    `;
  }

  resultBox.classList.remove("hidden");
  suggestionsBox.classList.add("hidden");
  inputField.value = "";
}