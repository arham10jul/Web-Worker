var k=0;
function timeCount(){
    k =k+1;
    postMessage(k);
    setTimeout("timeCount()",1000);

}
timeCount();