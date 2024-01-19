const lunarMinerals = ['pyroxene', 'olivine', 'feldspar','ilmenite', 'spinel', 'armalcolite'];
const filteredLunarMinerals = lunarMinerals.filter(mineral => mineral.length <= 8);
console.log(filteredLunarMinerals);
