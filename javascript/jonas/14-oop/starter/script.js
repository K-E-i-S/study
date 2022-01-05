'use strict';

/*

// Constructor Funcitons and the new Operrator
const Person = function (firstName, birthYear) {

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // so bad!
    //this.calcAge = function () {
        //console.log(2037 - this.birthYear);
    //}
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);


// 1. New{} is created
// 2. function is called, this = {}
// 3. {}linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function () {
    console.log('Hey there');
    console.log(this);
};
Person.hey();


// Prototypes
console.log(Person.prototype);


Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

console.log(Person);
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.spices = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);

// Obuject.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 5, 4, 3, 3, 2]; // new Array []と同じことをしている
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());


////////////////////////////
// ES6 Classeso

// class expression
// const PersonCI = clsss{}

// class declaration
class PersonCI {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method
    // Methods will be added to -prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // set property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey thire ');
        console.log(this);
    }
};

const jessica = new PersonCI('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCI.prototype);

//PersonCI.prototype.greet = function () {
    //console.log(`Hey ${this.firstName}`);
//}

jessica.greet();

// 1. classes are NOT hoisted
// 2. class are first-class citizes
// 3. class are executed in strict mode


const walter = new PersonCI('walter white', 1965);

PersonCI.hey();


//////////////////////////
// Setters and Getters
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    
    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);




////////////////////
/// Object create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const srah = Object.create(PersonProto);
srah.init('Sarah', 1979);
srah.calcAge();



////////////////////
// Inheritance Between 'Classes': Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('mike', 2020, 'Computer Science');
mike.introduce();

// 確認
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);

*/

/*
////////////////////
// Inheritance Between 'Classes': ES6 Classes
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey thire ');
        console.log(this);
    }
};
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }

    intoroduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    clacAge() {
        console.log(`I'm${2037 - this.birthYear} years old, but as a student I fell more like ${2037 - this.birthYear + 10}`);
    }

};

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.intoroduce();
martha.calcAge();
*/

/*
////////////////////
// Inheritance Between 'Classes': object create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.introduce();
jay.calcAge();
*/

// Public fields
// private fields
// Public methods 
// private methods
// (there is alse the static vetrsion)
class Account {
    // 1) Public fields (Instances)
    locale = navigator.language;

    // 2) Private fields (Instance)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        //protected property
        this.#pin = pin;
        //this.movements = [];
        //this.locale = navigator.language;

        console.log(`Thank for opening an account, ${owner}`);
    }

    // 3) Public Methods


    // Public interface
    getMovements() {
        return this.#movements;
   }
    
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }


    requestLoan(val) {
        //if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loen approved`);
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Public Methods
    //#approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
}


const acc1 = new Account('Jonas', 'EUR', 1111);

//acc1._movements.push(250);
//acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1._approveLoan(1000);
console.log(acc1.getMovements());



console.log(acc1);
console.log(acc1.pin);

Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2400).withdraw(4000);
console.log(acc1.getMovements());