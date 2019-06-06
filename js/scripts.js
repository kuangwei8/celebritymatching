$(document).ready(function(){
  $("form").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    // location.reload()

    // $(".allresults").empty();
  // $(".allresults").hide();

    if (gender==="male" && age >=18 && age < 30){
      $(".Jenny").show();
      };
    if (gender==="male" && age >=30){
      $(".NoMatch").show();
    }

    if (age < 18){
        alert ("You are too young!");
      };
    // if (age = empty()){
    //     alert ("Please enter your age");
    //   };


    event.preventDefault();
  });



});
