const time = document.querySelector('.time');
const date =document.querySelector('.date');
const greeting=document.querySelector('.greeting');
const name=document.querySelector('.name');
const body=document.body;
const slideNext=document.querySelector('.slide-next');
const slidePrev=document.querySelector('.slide-prev')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind=document.querySelector('.wind');
const humidity=document.querySelector('.humidity');
const city=document.querySelector('.city');
const quote=document.querySelector('.quote');
const author=document.querySelector('.author');
const changeQuote=document.querySelector('.change-quote');
const ru=document.querySelector('.ru');
const en=document.querySelector('.en');
const text=document.querySelector('.text')
let randomNum;
let randomJsonNum;
let flag = true;
time.textContent = showTime();
date.textContent = showDate();
greeting.textContent=getTimeOfDay();
function showTime() {
    const date = new Date();
    time.textContent= date.toLocaleTimeString();
    showDate()
    getTimeOfDay()
    setTimeout(showTime, 1000)
  }
  /* Пункт 3.0 не выполнил : -Репозиторий с изображениями необходимо форкнуть, и использовать изображения форкнутого репозитория, а не школьного.
Сами изображения желательно оптимизировать, например, конвертировать в формат WebP с целью уменьшения веса и увеличения скорости загрузки.*/
function showDate(){
   const date = new Date();
   const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day = week[date.getDay()]
    const options = {month: 'long', day: 'numeric'};
    let   currentDate= date.toLocaleDateString('en-US', options);
    return `${day}, ${ currentDate}` 
  }
function getTimeOfDay(){
    const date = new Date();
    const hours = date.getHours();
    const hello=["night","morning","afternoon"," evening"]
      return greeting.textContent=(hours/6<1)?`Good ${hello[0]}`:(hours/6<2?`Good ${hello[1]}`:(hours/6<3?`Good ${hello[2]}`: `Good ${hello[3]}`))
  }
  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
function getRandomNum(){
  randomNum=Math.floor(Math.random() * 20) + 1
  return randomNum
}
function getTimeOfDays(){
  const date = new Date();
  const hours = date.getHours();
  const hello=["night","morning","afternoon","evening"]
  return (hours/6<1)?`${hello[0]}`:(hours/6<2?`${hello[1]}`:(hours/6<3?`${hello[2]}`: `${hello[3]}`))
 }
function setBg(){
  getTimeOfDays()
  let timeOfDay =getTimeOfDays()
  let bgNum=getRandomNum().toString().padStart(2, "0")
  return  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
 }
setBg()
function getSlideNext(){
  randomNum==20? (randomNum=1):(randomNum=++randomNum)
  getTimeOfDays()
  let timeOfDay =getTimeOfDays()
  let bgNum=randomNum.toString().padStart(2, "0")
  return  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  }
  function getSlidePrev(){
    randomNum==1? (randomNum=20):(randomNum=--randomNum)
  getTimeOfDays()
  let timeOfDay =getTimeOfDays()
  let bgNum=randomNum.toString().padStart(2, "0")
  return  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  }
   slideNext.addEventListener('click', getSlideNext)
   slidePrev.addEventListener('click', getSlidePrev)

   async function getWeather(language='en') {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=c73d4b57422a5ec248b130e416e12ac4&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C `;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
    humidity.textContent=`Humidity: ${data.main.humidity}%`;
  }
  getWeather('en')

  function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
  }
  city.addEventListener('keypress', setCity)
  /* ПУНКТ 4.2 не выполнен : -при перезагрузке страницы приложения указанный пользователем город сохраняется,   данные о нём хранятся
   в local storage +5 
   Пункт 4.5 не выполнен :выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5 */
   let s=true;
   async function getQuotes() { 
    if (!s==false){
      const quotes = 'data.json';
      const res = await fetch(quotes);
      const data = await res.json(); 
      let randomJsonNum
          function getRandomJsonNum(){
                      randomJsonNum=Math.floor(Math.random() * data.length)
                      return randomJsonNum
     }
              getRandomJsonNum() 
      quote.textContent=`"${data[randomJsonNum].text}"`;
      author.textContent=data[randomJsonNum].from;
     }
    else {
      const quotes = 'data.json';
      const res = await fetch(quotes);
      const data = await res.json(); 
      let randomJsonNum
          function getRandomJsonNum(){
                      randomJsonNum=Math.floor(Math.random() * data.length)
                      return randomJsonNum
     }
              getRandomJsonNum() 
      quote.textContent=`"${data[randomJsonNum].textRu}"`;
      author.textContent=data[randomJsonNum].fromRu;
      console.log(s)
    }
  }
  getQuotes();
  changeQuote.addEventListener('click',getQuotes)
    function translateGreeting(){
      const date = new Date();
    const hours = date.getHours();
    const hello=["Доброй ночи","Доброе утро", "Добрый день","Добрый вечер"]
    return greeting.textContent=(hours/6<1)?`${hello[0]}`:(hours/6<2?`${hello[1]}`:(hours/6<3?`${hello[2]}`: `${hello[3]}`))
 
  }
      async function getWeatherRu() {  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=c73d4b57422a5ec248b130e416e12ac4&units=metric`;
      const res = await fetch(url);
      const data = await res.json(); 
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C `;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)}м/с`;
      humidity.textContent=`Влажность: ${data.main.humidity}%`;
    }
    function remeine(){
      s=false
      name.placeholder="Введите имя";
    }
    function remeine2(){
      s=true;
      getQuotes()
    }
  ru.addEventListener('click',getWeatherRu)
  ru.addEventListener('click',translateGreeting)
  ru.addEventListener('click',remeine)
  ru.addEventListener('click',getQuotes)
  en.addEventListener('click',getWeather)
  en.addEventListener('click',remeine2)
    async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=fv0ReVemLc1vDLTJsbBXvLoVRStqeqTyWn0DO_Nu3Rs';
    const res = await fetch(url);
    const data = await res.json();
   
    }
  

 
 

 
  

