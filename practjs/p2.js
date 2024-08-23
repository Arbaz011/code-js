console.log("ludo game by Math.random")
const a=1;
const b=6;
const dice=Math.floor(Math.random()*(b-a+1))+a;
console.log(`Your dice number is =${dice}`)
if (dice==6) {
    console.log("one more chance" )
}else{
    console.log("player 2 chance")
}