'use strict';

// Спросить у пользователя “Ваш месячный доход?” и результат сохранить в переменную "money"
let money = prompt('Ваш месячный доход?');

// // Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
// // Cохранить в переменную addExpenses, вывести в консоль в виде массива 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Возмодные расходы:', addExpenses.split(','));

// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить переменной deposit (булевое значение true/false)
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('Есть ли депозит в банке:', deposit);

// Вывести в консоль типы данных money, income, deposit
console.log('Переменная money:', typeof money);
console.log('Переменная income:', typeof income);
console.log('Переменная deposit:', typeof deposit);

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные  
// “Какие обязательные ежемесячные расходы у вас есть?” и “Во сколько это обойдется?”  
let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let cost2 = prompt('Во сколько это обойдется?');

// Вычислить доход за месяц, сохранить в переменную budgetMonth и вывести результат в консоль
let budgetMonth = parseInt(money) - parseInt(cost1) - parseInt(cost2);
console.log('Доход за месяц:', budgetMonth);

// Посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону
let mission = 300000;
console.log('Цель будет достигнута за (месяцев)', Math.ceil(mission / budgetMonth));

// Поправить budgetDay учитывая бюджет, а не доход. Вывести в консоль округлив в меньшую сторону
let budgetDay = budgetMonth / 30;
console.log('Цель будет достигнута за (дней)', Math.floor(mission / budgetDay));

// Конструкция условий
if (budgetDay > 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay > 300) {
    console.log('Средний уровень дохода');
} else if (budgetDay >= 0) {
    console.log('Низкий уровень дохода');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}