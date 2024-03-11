// Задание 1
let admin;
let name = "Джон";
admin = name;
alert(admin);

// Задание 2
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b);

// Задание 3
for(let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Задание 4
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// Задание 5
do {
    let n = prompt("Введите число, большее 100:", 0);
} while (n < 100 && n);

// Задание 6
let n = prompt("Введите границу интервала:");
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
    console.log(i);
    }
}