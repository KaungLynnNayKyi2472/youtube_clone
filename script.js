 $(document).ready(function (){
    $(".night").css("display","none");
    $(".all").css("background","black");
    $(".vd").css("color","gray");
    $("footer").css("background","white");
    $(".day").click(function (){
        $(".day").css("display","none");
        $(".night").css("display","block");
        $("body,footer").css("background","black");
        $(".all").css("background","gray");
        $("h5,.cap,.vd,footer").css("color","white");
    });
    $(".night").click(function (){
        $(".night").css("display","none");
        $(".day").css("display","block");
        $("body,footer").css("background","white");
        $(".all").css("background","black");
        $("h5,.cap,footer").css("color","black");
        $(".vd").css("color","gray");
    });
 });