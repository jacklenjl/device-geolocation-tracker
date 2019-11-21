
  const pubnub = new PubNub({
    publishKey: "pub_nub_key",
    subscribeKey: "pub_nub_key"
  });
  pubnub.subscribe({
    channels: ["my_channel"]
  });
function myMap() {
  
  let indiaLng = 77.2314911
  let indiaLat = 28.65
  let pos={lat:indiaLat,lng:indiaLng};
  pubnub.addListener({
    message: pubnubMessage => {console.log("New Message:", pubnubMessage.message);
     pos = pubnubMessage.message
    redraw(pos)
  }  
  })
    
  var mapProp = {
  center: new google.maps.LatLng(pos.lat, pos.lng),
  zoom: 18
  };
  var map = new google.maps.Map(
  document.getElementById("googleMap"),
  mapProp
  );
  var marker = new google.maps.Marker({position:{lat:pos.lat, lng:pos.lng}, map:map});
  
  var redraw = function(pos) {
    lat = pos.lat;
    lng = pos.lng;

    map.setCenter({lat:lat, lng:lng, alt:0});
    marker.setPosition({lat:lat, lng:lng, alt:0});
  };


  
  

}
