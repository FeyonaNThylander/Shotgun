
var audio = new Audio('SoundEffects/westerntheme.mp3');
audio.play();
var audio1 = new Audio('SoundEffects/shotgun-reload.mp3');
var audio2 = new Audio('SoundEffects/shotgun-fire.mp3');
var audio3 = new Audio('SoundEffects/block.mp3');





class HumanPlayer{

    constructor(myBullets)
    {
        
        this.myBullets = myBullets;
            

    }
   
}
var newPlayer = new HumanPlayer(0);


class CompPlayer{

    constructor(compBullets)
    {
        
        this.compBullets = compBullets;

    }

    compRandomChoice()
    {
    if (compNewPlayer.compBullets == 0)
    {
        var compMove = Math.floor(Math.random() * 2) + 1;
        
    }
    else
   {
        var compMove = Math.floor(Math.random() * 3) + 1;

    }

    return compMove;
}
}
var compNewPlayer = new CompPlayer(0);



class ShotgunGame
{


    ClickHere()
    {
    
      $(document).ready(function(){
            $(".gameRules").toggle();
        });
    }
    
    
    PlayAgainPopUp()
    {
        var modal = document.getElementById('myModal');
        var yes = document.getElementsByClassName("YES")[0];
        var no = document.getElementsByClassName("NO")[1];
        var gameOverPopup = function() 
        {
            modal.style.display = "block";
            yes.onclick = function()
            {
                modal.style.display = "none";
                document.location.reload(setTimeout, 1000);
            }
        }
       
        gameOverPopup();
    }


    MyMaxBulletAmount()
    {
        if (newPlayer.myBullets >= 3)
        {
            newPlayer.myBullets = 3;
            document.getElementById("morePlayerInfo1").innerHTML = "Your gun is fully loaded, fire away!";       
        }
    }
    
    CompMaxBulletAmount()
    {
        if (compNewPlayer.compBullets >= 3)
        {
            compNewPlayer.compBullets = 3;
            document.getElementById("morePlayerInfo2").innerHTML = "Your gun is fully loaded, fire away!";
        }
    }
    
    MyMinBulletAmount()
    {
        if(newPlayer.myBullets <= 0)
        {
            newPlayer.myBullets = 0;
            document.getElementById("playerInfo1").innerHTML = "Hurry up and reload your gun!";         
        }
    }

    GameOver()
    {
        document.getElementById("myBulletCount").innerHTML = "G A M E";
        document.getElementById("compBulletCount").innerHTML = "O V E R"; 
    }


    Load_Button()
    {     
            var compMove = compNewPlayer.compRandomChoice();
            audio1.play();
        
            if(compMove == 1)
       {
            newGame.MyMaxBulletAmount();
            newGame.CompMaxBulletAmount();
          
            newPlayer.myBullets+=1;
            compNewPlayer.compBullets+=1;
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets; 
            document.getElementById("playerInfo1").innerHTML = "You loaded your gun with a bullet";
            document.getElementById("playerInfo2").innerHTML = "You loaded your gun with a bullet";
        
        }
        else if (compMove == 2)
        { 
            newPlayer.myBullets+=1;
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets;   
            document.getElementById("playerInfo1").innerHTML = "You loaded your gun with a bullet";
            document.getElementById("playerInfo2").innerHTML = "Great block!";
        
        }
        else 
        {
            newGame.MyMinBulletAmount();                

            newPlayer.myBullets = 0;
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets; 
            document.getElementById("playerInfo1").innerHTML = "You LOST! You've just gained an enemy";
            document.getElementById("playerInfo2").innerHTML = "Congrats, you WON! Computers rule!";
            newGame.GameOver();
            newGame.PlayAgainPopUp();
        }
    
    }
    
    Block_Button()
    {
        var compMove = compNewPlayer.compRandomChoice();
        audio3.play();
        
    
        if(compMove == 1)
        {
            newGame.MyMaxBulletAmount();
            newGame.CompMaxBulletAmount();
    
            compNewPlayer.compBullets+=1;
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets; 
            document.getElementById("playerInfo1").innerHTML = "Wow, you're quick! Great Block!";
            document.getElementById("playerInfo2").innerHTML = "You loaded your gun with a bullet";
            
        }
        else if (compMove == 2)
        {
           
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets;   
            document.getElementById("playerInfo1").innerHTML = "Nothing happened, the tension is rising..";
            document.getElementById("playerInfo2").innerHTML = "Nothing happened...";
        }
        else 
        {                
            compNewPlayer.compBullets-=1;
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets; 
            document.getElementById("playerInfo1").innerHTML = "You blocked, Yiihaa you're on fire!";
            document.getElementById("playerInfo2").innerHTML = "Shots fired, you lost a bullet..";
            
        }
       
    }
    
     Shoot_Button()
    {
        var compMove = compNewPlayer.compRandomChoice();
        audio2.play();
        
        if(compMove == 1 && newPlayer.myBullets > 0)
        {
            compNewPlayer.compBullets -=1;
            newGame.MyMinBulletAmount();                
                    
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets; 
            document.getElementById("playerInfo1").innerHTML = "Yiihaa, you WON!";
            document.getElementById("playerInfo2").innerHTML = "You LOST! (Because you blinked!)";
            newGame.GameOver();
            newGame.PlayAgainPopUp();
            
        }
        else if (compMove == 2 && newPlayer.myBullets > 0)
        {
            newPlayer.myBullets-=1;
            newGame.MyMinBulletAmount(); 
    
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets;   
            document.getElementById("playerInfo1").innerHTML = "Shots fired, you lost a bullet..";
            document.getElementById("playerInfo2").innerHTML = "You blocked, smart move!";
            
        }
        else if (compMove == 3 && newPlayer.myBullets > 0)
        {
            compNewPlayer.compBullets-=1;
            newPlayer.myBullets-=1;
    
            newGame.MyMinBulletAmount();                
    
            document.getElementById("myBulletCount").innerHTML = newPlayer.myBullets;
            document.getElementById("compBulletCount").innerHTML = compNewPlayer.compBullets; 
            document.getElementById("playerInfo1").innerHTML = "Shots fired, you lost a bullet..";
            document.getElementById("playerInfo2").innerHTML = "Shots fired, you lost a bullet..";
            
        }
        else
        {
            document.getElementById("playerInfo1").innerHTML = "You can't shoot without any bullets, duh!";
        }
        
    }
    
    Shotgun_Button() 
    {
       audio2.play();

       if (newPlayer.myBullets == 3)
        {
            document.getElementById("playerInfo1").innerHTML = "*SHOTGUN* YOU WON";
            document.getElementById("playerInfo2").innerHTML = "You Lost, R.I.P";  
            newGame.GameOver();     
            newGame.PlayAgainPopUp();
        }
        else
        {
            document.getElementById("playerInfo1").innerHTML = "You need 3 bullets to use *SHOTGUN*";
            
        }
        
    }

}

var newGame = new ShotgunGame();
 