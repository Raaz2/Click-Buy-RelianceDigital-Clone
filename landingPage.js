// carasoule--->1
$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });


  // carasoule--->2
$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel2").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel2").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel2").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel2").carousel(2);
      });
      $(".item4").click(function(){
        $("#myCarousel2").carousel(3);
      });
      $(".item5").click(function(){
        $("#myCarousel2").carousel(4);
      });
      $(".item7").click(function(){
        $("#myCarousel2").carousel(5);
      });
      
      $(".item8").click(function(){
        $("#myCarousel2").carousel(6);
      });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel2").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel2").carousel("next");
    });
  });

//   third carousel

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel3").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel3").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel3").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel3").carousel(2);
      });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel3").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel3").carousel("next");
    });
  });


  document.querySelector(".dropbtn").addEventListener("click",()=>{
    console.log("I am clicked and i am drop btn")
  })