const demons = [
  {
    rank: 1,
    name: "Thinking Space II",
    creator: "CairoX",
    verifier: "Zoink",
    publisher: "CairoX",
    video: "https://www.youtube.com/embed/asdfasdfasdf",
    id: "2345234234234324",
    password: "Free to Copy"
  },
  {
    rank: 2,
    name: "Amethyst",
    creator: "iMist",
    verifier: "wPopoff",
    publisher: "iMist",
    video: "https://www.youtube.com/embed/wertwertwert",
    id: "34593485349587",
    password: "Free to Copy"
  }
];

const mapList = document.getElementById("map-list");
const mapName = document.getElementById("map-name");
const mapCreator = document.getElementById("map-creator");
const mapVerifier = document.getElementById("map-verifier");
const mapPublisher = document.getElementById("map-publisher");
const mapVideo = document.getElementById("map-video");
const mapId = document.getElementById("map-id");
const mapPassword = document.getElementById("map-password");

// Left panel: create clickable list
demons.forEach(d => {
  const li = document.createElement("li");
  li.textContent = `#${d.rank} ${d.name}`;
  li.addEventListener("click", () => {
    mapName.textContent = d.name;
    mapCreator.textContent = `Creator: ${d.creator}`;
    mapVerifier.textContent = `Verifier: ${d.verifier}`;
    mapPublisher.textContent = `Publisher: ${d.publisher}`;
    mapVideo.innerHTML = `<iframe src="${d.video}" allowfullscreen></iframe>`;
    mapId.textContent = `ID: ${d.id}`;
    mapPassword.textContent = `Password: ${d.password}`;
  });
  mapList.appendChild(li);
});
