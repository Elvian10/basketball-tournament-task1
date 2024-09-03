const matches = {
"GER": [
{ "Date": "06/07/24", "Opponent": "FRA", "Result": "66-90" },
{ "Date": "19/07/24", "Opponent": "JPN", "Result": "104-83" }
],
"FRA": [
{ "Date": "12/07/24", "Opponent": "SRB", "Result": "67-79" },
{ "Date": "19/07/24", "Opponent": "CAN", "Result": "73-85" }
],
"JPN": [
{ "Date": "19/07/24", "Opponent": "GER", "Result": "83-104" },
{ "Date": "21/07/24", "Opponent": "SRB", "Result": "100-119" }
],
"USA": [
{ "Date": "20/07/24", "Opponent": "SSD", "Result": "101-100" },
{ "Date": "22/07/24", "Opponent": "GER", "Result": "92-88" }
],
"CAN": [
{ "Date": "11/07/24", "Opponent": "USA", "Result": "72-86" },
{ "Date": "21/07/24", "Opponent": "PRI", "Result": "103-93" }
],
"AUS": [
{ "Date": "15/07/24", "Opponent": "USA", "Result": "92-98" },
{ "Date": "19/07/24", "Opponent": "PRI", "Result": "90-75" }
],
"SRB": [
{ "Date": "21/07/24", "Opponent": "JPN", "Result": "119-100" },
{ "Date": "22/07/24", "Opponent": "GRE", "Result": "94-72" }
],
"PRI": [
{ "Date": "16/07/24", "Opponent": "GRE", "Result": "65-67" },
{ "Date": "19/07/24", "Opponent": "AUS", "Result": "75-90" }
],
"GRE": [
{ "Date": "16/07/24", "Opponent": "PRI", "Result": "67-65" },
{ "Date": "22/07/24", "Opponent": "SRB", "Result": "72-94" }
],
"BRA": [
{ "Date": "12/07/24", "Opponent": "POR", "Result": "63-73" },
{ "Date": "19/07/24", "Opponent": "ESP", "Result": "72-76" }
],
"SSD": [
{ "Date": "15/07/24", "Opponent": "BRA", "Result": "72-81" },
{ "Date": "20/07/24", "Opponent": "USA", "Result": "100-101" }
],
"ESP": [
{ "Date": "19/07/24", "Opponent": "BRA", "Result": "76-72" },
{ "Date": "23/07/24", "Opponent": "PRI", "Result": "107-84" }
]
};

function getMatchResults(team) {
return matches[team] || [];
}

// Example usage
console.log(getMatchResults("GER"));
