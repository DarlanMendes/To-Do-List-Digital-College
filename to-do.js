let inputTarefaDigitada = document.getElementById("input_nova_tarefa");
let tarefas = document.getElementById("tarefas");
let novaTarefa;
let listaDeTarefas=[];
let botaoSubmmit=document.getElementById("btnSubmmit");
let elementoSombreado;
let posicaoElementoSombreado;
let elementoArrastado;
let posicaoElementoArrastado;
botaoSubmmit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputTarefaDigitada.value){
        novaTarefa = inputTarefaDigitada.value;
        listaDeTarefas.push(novaTarefa);
        
        renderizaTarefas();
    }else{
        alert("Você informar uma nova atividade");
    } 
})
const deletarTarefa=(index)=>{
    let listaFiltrada=[];
    listaDeTarefas.forEach((tarefa,indexTarefa)=>{index!==indexTarefa&&listaFiltrada.push(tarefa)})
    //console.log(listaFiltrada)
   
    listaDeTarefas=listaFiltrada;
    renderizaTarefas();
}
const editarTarefa=()=>{

}
const renderizaTarefas=()=>{
    tarefas.innerHTML='';
    listaDeTarefas.map((tarefa,index)=>{
        tarefas.innerHTML+="<div class='card-body d-flex justify-content-between' > <span  draggable='true' id='"+index+"'>"+`${index+1}`+"° - "+ tarefa+"</span>  <div> <button class='btn btn-danger' onclick='deletarTarefa("+index+")'><i class='fa-solid fa-trash'></i></button> <button class='btn btn-warning' onclick='{editarTarefa("+index+")'><i class='fa-solid fa-pen-to-square'></i></button></div></div>"
        //console.log(index)
    })
    inputTarefaDigitada.value='';
    elementoSombreado= document.getElementsByClassName("tarefa");
}
document.addEventListener('dragend',e=>{
    
    elementoArrastado=listaDeTarefas[posicaoElementoArrastado];
    console.log(elementoSombreado);
   listaDeTarefas[posicaoElementoArrastado] = elementoSombreado
   listaDeTarefas[posicaoElementoSombreado] = elementoArrastado
   renderizaTarefas();
    

})


document.addEventListener('dragstart',(e)=>{
  
   posicaoElementoArrastado = e.target.id;
   console.log(posicaoElementoArrastado)
})
document.addEventListener('dragover',(e)=>{
   e.preventDefault();
})
document.addEventListener('drop',(e)=>{
   // elementoSombreado = e.target.id;

   e.preventDefault();
    console.log('posicao dropada', e.target.id)
    posicaoElementoSombreado =Number(e.target.id);
    elementoSombreado = listaDeTarefas[posicaoElementoSombreado]
})