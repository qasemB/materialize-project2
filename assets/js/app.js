document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge : 'right',
    });

    var carouselElems = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElems, {
        fullWidth: true,
        indicators: true,
        onCycleTo: function(){
            let elems = document.querySelectorAll('.top_text');
            for (const item of elems) {
                item.classList.remove('isShow');
                setTimeout(function(){
                    item.classList.add('isShow')
                },700)
            }
        },
    });

    setInterval(function(){
        M.Carousel.getInstance(carouselElems[0]).next()
    } , 5000)


});