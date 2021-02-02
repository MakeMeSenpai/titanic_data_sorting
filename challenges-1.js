// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.

function getTotalPassengers(data) {
	// gets the length of our database
	return data.length;
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	/* survivors uses a db.filter, p is passed as a temporary var and represents passengers.
	This is setup in a similar way as data.fields.survived, and checks if our db returns 'Yes'*/
	const survivors = data.filter(p => p.fields.survived === 'Yes');
	return survivors.length;
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualtiesCount(data) {
	const dead = data.filter(p => p.fields.survived === 'No');
	return dead.length;
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

function countPassengersInClass(data, pclass) {
	const hasClass = data.filter(p => p.fields.pclass == (pclass))
	return hasClass.length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

function getSurvivorCountForClass(data, pclass) {
	const survivedClass = data.filter(p => p.fields.pclass == (pclass)).filter(p => p.fields.survived === 'Yes')
	return survivedClass.length
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

function getCasualtiesCountForClass(data, pclass) {
	const deadClass = data.filter(p => p.fields.pclass == (pclass)).filter(p => p.fields.survived === 'No')
	return deadClass.length
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. maps change data into numbers

function getMinAge(data) {
	const age = data.filter(p => p.fields.age != undefined).map(p => p.fields.age)
	const minAge = Math.min(...age)
	return minAge
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

function getMaxAge(data) {
	const age = data.filter(p => p.fields.age != undefined).map(p => p.fields.age)
	const maxAge = Math.max(...age)
	return maxAge
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

function getEmbarkedCount(data, embarked) {
	const hasEmbarked = data.filter(p => p.fields.embarked == (embarked))
	return hasEmbarked.length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

function getMinFare(data) {
	const fare = data.filter(p => p.fields.fare != undefined).map(p => p.fields.fare)
	const minFare = Math.min(...fare)
	return minFare
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

function getMaxFare(data) {
	const fare = data.filter(p => p.fields.fare != undefined).map(p => p.fields.fare)
	const maxFare = Math.max(...fare)
	return maxFare
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

function getPassengersByGender(data, gender) {
	const sex = data.filter(p => p.fields.sex == (gender))
	return sex.length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

function getSurvivorsByGender(data, gender) {
	const survivedSex = data.filter(p => p.fields.sex == (gender)).filter(p => p.fields.survived === 'Yes')
	return survivedSex.length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survive by gender. 

function getCasualtiesByGender(data, gender) {
	const deadSex = data.filter(p => p.fields.sex == (gender)).filter(p => p.fields.survived === 'No')
	return deadSex.length
}

// 15 --------------------------------------------------------------
// Return the median age from passengers. sort, sorts our list of numbers

function getMedianAge(data) {
	const age = data.filter(p => p.fields.age != undefined).map(p => p.fields.age).sort( (a, b) => a - b)
	const medianAge = age[age.length / 2]
	return medianAge
}

// 16 --------------------------------------------------------------
// Return the average age by gender. reduce takes a callback function and a starting value.

function getAverageAgeByGender(data, gender) {
	const sexAge = data.filter(p => p.fields.sex == (gender)).filter(p => p.fields.age != undefined).map(p => p.fields.age)
	const average =  sexAge.reduce((sum, p) => sum + p, 0) / sexAge.length
	return average
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualtiesCount = getCasualtiesCount
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualtiesCountForClass = getCasualtiesCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualtiesByGender = getCasualtiesByGender
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender