var url = window.location.href; //http://127.0.0.1:5500/index.html?email=admin

var d="";
var param= url.split("?");
if(param.length>1){
    d = param[1].split("=")[1];
    n = param[1].split("=")[0];

    if(d.split("#").length==2)
        d=d.split("#")[0];
}


if(n=="d" && d=="1"){
    var loginList= document.querySelector(".login");
    var signupList= document.querySelector(".signup");
    var profileList= document.querySelector(".profile");
    var bellList = document.querySelector(".bell-list");
    var uyari = document.querySelector(".uyari");
    var cikis=document.querySelector(".exit");
    loginList.style.display="none";
    signupList.style.display="none";
    profileList.style.display="block";
    bellList.style.display="block";
    cikis.style.display="block";
    uyari.innerHTML="Aynı Aynı Kampanyası ile tüm kursların ücretleri ₺27.99";


}else{
    var bellList = document.querySelector(".bell-list");
    bellList.style.display="none";
}

function kontrol(params,params2) {
    var url = window.location.href; //http://127.0.0.1:5500/index.html?email=admin
    var location="";
    var d="";
    var param= url.split("?");
    if(param.length>1){
        d = param[1].split("=")[1];
        if(d.split("#").length==2)
            d=d.split("#")[0];
    }
   

    console.log(d);

    if(params2!=''){
        if(d=="1")
            location =params+".html?d=1"+"#"+params2;
        else
            location = params+".html#"+params2;
    }else{      
        if(d=="1")
            location = params+".html?d=1";
        else
            location = params+".html";
    }
        var kategoriler = document.getElementsByClassName("kategoriler");
        kategoriler[0].style.display="none";
    
    window.location.href=location;
    
 
}