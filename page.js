let smellData = jsonData;
let smellDays = {};

for (let i = 0; i < smellData.length; i++) {
  let date = smellData[i].date;
  let smell = {
    time: smellData[i].time,
    name: smellData[i].name,
    type: smellData[i].type,
    intensity: smellData[i].intensity,
    connotation: smellData[i].connotation,
  };
  if (!smellDays[date]) {
    // Check if date key exists
    smellDays[date] = [];
  }
  smellDays[date].push(smell);
}
