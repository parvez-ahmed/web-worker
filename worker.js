onmessage = function(e){
    console.log("event received in worker");
    let count = 0;
    for(let i=0;i<2000000000;i++){
        count += i;
    }
    postMessage("event from worker" + count);
}