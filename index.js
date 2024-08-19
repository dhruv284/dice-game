function image_generator(){
    n=Math.random();
    n=n*6;

    n=Math.floor(n)+1;

    name1=prompt("Enter 1st Player name")
    name2=prompt("Enter 2nd Player Name")

    if ( n==1){

        document.getElementById("img1").src="./images/dice1.png";
        
    }
    if ( n==2){

        document.querySelector(".img1").src="./images/dice2.png";
    }

    if ( n==3){

        document.querySelector(".img1").src="./images/dice3.png";
    }
    if ( n==4){

        document.querySelector(".img1").src="./images/dice4.png";
    }
    
    if ( n==5){

        document.querySelector(".img1").src="./images/dice5.png";
    }
    if ( n==6){

        document.querySelector(".img1").src="./images/dice6.png";
    }

    
    n2=0
    n2=Math.random();
    n2=n2*6;
    n2=Math.floor(n2)+1;

    if ( n2==1){

        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        
    }
    if ( n2==2){

        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    }

    if ( n2==3){

        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    }
    if ( n2==4){

        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    
    if ( n2==5){

        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    if ( n2==6){

        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
    document.querySelector(".p1").textContent=name1;
    document.querySelector(".p2").textContent=name2;

    if (n>n2){
        document.querySelector("h1").textContent= name1+ " Wins";
  
    }
    if (n==n2){

        document.querySelector("h1").textContent= "It's a Draw"

    }
    if(n<n2){
        document.querySelector("h1").textContent=name2+ " Wins";

    }


    
    
    


}



