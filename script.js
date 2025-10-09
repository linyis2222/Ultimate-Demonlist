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
const mapCreator = document.getElementById("map-creators"); // CREATOR → CREATORS
const mapVerifier = document.getElementById("map-verifier");
const mapPublisher = document.getElementById("map-publisher");
const mapVideo = document.getElementById("map-video");
const mapId = document.getElementById("map-id");
const mapPassword = document.getElementById("map-password");

// 좌측 목록 생성
demons.forEach((d, index) => {
  const li = document.createElement("li");

  const rankSpan = document.createElement("span");
  rankSpan.textContent = `#${d.rank} `;
  rankSpan.style.fontWeight = "bold";
  rankSpan.style.marginRight = "5px";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = d.name;
  nameSpan.classList.add("name");
  nameSpan.addEventListener("click", () => selectMap(d, li));

  li.appendChild(rankSpan);
  li.appendChild(nameSpan);
  mapList.appendChild(li);

  if(index === 0) selectMap(d, li);
});

function selectMap(demon, liElement) {
  mapName.textContent = demon.name;

  mapCreator.innerHTML = `<span class="tag">CREATORS</span><span class="value">${demon.creator}</span>`; // CREATOR → CREATORS
  mapVerifier.innerHTML = `<span class="tag">VERIFIER</span><span class="value">${demon.verifier}</span>`;
  mapPublisher.innerHTML = `<span class="tag">PUBLISHER</span><span class="value">${demon.publisher}</span>`;

  mapVideo.innerHTML = `<iframe src="${demon.video}" allowfullscreen></iframe>`;
  mapId.innerHTML = `<span class="tag">ID</span><span class="value">${demon.id}</span>`;
  mapPassword.innerHTML = `<span class="tag">PASSWORD</span><span class="value">${demon.password}</span>`;

  document.querySelectorAll('#map-list li').forEach(li => li.classList.remove('active'));
  liElement.classList.add('active');
}
