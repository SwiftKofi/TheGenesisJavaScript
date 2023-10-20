
let raceNumber = Math.floor(Math.random() * 1000);
let early=false;
let runnerAge = 18;

if (runnerAge===18 && early){
    raceNumber+=1000
}

if (runnerAge > 18 && early){
    console.log(`Your race is at 9:30am, your race number is: ${raceNumber}`);
} else if (runnerAge > 18 && !early) {
    console.log(`Late adults run at 11:00 am, Race Number: ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 pm (regardless of registration) Race Number: ${raceNumber}`);
} else {
    console.log("See registeration desk")
}