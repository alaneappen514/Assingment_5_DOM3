const button = document.getElementById("removeColumn");
const table = document.getElementById("table");
const column = table.getElementsByTagName("th");
button.addEventListener("click", function(e){
    if (table.getElementsByTagName("th").length === 0) {
        alert("The grid have no columns");
    }
    else {
        column[column.length - 1].remove();
    }
});
 



       
    



 



  