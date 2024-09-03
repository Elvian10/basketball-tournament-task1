const teams = {
"A": [
{ "Team": "Kanada", "ISOCode": "CAN", "FIBARanking": 7 },
{ "Team": "Australija", "ISOCode": "AUS", "FIBARanking": 5 },
{ "Team": "Grčka", "ISOCode": "GRE", "FIBARanking": 14 },
{ "Team": "Španija", "ISOCode": "ESP", "FIBARanking": 2 }
],
"B": [
{ "Team": "Nemačka", "ISOCode": "GER", "FIBARanking": 3 },
{ "Team": "Francuska", "ISOCode": "FRA", "FIBARanking": 9 },
{ "Team": "Brazil", "ISOCode": "BRA", "FIBARanking": 12 },
{ "Team": "Japan", "ISOCode": "JPN", "FIBARanking": 26 }
],
"C": [
{ "Team": "Sjedinjene Države", "ISOCode": "USA", "FIBARanking": 1 },
{ "Team": "Srbija", "ISOCode": "SRB", "FIBARanking": 4 },
{ "Team": "Južni Sudan", "ISOCode": "SSD", "FIBARanking": 34 },
{ "Team": "Puerto Riko", "ISOCode": "PRI", "FIBARanking": 16 }
]
};

const results = {
"Round 1": [
{ "Match": "Kanada vs Australija", "Score": "2-1" },
{ "Match": "Grčka vs Španija", "Score": "1-3" },
{ "Match": "Nemačka vs Francuska", "Score": "1-1" },
{ "Match": "Brazil vs Japan", "Score": "2-0" },
{ "Match": "Sjedinjene Države vs Srbija", "Score": "3-2" },
{ "Match": "Južni Sudan vs Puerto Riko", "Score": "0-1" }
],
"Round 2": [
{ "Match": "Kanada vs Grčka", "Score": "1-1" },
{ "Match": "Australija vs Španija", "Score": "0-2" },
{ "Match": "Nemačka vs Brazil", "Score": "2-2" },
{ "Match": "Francuska vs Japan", "Score": "3-1" },
{ "Match": "Sjedinjene Države vs Južni Sudan", "Score": "4-0" },
{ "Match": "Srbija vs Puerto Riko", "Score": "2-1" }
],
"Round 3": [
{ "Match": "Kanada vs Španija", "Score": "0-3" },
{ "Match": "Australija vs Grčka", "Score": "1-1" },
{ "Match": "Nemačka vs Japan", "Score": "3-0" },
{ "Match": "Francuska vs Brazil", "Score": "1-2" },
{ "Match": "Sjedinjene Države vs Puerto Riko", "Score": "5-1" },
{ "Match": "Srbija vs Južni Sudan", "Score": "3-0" }
]
};

const rankings = {
"A": [
{ "Team": "Španija", "Points": 7 },
{ "Team": "Kanada", "Points": 5 },
{ "Team": "Grčka", "Points": 2 },
{ "Team": "Australija", "Points": 1 }
],
"B": [
{ "Team": "Nemačka", "Points": 5 },
{ "Team": "Francuska", "Points": 5 },
{ "Team": "Brazil", "Points": 4 },
{ "Team": "Japan", "Points": 0 }
],
"C": [
{ "Team": "Sjedinjene Države", "Points": 9 },
{ "Team": "Srbija", "Points": 6 },
{ "Team": "Puerto Riko", "Points": 3 },
{ "Team": "Južni Sudan", "Points": 0 }
]
};

const advancedTeams = [
"Španija",
"Kanada",
"Nemačka",
"Francuska",
"Sjedinjene Države",
"Srbija",
"Brazil",
"Puerto Riko"
];

console.log("Results by Rounds:", results);
console.log("Rankings by Groups:", rankings);
console.log("Teams Advanced to Knockout Stage:", advancedTeams);
