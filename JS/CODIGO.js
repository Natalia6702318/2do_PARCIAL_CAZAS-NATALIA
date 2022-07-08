let lis12=[];
let listaN=[];
let listL=[];
//ACA EMPIEZA EL CODIGO

function add(){
    lis12.push(document.getElementById("ent1").value);
    document.getElementById("res1").innerHTML=lis12;
    console.log(lis12);
}

function add2(){
    listaN.push(document.getElementById("ent2").value);
    document.getElementById("res3").innerHTML=listaN;
    console.log(listaN);
}

function add3(){
    listL.push(document.getElementById("ent3").value);
    document.getElementById("res4").innerHTML=listL;
    console.log(listL);
}

function most(){
    document.getElementById("res2").innerHTML=lis12;
}

function elim(){
    lis12.pop();
    document.getElementById("res2").innerHTML=lis12;
}

function ord(){
    listaN.sort(function(a,b){return a - b});
    document.getElementById("res3").innerHTML=listaN;
    console.log(listaN);
}

function ord2(){
    listL.sort();
    document.getElementById("res4").innerHTML=listL;
    console.log(listL);
}

function ag(){
    lis12.push(document.getElementById("en5").value);
    document.getElementById("re5").innerHTML=lis12;
    console.log(lis12);   
}

function ag1(){
    listaN.push(document.getElementById("ent22").value);
    document.getElementById("res33").innerHTML=listaN;
    console.log(listaN);
}

function ag2(){
    listL.push(document.getElementById("ent33").value);
    document.getElementById("res44").innerHTML=listL;
    console.log(listL);
}

function orde(){
    listaN.sort(function(a,b){return a - b});
    document.getElementById("res33").innerHTML=listaN;
    console.log(listaN);
}
function orde1(){
    listL.sort();
    document.getElementById("res44").innerHTML=listL;
    console.log(listL);
}

function ag2(){
    listL.push(document.getElementById("ent33").value);
    document.getElementById("res44").innerHTML=listL;
    console.log(listL);
}

function orde(){
    listaN.sort(function(a,b){return a - b});
    document.getElementById("res33").innerHTML=listaN;
    console.log(listaN);
}
function orde1(){
    listL.sort();
    document.getElementById("res44").innerHTML=listL;
    console.log(listL);
}