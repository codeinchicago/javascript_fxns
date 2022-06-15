/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/


function toCelcius(num){
    var cel = (num-32) * 5/9;
    return cel
}

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User{
    constructor(username, password) {
        this.username = username;
        this.password = password;

    }
    change(oldpassword, newpassword){
        if(oldpassword == this.password){
            this.password = newpassword
        }
        else{
            console.log('Wrong password.')
        }
    }
}


let me = new User('me','guess');
me.change('sdfadsdfsafsd', 'sdffdssfdsdf')
me.change('guess', 'now')
console.log(me);

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

const one = [-10, -3, 4, -2, 8, 9, -3]

function isNegative(number){
    if(number < 0){
        return number
    }
}

function squareNegatives(arr){
    const squared = []
    squared.push((arr.forEach(isNegative)))
    return squared
}

for (let i = 0; i<(exerciseOneArr.length -1); i++){
    if(exerciseOneArr[i] + 1 !== exerciseOneArr[i+1]) {
    console.log(i+1)}
  }


names.forEach(callBack);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

// Array.prototype.filter()
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver'];
console.log(cities);

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C'
}

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);
let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);




function isNegative(number){
    if(number < 0){
        return number
    }
}

class Animal{
    constructor(name, energy=10){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        this.energy += amount;
        console.log(`${this.name} is eating and energy is now ${this.energy}`)
    }

    sleep(amount){
        this.energy += amount;
        console.log(`${this.name} is sleeping and energy is now ${this.energy}`)
    }

    play(amount){
        this.energy -= amount;
        console.log(`${this.name} is playing and energy is now ${this.energy}`)
    }
}

let buddy = new Animal('Buddy', 10);
buddy.eat(10);
buddy.play(5);
console.log(buddy);

let leo = new Animal('Leo', 20);
leo.eat(5);
leo.play(15);
console.log(leo);
