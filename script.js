const theadRow=document.getElementById("table-heading-row");
const tBody=document.getElementById("table-body");
let currentCell;
for(let col=65;col<=90;col++){
   //using ascii values
    let th=document.createElement("th");
    th.innerText=String.fromCharCode(col);//some how i convert my col to character
    
    theadRow.append(th);
}
for(let row=1;row<=100;row++){
    let tr=document.createElement("tr");
    let th=document.createElement("th");
    th.innerText=row;
    tr.appendChild(th);
    for(let col=1;col<=26;col++){
        let td=document.createElement("td");
        td.setAttribute("contenteditable","true");
        td.setAttribute("id",`${String.fromCharCode}`)
        td.addEventListener("focus", (event)=>onfocus(event));
        tr.appendChild(td);
    }
    tBody.appendChild(tr);

}

function onfocus(event){
    currentCell=event.target;
    document.getElementById("current-cell").innerText=event.target.td;
}