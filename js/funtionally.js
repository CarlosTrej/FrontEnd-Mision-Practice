let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let nCakes = document.getElementById("pastel");
let size = document.getElementById("tamaño");
let sending = document.getElementById("pedidoForm");
let flavor1 = document.getElementById("vainilla");
let flavor2 = document.getElementById("chocolateS");
let flavor3 = document.getElementById("chocolateB");
let flavor4 = document.getElementById("matcha");
let flavor5 = document.getElementById("imposible")
let flavor6 = document.getElementById("redVelvet");
let flavor7 = document.getElementById("tiramisu");
let flavor8 = document.getElementById("turron");
let flavor9 = document.getElementById("pistache");
let item1 = document.getElementById("durazno");
let item2 = document.getElementById("fresa");
let item3 = document.getElementById("kiwi");
let item4 = document.getElementById("amarena");
let item5 = document.getElementById("blueBerry");
let item6 = document.getElementById("arandano");
let item7 = document.getElementById("frambuesa");
let item8 = document.getElementById("zarzamora");
let item9 = document.getElementById("nuez");
let item10 = document.getElementById("almendra");
let item11 = document.getElementById("oreo");
let regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
let flavors = [];
let items = [];
let account = 0;

function cakeSize(tamaño){
    let count = 0
    switch (tamaño) {
        case "personal":
            count = 70;
            break;
        case "pequeño":
            count = 200;
            break;
        case "mediano":
            count = 500;
            break;
        case "grande":
            count = 900;
            break;
        case "familiar":
            count = 1500;
            break;    
    }
    return count;
}/* cakeSize */

function addObject(pedido){
    let pedidos = [];
    if(localStorage.getItem("ordenes") == null){
        pedidos.push(pedido)
        localStorage.setItem("ordenes",JSON.stringify(pedidos));
    }else{
       let current = JSON.parse(localStorage.getItem("ordenes"));
       current.push(pedido)
       localStorage.setItem("ordenes",JSON.stringify(current));
        /* localStorage.setItem("ordenes",JSON.stringify(pedido)); */
    }
}/* addObject */

sending.addEventListener("submit",function(e){ 
    if(nombre.value.length ==0 ){
        alert("Ingresa los datos en el campo Nombre");   
    }else{
        if(!regex.test(email.value)){
            alert("Verifíca tu correo electrónico.");
        }else{
            
            let tamaño = size.options[size.options.selectedIndex].value;
            account = nCakes.value * cakeSize(tamaño)
            
            if(flavor1.checked){
                account += 15; 
                flavors.push(flavor1.value);
            }if(flavor2.checked){
                account += 15; 
                flavors.push(flavor2.value);
            }if(flavor3.checked){
                account += 15; 
                flavors.push(flavor3.value);
            }if(flavor4.checked){
                account += 20; 
                flavors.push(flavor4.value);
            }if(flavor5.checked){
                account += 20;
                flavors.push(flavor5.value);
            }if(flavor6.checked){
                account += 20;
                flavors.push(flavor6.value);
            }if(flavor7.checked){
                account += 30;
                flavors.push(flavor7.value);
            }if(flavor8.checked){
                account += 30;
                flavors.push(flavor8.value);
            }if(flavor9.checked){
                account += 30;
                flavors.push(flavor9.value);
            }/* end of if's flavors */

            if(item1.checked){ 
                account += 20;
                items.push(item1.value);
            }if(item2.checked){
                account += 20;
                items.push(item2.value);
            }if(item3.checked){
                account += 20;
                items.push(item3.value);
            }if(item4.checked){
                account += 30;
                items.push(item4.value);
            }if(item5.checked){
                account += 30;
                items.push(item5.value);
            }if(item6.checked){
                account += 30;
                items.push(item6.value);
            }if(item7.checked){
                account += 30;
                items.push(item7.value);
            }if(item8.checked){
                account += 30;
                items.push(item8.value);
            }if(item9.checked){
                account += 20;
                items.push(item9.value);
            }if(item10.checked){
                account += 20;
                items.push(item10.value);
            }if(item11.checked){
                account += 20;
                items.push(item11.value);
            }/* end of if's items */

            let pedido ={
                "nombre":nombre.value,
                "telefono":telefono.value,
                "email":email.value,
                "tamañoPastel":tamaño,
                "nDePasteles":nCakes.value,
                "total":account,
                "sabor":flavors,
                "ingredientes":items
            }
            addObject(pedido)
            alert("¡TU PEDIDO HA SIDO ENVIADO!")
    }
}
})
/* sending.addEventListener("submit", function(e){
    
}) *//* sending */
