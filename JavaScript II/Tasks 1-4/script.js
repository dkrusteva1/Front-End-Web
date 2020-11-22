//task 1
/*Условие:
		Даден е следния код:

		var person = {
			_salary: 1000,
			getSecretSalaryInfo: function (){
				return this._salary;
			}
		};

		var stoleSalaryInfo = person.getSecretSalaryInfo;

		console.log(person.getSecretSalaryInfo()); //принтира 1000
		console.log(stoleSalaryInfo()); //принтира undefined

        Поправете кода така, че и двете console.log да принтират числото 1000.	*/

var person = {
    _salary: 1000,
    getSecretSalaryInfo: function() {
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo()); //принтира 1000
console.log(stoleSalaryInfo); //принтира undefined

//task 2
/*Задача 2:
---------------------------------------------------------------------------------------
	Условие: 
		Създайте клас Person с две свойства: 
			1) "name" - различно за всяка инстанция 
			2) "planet" = "Земя" - общо за всяка инстанция
		Конструкторът да приема само един параметър - "Name"

		Добавете функция, която принтрира "Здравей [Чък Норис] от планетата [Земя]"
        Направете три инстанции на обекта и извикайте функцията.*/

class Person {
    constructor(name) {
        this.name = name;
        this.planet = "Земя";
    }
    print() { console.log("Здравей " + this.name + " от планетата " + this.planet); };
}

const person1 = new Person("Чък Норис");
person1.print();
const person2 = new Person("Ivan");
person2.print();
const person3 = new Person("Cvetomir");
person3.print();

//task 3
/*
Условие:
		Да се създаде клас Item с две свойства - име и отстъпка (в проценти).
		Нека основната цена е 1000 и тя се връща от метод на прототипа.
		Създайте метод на инстанцията, който изчислява цената, базирано на основната цена,
		прилагайги към нея дадената отстъпка.
*/

class Item {
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }

    caclulatePrice() { console.log(parseInt(this.getPrice()) - (parseInt(this.getPrice()) * parseInt(this.discount)) / 100); };
}
Item.prototype.getPrice = function() { return 1000; };

const one = new Item(1, 50);
one.caclulatePrice();


//task 4
/*
Условие: 
		С помощта на closure и клас, направете задача 1, така че _sallary да е наистина
		private.
*/

function Person(salary) {
    var newSalary = salary;

    this.getSalary = function() {
        return newSalary;
    }
}

const ivan = new Person(1000);
ivan.getSalary();