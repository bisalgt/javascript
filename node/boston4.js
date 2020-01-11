function placeAnOrder(orderNumber) {
    console.log('Customer Order', orderNumber);
    cookAndDeliverFood(function(){
        console.log('Deliver food order', orderNumber);
    })
}


function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);