document.getElementById("heavyOperation")
.addEventListener("click",function(){
    let count = 0;
    for(let i=0;i<2000000000;i++){
        count += i;
    }
    document.getElementById("heavyOperationOutput")
    .innerText = count;
})

document.getElementById("normalOperation")
.addEventListener("click",function(){    
    document.getElementById("normalOperationOutput")
    .innerText = "Normal operation";
})


document.getElementById("workerHeavyOperation")
.addEventListener("click",function(){
    
    const worker = new Worker("worker.js");
    worker.postMessage("start");
    worker.onmessage = function(e){
        console.log("message",e);
    document.getElementById("workerHeavyOperationOutput")
    .innerText = e.data;
    } 
})

document.getElementById("workerNormalOperation")
.addEventListener("click",function(){    
    document.getElementById("workerNormalOperationOutput")
    .innerText = "worker Normal operation";
})