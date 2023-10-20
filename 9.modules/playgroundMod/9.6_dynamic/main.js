console.log('Learning modules for {Dynamic-Module...}: ')

// METHOD 1
// if(true){
//     const {sayHi, sayHola} = await import ('./greetings.js');
//     sayHi();
//     sayHola();
// }

// METHOD 2
const {sayHi, sayHola } = await import('./greetings.js');
const promises = Promise.all(
    [
        await import('./greetings.js'),
        await import('./calc.js')
    ]
);

promises.then(result => {
    console.log(result[1].sum(2,3));
})
