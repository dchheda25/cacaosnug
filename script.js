


        
 function showMenu() {
     
    
     var menuElement = document.getElementById("myLinks");
    
     console.log(menuElement)
     if (menuElement.style.display === "block") {
        menuElement.style.display = "none";
    } else {
        menuElement.style.display = "block";
    }
}