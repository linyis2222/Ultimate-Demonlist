const demons = [
  {
    rank: 1,
    name: "Thinking Space II",
    creators: "Jawis, Rin04, HaydenDom, V453C70M14, UFokinWotM8, Hyperbola, NcaT, KugelBlitZ, Triforce, Maxmur, MeatiusGaming, DrCuber, ADrone, Korewa, GhostVandalf, CairoX, RealVet, Genoxide, Crowlley, Meox, GamerKnight750, ThunderDarkness, DiamondSkull, Kevellium",
    verifier: "Zoink",
    publisher: "CairoX",
    video: "https://www.youtube.com/embed/asdfasdfasdf",
    id: "2345234234234324",
    password: "Free to Copy"
  },
  {
    rank: 2,
    name: "Amethyst",
    creators: "iMist",
    verifier: "wPopoff",
    publisher: "iMist",
    video: "https://www.youtube.com/embed/wertwertwert",
    id: "34593485349587",
    password: "Free to Copy"
  }
];

const mapList = document.getElementById("map-list");
const mapName = document.getElementById("map-name");
const mapCreators = document.getElementById("map-creators"); // CREATOR → CREATORS
const mapVerifier = document.getElementById("map-verifier");
const mapPublisher = document.getElementById("map-publisher");
const mapVideo = document.getElementById("map-video");
const mapId = document.getElementById("map-id");
const mapPassword = document.getElementById("map-password");

// 좌측 목록 생성
demons.forEach((d, index) => {
  const li = document.createElement("li");

  // 순위 span (클릭 X)
  const rankSpan = document.createElement("span");
  rankSpan.textContent = `#${d.rank} `;
  rankSpan.style.fontWeight = "bold";
  rankSpan.style.marginRight = "5px";

  // 맵 이름 span (클릭 가능)
  const nameSpan = document.createElement("span");
  nameSpan.textContent = d.name;
  nameSpan.classList.add("name");
  nameSpan.addEventListener("click", () => selectMap(d, li));

  li.appendChild(rankSpan);
  li.appendChild(nameSpan);
  mapList.appendChild(li);

  // 첫 번째 항목 기본 선택
  if(index === 0) selectMap(d, li);
});

function selectMap(demon, liElement) {
  mapName.textContent = demon.name;

  mapCreators.innerHTML = `<span class="tag">CREATORS</span><span class="value">${demon.creators}</span>`;
  mapVerifier.innerHTML = `<span class="tag">VERIFIER</span><span class="value">${demon.verifier}</span>`;
  mapPublisher.innerHTML = `<span class="tag">PUBLISHER</span><span class="value">${demon.publisher}</span>`;

  mapVideo.innerHTML = `<iframe src="${demon.video}" allowfullscreen></iframe>`;
  mapId.innerHTML = `<span class="tag">ID</span><span class="value">${demon.id}</span>`;
  mapPassword.innerHTML = `<span class="tag">PASSWORD</span><span class="value">${demon.password}</span>`;

  // 선택 표시
  document.querySelectorAll('#map-list li').forEach(li => li.classList.remove('active'));
  liElement.classList.add('active');
}

