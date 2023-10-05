var images = ["https://th.bing.com/th/id/R.5b883ccc5bbac99603831ebcb560072b?rik=ZeaTv%2b%2fUGSZUjg&pid=ImgRaw&r=0","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
var names = ["Álbum de Família","Rodrigo Silva", "Diego Silva", "Roberto Silva", "Aline Silva", "Sonia Silva"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}