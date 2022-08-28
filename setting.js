const id=document.querySelector('.id');
const settings=document.querySelector('.settingsBar');
const backgroundFrom=document.querySelector('.backgroundFrom');
const hideShowTheBlock=document.querySelector('.hideShowTheBlock');
const toDo=document.querySelector('.toDo');
const languages=document.querySelector('.languages')
const fon=document.querySelector('.fon');
const hideShowTheBlock1=document.querySelector('.hideShowTheBlock1');
const hideAudioPlayer=document.querySelector('.hideAudioPlayer');
const hideWeather=document.querySelector('.hideWeather');
const hideTime=document.querySelector('.hideTime');
const hideDate=document.querySelector('.hideDate');
const hideGreeting=document.querySelector('.hideGreeting');
const hideQuote=document.querySelector('.hideQuote')
const quoteAthor=document.querySelector('.quote-athor')
const greetingContainer=document.querySelector('.greeting-container')
const player=document.querySelector('.player');
const weather=document.querySelector('.weather');
const time=document.querySelector('.time');
const date=document.querySelector('.date');

id.addEventListener('click',function(){
    id.classList.toggle('activeSettings')
    settings.classList.toggle('settingsBarActive')
})
backgroundFrom.addEventListener('click',function(){
    hideShowTheBlock.classList.toggle('noneDisplay')
    toDo.classList.toggle('noneDisplay')
    languages.classList.toggle('noneDisplay');
    backgroundFrom.style.margin='5px auto 5px auto'
    fon.classList.toggle('fonActive')
})
let settingsArray=['player','weather','time','date','greeting-container']
    hideShowTheBlock.addEventListener('click',function(){
    toDo.classList.toggle('noneDisplay');
    languages.classList.toggle('noneDisplay');
    backgroundFrom.classList.toggle('noneDisplay');
    hideShowTheBlock.classList.toggle('hideShowTheBlockActive');
     hideShowTheBlock1.classList.toggle('hideShowTheBlock1Active');
})
hideAudioPlayer.addEventListener('click',function(){
    player.classList.toggle('opacity0');
})
hideWeather.addEventListener('click',function(){
  weather.classList.toggle('opacity0');
})
hideTime.addEventListener('click',function(){
    time.classList.toggle('opacity0')
})
hideDate.addEventListener('click',function(){
    date.classList.toggle('opacity0')
})
hideGreeting.addEventListener('click',function(){
    greetingContainer.classList.toggle('opacity0')
})
hideQuote.addEventListener('click',function(){
    quoteAthor.classList.toggle('opacity0')
})