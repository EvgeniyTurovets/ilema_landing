"use strict";

if (document.getElementById("first")) {
  var first = new Swiper('.first', {
    slidesPerView: 1,
    navigation: {
      nextEl: '#first__next',
      prevEl: '#first__prev'
    }
  });
  var dateItem = document.querySelectorAll('.headings__name');
  first.on('slideChange', function () {
    var activeIndex = first.activeIndex;
    dateItem.forEach(function (date1) {
      date1.classList.remove('active');
    });
    dateItem[activeIndex].classList.add('active');
  });
  dateItem.forEach(function (date, index) {
    date.setAttribute('data-title', index);
    date.addEventListener('click', function () {
      if (!date.classList.contains('active')) {
        var _index = date.getAttribute('data-title');

        first.slideTo(_index);
      }
    });
  });
}

new Swiper('.second', {
  slidesPerView: 4,
  navigation: {
    nextEl: '#second__next',
    prevEl: '#second__prev'
  }
}); // Video

var videoSlider = new Swiper('.video__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '#video__next',
    prevEl: '#video__prev'
  }
});
var videoPlayer = document.querySelectorAll('.video__slide');
videoPlayer.forEach(function (element) {
  var video = element.querySelector('.video__item');
  var videoFilter = element.querySelector('.video__middle');
  var cloudLeft = element.querySelector('.cloud__left');
  var cloudRight = element.querySelector('.cloud__right');
  video.volume = 0.2;
  element.addEventListener('click', function () {
    if (video.paused) {
      cloudLeft.classList.add('active');
      cloudRight.classList.add('active');
      videoFilter.classList.add('active');
      video.play();
    } else {
      video.pause();
      cloudLeft.classList.remove('active');
      cloudRight.classList.remove('active');
      videoFilter.classList.remove('active');
    }
  });
  videoSlider.on('slideChange', function () {
    video.pause();
    cloudLeft.classList.remove('active');
    cloudRight.classList.remove('active');
    videoFilter.classList.remove('active');
  });
});