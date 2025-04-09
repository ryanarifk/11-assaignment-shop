let price=600;
const isLeader=false;

if(isLeader===true){
      if(price>700){
          price=price/2;
          console.log(price);
      }
      else{
        price=0;
        console.log(price);
      }
}
else{
    price=price+100;
    console.log(price);
}

price= isLeader ===true? price>600? price/2 : 0 :price+100