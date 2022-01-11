var open = document.querySelector('.first');
var close = document.querySelector('.second');
var psd = document.querySelector('#mima');
open.addEventListener('click', function () {
    psd.type = "text";
    close.style.display = "block";
    this.style.display = "none";
})
close.addEventListener('click', function () {
    psd.type = "password";
    open.style.display = "block";
    this.style.display = "none";
})
var yonghu = document.querySelector('#yonghu');


    



