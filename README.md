#Click & Buy
##cloned version of Relaince Digital


# puny-corn-6420
 //Qty. decreaseing button
    let dec=document.createElement('button')
      dec.textContent='-';

      dec.addEventListener('click', function(){
        if(qt.textContent<=1){
          cartdata.splice(ind,1)

          localStorage.setItem('cart',JSON.stringify(cartdata))
          window.location.reload();
        }
        else{
          el[1]--;
          total-=Number(el[0].price);

          document.querySelector('#total').textContent=total;

          localStorage.setItem('cart',JSON.stringify(cartdata))
          qt.textContent--;
        }
      })

      //Qty. initializing by 1
      let qt=document.createElement('span')
      qt.textContent=el[1];
      
      qt.style.border='1px solid #ddd'
      qt.style.padding='7px 17px'
      qt.style.marginLeft='20px'

      //Qty. increasing button
      let inc=document.createElement('button')
      inc.textContent='+';

      inc.addEventListener('click', function(){
        el[1]++;
        total+=Number(el[0].price);
        document.querySelector('#total').textContent=total;

        qt.textContent++
        localStorage.setItem('cart',JSON.stringify(cartdata))
      })



# To Run the backend server at your local space run below command
json-server --watch db.json

# after that copy/paste this link
http://localhost:3000/


    let total=cartdata.reduce((acc,el)=> acc+ Number(el[0].price),0)
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
