// Initialize and add the map
let map;

async function initMap() {
  // mapのポジション設定
  const position = { lat: 35.44824967066238, lng: 132.9602847311755 };

  // ライブラリを呼ぶ(map)
  const { Map } = await google.maps.importLibrary("maps");

  // mapの定義
  map = new Map(document.getElementById("map"), {
    // 中央値、大きさ、ID
    zoom: 10.5,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Uluru",
    icon: "",
  });
}

initMap();
