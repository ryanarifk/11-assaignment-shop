// console.log('append js')

const placesList =document.getElementById('places-list');
// console.log(placesList)
const li=document.createElement('li');
li.innerText='katabon sundorbon'

placesList.appendChild(li);



const mainContainer =document.getElementById('main-container')
// console.log(mainContainer);


const section=document.createElement('section');

const h1=document.createElement('h1');
h1.innerText='Food List';

section.appendChild(h1);

const ul=document.createElement('ul');

const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='salad';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='biriyani';
ul.appendChild(li3);

section.appendChild(ul)


mainContainer.appendChild(section)



const sectionDress=document.createElement('section');

sectionDress.innerHTML=`
<h1>My Dress List</h1>
<ul>
  <li>t shirt</li>
  <li>sendel genji</li>
  <li>genji</li>
</ul>
`

mainContainer.appendChild(sectionDress);