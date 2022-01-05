
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
1.チャレンジ＃3を再作成しますが、今回はES6クラスを使用します。「CarCl」クラスの「EVCl」子クラスを作成します。

2. Make the 'charge' property private;
2.「charge」プロパティをプライベートにします。

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
3.このクラスの「accelerate」メソッドと「chargeBattery」メソッドをチェーンする機能を実装し、
「CarCl」クラスの「brake」メソッドも更新します。彼らはあごを実験します！

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class carCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        return console.log(`${this.make} going at ${this.speed} km/h` );
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h, ` );
        return this;
    }
};

class evCl extends carCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    };


    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}` );
        console.log(this);
        return this;
    }
};


const tesla = new evCl('Tesla', 120, 23);

console.log(tesla);
tesla.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
1.コンストラクター関数を使用して、電気自動車（EVと呼ばれる）を自動車のCHILD「クラス」として実装します。
メーカーと現在の速度に加えて、EVには現在のバッテリー充電量（％）もあります（「充電」プロパティ）。

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
2.引数「chargeTo」を取り、バッテリー充電を「chargeTo」に設定する「chargeBattery」メソッドを実装します。

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
3.車の速度を20増加させ、充電を1％減少させる「加速」メソッドを実装します。
次に、次のようなメッセージを記録します。 'テスラは時速140kmで走行し、22％の料金がかかります';

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
4.電気自動車のオブジェクトを作成し、「加速」、「ブレーキ」、「chargeBattery」（90％まで充電）
を呼び出して実験します。 「加速」するとどうなるかに注意してください。
ヒント：ポリモーフィズムの定義を確認してください

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const carCl = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

const evCl = function (make, speed, charge) {
    carCl.call(this, make, speed);
    this.charge = charge;
}

evCl.prototype = Object.create(carCl.prototype);

evCl.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    
};

evCl.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    return console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

evCl.prototype.brake = function () {
    return this.speed -= 5;
}

const tesla = new evCl('Tesla', 120, 23);

console.log(tesla);
console.log(tesla.speed);
console.log(tesla.brake());
console.log(tesla.chargeBattery(90));
console.log(tesla.charge);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
チャレンジ1を再作成しますが、今回はES6クラスを使用します。

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
2.現在の速度をmi / hで返す「speedUS」というゲッターを追加します（1.6で割ります）。

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
3.現在の速度をmi / hで設定する「speedUS」というセッターを追加します
（ただし、入力に1.6を掛けて、値を格納する前にkm / hに変換します）。

4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
4.新しい車を作成し、加速とブレーキの方法、およびゲッターとセッターを試してみてください。

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class Car2 {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        return this.speed + 10;
    };

    brake () {
        return this.speed - 5;
    };

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        return this.speed = speed * 1.6;
    }
}

const ford = new Car2('Ford', 120);
console.log(ford);
console.log(ford.accelerate());
console.log(ford.brake());
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
*/


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
1.コンストラクター関数を使用してCarを実装します。
車にはメーカーとスピードの特性があります。速度プロパティは、車の現在の速度（km / h）です。

2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console;
2.車の速度を10上げる「加速」メソッドを実装し、新しい速度をコンソールに記録します。

3. Implement a 'brake' method that will decrease the car's speed by 5, 
and log the new speed to the console;
3.車の速度を5下げる「ブレーキ」メソッドを実装し、新しい速度をコンソールに記録します。

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times 
on each of them.
4. 2つの車のオブジェクトを作成し、それぞれで「加速」と「ブレーキ」を複数回呼び出してみます。

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (name, speed) {
    this.name = name;
    this.speed = speed;
    
};

Car.prototype.accelerate = function () {
    return this.speed + 10;
};

Car.prototype.brake = function () {
    return this.speed - 5;
};

const carBmw = new Car('BMW', 120);
const carMercedes = new Car('Mercedes', 95);

console.log(carBmw);
console.log(carBmw.accelerate());
console.log(carBmw.brake());
console.log(carMercedes);
*/