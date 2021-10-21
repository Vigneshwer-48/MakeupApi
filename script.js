document.body.innerHTML = `<section class = "user-list"> </section> `

async function getAllUsers (){
    const data = await fetch ("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"); //used fetch to get the data from Make up Api
    const users = await data.json();
    const userContainer = document.querySelector(".user-list");

    // userContainer.innerHTML=``;

//used asyn and await function 
    try{
    
 users.forEach((products) => {
    
  
 
        userContainer.innerHTML= ` 
        <div class = "user-container">
        <img class = "user-image" src=" ${products.image_link}"  /> <br>
        <h1 class = "user-brand" >${products.brand} </h1> <br>
        
        <p   class = "user-name">   ${products.name}  </p> <br>
        <p class = "user-price"> ${products.price}</p> <br>
        <p  class = "user-description">  ${products.description} </p> <br>
        <p class = "user-product_link"> ${products.product_link} </p> 

        </div>`
    }
 //displayed the brand , name , image, price and product link
 )}
    

        



    catch(err){
        console.log("Try again");
    }

    // try and catch used for find the errors

 console.log(users);

}
 getAllUsers();

 