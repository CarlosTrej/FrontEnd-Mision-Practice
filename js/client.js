const content = document.querySelector("#containerRecept");

let pedidos = JSON.parse(localStorage.getItem("ordenes"));

vistaPedidos(pedidos);
console.log(pedidos)

function vistaPedidos(pedidos){

    let id = 1;

    pedidos.forEach(element => {
        console.log(" ----C"+element)
        /* content.innerHTML = "<h1>hole</h1>" */
        content.innerHTML += `
        <table class="ordenTable">
            <tr>
                <th>Numero de pedido</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>"${id}"</td>
                <td>${element.nombre}</td>
                <td>${element.telefono}</td>
                <td>${element.email}</td>
                
            </tr>
            <tr>
                <th>Numero de pasteles</th>
                <th>Tamaño del pastel</th>
                <th>Sabores</th>
                <th>Ingredientes</th>
            </tr>
            <tr>
                <td>${element.nDePasteles}</td>
                <td>${element.tamañoPastel}</td>
                <td>${element.sabor}</td>
                <td>${element.ingredientes}</td>
            </tr>
            
            <tr>
                <th id="total">TOTAL</th>
            </tr>
            <tr>
                <td>$ ${element.total} pesos mexicanos</td>
            </tr>
        </table>`
        id++;
    });
    
}