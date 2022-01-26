///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
このチャレンジでは、GPS座標のみに基づいて国をレンダリングする関数「whereAmI」を作成します。
そのために、2番目のAPIを使用して座標をジオコーディングします。

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
1.緯度値（lat）と経度値（lng）を入力として受け取る関数 
'whereAmI'を作成します（これらはGPS座標であり、例を以下に示します）。

2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
.提供された座標の「逆ジオコーディング」を実行します。
逆ジオコーディングとは、座標を都市や国の名前などの意味のある場所に変換することを意味します。
このAPIを使用して、逆ジオコーディングを実行します：https：//geocode.xyz/api。
AJAX呼び出しは、https：//geocode.xyz/52.508,13.381？geoit = jsonの形式のURLに対して行われます。
フェッチAPIを使用して、データを取得することを約束します。
私たちが作成したgetJSON関数、つまり不正行為は使用しないでください😉

3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
3.データを取得したら、コンソールでデータを確認して、
提供された場所について受け取ったすべての属性を確認します。次に、このデータを使用して、
次のようなメッセージをコンソールに記録します。「あなたはドイツのベルリンにいます」

4. Chain a .catch method to the end of the promise chain and log errors to the console
4. .catchメソッドをpromiseチェーンの最後にチェーンし、エラーをコンソールに記録します

5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
5.このAPIを使用すると、1秒あたり3つのリクエストのみを行うことができます。
高速にリロードすると、コード403でこのエラーが発生します。これはリクエストのエラーです。
この場合、fetch（）はpromiseを拒否しないことを忘れないでください。
したがって、意味のあるエラーメッセージを使用して、自分でpromiseを拒否するエラーを作成します。


PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
6.次に、受信したデータを使用して国をレンダリングします。
したがって、ジオコーディングAPIの結果から関連する属性を取得し、
それを使用している国のAPIにプラグインします。

7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
7.前回の講義で行ったように、国をレンダリングしてエラーをキャッチします
（このコードをコピーすることもでき、同じコードを入力する必要はありません）

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
このチャレンジでは、GPS座標のみに基づいて国をレンダリングする関数「whereAmI」を作成します。
そのために、2番目のAPIを使用して座標をジオコーディングします。

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
1.緯度値（lat）と経度値（lng）を入力として受け取る関数 
'whereAmI'を作成します（これらはGPS座標であり、例を以下に示します）。

2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
.提供された座標の「逆ジオコーディング」を実行します。
逆ジオコーディングとは、座標を都市や国の名前などの意味のある場所に変換することを意味します。
このAPIを使用して、逆ジオコーディングを実行します：https：//geocode.xyz/api。
AJAX呼び出しは、https：//geocode.xyz/52.508,13.381？geoit = jsonの形式のURLに対して行われます。
フェッチAPIを使用して、データを取得することを約束します。
私たちが作成したgetJSON関数、つまり不正行為は使用しないでください😉
*/
/*
const whereAmI = function (lat, lng) {
    console.log(lat, lng);
    fetch('https://geocode.xyz/52.508,13.381?geoit=json&auth=776933478307464037712x72293')
        .then(responce => console.log(responce));
};
whereAmI(1, 1);
*/



///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
画面に表示した画像読み込み機能を構築します。

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
今回のタスクはあまり説明的ではないので、自分でいくつかのことを理解することができます。
自分で作業しているふりをします😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise. 
If this part is too tricky for you, just watch the first part of the solution.
1.imgPathを入力として受け取る関数 'createImage'を作成します。この関数は、
新しい画像を作成し（document.createElement（ 'img'）を使用）、
指定された画像パスに.src属性を設定するpromiseを返します。画像の読み込みが完了したら、
「images」クラスを使用してDOM要素に画像を追加し、Promiseを解決します。
満たされる値は、画像要素自体である必要があります。
画像の読み込み中にエラーが発生した場合（「エラー」イベント）、promiseを拒否します。
この部分が扱いにくい場合は、ソリューションの最初の部分を見てください。

