

let productosDeadpool=[
   
   { foto:'img/imagen1.jpg',  nombreProducto:"Deadpool tamaño real 185cm", precioProducto: "$" +  523389, descripcionProducto: "figura de tamaño real de Deadpool basado en los cómics clásicos de Marvel"},
    
    { foto:'img/imagen2.jpg', nombreProducto:"Camiseta Deadpool dead or dead", precioProducto:  "$" +  8681111, descripcionProducto:"camiseta fabricada 100% en algodon de una calidad excelente"}, 
    
    { foto:'img/imagen3.jpg', nombreProducto:"Taza Deadpool", precioProducto:  "$" +  4319116, descripcionProducto:"una taza de una calidad excepcional, fabricada en ceramica"},

    { foto:'img/imagen4.jpg', nombreProducto:"Pack de 3 pares de calcetines Deadpool", precioProducto:  "$" +  7807932, descripcionProducto:"calcetines fabricados en algodón 86% con elastano para que no se te bajen y sean 100% cómodos."}, 
   
    { foto:'img/imagen5.jpg', nombreProducto:"Mochila Deadpool",precioProducto:  "$" +  14348976,descripcionProducto:" mide en torno 33 x 46 x 17 cm, que puedes llevar cómodamente porque su peso es ideal" },
   
    { foto:'img/imagen6.jpg', nombreProducto:"Cabeza animatrónica Deadpool",precioProducto:  "$" +   50640464,descripcionProducto:"una cabeza animatrónica, interactiva, con expresiones faciales y más de 600 efectos y frases diferentes en su inglés original"},

    { foto:'img/imagen7.jpg',  nombreProducto:"Estuche Portatodo Deadpool",precioProducto:  "$" +  3445937,descripcionProducto:"ideal para usarlo estuche para lápices, mide aproximadamente 7 x 21 x 5,5 cm."},

    { foto:'img/imagen8.jpg', nombreProducto:"Botella Acero Deadpool", precioProducto:  "$" +  9554290, descripcionProducto:"una botella de gran calidad, fabricada en una combinación de plástico y acero inoxidable "},

    { foto:'img/imagen9.jpg', nombreProducto:"Gorro Reversible Deadpool", precioProducto:  "$" +  7028309, descripcionProducto:"un gorro o sombrero muy cómodo y práctico"}, 
    
   { foto:'img/imagen10.jpg', nombreProducto:"Cuaderno Deadpool", precioProducto:  "$" +   3445937, descripcionProducto:"Una maravilla de libreta o cuaderno, de tamaño aproximadamente (13 cm x 21 cm)"}

] 

//Necesito recorrer un arreglo en JS 


//1.Creo una variable para almacenar la base sobre cual voy a pintar

let fila=document.getElementById("fila")


productosDeadpool.forEach(function (producto) {   
console.log(producto.nombreProducto) 
console.log(producto.foto)
console.log(producto.precioProducto)




  //pintando etiquetas 

  //div con la clase col 
  let columna=document.createElement("div") 
  columna.classList.add("col") 
  
  //2 pintando etiquetas

//div con las clases card h-100

 let targeta=document.createElement("div")
 targeta.classList.add("card")
 targeta.classList.add("h-100")  


 //img con la clase card-img-top

 let foto=document.createElement("img")
 foto.classList.add("card-img-top")
 foto.src=producto.foto


 //h4 con la clase text-center 
 let titulo=document.createElement("h4")
titulo.classList.add("text-center") 
titulo.textContent=producto.nombreProducto

let precio=document.createElement("h5")
precio.classList.add("text-center")
precio.textContent=producto.precioProducto


let descripcion=document.createElement("h6")
descripcion.classList.add("text-center")
descripcion.textContent=producto.descripcionProducto


//3 padres e hijos 
targeta.appendChild(foto)
targeta.appendChild(titulo)
targeta.appendChild(precio)
targeta.appendChild(descripcion)
columna.appendChild(targeta)
fila.appendChild(columna) 


})

