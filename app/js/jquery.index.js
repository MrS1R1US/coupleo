var arr = [];
max = 8;
min = 2;

function NormalSort (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

for(i = 0; i <= 9; i++){
    test = Math.floor(Math.random() * (max - min)) + min;
    arr.push(test);
}
arr.sort(NormalSort)
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