function addToCartButton (idCart, idProduct){
    fetch(`http://localhost:8080/carts/${idCart}/products/${idProduct}`,{
        method:'POST',
    })
};

const botonAtras = document.getElementById('botonAtras');

function botonRemoveFromCart(idCart, idProduct){
    console.log("carrito"+idCart+"producto"+idProduct)
    fetch(`http://localhost:8080/carts/${idCart}/products/${idProduct}`,{
        method:'DELETE',
    })}