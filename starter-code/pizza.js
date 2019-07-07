$(document).ready(function() {

  //----------- pizza start---------------
  $(".crust").removeClass("crust-gluten-free")
  $(".sauce").removeClass("sauce-white")
  $(".btn-pepperonni").addClass("active")
  $(".btn-mushrooms").addClass("active")
  $(".btn-green-peppers").addClass("active")
  $(".btn-crust").removeClass("active")
  $(".btn-sauce").removeClass("active")
  $(".price ul li:nth-child(4)").hide()
  $(".price ul li:nth-child(5)").hide()
  updatePrice();  

// -------------Buttons---------
  $(".btn-pepperonni").click(function() {  
    $(".pep").toggle();
     $(this).toggleClass("active")  
     $(".price ul li:nth-child(1)").toggle()
     updatePrice();
    })
  
  $(".btn-mushrooms").click(function() {  
    $(".mushroom").toggle();
    $(this).toggleClass("active") 
    $(".price ul li:nth-child(2)").toggle()
    updatePrice();
  })

  $(".btn-green-peppers").click(function() {  
    $(".green-pepper").toggle();
    $(this).toggleClass("active")
    $(".price ul li:nth-child(3)").toggle()
    updatePrice();
  })

  $(".btn-sauce").click(function() {  
   $(".sauce").toggleClass("sauce-white");
   $(this).toggleClass("active")  
   $(".price ul li:nth-child(4)").toggle()
   updatePrice();
  }) 
  
 $(".btn-crust").click(function() {  
   $(".crust").toggleClass("crust-gluten-free");
   $(this).toggleClass("active")  
   $(".price ul li:nth-child(5)").toggle()
   updatePrice();
  }) 

  });
  
// --------Total price --------

function updatePrice(){
  var price = 10

 if ($(".btn-pepperonni").hasClass("active")) {
    price += 1};

 if ($(".btn-green-peppers").hasClass("active")) {
    price += 1};

  if ($(".btn-mushrooms").hasClass("active")) {
      price += 1};

  if ($(".btn-sauce").hasClass("active")) {
    price += 3};  
  
  if ($(".btn-crust").hasClass("active")) {
    price += 5};
    console.log(price)
   return $("#totalPrice").html(price)
 
  
}
