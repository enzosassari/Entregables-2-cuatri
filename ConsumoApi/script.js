
"use strict"

let url = "https://fakestoreapi.com/products";
async function tiendaApi(){
try {
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);

    data.forEach(data => {
        document.getElementById("contenedor").innerHTML +=
        `
        <div class="card" >
            <img src="${data.image}">
            <h5>${data.title}</h5>
            <p>${data.category}</p>
            <p>$ ${data.price}</p>
            <a href="#">Comprar</a>
        </div> 
        `
    });
    
}  
catch (error) {
  console.error('Error al obtener los datos:', error);
}
}

tiendaApi()
