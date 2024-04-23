let myform = document.querySelector("form");
let stName = document.getElementById("name");
let id = document.getElementById("employeeID");
let depart = document.getElementById("department");
let experi = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let Alldata = [];
myform.addEventListener("submit",function(e)
{
    e.preventDefault();
    let Data ={};
    Data.input1=stName.value;
    Data.input2=id.value;
    Data.input3=depart.value;
    Data.input4=experi.value;
    Data.input5=email.value;
    Data.input6=mobile.value;
    Alldata.push(Data)
    tbody.innerHTML=null
    Alldata.map((ele)=>
    {
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td");
        let deleteButton = document.createElement("button");
        td1.innerText=ele.input1
        td2.innerText=ele.input2
        td3.innerText=ele.input3
        td4.innerText=ele.input4
        td5.innerText=ele.input5
        td6.innerText=ele.input6
        if(experi.value>5){
            td7.innerText="Senior"
        }
        else if(experi.value>2 && experi.value<5){
            td7.innerText="Junior"
        }
        else if(experi.value<=1){
            td7.innerText="Fresher"
        }
        document.querySelector("form").reset();
        deleteButton.innerText = "Delete";
                deleteButton.addEventListener("click", function () {
                    // Remove the corresponding row when the delete button is clicked
                    let rowIndex = Alldata.indexOf(ele);
                    Alldata.splice(rowIndex, 1);
                    row.remove();
                });
                td8.appendChild(deleteButton);
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(row);
    })
})