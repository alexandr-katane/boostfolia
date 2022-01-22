@@include('functions.js');
@@include('swiper.min.js');
@@include('sliders.js');
@@include('gallery.js');
@@include('form.js');
@@include('spoilers.js');
@@include('scroll.js');



let video = document.querySelector('video');
let videoWrapper = document.querySelector('.video');
videoWrapper.addEventListener('click', function (e) {
    const target = e.target;
    if (target.closest('.stug-video')) {
        video.classList.add('_active');
        video.play();
    } else {
        video.classList.remove('_active');
        video.paused;
    }
});


let progressValues = document.querySelectorAll('.skill-progres__value');
for (let i = 0; i < progressValues.length; i++) {
    let progressValue = progressValues[i];
    let progress = progressValue.previousElementSibling.querySelector('.skill-progres__progress');
    progress.style.width = progressValue.innerHTML;
}
