let payment_btn = document.getElementById("payment_button");
let address = document.getElementById("address");
let mobile = document.getElementById("mobile");
let card = document.getElementById("card");
let cardholder = document.getElementById("cardholder");
let date = document.getElementById("date");
let cvv = document.getElementById("cvv");
let OTP = document.getElementById("OTP");
let OTP_btn = document.getElementById("generate_otp");





payment_btn.addEventListener("click",() =>{
    if(!address.value || !mobile.value || !card.value || !cardholder.value || !date.value || !cvv.value ){
        alert("Please Fill All The Details")
        return;
    }
    if(OTP.value === localStorage.getItem("OTP")){
        alert("Payment Successful");
        return;
    }
    if(OTP.value != localStorage.getItem("OTP")){
        alert("Wrong OTP");
        return;
    }
    

    
})

OTP_btn.addEventListener("click",() =>{
    if(!address.value || !mobile.value || !card.value || !cardholder.value || !date.value || !cvv.value ){
        alert("Please Fill All The Details")
        return;
    }
    localStorage.setItem("OTP",Math.floor(Math.random()*10000));
    alert("OTP generated successfully")
    console.log(localStorage.getItem("OTP"));
    OTP.style.display="block";
    OTP_btn.style.display="none";
    payment_btn.style.display="block";
})

mobile.addEventListener("input",() =>{
    debugger
    if(mobile.value.length>10){
        mobile.value=mobile.value.substring(0,10);
    }
})