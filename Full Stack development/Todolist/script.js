function fun(){
    let cons = document.getElementById("add").value

    let con = document.createElement("div")

    let checkbox = document.createElement("Input")
    checkbox.type = "checkbox";


    let text = document.createElement("span")
    text.textContent = cons;

    con.appendChild(checkbox);
    con.appendChild(text);


    document.getElementById("tasklist").appendChild(con);
    document.getElementById("add").value ="";


}