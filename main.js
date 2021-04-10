function getparagraph(){
    var para=[];
    for(var j=1;j<=6;j++){
        console.log("check");
         para.push(document.getElementById("i" +j).value);
         console.log("check");
    }  
    document.getElementById("showpara").innerHTML=para.join(" ");  
        console.log(para);
        
    }
