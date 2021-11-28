function kategori(){
    var katagoriler = document.getElementsByClassName("kategoriler");
    
    if(katagoriler[0].style.display=="block"){
        katagoriler[0].style.display="none";
        //a[0].style.color="black";
     }
     else{
        katagoriler[0].style.display="block";
        //a[0].style.color="#7b0ec4";
     }

     console.log(katagoriler);


}