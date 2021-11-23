

var main = document.getElementById("main");
var sliders = main.getElementsByClassName("slider");
var sliderSay= sliders.length;
var firstElement=0;
var maxelemment=3;
var temp=0;
var degisimSayisi=0;
var before=main.getElementsByClassName("before-arrow");
var after=main.getElementsByClassName("after-arrow");
before[0].style.display="none";

for(var j=maxelemment;j<sliderSay;j++){
    sliders[j].style.display="none";
}
function yaz(){
    console.log(`Değişim Sayısı: ${degisimSayisi}`);
    console.log(`Temp Numarası: ${temp}`);
    console.log(`Temp+3 Numarası: ${temp+3}`);
    console.log(`Slider Sayısı: ${sliderSay}`);
    
}

yaz();
function slaytGoster(SlaytNo){
 
    temp=degisimSayisi;
    degisimSayisi=(sliderSay-maxelemment);//7-3 4
    if(degisimSayisi>=maxelemment)
    {
        degisimSayisi=maxelemment; //3
    }
    degisimSayisi=degisimSayisi+SlaytNo;
    for(var i=SlaytNo;i<degisimSayisi;i++){//0 3+0
        sliders[i].style.display="none";
    }
    for(var i=degisimSayisi;i<(degisimSayisi+3);i++){//3+0
        sliders[i].style.display="block";
    }
    before[0].style.display="inline-block";
    sliderSay=sliderSay-3;
    yaz();

    if(sliderSay<=maxelemment){
        after[0].style.display="none";
    }else{
        after[0].style.display="inline-block";

    }
    

}

function onceki(){
    for(var i=0;i<main.getElementsByClassName("slider").length;i++){//0 3+0
        sliders[i].style.display="none";
    }
    for(var j=temp;j<(temp+maxelemment);j++){//3+0
        sliders[j].style.display="block";
    }
    firstElement=temp;
    if(temp==0)
        sliderSay=11;
    else
        sliderSay=sliderSay+3;
    

    yaz();
    temp=temp-3;

    if(sliderSay<=maxelemment)
        after[0].style.display="none";
    else
        after[0].style.display="inline-block";
    

    if(sliderSay==11)
        before[0].style.display="none";
    else
        before[0].style.display="inline-block"; 


}
function sonraki(){
    slaytGoster(firstElement);
    firstElement+=maxelemment;
}

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
        
     console.log(bells_list);
     console.log(a);
    
}

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