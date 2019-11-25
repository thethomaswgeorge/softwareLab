let main = function(){
    $(document).ready(function(){
        $(function(){
            searchById();
            purchase();
            searchByDate();
        });
    });
}();

let url = "http://localhost:3000";
// let url = "";

let $idSearchButton = $('#idSearch');
let $dateSearchButton = $('#dateSearch');
let $purchaseButton = $('.purchasebtn');

//
function searchById(){
 $idSearchButton.click(function(){

     console.log("search by id button clicked");
   $.ajax({
       url: url,
       method: 'POST',
       crossDomain: true,
       header: {"Access-Control-Allow-Origin": true},
       success: function(data, state, res){
           console.log(data);
       },
       error: function(data, state){
           console.log(data);
       }
   })
 })
}

function searchByDate(){
    $idSearchButton.click(function(){
        console.log("search by date button clicked");
        $.ajax({
            url: url,
            method: 'POST',
            crossDomain: true,
            header: {"Access-Control-Allow-Origin": true},
            success: function(data, state, res){
                console.log(data);
            },
            error: function(data, state){
                console.log(data);
            }
        })
    })
}

function purchase(){
    $purchaseButton.click(function(){
        let price = $purchaseButton[0].getAttribute("price");
        console.log(price);
        console.log("purchase button clicked");
        $.ajax({
            url: url + "/purchase?price=" + price, // everything after ? is parameter that is being passed to route. the number should come from the
            // item being purchased
            method: 'POST',
            crossDomain: true,
            header: {"Access-Control-Allow-Origin": true},
            success: function(data, state, res){
                console.log(data);
            },
            error: function(data, state){
                console.log(data);
            }
        })
    })
}