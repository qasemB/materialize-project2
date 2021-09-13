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

    var elemsFloatingButton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elemsFloatingButton, {});

    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});

    var textAreaElem = document.querySelectorAll('.materialize-textarea');
    M.CharacterCounter.init(textAreaElem)

    document.getElementById('confirm_comment').addEventListener('click' , function(){
        M.toast({
            html: 'نظر با موفقیت ثبت شد !',
            classes: 'green lighten-1'
        })
    })


});