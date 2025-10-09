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

// 좌측 목록 생성
demons.forEach((d, index) => {
  const li = document.createElement("li");
  li.textContent = `#${d.rank} ${d.name}`;
  li.addEventListener("click", () => selectMap(d, li));
  mapList.appendChild(li);

  // 첫 번째 항목 기본 선택
  if(index === 0) {
    selectMap(d, li);
  }
});

function selectMap(demon, liElement) {
  // 오른쪽 패널 업데이트
  mapName.textContent = demon.name;
  mapCreator.textContent = `Creator: ${demon.creator}`;
  mapVerifier.textContent = `Verifier: ${demon.verifier}`;
  mapPublisher.textContent = `Publisher: ${demon.publisher}`;
  mapVideo.innerHTML = `<iframe src="${demon.video}" allowfullscreen></iframe>`;
  mapId.textContent = `ID: ${demon.id}`;
  mapPassword.textContent = `Password: ${demon.password}`;

  // 선택 표시
  document.querySelectorAll('#map-list li').forEach(li => li.classList.remove('active'));
  liElement.classList.add('active');
}
