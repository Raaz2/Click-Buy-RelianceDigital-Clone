let loginbtn = document.getElementById('loginbtn')
let registerAdminBtn = document.getElementById('registerbtn')
let addProductBtn = document.getElementById('addProductbtn')
let span = document.getElementById('span')

let loginDiv = document.getElementById('login');
let regDiv = document.getElementById('registration');
let AddProductDiv = document.getElementById('product');

//login Inputs
let iLemail = document.getElementById('iLemail');
let iLpass = document.getElementById('iLpass');
let iLbutton = document.getElementById('iLbutton')

//Registration inputs
let iRName = document.getElementById('iRName');
let iRemail = document.getElementById('iRemail');
let iRmobile = document.getElementById('iRmobile');
let iRpassword = document.getElementById('iRpassword');
let iRbutton = document.getElementById('iRbutton')

//add product inputs       
let aPtitle = document.getElementById('aPtitle');
let aPimg = document.getElementById('aPimg');
let aPbrand = document.getElementById('aPbrand');
let aPdeal = document.getElementById('aPdeal');
let aPoffer = document.getElementById('aPoffer');
let aPdiscount = document.getElementById('aPdiscount');
let aPtag = document.getElementById('aPtag');
let aPdescription = document.getElementById('aPdescription');
let aPbutton = document.getElementById('aPbutton');



loginbtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginDiv.style.display = 'block';
    regDiv.style.display = 'none';
    AddProductDiv.style.display = 'none';
    let loginObj = {
        email: iLemail.value,
        pass : iLpass.value
    }
    iLbutton.addEventListener('clik', (e) => {
        e.preventDefault();
        span.innerText = loginObj.email;
        console.log('zsdd')
    })

})

registerAdminBtn.addEventListener('click', (e) => {
    e.preventDefault();
    regDiv.style.display = 'block';
    loginDiv.style.display = 'none';
    AddProductDiv.style.display = 'none';
    let registerObj = {
        name: iRName.value,
        email: iRemail.value,
        mobile: iRmobile.value,
        password: iRpassword.value
    }
    iRbutton.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(registerObj)
    })
    
})

addProductBtn.addEventListener('click', (e) => {
    e.preventDefault();
    regDiv.style.display = 'none';
    loginDiv.style.display = 'none';
    AddProductDiv.style.display = 'block';
    let addProductObj = {
        title: aPtitle.value,
        image: aPimg.value,
        brand: aPbrand.value,
        deal: aPdeal.value,
        offer: aPoffer.value,
        discount: aPdiscount.value,
        tag: aPtag.value,
        description: aPdescription.value
    }
    aPbutton.addEventListener('click', (e) => {
        console.log(addProductObj)
    })
})
