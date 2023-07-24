//fetch(); regresa una promesa tiene 2 parametros 
function getData() {
    let promesa = fetch("https://fakestoreapi.com/products",{
        method: "GET"
});

promesa.then( (response)=>{
    response.json()
    .then((data)=>{
        createCards(data);
    })
    .catch(
        (erro)=>{console.error("Problema en el json", error);

    });

})
.catch((error)=>{
    console.error(error, "Ocurrio un error en la solicitud")
    
});
    
}//get Data


getData()
//let mainProds.getElementById
function createCards(prods){
    prods.forEach(prods =>{
        mainProds.insertAdjacentHTML("beforeend",`
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">

        <div class="card" style="width: 250px;">
        <img src="${prods.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">${prods.description.slice(0,80)}</p>
          <a href="#" class="botones btn-primary">Go somewhere</a>
        </div>
        </div>
        </div`)
        
    })


   
   
   
   
   






    
    // data.forEach(producto =>{
    //console.log(producto.id, producto.title);

}

//});
//};

//TAREA TOMAR TODOS LOS PRODUCTOS 20 DE LA FAKE API    HACER UNA TIENDA ONLINE EN CON BOOTSTRAP 
//REGENERAR EL CREATE CARDS PARA QUE SE EJECUTE EN LA PANTALLA 