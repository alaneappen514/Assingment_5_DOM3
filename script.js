const button = document.getElementById("removeRow");
const table = document.getElementById("table");
const row = table.getElementsByTagName("tr");
button.addEventListener("click", function(e){
    if (table.getElementsByTagName("tr").length === 0) {
        alert("The grid have no rows");
    }
    else {
        row[length - 1].remove();
    }
});
 



       
    



 



  