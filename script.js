// - `coord`
//     - `coord.lon` City geo location, longitude
//     - `coord.lat` City geo location, latitude
// - `weather` (more info Weather condition codes)
//     - `weather.id` Weather condition id
//     - `weather.main` Group of weather parameters (Rain, Snow, Extreme etc.)
//     - `weather.description` Weather condition within the group
//     - `weather.icon` Weather icon id
// - `base` Internal parameter
// - `main`
//     - `main.temp` Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     - `main.pressure` Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
//     - `main.humidity` Humidity, %
//     - `main.temp_min` Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     - `main.temp_max` Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     - `main.sea_level` Atmospheric pressure on the sea level, hPa
//     - `main.grnd_level` Atmospheric pressure on the ground level, hPa
// - `wind`
//     - `wind.speed` Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
//     - `wind.deg` Wind direction, degrees (meteorological)
// - `clouds`
//     - `clouds.all` Cloudiness, %
// - `rain`
//     - `rain.1h` Rain volume for the last 1 hour, mm
//     - `rain.3h` Rain volume for the last 3 hours, mm
// - `snow`
//     - `snow.1h` Snow volume for the last 1 hour, mm
//     - `snow.3h` Snow volume for the last 3 hours, mm
// - `dt` Time of data calculation, unix, UTC
// - `sys`
//     - `sys.type` Internal parameter
//     - `sys.id` Internal parameter
//     - `sys.message` Internal parameter
//     - `sys.country` Country code (GB, JP etc.)
//     - `sys.sunrise` Sunrise time, unix, UTC
//     - `sys.sunset` Sunset time, unix, UTC
// - `timezone` Shift in seconds from UTC
// - `id` City ID
// - `name` City name
// - `cod` Internal parameter




// let existedContent = document.getElementById('content-area'); // '기존 작성 트윗' or '필터드 트윗'으로 바뀌는 HTML부분 선정 위해
// let newTweetGen = document.getElementById('execute-button'); // '새 트윗 추가'에 대한 온클릭 실행 위해
// let randomTweetGen = document.getElementById('refresh-button'); // '기존 작성 트윗에 랜덤 트윗 추가'에 대한 온클릭 실행 위해
// let tweetShowById = document.getElementsByClassName('output-username'); // '필터드 트윗' + '리프레시 버튼 변경'에 대한 온클릭 실행 위해
// let refreshBtn = document.getElementById('check-area'); // '리프레시 버튼' + 'goback 버튼'이 변경되는 HTML부분 선정 위해
// let goback; // 필터드 트윗 실행 후 'goback button'을 할당하고 온클릭 실행을 위해
// let userMessageTimeArr = []; // 모든 유저,메세지,시간의 어레이 지정을 위해
// let allTweetArr = []; // 위에서 지정된 어레이를 모으는 어레이
// let string = ''; // 처음에는 최초 트윗 5개, 나중에는 새 트윗과 랜덤 트윗 덮어서 실행하기 위해 + '필터드 트윗'후 화면을 원래 상태로 다시 돌리기 위해
// let filteredString = ''; // '필터드 트윗' 담는 스트링 선정을 위해
// let newUser = document.getElementById('input-username-box'); // '새 트윗 유저네임' 값을 받아오기 위해
// let newMessage = document.getElementById('input-message-box'); // '새 트윗 메세지' 값을 받아오기 위해

// function now() {

//     var date = new Date();
//     var yyyy = date.getFullYear();
//     var MM = (date.getMonth() + 1);
//     var dd = date.getDate();

//     if (dd < 10)
//         dd = "0" + dd;

//     if (MM < 10)
//         MM = "0" + MM;

//     var cur_day = yyyy + "-" + MM + "-" + dd;

//     var hh = date.getHours()
//     var mm = date.getMinutes()
//     var ss = date.getSeconds();

//     if (hh < 10)
//         hh = "0" + hh;

//     if (mm < 10)
//         mm = "0" + mm;

//     if (ss < 10)
//         ss = "0" + ss;

//     return cur_day + " " + hh + ":" + mm + ":" + ss;
// }

// for (let i = 0; i < DATA.length; i++) {
//     string = '<li class="tweet-content"><button class="output-username">' + DATA[i].user + '</button><span class="time">' + DATA[i].created_at + '</span><div class="content">' + DATA[i].message + '</div><div class="dashline">____________________________________________________________________________________</div></li>' + string;
//     userMessageTimeArr.push(DATA[i].user);
//     userMessageTimeArr.push(DATA[i].created_at);
//     userMessageTimeArr.push(DATA[i].message);
//     allTweetArr.push(userMessageTimeArr);
//     userMessageTimeArr = [];
// }

