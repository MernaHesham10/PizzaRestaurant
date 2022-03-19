
 //change background color
 const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];  
 const btn = document.getElementById("btn");
 const color = document.querySelector(".color");
         
     function getrand ()
     {
         return Math.floor(Math.random()*hex.length)
     }
         btn.addEventListener('click',()=>
         {
             let hexa="#";
             for (let i = 0; i < 6; i++)
             { 
                 hexa += hex [getrand()];
             }
            //let randnum = getrand();
            document.body.style.backgroundColor = hexa;
            color.innerHTML= hexa;
         });
         // end of change background color


          //change text of header
         function changeText(){
            var input = document.getElementById('text')
            var old = document.getElementById('oldtext');
            old.innerHTML = input.value;
        }
         
          //change img of header
          function changeimg(){
          
            var arr=[
                "images/1.jpg",
                "images/2.jpg",
                "images/16.jpg",
                "images/17.jpg",
                "images/8.jpg",
                "images/9.jpg",
                "images/2.jpg",
                "images/4.jpg",
                "images/6.jpg",
                "images/3.jpg",
            ];
               
   
   // I changed your random generator
  	//floor: helps getting a random integer
   var randomCount = (Math.floor(Math.random() * arr.length - 1));
   // I changed your array to the literal notation. The literal notation is preferred.
   
   // I changed this section to just define the style attribute the best way I know how.
   if(arr[randomCount] != ""|| arr[randomCount] != null){
   document.getElementById('desc').setAttribute("style", "background-image: url(" + arr[randomCount] + ");");
   }       

         }
  