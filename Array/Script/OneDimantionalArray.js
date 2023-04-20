function highestScore(scores){
    let max = scores[0];
    for(var x = 1;x< scores.length; x++){
        if(max <scores[x]){
            max = scores[x];
        }
    }
    return max;
}

let scores = [12,13,42,14,4,21,23];
var maxScore = highestScore(scores);

console.log(maxScore);