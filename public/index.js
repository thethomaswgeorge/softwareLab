let main = function(){
    $(document).ready(function(){
        $(function(){
            searchById();
            purchase();
            searchByDate();
        });
    });

}();

let url = "http://localhost:3001";
// let url = "";

let $idSearchButton = $('#idSearch');
let $dateSearchButton = $('#dateSearch');
let $purchaseButton = $('#purchase');

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
        console.log("purchase button clicked");
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