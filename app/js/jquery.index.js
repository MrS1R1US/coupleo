var arr = [];
max = 8;
min = 2;

for(i = 0; i <= 9; i++){
    test = Math.floor(Math.random() * (max - min)) + min;
    arr.push(test);
}

for(i = 0; i <= 9; i++){
    for(s = 0; s <= 9; s++){
        if (arr[i] < arr[s]){
            arr[i] = arr[i] + arr[s];
            arr[s] = arr[i] - arr[s] ;
            arr[i] = arr[i] - arr[s];

        }
    }
}

console.log(arr);

/*---------- Открытие мобильного меню ---------*/
$('.menu__btn').on('click', function(){
    if($('.menu').hasClass('menu_open')) {
        $('.menu').removeClass( 'menu_open' )
    }else {
        $('.menu').addClass('menu_open')
    }
})
/*---------- /Открытие мобильного меню ---------*/