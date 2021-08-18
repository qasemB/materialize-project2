document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge : 'right',
    });

    var carouselElems = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElems, {
        fullWidth: true,
        indicators: true,
    });

    setInterval(function(){
        M.Carousel.getInstance(carouselElems[0]).next()
    } , 5000)


});