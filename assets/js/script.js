function bell(){
    var bells = document.getElementsByClassName("menu-bells");
    var bells_list=document.getElementsByClassName("bell-list");
    var a=bells_list[0].getElementsByTagName("a");

     if(bells[0].style.display=="block"){
        bells[0].style.display="none";
        a[0].style.color="black";
     }
     else{
        bells[0].style.display="block";
        a[0].style.color="#7b0ec4";
     }
        
    
    
}

function join(par){
    var url = window.location.href; //http://127.0.0.1:5500/index.html?email=admin
    var location="";
    var d="";
    var param= url.split("?");
    if(param.length>1){
        d = param[1].split("=")[1];
        if(d.split("#").length==2)
            d=d.split("#")[0];
    }

    if(d=="1"){
      var bells = document.querySelector(".bells");
      var bells = bells.querySelectorAll(".bell");
      var parId="#bell-"+par;
      var bellfooter = bells[par-1].querySelector(parId);
      var a = bellfooter.getElementsByTagName("a");
      alert("Katılımınızı aldık. İyi çalışmalar dileriz");
      bellfooter.innerHTML='<a href="javascript:join('+par+');"  id="bell-'+par+'" class="btn-sale">Katıldınız</a>';
      a[0].style.backgroundColor ="rgb(72 72 69)";
    }else{
      alert("Katılmanız için giriş yapmalısınız!");

    }
}

function add(par){
   var url = window.location.href; //http://127.0.0.1:5500/index.html?email=admin
    var location="";
    var d="";
    var param= url.split("?");
    if(param.length>1){
        d = param[1].split("=")[1];
        if(d.split("#").length==2)
            d=d.split("#")[0];
    }

    if(d=="1"){
      var courses = document.querySelector("#add");
      var courses = courses.querySelectorAll(".slider");
      var parId="#course-"+par;
      var coursefooter = courses[par-1].querySelector(parId);
      var a = coursefooter.getElementsByTagName("a");
      alert("Satın alma işlemi gerçekleşti. İyi çalışmalar dileriz");
      coursefooter.innerHTML='<a href="javascript:add('+par+');"  class="btn-sale">Derse Git</a>';
      a[0].style.backgroundColor ="rgb(72 72 69)";
    }else{
      alert("Satın Almanız için giriş yapmalısınız!");
    }
}