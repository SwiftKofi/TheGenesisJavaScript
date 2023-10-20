// QU1)
let isNightTime=true;

const answer = isNightTime ? 'Turn on the lights!' : 'Turn off the lights bro!!!';

// QU2
let isCorrect = false;
const answer2 = isCorrect ? 'Correct!' : 'Incorrect!';

// QU3
let favoritePhrase = 'Provided this is not empty';
const answer3 = favoritePhrase ? 'I love that!' :' I don\'t love that!';

// QU4
let trafficLight = 'green';
const trafficResult = trafficLight === 'red'?'Stop' : trafficLight === 'yellow'? 'Slow down' : trafficLight === 'green'?'Go' : 'Caution, unknown!';

// QU5
let season = 'winter';
let seasonResult = season === 'spring' ? 'It\'s spring! The trees are budding!' : season === 'winter' ? ('It\'s winter! Everything is covered in snow.') : 'Invalid season.';

// QU6 
let groceryItem = 'papaya';
let groceryItemResult  = groceryItem === 'tomato' ? 'Tomatoes are $0.49': groceryItem === 'papaya' ? 'Papayas are $1.29' : 'Invalid item';

// QU7

const athleteFinalPosition = ' place';
switch (athleteFinalPosition){
    case 'first place':
        // console.log('You get the gold medal!');
        break;
    case 'second place':
        // console.log('You get the silver medal!');
        break;
    case 'third place':
        // console.log('You get the bronze medal!');
        break;
    default:
        // console.log('No medal awarded.');
        break;
}

//QU8
let tip = 0;
let bill = 30;
let finalValue  = bill + tip

let TipCalulator = bill >= 50 && bill === 300 ? tip = bill * 0.15 : bill > 300 ? tip = bill * 0.2: 'No tip, this bill is less than £50';
