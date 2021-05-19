console.log("galería en contstrucción")
let indiceImagen = 0;
function sumarIndice (n){
    indiceImagen = indiceImagen + n;
    console.log(indiceImagen);
        mostrarImagenes();
}
function mostrarImagenes (){
    //Traer a JS los contenedores de imagenes
    let imagenes = document.getElementsByClassName("imagen");
    //Poner display = none en todos los contenedores de imágenes
    for (let i = 0; i <imagenes.length; i ++){
        imagenes [i] .style.display= "none";
    }
    //si in
    //Poner display=block en el contenedor de imagen seleccionado
   

    imagenes[indiceImagen].style.display="block";
}
mostrarImagenes();
//console.log(imagenes);
//if(n>imagenes.length){indiceImagen=1};