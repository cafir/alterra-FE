let firstName = 'Reza';
let lastName = 'Firhan';

//merge string
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//string length
let fullLength = fullName.length
console.log(fullLength);

//get first character
let getLastIndex = fullName[fullLength -1];
console.log(getLastIndex);

let getLastChar = fullName.charAt(fullLength -1);
console.log(getLastChar);

//number to string
let number = 123
let numToString = String(number);
console.log(numToString)

let numbertoString = number.toString();
console.log(numbertoString)

console.log(toString)

//string to number
let string = '123';
let stringToNumber = parseInt(string);
console.log(stringToNumber)

//object
let obj = {
    name: 'Reza',
    umur: 30,
    telefon: '0812',
    status: true
};

console.log(obj)
console.log(obj.name)
console.log(obj['name'])

//replace
let changeName = (obj['name'] = 'Eca')
let changeName2 = (obj.name = 'Cafir')

console.log(changeName)
console.log(changeName2)

//typeof
let type = typeof obj
console.log(type)

let iceCream = {
    flavor: 'Mint',
    cast: 'Cone',
    price: '2.5',
    ingredient: {
        a: 'a',
        b: 'b'
    },
    location: ['Jakarta', 'Bandung']
};

console.log(iceCream.ingredient)
console.log(iceCream.location)

console.log(iceCream.ingredient.a)
console.log(iceCream.location[1])

iceCream.location.push('Malang')
console.log(iceCream.location)

//call key
let user = {
    name: 'Eca',
    age: 27,
    status: true
};

for (let key in user) {
    console.log(key +' '+ user[key])
};

//clone
let clone = Object.assign({}, user);

clone.name = 'Cafir';
console.log(clone)

//clone + new key
let clone1 = Object.assign({newKey: 'asd'}, user);
console.log(clone1)

let clone2 = Object.assign(user, {newKey: 'asd'})
console.log(clone2)

//delete
//delete user.status
console.log(user)

let pembanding = ['b', 'c'];
pembanding.forEach((e) => delete iceCream.ingredient[e]);
console.log(iceCream.ingredient)

//forEach
iceCream.location.forEach((e) => {
    console.log(iceCream.location.e)
})

//object
for (let key in user) {
    console.log(user[key]);
}

//array
let array = [
    'a',
    'b',
    'c'
]

array.map((a, index) => {
    console.log(index + ' ' + a)
})

//replace
let multiLine = 'firstLine secondLine thirdLine';
console.log(multiLine.replace(/ /g, "\n"));

//regexp [A-Z]gi blabla nanti aja belajar ini