// existedContent.innerHTML = '<ul>' + string + '</ul>'

// function newTweetGenerator () {
//     if (newUser.value !== '' && newMessage.value !== '') {
//         let newString = '<li class="tweet-content"><button class="output-username">' + newUser.value + '</button><span class="time">' + now() + '</span><div class="content">' + newMessage.value + '</div><div class="dashline">____________________________________________________________________________________</div></li>';
//         string = newString + string;
//         existedContent.innerHTML = '<ul>' + string + '</ul>'
//         tweetShowById = document.getElementsByClassName('output-username');
//         for (let j = 0; j < tweetShowById.length; j++) {
//             tweetShowById[j].onclick = filteredTweetGenerator;
//         }
//         userMessageTimeArr.push(newUser.value);
//         userMessageTimeArr.push(now());
//         userMessageTimeArr.push(newMessage.value);
//         allTweetArr.push(userMessageTimeArr);
//         userMessageTimeArr = [];
//     }
//     if (newUser.value === '' || newMessage.value === '') {
//         alert('Please check Username or Message');
//     }
// };

// function randomTweetGenerator () {
//     let tweet = generateNewTweet();
//     let randomString = '<li class="tweet-content"><button class="output-username">' + tweet.user + '</button><span class="time">' + now() + '</span><div class="content">' + tweet.message + '</div><div class="dashline">____________________________________________________________________________________</div></li>';
//     string = randomString + string;
//     existedContent.innerHTML = '<ul>' + string + '</ul>'
//     tweetShowById = document.getElementsByClassName('output-username');
//     for (let j = 0; j < tweetShowById.length; j++) {
//         tweetShowById[j].onclick = filteredTweetGenerator;
//     }
//     userMessageTimeArr.push(tweet.user);
//     userMessageTimeArr.push(now());
//     userMessageTimeArr.push(tweet.message);
//     allTweetArr.push(userMessageTimeArr);
//     userMessageTimeArr = [];
// };

// function filteredTweetGenerator (e) {
//     refreshBtn.innerHTML = '<button id="goback-button"><img id="goback-image" src="https://png2.kisspng.com/dy/253118c30f177ae86344533307cf284f/L0KzQYm3VsI0N6V7gJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tflkd58yfNd8aXfxPbL5kv94NZh0RdRqY3uwRbO5hPM6PGc7S6QCYkexR4OAU8I5Pmk2TaQEN0K6Q4G5VMA3Ol91htk=/kisspng-computer-icons-icon-design-arrow-go-back-5b2dc9466327b7.7273286815297273024062.png"> go back to tweet</button>' // goback button으로 변경.
//     goback = document.getElementById('goback-button');
//     for (let k = 0; k < allTweetArr.length; k++) {
//         if (allTweetArr[k][0] === e.target.innerText) {
//             filteredString = '<li class="tweet-content"><button class="output-username">' + allTweetArr[k][0] + '</button><span class="time">' + allTweetArr[k][1] + '</span><div class="content">' + allTweetArr[k][2] + '</div><div class="dashline">____________________________________________________________________________________</div></li>' + filteredString;
//         }
//     }
//     existedContent.innerHTML = '<ul>' + filteredString + '</ul>';
//     filteredString = '';
//     goback.onclick = goBackerPreContents;
//     for (let j = 0; j < tweetShowById.length; j++) {
//         tweetShowById[j].onclick = filteredTweetGenerator;
//     }
// }

// function goBackerPreContents () {
//     refreshBtn.innerHTML = '<button id="refresh-button"><img id="refresh-image" src="https://cdn1.iconfinder.com/data/icons/ios-11-ui-elements-vol-2/29/ios_11_New2_Ununion-25-512.png">check new tweets</button>';
//     existedContent.innerHTML = '<ul>' + string + '</ul>'
//     randomTweetGen = document.getElementById('refresh-button')
//     randomTweetGen.onclick = randomTweetGenerator;
//     for (let j = 0; j < tweetShowById.length; j++) {
//         tweetShowById[j].onclick = filteredTweetGenerator;
//     }
// }

// newTweetGen.onclick = newTweetGenerator;

// randomTweetGen.onclick = randomTweetGenerator;

// for (let j = 0; j < tweetShowById.length; j++) {
//     tweetShowById[j].onclick = filteredTweetGenerator;
// }