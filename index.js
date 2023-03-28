// prompting for the prizes and names of winners
const prizes = prompt("Please enter the Prizes separated with comma ',': ")
const winners = prompt("Please enter the names of Winners separated with comma ',': ")

// creating the distribute function

function prizeDistribution (prizes, winners){
	const prizeValues = prizes.split(",").map((n) => Number(n))
	const winnersList = winners.split(",")

	// Declaring the prizeAllocation | to store all the winners with their key(names) and vales(array of prizes)
	const allocatedPrize = {}


	// assigning the names to an object with the key as the name and a value of arrays
	winnersList.reverse().forEach((name) => {
		allocatedPrize[name] = []
	})

	// The loop will help distribute the prizes to the object with their key value pairs respectively.

	prizeValues.sort((a, b) => b - a).forEach((prize) => {
		// looking for the winner with the minimum total value
		let winner = null
		let theMinTotal = Infinity;
		for(let name in allocatedPrize){
			let total = allocatedPrize[name].reduce((a,b) => a + b, 0)
			if(total < theMinTotal){
				winner = name 
				theMinTotal = total
			}
		}
		// now adding the prize or pushing it to winners list using the key
		allocatedPrize[winner].push(prize)
	});

	// storing the result in an array
	const objList = []
	for(let winner in allocatedPrize){
		objList.push(`${winner}: ${allocatedPrize[winner].join(",")}`);
	}


	// reversing my array so that they can display in order they are inputed with the winners name
	objList.reverse().forEach((value) => console.log(value))
}


// executing my code by calling the function
prizeDistribution(prizes, winners);