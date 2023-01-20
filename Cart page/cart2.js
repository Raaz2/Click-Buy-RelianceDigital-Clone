const baseUrl = "http://localhost:3000";
function getCartItems(url){
    fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        console.log(data);

    })
    .catch((err) =>{
        console.log(err);
    })
}

getCartItems(`${baseUrl}/cart`);