import ancients from './assets/Ancients/indexJS.js'
const cardСontainer=document.querySelector('.card-container');
const diffucultyConteiner=document.querySelector('.diffuculty-conteiner');
const deckContainer=document.querySelector('.deck-container')
let array=["Низкая","Средняя","Высокая"];
let isResizeble = false;
let isDiffucualty =false;
let isCardAdd=false;
let isLastCards=false;

for(let i = 0; i < ancients.length; i++) {
    const div=document.createElement('div');
    cardСontainer.append(div);
    div.classList.add('ancient-card');
    div.style.backgroundImage = `url(${ancients[i]})`
  }
  function clickCard(){
    if(!isResizeble) {
     for(let i=0;i<3;i++){
    const div=document.createElement('div');
    diffucultyConteiner.append(div);
    div.classList.add('difucalty');
    div.textContent=`${array[i]}`;
      isResizeble= true;
    }}
    const diffucualty=document.querySelectorAll('.difucalty');
    for (var j = 0; j < diffucualty.length; j++) {
      diffucualty[j].addEventListener('click',function(){
       addClassDiv()
      })
  }}

const arrayDiv=document.querySelectorAll('.ancient-card')
for (var i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].onclick = function(){
        clickCard()
    };
  }

function  addClassDiv(){
  if(!isDiffucualty){
  const deckContainer=document.querySelector('.deck-container')
  console.log(deckContainer)
  const div=document.createElement('div')
  deckContainer.append(div);
  div.classList.add('mix');
  div.textContent=`Замешать`;
  const mix=document.querySelector('.mix')
  mix.addEventListener('click',addDivCard)
   }
   isDiffucualty=true;
  }
function addDivCard(){
  if(!isCardAdd){
  const card=document.querySelector('.card');
  const div=document.createElement('div');
  card.append(div);
  div.classList.add('cardStyle');
  const cardStyle=document.querySelector('.cardStyle');
  cardStyle.style.backgroundImage=`url(./assets/mythicCardBackground.png)`
  cardStyle.addEventListener('click',addLastCard)
  cardStyle.addEventListener('click',rr)
  }
  isCardAdd=true;
}
function addLastCard(){
  if(!isLastCards){
  const card=document.querySelector('.card');
  const div=document.createElement('div');
  card.append(div);
  div.classList.add('lastCard');
  const lastCard=document.querySelector('.lastCard');
  lastCard.style.backgroundImage=`url(${s1[numForLastCard]})`
  }
  isLastCards=true;
}

const blueCards = [
  './assets/MythicCards/blue/blue3.png',
  './assets/MythicCards/blue/blue4.png',
  './assets/MythicCards/blue/blue5.png',
  './assets/MythicCards/blue/blue10.png'

]
const brownCards=[
'./assets/MythicCards/brown/brown11.png',
'./assets/MythicCards/brown/brown12.png',
'./assets/MythicCards/brown/brown13.png',
'./assets/MythicCards/brown/brown14.png',
'./assets/MythicCards/brown/brown21.png',
]
const greenCards=[
  './assets/MythicCards/green/green1.png',
  './assets/MythicCards/green/green12.png',
  './assets/MythicCards/green/green16.png',
  './assets/MythicCards/green/green17.png',
  './assets/MythicCards/green/green18.png'

]
const addBrownCards=[
  './assets/MythicCards/brown/brown1.png', 
  './assets/MythicCards/brown/brown2.png',
  './assets/MythicCards/brown/brown3.png',
  './assets/MythicCards/brown/brown4.png',
  './assets/MythicCards/brown/brown5.png',
]
let randNumBlue;
let randNumGreen;
let randNumBrown;
let randAddBrown;
let s1=[];
function randBlue(){
 return randNumBlue =Math.floor(Math.random() * blueCards.length)
 }
 function randGreen(){
  return randNumGreen =Math.floor(Math.random() * greenCards.length)
}
function randBrown(){
  return randNumBrown =Math.floor(Math.random() * brownCards.length)
}
function addBrownCard(){
  return randAddBrown =Math.floor(Math.random() * addBrownCards.length)
}
randBlue()
randGreen()
randBrown()
addBrownCard()
s1.push(greenCards[randNumGreen])
s1.push(brownCards[randNumBrown])
s1.push(blueCards[randNumBlue])
randBrown()
s1.push(brownCards[randNumBrown])
let numForLastCard=0
function rr(){
  console.log(`numForLastCard - ${numForLastCard}`)
const lastCard=document.querySelector('.lastCard');
lastCard.style.backgroundImage=`url(${s1[numForLastCard]})`;
numForLastCard=numForLastCard+1
if(numForLastCard>4){
  numForLastCard=4
  stage1()
}
}

let numForLastCard2=0
let s2=[]
randGreen();
randBrown();
randBlue();
s2.push(greenCards[randNumGreen]);
s2.push(brownCards[randNumBrown]);
s2.push(blueCards[randNumBlue]);
randGreen();
randBrown();
s2.push(greenCards[randNumGreen]);
s2.push(brownCards[randNumBrown]);
randBrown();
s2.push(brownCards[randNumBrown]);
let isS2=false;

function stage1(){
  console.log(`numForLastCard2- ${numForLastCard2+1}`)
  const lastCard=document.querySelector('.lastCard');
  lastCard.style.backgroundImage=`url(${s2[numForLastCard2]})`
  numForLastCard2=numForLastCard2+1
if(numForLastCard2>6){
  numForLastCard2=6
   stage2()
}
  }

let s3=[];
let numForLastCard3=0;
let isS3=false;
randGreen();
randBrown();
s3.push(greenCards[randNumGreen]);
s3.push(brownCards[randNumBrown]);
randGreen();
randBrown();
s3.push(greenCards[randNumGreen]);
s3.push(brownCards[randNumBrown]);
randBrown();
s3.push(brownCards[randNumBrown]);
randBrown();
s3.push(addBrownCards[randAddBrown]);
  function stage2(){
    if(!isS3){
    const lastCard=document.querySelector('.lastCard');
    lastCard.style.backgroundImage=`url(${s3[numForLastCard3]})`
    numForLastCard3=numForLastCard3+1
     if(numForLastCard3>5){
      lastCard.style.backgroundImage=`url(${s3[5]})`

    }
  }
   
  }

 







 

  
 






