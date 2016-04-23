// Array for Days!!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!

// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!

// ==========================================================================

// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

//Week1 Project2 

// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.
var prince = [];
prince.push('Dirty Mind', 'Controversy', '1999','Purple Rain');
console.log(prince);

// 2. Add an additional item to the beginning of your array.
prince.unshift('Lovesexy');
console.log(prince);

// 3. Remove the second and third items in your array.
prince.splice(1,2);
console.log(prince);

// 4. Add two new items after the second item.
prince.splice(1, 0, "Parade", "Around the World in a Day");
console.log(prince);

// 5. Write 'The current length of the array is....' using the .length method
console.log('The current length of the array is', prince.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things[2] = 'keyboard';
console.log(things)

// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)
var thingsString = things.join();
console.log(thingsString);

// 8. Declare a variable called lastItem using .pop() on the things array.
//    Add two new items to lastItem, one at the beginning and one at the end.
var lastItem = things;
things.pop();
lastItem.unshift('lamp');
lastItem.push('phone');
console.log(lastItem);

// 9. Create a new Array called itemLast.
//    The items should be the same as lastItem, only in reverse order.
var itemLast = lastItem.reverse();
console.log(itemLast);

// 10. Remove the first item of itemLast.
itemLast.shift();
console.log(itemLast);

// 11. Remove all items from itemLast.
itemLast = [];
console.log(itemLast);

// 12. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = firstArray.concat(secondArray); 
console.log(numberPets);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
people.splice(5,0, 'Prince','Shelia');
console.log(people);
// 14. Remove everybody except 'Andrea' and 'Ted'
people.splice(-3,4) + people.splice(0,1) + people.splice(1,1);
console.log(people);

// 15. Add a new person to the beginning of the Array
people.unshift('Morris');
console.log(people);
// 16. Arrange the items alphabetically. Store this Array as orderedPeople
var orderedPeople = people.sort();
console.log(orderedPeople);

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var array4 = array1.concat(array2,array3);
console.log(array4);


// 18. Remove "Sparky" and "White" from the above array of arrays.
array4.splice(3, 1) + array4.splice(7, 1);
console.log(array4);


// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
sortingNumbers.sort(function(a,b) {
	return a-b;
});
console.log(sortingNumbers);

// If it doesn't sort as expected, explain why.

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
var array2 = array1.splice(2,1) + array1.splice(-2,1);

console.log(array1);
// I noticed if you console.log(array2) it's a string of the two spliced items from array1

// Bonus 2 Goal:
// var array2 = ['plant', 17, 2, 'Bill', 'dog'];

