function add(){
    if(!checkEmptyInput()){
    newRow = datos.insertRow(datos.length)
    cell1 = newRow.insertCell(0).innerHTML = fname
    cell2 = newRow.insertCell(1).innerHTML = lname
    cell3 = newRow.insertCell(2).innerHTML = age
 }
   selected()
   /* clean() */
}
function selected(){for(let i = 1; i < datos.rows.length; i++){

        datos.rows[i].onclick = function(){
          rIndex = this.rowIndex;
          id("fname").value = this.cells[0].innerHTML
          id("lname").value = this.cells[1].innerHTML
          id("age").value = this.cells[2].innerHTML
        }}
} 

function edit(){
    if(!checkEmptyInput()){
    datos.rows[rIndex].cells[0].innerHTML = fname
    datos.rows[rIndex].cells[1].innerHTML = lname 
    datos.rows[rIndex].cells[2].innerHTML = age
}}

function remove(){datos.deleteRow(rIndex);
    fname = "";
    lname = "";
    age = "";
}

function clean(){
    id("fname").value = ""
    id("lname").value = ""
    id("age").value = ""
}


