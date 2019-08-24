let num = 266219;

// Вывести в консоль произведение (умножение) цифр num 
let arr = num.toString().split('');
let sum = 1;

for (let i=0; i<arr.length; i++) {
    sum = sum * parseInt(arr[i]);
}

console.log(sum);

// Полученный результат возвести в степень 3, используя только 1 оператор
// Вывести на экран первые 2 цифры полученного числа

let degree = (sum ** 3);
console.log(degree);
console.log(degree.toString().substring(0,2));