const seactions=document.querySelectorAll('section');
console.log(seactions)
for(const seacton of seactions){
    seacton.style.border='1px solid red';
}


const touristPlaces=document.getElementById('tourist-places')

touristPlaces.classList.add('text-bg');

touristPlaces.classList.remove('text-large');

console.log(touristPlaces.childNodes[3].childNodes[4].nextSibling)