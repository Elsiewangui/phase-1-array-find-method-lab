// code your solution here
function superbowlWin(record){
    const superBowl = record.find(record =>record.result ==="W")

    if (superBowl){
        return superBowl.year;
    } else{
        return undefined
    }

}
console.log(superbowlWin(record))
