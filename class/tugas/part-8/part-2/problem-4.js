
const listBrands = [
    {
      brand: 'H&M',
      processTime: 7000
    },
    {
      brand: 'Zara',
      processTime: 4000
    },
    {
      brand: 'Uniqlo',
      processTime: 5000
    },
    {
      brand: 'Pedro',
      processTime: 9000
    },
    {
      brand: 'The Executive',
      processTime: 10000
    },
    {
      brand: 'Adidas',
      processTime: 8000
    },
    {
      brand: 'Nike',
      processTime: 7000
    },
    {
      brand: 'Puma',
      processTime: 6000
    },
    {
      brand: 'Converse',
      processTime: 6000
    },
    {
      brand: 'Mark & Spencer',
      processTime: 9000
    },
];

console.log('loading starts...');

function randomizeBrand(typeApparel) {
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 9)
        

        setTimeout(() => {
            
            let string = `I wear ${typeApparel} from ${listBrands[random].brand}`
            resolve(string)
        }, listBrands[random].processTime)
    })
}

let arr = [];

function addAll() {
    randomizeBrand('clothes')
    .then(message => {
        arr.push(message)
        return randomizeBrand('pants')
    })
    .then(message => {
        arr.push(message)
        return randomizeBrand('shoes')
    })
    .then(message => {
        arr.push(message)
        return randomizeBrand('hat')
    })
    .then(message => {
        console.log(arr.join(' & '))
    })
    .finally(() => {
        console.log('loading end...')
    })
}

addAll();




