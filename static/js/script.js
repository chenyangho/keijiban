$(".btn0").click(
  function(){
    $(".c1").css("transform", "translateX(-5%)");
    $(".c1").css("opacity",0);
    $(".btn0").css("cursor", "default");
    $(".c2").css("opacity",1);
    $(".c2").css("transform", "translate(0%, -110%)");
  }
)

$(".b2").click(
  function(){
    $(".c2").css("transform", "translate(-20%, -110%)");
    $(".c2").css("opacity",0);
    $(".c3").css("opacity",1);
    $(".c3").css("transform", "translate(0%, -320%)");
  }
)

$(".b3").click(
  function(){
    $(".c2").css("transform", "translate(0%, -110%)");
    $(".c2").css("opacity",1);
    $(".c3").css("opacity",0);
    $(".c3").css("transform", "translate(70%, -320%)");
  }
)