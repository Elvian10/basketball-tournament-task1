const teams = {
hatD: ['Germany', 'USA'],
hatE: ['Serbia', 'Canada'],
hatF: ['France', 'Australia'],
hatG: ['Brazil', 'Greece']
};

function getRandomPair(teams1, teams2, excludePairs) {
let pairs = [];
for (let team1 of teams1) {
for (let team2 of teams2) {
if (!excludePairs.some(pair =>
(pair.includes(team1) && pair.includes(team2)))) {
pairs.push([team1, team2]);
}
}
}
return pairs[Math.floor(Math.random() * pairs.length)];
}

function drawQuarterFinals() {
const quarterFinals = [];
const excludePairs = [['Germany', 'Greece'], ['USA', 'Brazil'], ['Serbia', 'Australia'], ['France', 'Canada']];
quarterFinals.push(getRandomPair(teams.hatD, teams.hatG, excludePairs));
quarterFinals.push(getRandomPair(teams.hatE, teams.hatF, excludePairs));
return quarterFinals;
}

function drawSemiFinals(quarterFinals) {
const semiFinals = [];
const pairsD_E = quarterFinals.filter(pair => teams.hatD.includes(pair[0]) && teams.hatE.includes(pair[1]));
const pairsF_G = quarterFinals.filter(pair => teams.hatF.includes(pair[0]) && teams.hatG.includes(pair[1]));
semiFinals.push(getRandomPair(pairsD_E.map(pair => pair[0]), pairsF_G.map(pair => pair[1]), []));
semiFinals.push(getRandomPair(pairsF_G.map(pair => pair[0]), pairsD_E.map(pair => pair[1]), []));
return semiFinals;
}

const quarterFinals = drawQuarterFinals();
const semiFinals = drawSemiFinals(quarterFinals);

console.log("Hats:");
console.log(" Hat D");
teams.hatD.forEach(team => console.log(` ${team}`));
console.log(" Hat E");
teams.hatE.forEach(team => console.log(` ${team}`));
console.log(" Hat F");
teams.hatF.forEach(team => console.log(` ${team}`));
console.log(" Hat G");
teams.hatG.forEach(team => console.log(` ${team}`));

console.log("\nElimination phase:");
quarterFinals.forEach(pair => console.log(` ${pair[0]} - ${pair[1]}`));
semiFinals.forEach(pair => console.log(` ${pair[0]} - ${pair[1]}`));