PART 2
2. Comsume the promise using .then and also add an error handler;
2. .thenを使用してpromiseを作成し、エラーハンドラーを追加します。

3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
3.イメージがロードされたら、前に作成した待機関数を使用して実行を2秒間一時停止します。

4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
4. 2秒が経過したら、現在の画像を非表示にし（displayを「none」に設定）、2番目の画像をロードします（ヒント：createImagepromiseによって返される画像要素を使用して現在の画像を非表示にします。グローバルが必要になりますそのための変数😉）;

5. After the second image has loaded, pause execution for 2 seconds again;
5. 2番目のイメージがロードされたら、実行を再度2秒間一時停止します。

6. After the 2 seconds have passed, hide the current image.
6. 2秒が経過したら、現在の画像を非表示にします。

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
2. .thenを使用してpromiseを作成し、エラーハンドラーを追加します。
3.イメージがロードされたら、前に作成した待機関数を使用して実行を2秒間一時停止します。
4. 2秒が経過したら、現在の画像を非表示にし（displayを「none」に設定）、
2番目の画像をロードします
（ヒント：createImagepromiseによって返される画像要素を使用して現在の画像を非表示にします。
グローバルが必要になりますそのための変数😉）;
5. 2番目のイメージがロードされたら、実行を再度2秒間一時停止します。
6. 2秒が経過したら、現在の画像を非表示にします。
*/

/*
const imgPath = '/img/img-1.jpg'
const imgPath2 = '/img/img-2.jpg'
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 2000)
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        img = document.createElement('img');
        img.src = imgPath;
        
        img.addEventListener('load', function () {
            imgContainer.append(img)
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('image not found'))
        });
    })
};


createImage(imgPath)
    .then(img => {
        currentImage = img;
        console.log('Image 1 loaded');
        return wait(2)
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage(imgPath2);
    }).then((img) => {
        currentImage = img;
        console.log('Image 2 loaded');
        return wait(2)
    })
    .then(() => {
        currentImage.style.display = 'none';
    })
    .catch(err => console.error(err));

*/






///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
今回はasync / await（promiseが消費される部分のみ）を使用して、コーディングチャレンジ＃2を再作成する非同期関数 'loadNPause'を記述します。 2つのバージョンを比較し、大きな違いを考えて、どちらが好きかを確認します。
エラーハンドラーをテストし、
開発ツールの[ネットワーク]タブでネットワーク速度を[高速3G]に設定することを忘れないでください。

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
1.画像パスの配列 'imgArr'を受け取る非同期関数 'loadAll'を作成します。

2. Use .map to loop over the array, to load all the images with the 'createImage' function 
(call the resulting array 'imgs')
2. .mapを使用して配列をループし、
「createImage」関数を使用してすべての画像をロードします（結果の配列「imgs」を呼び出します）

3. Check out the 'imgs' array in the console! Is it like you expected?
3.コンソールの「imgs」配列を確認してください。期待通りですか？

4. Use a promise combinator function to actually get the images from the array 😉
4. promiseコンビネータ関数を使用して、配列から実際に画像を取得します😉

5. Add the 'paralell' class to all the images (it has some CSS styles).
5.すべての画像に「paralell」クラスを追加します（いくつかのCSSスタイルがあります）。

TEST DATA: 
['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. 
To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const imgPath = '/img/img-1.jpg'
const imgPath2 = '/img/img-2.jpg'
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 2000)
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        
        img.addEventListener('load', function () {
            imgContainer.append(img)
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('image not found'))
        });
    })
};

/*
createImage(imgPath)
    .then(img => {
        currentImage = img;
        console.log('Image 1 loaded');
        return wait(2)
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage(imgPath2);
    }).then((img) => {
        currentImage = img;
        console.log('Image 2 loaded');
        return wait(2)
    })
    .then(() => {
        currentImage.style.display = 'none';
    })
    .catch(err => console.error(err));
*/


const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
   
        const imgEl = await Promise.all(imgs);
        imgEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.error(err);
    }
}

const loadPause = async function () {
    try {
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch (err) {
        console.error(err);
    };
}

loadAll(imgArr);