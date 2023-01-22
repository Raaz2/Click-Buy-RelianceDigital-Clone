let cartdata = JSON.parse(localStorage.getItem('cart')) || []
display(cartdata)



function display(cartdata) {
    // document.querySelector('#ttl-prdt').textContent = cartdata.length;
        document.querySelector('.cart-product').textContent = null;
        cartdata.forEach(item => {
            div = document.createElement("div")
            img = document.createElement("img")
            img.setAttribute("src", item[0].image)
            title = document.createElement("h3")
            title.textContent = item[0].title

            // description = document.createElement("p")
            // description.textContent= item.description

            dealprice = document.createElement("p")
            dealprice.textContent = "₹" + item[0].dealprice;
            dealprice.setAttribute("class", "dp")

            offerprice = document.createElement("span")
            offerprice.textContent = "₹" + item[0].offerprice
            offerprice.setAttribute("class", "op")

            discount = document.createElement("i")
            discount.textContent = `${item[0].discount}`
            tag = document.createElement("p")
            tag.textContent = item[0].tag
            tag.setAttribute("id", "tag")
            //Qty. decreaseing button
            let dec = document.createElement('button')
            dec.textContent = '-';

            dec.addEventListener('click', function () {
                if (qt.textContent <= 1) {
                    cartdata.splice(ind, 1)

                    localStorage.setItem('cart', JSON.stringify(cartdata))
                    window.location.reload();
                }
                else {
                    item[1]--;
                    total -= Number(item[0].price);

                    document.querySelector('#total').textContent = total;

                    localStorage.setItem('cart', JSON.stringify(cartdata))
                    qt.textContent--;
                }
            })

            //Qty. initializing by 1
            let qt = document.createElement('span')
            qt.textContent = item[1];

            qt.style.border = '1px solid #ddd'
            qt.style.padding = '7px 17px'
            qt.style.marginLeft = '20px'

            //Qty. increasing button
            let inc = document.createElement('button')
            inc.textContent = '+';

            inc.addEventListener('click', function () {
                item[1]++;
                total += Number(item[0].price);
                document.querySelector('#total').textContent = total;

                qt.textContent++
                localStorage.setItem('cart', JSON.stringify(cartdata))
            })
            let btn=document.createElement('button')
            btn.textContent="Remove"
            btn.addEventListener('click', function (){
                cartdata.splice(item,1)
                localStorage.setItem('cart',JSON.stringify(cartdata))
                window.location.reload();
            })

            div.append(img,title,dealprice,dec,qt,inc,btn)
            document.querySelector(".cart-product").append(div)
        })
        
    }
    let total=cartdata.reduce((acc,el)=> acc+ Number(el[0].dealprice),0)
        document.querySelector('#total').textContent=total;


    document.querySelector('.apply-code').addEventListener('click',applied)
    function applied(){
        let cpn=document.querySelector('#coupon').value
        if(cpn=='Masai50'){
            
            document.querySelector('#applied').textContent="Applied 🥳"
            document.querySelector('#applied').style.color='rgb(36, 186, 36)'
           
            
        }else{
            document.querySelector('#applied').textContent="Invalid"
            document.querySelector('#applied').style.color='red'
        }
    }



function placed(){
    alert('Order Placed with ❤')
    window.location='orderplaced.html'
}
 
  if(cartdata.length==0){
    window.location='cart2.html'
  }
