let form = document.querySelector('form');
let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let ul = document.querySelector('ul');
let inputerror = document.getElementById('inputError');
let inputsucses = document.getElementById('inputsucses');
let data= [];

form.addEventListener('submit',function(event){
    event.preventDefault();
    if(input.value === ""){
        inputerror.style.display = 'block';
        inputerror.innerHTML = "inputga malumot kiriting";
        inputsucses.style.display = 'none';
        return;
   }else{
    inputerror.style.display = 'none';
    inputsucses.innerHTML = "malumot kiritildi";
    inputsucses.style.display = 'block';
   }
   createObjectAndToArray();
   readDataAndShowInDisplay();
})

const makeid = (data2) =>{
    if(!data2.length){
        return 1;
    }else{
        return data2[data2.length - 1].id + 1
    }
}
function createObjectAndToArray(){
    let nameObj = {
        name:input.value,
        id:makeid
    }
    data.push(nameObj);
        let nameObj1 = {
            name:input1.value,
            id:makeid
        }
        data.push(nameObj1);
        let nameObj2= {
            name:input2.value,
            id:makeid
        }
        data.push(nameObj2);
        localStorage.setItem('data',JSON.stringify(data));
        readDataAndShowInDisplay
        console.log(data)
}
function deleteData(id){
const idx = data.findIndex(function(objId){
    objId.id = id
});
    data.splice(idx,1);
    localStorage.setItem('data',JSON.stringify(data));
    readDataAndShowInDisplay()
}
function readDataAndShowInDisplay(){
    ul.innerHTML = "";
    data.map((obj,index)=>{
        return ul.innerHTML+=`
        <li>
        ${index+1}.
        ${obj.name}
        <button>Update</button>
        <button onclick="deleteData(${obj.id})">Delete</button>
        </li>
        `
    })
    input.value = "";
    input1.value = "";
    input2.value = "";
}