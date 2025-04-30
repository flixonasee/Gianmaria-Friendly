const decisionTree = {
  question: "Scegli una categoria",
  options: [
    {
      label: "Formaggi",
      next: {
        question: "Altro",
        options: [
          {
            label: "È sciolto?",
            next: [
              { label: "Sì", result: "✅ Esito Positivo" },
              { label: "No", result: "❌ Esito Negativo" }
            ]
          }
        ]
      }
    },
    {
      label: "Frutta",
      next: [
        { label: "Mela", result: "✅ Esito Positivo" },
        { label: "Banana", result: "🤷‍♂️ Non mi fa impazzire" }
      ]
    },
    {
      label: "Dolci",
      next: [
        { label: "Cioccolato", result: "✅ Esito Positivo" },
        { label: "Torta", result: "❌ Esito Negativo" }
      ]
    }
  ]
};
