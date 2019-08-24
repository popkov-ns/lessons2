let money = 50000,
    income = 'Фриланс - 30000 рублей в месяц',
    addExpenses = 'Дорога, Машина, Еда',
    deposit = true,
    mission = 300000,
    period = 12;

// Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// Вывести в консоль длину строки income
console.log(income.length);

// Вывести в консоль “Период (period) месяцев” и “Цель заработать (mission) рублей”
console.log('Период' + ' ' + period + ' ' + 'месяцев');
console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');

// Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(', '));

// Объявить переменную budgetDay и присвоить дневной бюджет, вывести в консоль результат и остаток от деления
let budgetDay;
console.log(budgetDay = money / 30);
console.log(budgetDay = money % 30);