$(document).ready(function(){
    $(window).scroll(function(){     //ainda nao pegou
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});