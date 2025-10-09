const demons = [
  {
    rank: 1,
    name: "Thinking Space II",
    creators: "Jawis, Rin04, HaydenDom, V453C70M14, UFokinWotM8, Hyperbola, NcaT, KugelBlitZ, Triforce, Maxmur, MeatiusGaming, DrCuber, ADrone, Korewa, GhostVandalf, CairoX, RealVet, Genoxide, Crowlley, Meox, GamerKnight750, ThunderDarkness, DiamondSkull, Kevellium",
    verifier: "zZoink",
    publisher: "CairoX",
    video: "https://www.youtube.com/embed/CELNmHwln_c",
    id: "119544028",
    password: "Free to Copy"
  },
  {
    rank: 2,
    name: "Amethyst",
    creators: "iMist, IvashkaUA, NoobyPro27, iMinaY, BeClaNin0, Titoalper, Roselyne, ItsxEcho, GamerKnight750, Uriun112, 3DADronX, SnomGMD, Bedrock",
    verifier: "wPopoff",
    publisher: "iMist",
    video: "https://www.youtube.com/embed/4lfkzz1VCbA",
    id: "119550490",
    password: "Free to Copy"
  },
  {
    rank: 3,
    name: "Flamewall",
    creators: "UNarwall & more(125 people)",
    verifier: "Cuatrocientos",
    publisher: "UNarwall",
    video: "https://www.youtube.com/embed/x4Io4zkWVRw",
    id: "126242564",
    password: "Free to Copy"
  },
  {
    rank: 4,
    name: "Nullscapes",
    creators: "ItzKiba",
    verifier: "zZoink",
    publisher: "ItzKiba",
    video: "https://www.youtube.com/embed/EztneTPp5CU",
    id: "109780665",
    password: "Free to Copy"
  },
  {
    rank: 5,
    name: "BOOBAWAMBA",
    creators: "Akunakunn, TheLetterV, ygg24",
    verifier: "EastShark",
    publisher: "Akunakunn",
    video: "https://www.youtube.com/embed/20fYiqLAo_E",
    id: "110816181",
    password: "Free to Copy"
  },
  {
    rank: 6,
    name: "Tidal Wave",
    creators: "OniLinkGD",
    verifier: "zZoink",
    publisher: "OniLinkGD",
    video: "https://www.youtube.com/embed/9fsZ014qB3s",
    id: "86407629",
    password: "Free to Copy"
  }.
  {
    rank: 7,
    name: "andromeda",
    creators: "Insxne97",
    verifier: "taiago",
    publisher: "Insxne97",
    video: "https://www.youtube.com/embed/mk3TDemdkC0",
    id: "114283297",
    password: "Free to Copy"
  },
  {
    rank: 8,
    name: "Every End",
    creators: "MindCap",
    verifier: "Hqmy",
    publisher: "Pennutoh, MindCap, LeftUnknown, Blitzer, Djoxy, npesta, Koreaqwer, KrmaL, StarkyTheSalad, Surv, lolwut7, Cobrablitz",
    video: "https://www.youtube.com/embed/AO--mVVFtKI",
    id: "116174063",
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













