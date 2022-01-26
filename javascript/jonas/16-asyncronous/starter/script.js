'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');




///////////////////////////////////////


const renderCountry = function (data, className = '') {

    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${Object.values(data.flags)[1]}"/>
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            </div>
            </article>
        `;


    countriesContainer.insertAdjacentHTML('beforeend', html);
    //countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    //countriesContainer.style.opacity = 1;
}

//const getCountryAndNeighbour = function (country) {

//// AJAX call country 1
//const request = new XMLHttpRequest();
//request.open('GET', `https://restcountries.com/v2/name/${country}`);
//request.send();

//request.addEventListener('load', function () {
//const jsonDatas = JSON.parse(this.responseText);
//const data = jsonDatas[0];
//console.log(data);

//// Render country 1
//renderCountry(data);

//// get neigbour country (2) 
//const [neighbour] = data.borders;

//// get neigbour country (2) 
//const request2 = new XMLHttpRequest();
//request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//request2.send();

//request2.addEventListener('load', function () {
//const data2 = JSON.parse(this.responseText);
//renderCountry(data2, 'neighbour');
//});



//});

//};

//getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('usa');



//const request = new XMLHttpRequest();
//request.open('GET', `https://restcountries.com/v2/name/${country}`);
//request.send();
//const request = fetch(`https://restcountries.com/v2/name/portugal`);
//console.log(request);

//const getCountryData = function (country) {
//fetch(`https://restcountries.com/v2/name/${country}`).then(function (response) {
//console.log(response);
//return response.json();
//}).then(function (data) {
//console.log(data);
//renderCountry(data[0]);
//})
//};

//getCountryData('portugal');

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

//const getCountryData = function (country) {
    //fetch(`https://restcountries.com/v3.1/name/${country}`)
        //.then((response) => {
            //console.log(response);

            //if (!response.ok)
                //throw new Error(`Country not found (${response.status})`);

            //return response.json();
        //})
        //.then((data) => {

            //renderCountry(data[0]);
            //const neighbour = data[0].borders[0];

            //if (!neighbour) return

            //// country 2
            //return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        //})
        //.then(response => {
            //if (!response.ok)
                //throw new Error(`Country not found (${response.status})`);
            //return response.json()
        //})
        //.then((data) => {
            //return renderCountry(data[0], 'neighbour')
        //})
        //.catch(err => {
            //console.error(`${err}`);
            //renderError(`Something went wrong ${err.message}. Try again!`);
        //})
        //.finally(() => {
            //countriesContainer.style.opacity = 1;
        //});
//};

/*

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
        .then((data) => {

            console.log(`data`);
            console.log(data);
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) throw new Error('No neighbour found!');

            // country 2
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
        })
        .then((data) => {
            return renderCountry(data[0], 'neighbour')
        })
        .catch(err => {
            console.log(Object.getOwnProperty(err));
            console.log(err);
            console.log(err.stack);
            console.error(err.message);
            renderError(`Something went wrong ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    getCountryData('portugal');
})

getCountryData('australia');
*/

/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1')
    .then(res =>console.log(res));
console.log("Test end");

Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 100; i++) { }
    console.log(res);
});
console.log('Test end');
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lotter draw is happening');
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You WIN');
        } else {
            reject('You lost your money');
        }
    }, 2000)
});

lotteryPromise
    .then(res => console.log(res))
    .catch(err => console.error(err));


const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    })
};

wait(2)
    .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => console.log('I waited for 1 seconds'));


Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').then(x => console.error(x));
*/

/*
const getposition = function () {
    return new Promise(function (resolve, reject) {
        //navigator.geolocation.getCurrentPosition(
            //position => resolve(position),
            //err => reject(err)
        //);
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

getposition().then(pos => console.log(pos));
*/
    //fetch(`https://restcountries.com/v3.1/name/${country}`)


/*
const getposition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};


const whereAmI = async function (country) {
    // Geolocation
    const pos = await getposition();
    const 
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
    const data = await res.json();
    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;

};
whereAmI('portugal');
console.log('FIRST');
*/

/*
const get3Countries = async function (c1, c2, c3) {
    try {
        //const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        //const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        //const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),

        ]);
        console.log(data);
        console.log(data.map(d => d[0].capital));

    } catch (err) {
        console.error(err);
    }

};

get3Countries('portugal', 'canada', 'tanzania');
*/

// Promise.race
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`),
    ]);
    console.log(res[0]);
    console.log(res[0].name);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long'))
        }, sec * 1000)
    })
}

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/tanzania`),
    timeout(5),
])
    .then(res => console.log(res[0].name))
    .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));

// Promise.any[ES2021]
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));