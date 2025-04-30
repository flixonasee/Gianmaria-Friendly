const alimenti = [
  { nome: "Parmigiano", status: "è Gianmaria-friendly", note: "" },
  { nome: "Grana", status: "è Gianmaria-friendly", note: "" },
  { nome: "Formaggio (altro)", status: "non gli fa impazzire", note: "Solo se sciolto" },
  { nome: "Mela", status: "è Gianmaria-friendly", note: "" },
  { nome: "Banana", status: "è Gianmaria-friendly", note: "" },
  { nome: "Kiwi", status: "è Gianmaria-friendly", note: "" },
  { nome: "Arancia", status: "non è Gianmaria-friendly", note: "Solo in spremuta" },
  { nome: "Fragola", status: "è Gianmaria-friendly", note: "" },
  { nome: "Limone", status: "non gli fa impazzire", note: "" },
  { nome: "Mandarino", status: "è Gianmaria-friendly", note: "" },
  { nome: "Cocco", status: "è Gianmaria-friendly", note: "" },
  { nome: "Mango", status: "non gli fa impazzire", note: "" },
  { nome: "Frutti rossi", status: "è Gianmaria-friendly", note: "" },
  { nome: "Uva", status: "è Gianmaria-friendly", note: "" },
  { nome: "Anguria", status: "è Gianmaria-friendly", note: "" },
  { nome: "Melone", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Pesca", status: "è Gianmaria-friendly", note: "" },
  { nome: "Albicocca", status: "è Gianmaria-friendly", note: "" },
  { nome: "Ciliegia", status: "non è Gianmaria-friendly", note: "Solo se non è insieme ad altri alimenti" },
  { nome: "Ananas", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Papaya", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Maracuja", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Litchi", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Avocado", status: "è Gianmaria-friendly", note: "" },
  { nome: "Pompelmo", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Fico", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Dattero", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Melograno", status: "è Gianmaria-friendly", note: "" },
  { nome: "Cachi", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Prugna", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Susina", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Lime", status: "è Gianmaria-friendly", note: "" },
  { nome: "Cedro", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Bergamotto", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Tamarindo", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Pera", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Zucca", status: "non è Gianmaria-friendly", note: "Solo con altri alimenti" },
  { nome: "Patate", status: "è Gianmaria-friendly", note: "" },
  { nome: "Carote (crude)", status: "è Gianmaria-friendly", note: "" },
  { nome: "Spinaci (crudi)", status: "non è Gianmaria-friendly", note: "Solo in frullati" },
  { nome: "Manzo", status: "è Gianmaria-friendly", note: "" },
  { nome: "Vitello", status: "è Gianmaria-friendly", note: "" },
  { nome: "Maiale", status: "è Gianmaria-friendly", note: "" },
  { nome: "Agnello", status: "è Gianmaria-friendly", note: "" },
  { nome: "Cavallo", status: "è Gianmaria-friendly", note: "" },
  { nome: "Bufalo", status: "è Gianmaria-friendly", note: "" },
  { nome: "Toro", status: "è Gianmaria-friendly", note: "" },
  { nome: "Cinghiale", status: "è Gianmaria-friendly", note: "" },
  { nome: "Struzzo", status: "è Gianmaria-friendly", note: "" },
  { nome: "Pollo", status: "è Gianmaria-friendly", note: "" },
  { nome: "Tacchino", status: "è Gianmaria-friendly", note: "" },
  { nome: "Coniglio", status: "è Gianmaria-friendly", note: "" },
  { nome: "Anatra", status: "è Gianmaria-friendly", note: "" },
  { nome: "Prosciutto crudo", status: "non gli fa impazzire", note: "" },
  { nome: "Salame Milano", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Salame (altro)", status: "è Gianmaria-friendly", note: "" },
  { nome: "Prosciutto cotto", status: "è Gianmaria-friendly", note: "" },
  { nome: "Mortadella", status: "non gli fa impazzire", note: "" },
  { nome: "Bresaola", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Salsiccia", status: "è Gianmaria-friendly", note: "" },
  { nome: "Bacon", status: "è Gianmaria-friendly", note: "" },
  { nome: "Coppa", status: "è Gianmaria-friendly", note: "" },
  { nome: "Guanciale", status: "è Gianmaria-friendly", note: "" },
  { nome: "Pancetta", status: "è Gianmaria-friendly", note: "" },
  { nome: "Culatello", status: "è Gianmaria-friendly", note: "" },
  { nome: "Lardo", status: "è Gianmaria-friendly", note: "" },
  { nome: "Speck", status: "non gli fa impazzire", note: "" },
  { nome: "Soppressata", status: "non gli fa impazzire", note: "" },
  { nome: "Cicciolo", status: "non gli fa impazzire", note: "" },
  { nome: "Felino", status: "è Gianmaria-friendly", note: "" },
  { nome: "Finocchiona", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Capicola", status: "non è Gianmaria-friendly", note: "" },
  { nome: "Lonza", status: "non gli fa impazzire", note: "" }
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
      <p> ${alimento.nome} ${alimento.status}. </p>
      <p> ${alimento.note || "Nessuna"}</p>
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
