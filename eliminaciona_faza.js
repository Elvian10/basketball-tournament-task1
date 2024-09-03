const matches = {
quarterfinals: [
{ team1: "France", team2: "Canada", score1: 82, score2: 73 },
{ team1: "Germany", team2: "Greece", score1: 76, score2: 63 },
{ team1: "USA", team2: "Brazil", score1: 122, score2: 87 },
{ team1: "Serbia", team2: "Australia", score1: 95, score2: 90 }
],
semifinals: [
{ team1: "France", team2: "Germany", score1: 73, score2: 69 },
{ team1: "USA", team2: "Serbia", score1: 95, score2: 91 }
],
thirdPlaceMatch: { team1: "Germany", team2: "Serbia", score1: 83, score2: 93 },
finals: { team1: "France", team2: "USA", score1: 87, score2: 98 }
};

const medals = {
gold: "USA",
silver: "France",
bronze: "Serbia"
};

function displayMatches() {
console.log("Quarterfinals:");
matches.quarterfinals.forEach(match => {
console.log(` ${match.team1} - ${match.team2} (${match.score1}: ${match.score2})`);
});

console.log("\nSemi-Finals:");
matches.seminfinals.forEach(match => {
console.log(` ${match.team1} - ${match.team2} (${match.score1}: ${match.score2})`);
});

console.log("\nThird place match:");
console.log(` ${matches.thirdPlaceMatch.team1} - ${matches.thirdPlaceMatch.team2} (${matches.thirdPlaceMatch.score1}: ${matches.thirdPlaceMatch.score2})`);

console.log("\nFinals:");
console.log(` ${matches.finals.team1} - ${matches.finals.team2} (${matches.finals.score1}: ${matches.finals.score2})`);

console.log("\nMedals:");
console.log(` 1. ${medals.gold}`);
console.log(` 2. ${medals.silver}`);
console.log(` 3. ${medals.bronze}`);
}

displayMatches();
