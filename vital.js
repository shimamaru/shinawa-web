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
    zoom: 11,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // カスタムアイコンを作成
  const customIcon = {
    url: "./img/poseidon.png", // アイコン画像のパス
    scaledSize: new google.maps.Size(70, 70), // アイコンの幅と高さを指定
  };

  // マーカーを作成し、カスタムアイコンを設定
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Uluru",
    icon: customIcon, // カスタムアイコンを設定
  });

  // 出雲大社の緯度経度情報を定義
  const izumoTaishaPosition = { lat: 35.401472, lng: 132.68553 };

  // 新しいマーカーを出雲大社に設定
  const newCustomIcon = {
    url: "./img/amaterasu1.png", // 新しいアイコン画像のパス
    scaledSize: new google.maps.Size(70, 70), // アイコンの幅と高さを指定
  };

  // 新しいマーカーを作成し、カスタムアイコンを設定
  const newMarker = new google.maps.Marker({
    map: map, // 既存の地図オブジェクトを使用
    position: izumoTaishaPosition, // 出雲大社の緯度経度情報を使用
    title: "出雲大社",
    icon: newCustomIcon, // 新しいカスタムアイコンを設定
  });

  // マーカーを地図に追加
  newMarker.setMap(map);
}

initMap();
