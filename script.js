let dropDown1 = document.getElementById('outer1')
dropDown1.addEventListener("click", function () {
    let div1 = document.getElementById("healthcare1");
    let div2 = document.getElementById("healthcare2");
    div1.classList.add("d-none");
    div2.classList.remove("d-none");
});

let cross1 = document.getElementById('healthcare-x')
cross1.addEventListener("click", function () {
    let div1 = document.getElementById("healthcare1");
    let div2 = document.getElementById("healthcare2");
    div2.classList.add("d-none");
    div1.classList.remove("d-none");
});

let dropDown2 = document.getElementById('outer2')
dropDown2.addEventListener("click", function () {
    let div1 = document.getElementById("psychology1");
    let div2 = document.getElementById("psychology2");
    div1.classList.add("d-none");
    div2.classList.remove("d-none");
});

let cross2 = document.getElementById('psychology-x')
cross2.addEventListener("click", function () {
    let div1 = document.getElementById("psychology1");
    let div2 = document.getElementById("psychology2");
    div2.classList.add("d-none");
    div1.classList.remove("d-none");
});

let dropDown3 = document.getElementById('outer3')
dropDown3.addEventListener("click", function () {
    let div1 = document.getElementById("data-science1");
    let div2 = document.getElementById("data-science2");
    div1.classList.add("d-none");
    div2.classList.remove("d-none");
});

let cross3 = document.getElementById('data-science-x')
cross3.addEventListener("click", function () {
    let div1 = document.getElementById("data-science1");
    let div2 = document.getElementById("data-science2");
    div2.classList.add("d-none");
    div1.classList.remove("d-none");
});

let dropDown4 = document.getElementById('outer4')
dropDown4.addEventListener("click", function () {
    let div1 = document.getElementById("cyber-security1");
    let div2 = document.getElementById("cyber-security2");
    div1.classList.add("d-none");
    div2.classList.remove("d-none");
});

let cross4 = document.getElementById('cyber-security-x')
cross4.addEventListener("click", function () {
    let div1 = document.getElementById("cyber-security1");
    let div2 = document.getElementById("cyber-security2");
    div2.classList.add("d-none");
    div1.classList.remove("d-none");
});

let dropDown5 = document.getElementById('outer5')
dropDown5.addEventListener("click", function () {
    let div1 = document.getElementById("accounting1");
    let div2 = document.getElementById("accounting2");
    div1.classList.add("d-none");
    div2.classList.remove("d-none");
});

let cross5 = document.getElementById('accounting-x')
cross5.addEventListener("click", function () {
    let div1 = document.getElementById("accounting1");
    let div2 = document.getElementById("accounting2");
    div2.classList.add("d-none");
    div1.classList.remove("d-none");
});


let dropDown6 = document.getElementById('outer6')
dropDown6.addEventListener("click", function () {
    let div1 = document.getElementById("all-programs1");
    let div2 = document.getElementById("all-programs2");
    div1.classList.add("d-none");
    div2.classList.remove("d-none");
});

let cross6 = document.getElementById('all-programs-x')
cross6.addEventListener("click", function () {
    let div1 = document.getElementById("all-programs1");
    let div2 = document.getElementById("all-programs2");
    div2.classList.add("d-none");
    div1.classList.remove("d-none");
});


$(window).scroll(function() {
    let numbers1 = document.getElementById("number-generator");
    let numbers2 = document.getElementById("number-generator2");
    let numbers3 = document.getElementById("number-generator3");
    let numbers4 = document.getElementById("number-generator4");
    let numbers5 = document.getElementById("number-generator5");
    var windowScroll = $(this).scrollTop();
    var heightTop = $('.achievement-numbers').offset().top;
    var outerHeight = $('.achievement-numbers').outerHeight();
    var windowHeight = $(window).height();
    if (windowScroll > (heightTop + outerHeight - windowHeight)){
        numbers1.classList.remove("d-none");
        numbers2.classList.remove("d-none");
        numbers3.classList.remove("d-none");
        numbers4.classList.remove("d-none");
        numbers5.classList.remove("d-none");
    }
});
