const demons = [
  { rank: 1, name: "Thinking Space II", publisher: "CairoX" },
  { rank: 2, name: "Amethyst", publisher: "iMist" },
  { rank: 3, name: "Tidal Wave", publisher: "OniLink" }
];

const listDiv = document.getElementById("list");

demons.forEach(d => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h2>#${d.rank} - ${d.name}</h2><p>by ${d.publisher}</p>`;
  listDiv.appendChild(card);
});
