
const allProducts = document.querySelectorAll(".card");
var div1 = document.querySelector(".div1");
var btn1 = document.getElementById("#btn");
var Total = document.querySelector("#Total");
var totalPrice = 0;

allProducts.forEach(function (item) {
  item.querySelector(".btn").onclick = function () {
    totalPrice += parseFloat(item.querySelector(".price").getAttribute("price"));
    div1.innerHTML += "<p>" + item.querySelector(".card-title").textContent + " = " + item.querySelector(".price").textContent + "</p>";
  console.log(totalPrice)
  };
})

btn1.onclick = function () {
  Total.innerHTML = "Total Price = " + totalPrice + "JD";
};


