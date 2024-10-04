// -- 1 -- //
const bankAccount = {
  ownerName: "Andrew",
  accountNumber: "0000000000000000",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return;
  },
  withdraw(amount) {
    this.balance -= amount;
    return;
  },
};
bankAccount.deposit(Number(prompt("Скільки грошей ви хочете покласти на депозит?")));
alert(`Залишок ${bankAccount.balance}`);
console.log(`Залишок ${bankAccount.balance}`);
bankAccount.withdraw(Number(prompt("Скільки грошей ви хочете зняти з рахунку?")));
alert(`Залишок ${bankAccount.balance}`);
console.log(`Залишок ${bankAccount.balance}`);

// -- 2 -- //
const temperature = Number(prompt("Яка зараз температура?"));
const weather = {
  temperature,
  humidity: 45,
  windSpeed: 5,
  isWeatherBeneath0() {
    let message;
    if (this.temperature < 0) {
      message = true;
    } else {
      message = false;
    }
    return message;
  },
};
if (weather.isWeatherBeneath0() === true) {
alert("Температура нижча 0 градусів Цельсія")
} else {
    alert("Температура вища або рівна 0 градусів Цельсія")
}

// -- 3 -- //
const user = {
  name: "Andrew",
  email: "mmm@gmail.com",
  password: "1234",
  login(email, password) {
    let message;
    if (email === this.email && password === this.password) {
      message = true;
    } else {
      message = false;
    }
    return message;
  },
};
if (user.login(prompt("Введіть пошту:"), prompt("Введіть пароль:")) === true) {
  alert("Успішно!");
} else {
  alert("Не успішно!");
}

// -- 4 -- //
const movie = {
  title: "Yes",
  director: "somebody",
  year: "2054",
  rating: 10,
  isRateGood() {
    let message;
    if (this.rating > 8) {
      message = true;
    } else {
      message = false;
    }
    return message;
  },
};
console.log(movie)
if (movie.isRateGood() === true) {
    console.log("Зелений title")
} 