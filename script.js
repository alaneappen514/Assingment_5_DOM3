
let count = 0;


document.getElementById("addRow").addEventListener("click", function(event){
    let tablebody = document.getElementById("table");
    let createRow =  document.createElement('tr');
    if(count === 0)
    {
    tablebody.appendChild(createRow);
    createRow.appendChild(document.createElement('th'));
    }
    else{
        tablebody.appendChild(createRow);
        for(i = 0; i< count; i++)
        {
            addColumns(createRow);
        }
    }

    });

document.getElementById("addColumn").addEventListener("click", function(event){
     count++;
 });

 function addColumns(element){
    element.appendChild(document.createElement('th'));
 }
 



       
    



 



  