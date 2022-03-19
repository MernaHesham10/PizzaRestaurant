/*order btn*/
 /* create array of object*/
 
 var arr = [
  {
  name:"admin",
  pass:1234
  }
  , {
      name:"user",
      pass:2001
  }
  ];
  console.log(arr);
  
  var adminname = arr[0]['name'];
  var adminpass = arr[0]['pass'];
  var username = arr[1]['name'];
  var userpass = arr[1]['pass'];
  
  
  document.getElementById("login").addEventListener('submit', function(e){
  e.preventDefault();//prevent the default behavior of submit
  
  var inputname = document.querySelector('#name').value;
  var inputpass = document.querySelector('#pass').value;
  
  console.log(inputname);
  console.log(inputpass);
  
  if(inputname == adminname && inputpass == adminpass){
    alert("You'll Receive Your Order Within 30m.");
  }
  else if(inputname == username && inputpass == userpass){
    alert("You'll Receive Your Order Within 30m.");
  }
  else{
      alert("username or password wrong");
  }
  
  } );


  /*check password & confirm password*/
   /* create array of object*/
   function check_sign_up(){
  document.getElementById("sign_up").addEventListener('submit', function(e){
  e.preventDefault();//prevent the default behavior of submit
  
  var pass = document.querySelector('#pass').value;
  var conPass = document.querySelector('#con').value;
  
  if(pass != conPass){
      alert("Password & Confirm Password Must Be The Same.");
  }
  else{
    alert("Well Done. Now You've An Account In Our Site, So to Access to Our Site You Should Enter Sign in Button And Complete the Form");
  }
  } )};


const review =[
  {
    id:1,
    kind:"marghreta",
    price:"price : 100$",
    img:"images/1.jpg",
    
},
{
    id:2,
    kind:"Mushrooms",
    price:"price : 180$",
    img:"images/7.jpg",
},
{
    id:3,
    kind:"peppronie",
    price:"price : 150$",
    img:"images/2.jpg",
 }
]
//select data 

const img =document.getElementById("p-img");
const kind =document.getElementById("kind");
const price =document.getElementById("price");

//select btns
const prebtn = document.querySelector(".pre-btn");
const nextbtn = document.querySelector(".next-btn");


let currrentitem=0;

function show() 
{
const item = review[currrentitem];
img.src=item.img;
kind.textContent=item.kind;
price.textContent=item.price;
}

//show next
nextbtn.addEventListener('click',()=>
{
currrentitem++;

if(currrentitem>review.length-1)
{
    currrentitem=0;
}
show();
})

//show pre 
prebtn.addEventListener('click',()=>
{
currrentitem--;
if(currrentitem<0)
{
    currrentitem=review.length-1;
}
show();
})