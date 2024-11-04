/*===== EXPANDER MENU  =====*/ 
// const showMenu = (toggleId, navId)=>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
  
//     if(toggle && nav){
//       toggle.addEventListener('click', ()=>{
//         nav.classList.toggle('show')
//         toggle.classList.toggle('bx-x')
//       })
//     }
//   }
//   showMenu('header-toggle','nav-menu')

//   /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');   

// function linkAction(){
//   /*Active link*/
//   navLink.forEach(n => n.classList.remove('active'));
//   this.classList.add('active');
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));


$(document).ready(function(){

  $("#header-toggle").click(function(){
      $(".nav").addClass("show");
      $(this).addClass("bx-x");
  });
  $(".click_hide, .nav__list li,#night").click(function(){
    $(".nav").removeClass("show");
    $("#header-toggle").removeClass("bx-x");
  });
  
  $('#show').click(function(){
  var show = $('.customer #show').attr("class");
  if(show == "bx bx-chevron-down"){
  $('.customer_show').css("display","flex");
    $(this).removeClass("bx-chevron-down");
    $(this).addClass("bx-chevron-up");
  }
  else{
    $('.customer_show').css("display","none");
    $(this).addClass("bx-chevron-down");
    $(this).removeClass("bx-chevron-up");
  }
  });

  
  $('#night').click(function(){
    var night = $('#night').attr("class");
    if(night == "bx bx-moon"){
      $(this).removeClass(" bx-moon");
      $(this).addClass("bx-sun");
      $('header,.main_nav').addClass("n_header");
      $('.nav__list li a').addClass("n_header_li");
      $('body,.about').addClass("n_body");
      $(".main_form button").addClass("n_button");
    }
    else{
      $(this).addClass("bx-moon");
      $(this).removeClass("bx-sun");
      $('header,.main_nav').removeClass("n_header");
      $('.nav__list li a').removeClass("n_header_li");
      $('body ,.about').removeClass("n_body");
      $(".main_form button").removeClass("n_button");
      
    }
  });
  
  
});




// $(document).ready(function(){
  
//   $("#header-toggle").click(function(){
//     $(".nav").addClass("show");
//     $(this).addClass("bx-x");
//   });

//   $(".bx-x").click(function(){
//     $(".nav").removeClass("show");
//     $(this).removeClass("bx-x");
//   });


// });