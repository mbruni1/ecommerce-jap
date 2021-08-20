
document.addEventListener("DOMContentLoaded", function (e) {
    let url = "https://japdevdep.github.io/ecommerce-api/product/all.json";

    fetch(url)
        .then(response => response.json())      //como leo estos datos...guardo la respuesta en la variable response, transformo la respuesta a formato json
        .then(data => {
            console.log(data[0]);                        // que hare con esos datos de arriba...me guardo en data lo que me guardo el then de arriba
            let i = 0;
            while (i < data.length) {   //recorrer el array posicion por posicion hasta q se termina
                let name = data[i].name;                     //creo cada variable de los datos del json q estare usando
                let description = data[i].description;
                let currency = data[i].currency;
                let cost = data[i].cost;
                let img = data[i].imgSrc;
                //me trae el elemento que tiene ese ID abajo.

                document.getElementById("id-el-que-quieres").innerHTML += `
                 <div class=table-row >
                  <div class="table-data">`+ name + `</div>
                  <div class="table-data">`+ description + `</div>
                  <div class="table-data">`+ currency + `</div>
                   <div class="table-data">`+ cost + `</div>
                   <div class="table-data" class="img"><img src=`+ img + `></div>
            
                  </div>
                   `
                i = i + 1;                    //incrementamos el i para ir avanzando
            }




        })
});




