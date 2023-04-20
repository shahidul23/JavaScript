function highestRunScorer(playerInfo) {
    var highestScorer = playerInfo[0][0];
    var highestScore = playerInfo[0][1];
    for (var i = 0; i < playerInfo.length; i++) {

        if (highestScore < playerInfo[i][1]) {
            highestScore = playerInfo[i][1];
            highestScorer = playerInfo[i][0];
        }
    }
    return highestScorer;

};
var playerInfo = [
    ["A", 23],
    ["B", 24],
    ["C", 25],
    ["D", 26],
    ["E", 27],
];
var name = highestRunScorer(playerInfo);
console.log(name);