document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const rows  = document.getElementById("addRow").value;
    for(i = 0 ; i< rows; i++)
    {
      append();
    }
    
    });

    function append(){
        const columns = document.getElementById("addColumn").value;
        let tablebody = document.getElementById("table");
        let createRow =  document.createElement('tr');
        tablebody.appendChild(createRow);
        createRow.appendChild(document.createElement('th'));
        createRow.appendChild(document.createElement('th'));
    };

  