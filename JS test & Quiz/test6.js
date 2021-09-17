let ct=30;
const counter = setInterval (() => {
ct=ct-1;
if(ct <=0){
    clearInterval(counter);
    return;
}
console.log(ct);
},1000);