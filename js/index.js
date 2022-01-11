
var uls = document.querySelector('.hot-video').querySelector('ul');
var first_mask = uls.querySelector('.first-mask');
var second_mask = uls.querySelector('.second-mask');
var third_mask = uls.querySelector('.third-mask');
uls.children[0].addEventListener('mouseover', function () {
    first_mask.style.display = 'block';
})
uls.children[0].addEventListener('mouseleave', function () {
    first_mask.style.display = 'none';
})
uls.children[1].addEventListener('mouseover', function () {
    second_mask.style.display = 'block';
})
uls.children[1].addEventListener('mouseleave', function () {
    second_mask.style.display = 'none';
})
uls.children[2].addEventListener('mouseover', function () {
    third_mask.style.display = 'block';
})
uls.children[2].addEventListener('mouseleave', function () {
    third_mask.style.display = 'none';
})
var videos = document.querySelectorAll('video');
var autos = document.querySelector('.hot-video').querySelectorAll('.only');
/* for (var i = 0; i < autos.length; i++) {
    autos[i].addEventListener('click', function () {
       
        videos.style.autoplay = 'autoplay';
    })
} */

var as = document.querySelector('.choose-menu').querySelectorAll('a');
var btns = document.querySelector('.main-menu').querySelectorAll('.btn');
for (var i = 0; i < as.length; i++) {
    as[i].setAttribute('index', i);
    as[i].onclick = function () {
        for (var i = 0; i < as.length; i++) {
            as[i].style.boxShadow = '';
            as[i].style.transform = '';
        }
        this.style.boxShadow = "2px 2px 10px 5px #b9af83"
        this.style.transform = 'translateY(-5px)';
        var a = this.getAttribute('index');
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.display = 'none';

        }
        btns[a].style.display = 'block';

    }
}
/* var glide__slides_lis = document.querySelector('.cai').querySelectorAll('li');
glide__slides_lis.onmouseover = function () {
    for (var i = 0; i < glide__slides_lis.length; i++) {
        for (var i = 0; i < glide__slides_lis.length; i++) {
            glide__slides_lis.style.transform = '';
        }
        glide__slides_lis[i].style.transform = 'translateY(-3px)';
        console.log('2222');
    }
} */


var lis = document.querySelector('.main-design').querySelectorAll('li');
var divs = document.querySelector('.content').querySelectorAll('div');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.boxShadow = '';
            lis[i].style.transform = '';
        }
        this.style.boxShadow = "2px 2px 10px 5px #b9af83"

        this.style.transform = 'translateY(-5px)';
        var a = this.getAttribute('index');
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = 'none';
        }
        divs[a].style.display = 'block';
    }
}

var header = document.querySelector('.header');
var menu = document.querySelector('.main-menu');
var bannerTop = menu.offsetTop;
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= bannerTop) {
        header.style.transition = ' 2s linear';
        header.style.position = 'fixed';
        header.style.backgroundColor = 'rgb(253, 253, 253)';
    } else {
        header.style.transition = ' 2s linear';
        header.style.position = '';
        header.style.backgroundColor = 'rgb(253, 253, 253, .4)';
    }
})


var fixed = document.querySelector('.fixed');
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= bannerTop / 2) {
        fixed.style.display = 'block';
        fixed.style.position = 'fixed';
        fixed.style.right = '50px';
        fixed.style.animationName = 'for';
        fixed.style.animationDuration = '1s';
        fixed.style.animationTimingFuntion = 'ease-out';
        fixed.style.top = '640px';
        fixed.style.zIndex = '9999999999999999999999999999999999999999999999999';
    } else {
        fixed.style.display = 'none';

    }
})

var ullist = document.querySelector('.down_list');
var lisr = document.querySelector('.header-right-nav').querySelectorAll('li');
var list = document.querySelector('.header-right-nav').querySelectorAll('div');

for (var i = 0; i < lisr.length; i++) {
    lisr[i].setAttribute('index', i);
    lisr[i].onmouseover = function () {
        for (var i = 0; i < lis.length; i++) {
            lisr[i].style.transform = '';
            /*  lis[i].style.borderBottom = ''; */
        }
        /*      this.style.borderBottom = '2px solid #d8a927'; */
        this.style.transform = 'translateY(-3px)';
        var a = this.getAttribute('index');
        for (var i = 0; i < list.length; i++) {
            list[i].style.display = 'none';
            list[i].style.transform = '';
            list[i].style.width = '0';
        }
        list[a].style.transition = 'width 3s';
        list[a].style.display = 'block';
        list[a].style.width = '180px';
        list[a].style.transform = 'translateY(-35px)';
    }
    lisr[i].onmouseleave = function () {
        for (var i = 0; i < lisr.length; i++) {
            lisr[i].style.transform = '';
        }
        for (var i = 0; i < list.length; i++) {
            list[i].style.display = 'none';
            list[i].style.transform = '';
            list[i].style.transition = 'width 3s';
            list[i].style.width = '0';
        }
        list[a].style.transition = 'width 3s';
        list[a].style.display = 'none';
        list[a].style.transform = '';
        list[a].style.width = '0';
    }
}
/* for (var i = 0; i < list.length; i++) {
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
    list[i].onmouseover = function () {
        list[i].style.display = 'block';
        list[i].style.position = 'fixed';
    }

} */


