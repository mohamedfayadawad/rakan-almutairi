
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

$(document).ready(function(){
    $('.buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter')
        if(filter == 'all'){
            // var controlFilter = $(".controls");
            // var categories = shuffle($(".gallery>div").get());
            // categories.unshift(controlFilter);
            // $(".gallery").html(categories);
            $('.image ').show(400);
        }else{
            $('.image ').not('.'+filter).hide(200);
            $('.image ').filter('.'+filter).show(400);
        }
    });
    $('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
});

// button-up

let span = document.querySelector(".up");

window.onscroll = function () {
    // console.log(this.scrollY);

    if (this.scrollY >= 170) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
} 
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

//----- button-up
$(document).ready(function () {
    $('.our-work2 a:lt(36)').show();
    $('.less').hide();
    var items =  106;
    var shown =  3;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.our-work2 a:visible').length+35;
        if(shown< items) {
          $('.our-work2 a:lt('+shown+')').show(300);
        } else {
          $('.our-work2 a:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.our-work2 a').not(':lt(36)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});

// document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages;    
      
        if ("IntersectionObserver" in window) {
          lazyloadImages = document.querySelectorAll(".lazy");
          var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var image = entry.target;
                image.classList.remove("lazy");
                imageObserver.unobserve(image);
              }
            });
          });
      
          lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
          });
        } else {  
          var lazyloadThrottleTimeout;
          lazyloadImages = document.querySelectorAll(".lazy");
          
          function lazyload () {
            if(lazyloadThrottleTimeout) {
              clearTimeout(lazyloadThrottleTimeout);
            }    
      
            lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                  }
              });
              if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
              }
            }, 20);
          }
      
          document.addEventListener("scroll", lazyload);
          window.addEventListener("resize", lazyload);
          window.addEventListener("orientationChange", lazyload);
        }
      });
   