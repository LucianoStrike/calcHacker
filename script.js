$(document).ready(function(){
    $(window).scroll(function(){     //ainda nao pegou
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    /* CRIACAO DO TEXTO ANIMADO COM CDN*/
    /* TYPING 1*/
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Desenvolvedor", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    /* TYPING 2*/
    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Desenvolvedor", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    /* TYPING 3*/
    var typed = new Typed(".typing-3", {
        strings: ["Programação", "Base de Dados"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });







    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});