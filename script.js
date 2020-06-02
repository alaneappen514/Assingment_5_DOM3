



let count = 0;
let colorchoice;


document.getElementById("addRow").addEventListener("click", function(event){
    let tablebody = document.getElementById("table");
    let createRow =  document.createElement('tr');
    if(count === 0)
    {
    
     tablebody.appendChild(createRow).setAttribute("class", "Row");
     createRow.classList.add(colorchoice)
     createRow.appendChild(document.createElement('th'));
     
    }
    else{
        tablebody.appendChild(createRow).setAttribute("class", "Row");
        createRow.classList.add(colorchoice)
        for(i = 0; i< count; i++)
        {
            addColumns(createRow);
        }
    }

    });

document.getElementById("addColumn").addEventListener("click", function(){
     count++;
 });

const removeRow = document.getElementById("removeRow");
const row = tablebody.getElementsByTagName("tr");
button.addEventListener("click", function(e){
    if (tablebody.getElementsByTagName("tr").length === 0) {
        alert("The grid have no rows");
    }
    else {
        row[row.length - 1].remove();
    }
});

const removeColumn = document.getElementById("removeColumn");
const column = tablebody.getElementsByTagName("th");
button.addEventListener("click", function(e){
    if (tablebody.getElementsByTagName("th").length === 0) {
        alert("The grid have no columns");
    }
    else {
        column[column.length - 1].remove();
    }
});

 document.getElementById("addColor").addEventListener("click",function(){
    var e = document.getElementById("color");
    colorchoice = e.options[e.selectedIndex].text;
 })

 document.getElementById("addAllColor").addEventListener("click", function(event){
    
    elements = document.getElementsByClassName("Row");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(colorchoice);
    }
});

document.getElementById("clearAllColor").addEventListener("click", function(event){
    
    elements = document.getElementsByClassName("Row");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(colorchoice);
    }
});
 

 function addColumns(element){
    element.appendChild(document.createElement('th'));
 }

 



       
    



 



  
