
function chooseStationsMine(stations) {
  let goodStations = [];
  for (let station of stations){
    //console.log(station);
    //console.log("all");
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){
      goodStations.push(station[0]);
      //console.log("chosen");
      //console.log(station);
    }
  }    
  return goodStations;
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//chooseStations(stations);

console.log(chooseStations(stations));


