
const getSleepHours = (day) => {
    if (day === 'monday'){
        return 8;
    } else if(day === 'tuesday'){
        return 8;
    } else if (day === 'wednesday'){
        return 8;
    } else if (day === 'thursday'){
        return 8;
    } else if (day === 'friday'){
        return 8;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 8;
    } else {
        return 'Error';
    }

};

const getActualSleepHours = ()=> {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
    
}

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    let totalHours =  idealHours * 7;
    return totalHours;
}

// const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = ()=>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log('You slept for '+actualSleepHours+'hrs, You got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You slept for '+actualSleepHours+'hrs, You got more sleep than needed');
        console.log('You overslept for '+(actualSleepHours - idealSleepHours)+'hrs, you\'ll get lazy');
    } else if (actualSleepHours < idealSleepHours){
        console.log('You slept for '+actualSleepHours+'hrs, You have to rest some more!');
        console.log('You have '+ (idealSleepHours -actualSleepHours) +'hrs, sleep deficit for the week.');
    }
}

calculateSleepDebt();