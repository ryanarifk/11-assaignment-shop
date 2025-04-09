const biriyaniPrice =280;

if(biriyaniPrice>300){
     console.log("I will buy  Your biriyani");
}
console.log('i Will not buy');


const money =200;
if(money>300){
    console.log('tahole movie dekhbo');
}
else{
    console.log('Muri Kha');
}


const hour=14;

if(hour >=6 && hour<12){
    console.log('good mornuing');
}else{
    if(hour>=12 && hour<14){
        console.log('good affternoon')
    }
    
    else{
        console.log('not a morning')
    }
}

const x=5;

if(x>5 || x<6){
    console.log('true');
}else{
    console.log('false');
}


const y=7;

var massege;

massege =y>5 ? console.log('true') :console.log('false');

let nums=[9433,543,324,2,3,2,,34,];

let sumOfOdd=0;
let sumOfEven=0;

for(i=0;i<nums.length;i++){
    const x=i;
    if(x%2===1){
        sumOfOdd+=x;
    }else{
        sumOfEven+=x;
    }
}
console.log(sumOfOdd);
console.log(sumOfEven);
