$(document).ready(function () {
    $('.gallery__categorie').click(function () {
        $(this).addClass('_active').siblings().removeClass('_active');

        let filter = $(this).attr('data-filter');
        console.log(filter);
        if (filter == 'all') {
            console.log('yse');
            $('.item-gallery').show(400);
        } else {
            $('.item-gallery').not('.' + filter).hide(200);
            $('.item-gallery').filter('.' + filter).show(400);
        }
    });

    $('.gallery').magnificPopup({
        delegate: '.item-gallery',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});