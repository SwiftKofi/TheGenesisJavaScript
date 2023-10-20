const companies = [
    {name: "KPMG", category: "Finance", start: 1981, end: 2004},
    {name: "Target", category: "Retail", start: 1992, end: 2008},
    {name: "Twitter", category: "Auto", start: 1999, end: 2007},
    {name: "ASDA", category: "Retail", start: 1989, end: 2010},
    {name: "Facebook", category: "Technology", start: 2009, end: 2014},
    {name: "Ali Baba", category: "Finance", start: 1987, end: 2010},
    {name: "Mercedes", category: "Auto", start: 1986, end: 1996},
    {name: "OpenAI", category: "Technology", start: 2011, end: 2016},
    {name: "Walmart", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const numbers = [9, 12, 81, 144];


// EX1.0 LOOPING OVER AN ARRAY USING A FOR LOOP
// for(let i=0; i < companies.length; i++) {
//   console.log(companies[i])
// }


// ##################################################################################
// # USING A FOREACH METHOD TO LOOP OVER AN ARRAY - FOREACH - FOREACH - FOREACH     #
// ##################################################################################

//EX1.1 - THIS CODE PERFORMS THE SAME TASK AS EX1.0
companies.forEach(function(company){
  // console.log(company)

  // To get company name
  // console.log(company.name)

  // To get category
  // console.log(company.category)

  // To get start date
  // console.log(company.start)

  // To get end date
  // console.log(company.end)
});



// #################################################################################
// # USING A FILTER METHOD TO LOOP OVER AN ARRAY - FILTER - FILTER - FILTER        #
// #################################################################################

//EX1.3  - USING A FOR LOOP OVER THE AGES ARRAY 
let legalDrinkingAge_1 = []
for(let i =0; i < ages.length; i++){
  if (ages[i] >= 21) {
    legalDrinkingAge_1.push(ages[i]);
  }
}
// console.log(legalDrinkingAge_1)

//EX1.4 - DOING THE SAME THING IN EX1.3 USING A FILTER METHOD
const legalDrinkingAge_2 = ages.filter(function(age){
  if(age >= 21){
    return true;
  }
})
// console.log(legalDrinkingAge_2)

//=======================================================================
//1.5 - LOG ALL RETAIL COMPANIES TO THE CONSOLE
//=======================================================================

// const allRetailCompanies = companies.filter(function(retailCompany){
//   if(retailCompany.category === 'Retail'){
//     return true;
//   }
// })

const allRetailCompanies = companies.filter(retailCompany => retailCompany.category === 'Retail');
// console.log(allRetailCompanies)

//EX1.6 - Filter Companies that started in the 80s
const companiesOfThe80s = companies.filter(the80s => (the80s.start >= 1980 && the80s.start < 1990));
// console.log(companiesOfThe80s)

//EX1.7 - Filter companies that lasted more than 10years
const lasted10yrs = companies.filter(tenYears => (tenYears.end - tenYears.start >= 10));
// console.log(lasted10yrs)


// #################################################################################
// # USING A MAP METHOD TO LOOP OVER AN ARRAY - MAP - MAP - MAP- MAP - MAP         #
// #################################################################################

// EX1.8 - GET COMPANY NAME, START DATE AND END DATE
const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
// console.log(testMap)

// EX1.8.1 - USING ES6 TO REWRITE EX1.8
const testMap_R = companies.map(company_R => `${company_R.name} [${company_R.start} - ${company_R.end}]`);
// console.log(testMap_R)

// EX1.9 - FIND THE SQUARE ROOT OF THE NUMBERS IN THE AGES ARRAY
const ageSquare = ages.map(age => Math.sqrt(age));
// console.log(ageSquare)

// EX1.9.1 - DOUBLE ALL NUMBERS IN AGES ARRAY
const doubleElem = ages.map(doubleAge => doubleAge * 2);
// console.log(doubleElem)

// EX1.9.2 - FIND THE SQUAREROOT OF ALL ELEMENTS IN AGES ARRAY & MULTIPLY ITS VALUE BY 2
const doubleAssignment = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
// console.log(doubleAssignment)


// EX1.9.3 - FIND THE SQRT & MULTIPLY THE SQRT VALUE BY 2 
const doubleOperation_1 = numbers
    .map(num => Math.sqrt(num))
    .map(num => num * 2)
// console.log(doubleOperation_1)




// #################################################################################
// # USING A SORT METHOD TO LOOP OVER AN ARRAY - SORT - SORT - SORT- SORT - SORT   #
// #################################################################################

// EX2.0 - SORT THE COMPANIES BY THE EARLIEST START DATE
const sortedCompanies = companies.sort(function(c1, c2){
  if(c1.start > c2.start){
    return 1;
  } else {
    return -1;
  }
});
// console.log(sortedCompanies)

//EX2.0.1 - USING ES6 STYLE & TERNARY OPERATOR ON EX2.0
const sortedCompanies_ES6 = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
// console.log(sortedCompanies_ES6)


//EX2.1 - SORT AGES IN ASCENDING ORDER
const sortAges_asc = ages.sort((a,b) => a - b);

//EX2.1.1 - SORT AGES IN DESCENDING ORDER
const sortAges_dsc = ages.sort((a,b) => b - a);
// console.log(sortAges_dsc)


// #################################################################################
// # USING A REDUCE METHOD TO LOOP OVER AN ARRAY - REDUCE - REDUCE - REDUCE- REDUCE#
// #################################################################################

// USING A FOR LOOP
let ageSum=0;
for (let i=0; i<ages.length; i++) {
  ageSum += ages[i];
}
// console.log(ageSum)

//EX2.2 ADDING ALL THE ELEMENTS IN THE AGES ARRAY
const ageSumReduce = ages.reduce((total, age) => total + age, 0);
// console.log(ageSumReduce)

// EX2.3 GET TOTAL YEARS OF COMPANY
const totalYears = companies.reduce(function(total, company){
  return total + (company.end - company.start)
}, 0);
// console.log(totalYears)

// EX2.3.1: GET TOTAL YEARS OF COMPANY IN ES6 FORMAT
const totalYears_es6 = companies.reduce((total_es6,company_es6) => total_es6 + (company_es6.end - company_es6.start),0);
// console.log(totalYears_es6);


//==========================================================================
// COMBINED METHODS | COMBINED METHODS | COMBINED METHODS | COMBINED METHODS 
//==========================================================================

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((a,b) => a + b, 0);
  
// console.log(combined)