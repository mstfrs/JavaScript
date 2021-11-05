var bagPrice= 25.98;
var shoePrice= 45.98;
var clockPrice= 74.98;
var quantity= document.getElementById("product-quantity")
var plusQty= document.getElementsByClassName("fas fa-plus"); 
var minusQty= document.getElementsByClassName("fas fa-minus"); 
var quantityControl= document.getElementsByClassName("quantity-controller")
var productTotalPrice= document.getElementsByClassName("product-line-price")
var productPrice=document.getElementsByClassName("product-price")
var subTotal= document.getElementById("cart-subtotal")
var productInfo =document.getElementsByClassName("")


// console.log(productTotalPrice);
// console.log(productPrice.children);

    /// ****Plus quantity*****************

    for (var x = 0; x < quantityControl.length; x++) {
        
        plusQty[x].addEventListener("click",function(e){
            const quantity= e.target.parentElement.parentElement.children[1]            
            quantity.innerText = Number(quantity.innerText) + 1

            if (quantity.innerText >= 0) {
                let productTotalPrice = e.target.parentElement.parentElement.parentElement.children[4];
                let productPrice= e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0];  
                productTotalPrice.innerText=productPrice.innerText * quantity.innerText
                
                
                subTotal.children[1].innerText  =   (Number (subTotal.children[1].innerText) + Number(productPrice.innerText)).toFixed(2)
                
             
            // for (let i = 0; i< quantityControl.length; i++){


                   
                

            //     console.log(productTotalPrice.parentElement.parentElement);
            //     // subTotal.children[1].innerText  =   subTotal.children[1].innerText + quantity[i].innerText   
            // }
        }
            
        })    
    }   

        /// ****minus quantity*****************
        for (var x = 0; x < quantityControl.length; x++) {
            minusQty[x].addEventListener("click",function(e){
                let quantity= e.target.parentElement.parentElement.children[1]
                if (quantity.innerText != 0) {                
                quantity.innerText = Number(quantity.innerText) - 1
            
            if (quantity.innerText >= 0) {
                let productTotalPrice = e.target.parentElement.parentElement.parentElement.children[4];
                let productPrice= e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0];  
                productTotalPrice.innerText=productPrice.innerText * quantity.innerText
                subTotal.children[1].innerText  =   (Number (subTotal.children[1].innerText) - Number(productPrice.innerText)).toFixed(2)
                

            }  
        }
             
            })    
        }   


        /// ****sum product total *****************

        

        // for (var x = 0; x < productPrice.length; x++) {
        //         if (quantity.innerText != 0) {
        //             console.log(productTotalPrice.innerText);

    
        //         }               
            //  console.log(e.target);
                              
            //     productPrice[x].innerText =  1
            
            // })    
        // }   



// function plus() {
//     var plusQty= document.getElementsByClassName("fas fa-plus"); 
//     var quantity= document.getElementById("product-quantity")
//     var quantityControl= document.getElementsByClassName("quantity-controller")
    
// }

