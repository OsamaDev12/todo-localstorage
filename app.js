// onload = getTodoList()

var arry = []
var obj = {};


function addTodo() {
    var todo = document.getElementById("input").value;
    var tite = document.getElementsByClassName("Titel").value
    var date = new Date().toLocaleDateString();
    // var dd = isdone(false)

    obj = {
        Discription: todo,
        Titel: tite,
        Date: date,
        isdone: false
    }
    var getStorage = localStorage.getItem("Discription")
    if (getStorage == null) {
        arry = [];
        // a.classList.add("fa-trash")



    } else {
        arry = JSON.parse(getStorage)
    }


    if (todo) {
        arry.push(obj)
        localStorage.setItem("Discription", JSON.stringify(arry))
        getTodoList()
            //var a = document.getElementById("hide")
            //a.classList.remove("hide")

    } else {
        alert("Please Enter Title & Description")
    }
    todo.value = "";
    //tite.value = "";



    //console.log(arry)
    getTodoList()

}

function getTodoList() {
    document.getElementById("pera").innerHTML = ""
    arry = localStorage.getItem("Discription")

    arry = JSON.parse(arry)
    arry.forEach(function(abc, index) {
        var pera = document.createElement("p")
        var list = document.createElement("h4");
        list.setAttribute("class", "Titel")
        var listText = document.createTextNode("Add Titel")
        list.appendChild(listText)




        pera.appendChild(list)


        var editBtn = document.createElement("button")
        var edit_text = document.createTextNode("Edit Title")
        editBtn.setAttribute("onclick", "editItem(this)")
        editBtn.setAttribute("class", " btn btn-secondary btn-sm ")


        editBtn.appendChild(edit_text)
        list.appendChild(editBtn)



        document.getElementById("pera").appendChild(pera);

        // create todomain
        var h3c = document.createElement("h3")
        var list1 = document.createElement("h2");
        var listText1 = document.createTextNode(abc.Discription)
        h3c.appendChild(listText1)
        list1.append(h3c)




        var h3cc = document.createElement("h3")


        var editBtn1 = document.createElement("button")
        var edit_text1 = document.createTextNode("Edit")
        editBtn1.setAttribute("onclick", "edit(this)")
        editBtn1.style = "margin : 10px"
        editBtn1.setAttribute("class", " btn btn-secondary btn-sm ")
        editBtn1.appendChild(edit_text1)
        h3cc.appendChild(editBtn1)
        list1.appendChild(h3cc)


        document.getElementById("input").value = ""

        var delBtn = document.createElement("button")
        var delete_text = document.createTextNode("Remove")
        delBtn.appendChild(delete_text)
        delBtn.setAttribute("onclick", "deleteItem(this.id)")
        delBtn.style = "margin : 10px"

        delBtn.setAttribute("id", index)
        delBtn.setAttribute("class", " btn btn-danger btn-sm")



        h3cc.appendChild(delBtn)




        pera.appendChild(list1)

        //date
        var todoDate = document.createElement("h4")
        var todateText = document.createTextNode(abc.Date);
        todoDate.appendChild(todateText)
        list.appendChild(todoDate)


        var checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")
        checkBox.setAttribute("class", "checkbox")
        checkBox.setAttribute("class", "larger")
        checkBox.style = "margin : 10px"


        h3cc.appendChild(checkBox)

        // var isD = document.createElement("h4")
        // var isDText = document.createTextNode(abc.isdone)
        // isD.appendChild(isDText)
        // list1.appendChild(isD)




        if (arry[index].isdone === true) {
            // console.log("working", checkBox.checked);
            list1.classList.add("line")
            checkBox.checked = true;
            // console.log("working", checkBox.checked);

        }


        //line-through
        checkBox.addEventListener("click", function() {

            //console.log(a[index]);
            // console.log(arry[index].isdone);

            if (arry[index].isdone == false) {
                var aah = document.getElementsByTagName("h2")

                aah[index].style.textDecoration = "line-through"
                arry[index].isdone = true;
                localStorage.setItem("Discription", JSON.stringify(arry))

            } else {
                var aah = document.getElementsByTagName("h2")

                aah[index].style.textDecoration = "none"
                arry[index].isdone = false;
                localStorage.setItem("Discription", JSON.stringify(arry))


            }
        })





    })
}

// function checking() {
//     arry.forEach(function(element, index) {
//         if (element.isdone == true) {
//             var aah = document.getElementsByTagName("h2")[index];
//             // var b = document.querySelectorAll("span")[index];
//             aah.style.textDecoration = "line-through"


//         }
//     })
// }

function editItem(e) {
    console.log(e.parentNode.firstChild.nodeValue);
    var edit_value = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit_value
}

function edit(e) {
    var edit_value1 = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit_value1
}

function deleteItem(e) {
    arry = localStorage.getItem("Discription")
    arry = JSON.parse(arry)
    arry.splice(e, 1)
    localStorage.setItem("Discription", JSON.stringify(arry))

    getTodoList()
}

//     function getTodoList(){

//     document.getElementById("todoItems").innerHTML = ""

//     arry.forEach(function(abc,index){




//       var list = document.createElement("li");

//       var checkBox = document.createElement("input")
//       checkBox.setAttribute("type","checkbox")
//       checkBox.setAttribute("class","checkbox")
//       checkBox.setAttribute("class","larger")

//       list.appendChild(checkBox)


//       var liText = document.createTextNode(abc);
//       list.appendChild(liText)
//       document.getElementById("todoItems").appendChild(list);
//       document.getElementById("input").value = ""

//       list.setAttribute("class","list-group-item list-group-item-primary d-flex justify-content-between" )









//       var delBtn  = document.createElement("button")
//       var delete_text = document.createTextNode("Remove")
//       delBtn.appendChild(delete_text)
//       delBtn.setAttribute("onclick","deleteItem(this.id)")
//       delBtn.setAttribute("id",index)
//       delBtn.setAttribute("class"," btn btn-danger btn-sm")




//       list.appendChild(delBtn)



//       var editBtn = document.createElement("button")
//       var edit_text = document.createTextNode("Edit")
//       editBtn.setAttribute("onclick","editItem(this)")
//       editBtn.setAttribute("class"," btn btn-secondary btn-sm ")


//       editBtn.appendChild(edit_text)
//       list.appendChild(editBtn)



//     })
// }

// function deleteAll() {
//     todoItems.innerHTML = ""
// }
// function deleteItem(e){
//     arry.splice(e,1)
//     getTodoList()
// }

// function editItem(e){
//     var edit_value = prompt("Enter updated value",e.parentNode.childNodes[1].nodeValue)
//     e.parentNode.childNodes[1].nodeValue = edit_value
// }