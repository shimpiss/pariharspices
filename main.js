 
//add to cart 

$(function () {
  $("#items-basket").text("(" + ($("#list-item").children().length) + ")");

  $(".add").on("click", function() {
      $(this).addClass('disabled');
      $(this).each(function () {
          var name = $(this).children(".item-detail").children("h4").text();
          var remove = "<button class='remove'> X </button>";
          var cena = "<span class='eachPrice'>" + (($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
          var clickedCard = $(this).closest(".card");
          var imageSrc = clickedCard.find(".addtocart-image").attr("src");
          var image = "<img class='item-image' src='" + imageSrc + "'>";
          $("#list-item").append("<li>" + name + image + "&#09;  &#09;" + cena + remove + "</li>");

          // number of items in basket
          $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
          $("#items-basket").text();

          // calculate total price
          var totalPrice = 0;
          $(".eachPrice").each(function () {
              var cenaEach = parseFloat($(this).text());
              totalPrice += cenaEach;
          });
          $("#total-price").text(totalPrice + "₹");
      });

      // remove items from basket
      $(".remove").on("click", function () {
          $(this).parent().remove();
          var totalPrice = 0;
          $(".eachPrice").each(function () {
              var cenaEach = parseFloat($(this).text());
              totalPrice += cenaEach;
          });
          $("#total-price").text(totalPrice + "₹");
          $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
      });
  });
});

$(function() {
  $(".add").on("click", function() {
    var clickedCard = $(this).closest(".card");
    var imageSrc = clickedCard.find(".addtocart-image").attr("src");
    console.log(imageSrc);
  });
});







//page up 
window.addEventListener('scroll', function() {
    var scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });
  
  var scrollToTopBtn = document.getElementById('scrollToTop');
  
  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });