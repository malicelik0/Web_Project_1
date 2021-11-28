var url = window.location.href; //http://127.0.0.1:5500/index.html?email=admin
var d = url.split("=")[1]
var ad = url.split("=")[0].split("?")[1];


var course =[
    {
        id:"1",
        title:"C Programlama",
        teacher:"KhanAcademy",
        rating:"4.3",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"1WqSh3K7NFRcO52hRjsVXgrO1DSz7LFPv"
    },
    {
        id:"2",
        title:"C# Programlama Eğitimi",
        teacher:"Murat Yücedağ",
        rating:"4.7",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"1mSaijdJofrBGjN3GrIzoS2W1INakBp8Q"
    },
    {
        id:"3",
        title:"Python Eğitimi",
        teacher:"Tayfun Erbilen",
        rating:"4.6",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"13vzmWt3t5b7Rs2TNBRJcb6NlgXRtmRlo"
    },
    {
        id:"4",
        title:"Vue Js Eğitimi",
        teacher:"Tayfun Erbilen",
        rating:"4.3",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"1Cf0-lMyE0MudAMDwRT6amkprqB98UcFZ"
    },
    {
        id:"5",
        title:"HTML & CSS",
        teacher:"Tayfun Erbilen",
        rating:"4.3",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"1HKdMUaJIysRZ1fDT0hFEvMBQY9r5QxPq"
    },
    {
        id:"6",
        title:"JavaScript",
        teacher:"Tayfun Erbilen",
        rating:"4.3",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"19FRk9aEmienaGx55dSMnuRqPUsuvusxf"
    },
    {
        id:"7",
        title:"NodeJs",
        teacher:"Erman Balcı",
        rating:"4.3",
        pice_new:"27.99",
        pice_old:"46.99",
        imgId:"1w2hYMn6hhB0vg2DVKsPPCO-Oeu5qeeMN"
    }
   
]





var sliders=document.querySelector(".sliders");
var slider=sliders.querySelectorAll(".slider");

for(var i=0; i<course.length; i++){
    var img
    if( ad=="d" && d=="1")
        img ="<img src='https://drive.google.com/u/0/uc?d=1?id="+course[i].imgId+"&export=download'>";
    else
        img ="<img src='https://drive.google.com/u/0/uc?id="+course[i].imgId+"&export=download'>";

    var image=slider[i].querySelector('.slider-img');
    var title=slider[i].querySelector('.title');
    var teacher=slider[i].querySelector('.teacher');
    var rating=slider[i].querySelector('.rating');
    var picenew=slider[i].querySelector('.pice-new');
    var piceold=slider[i].querySelector('.pice-old');
    var footer=slider[i].querySelector('.slider-footer');

    image.innerHTML="<a href='ders.html?id="+course[i].id+"'><img src='https://drive.google.com/u/0/uc?id="+course[i].imgId+"&export=download'></a>";
    if( ad=="d" && d=="1"){
        title.innerHTML="<a href='ders.html?d=1?id="+course[i].id+"'>"+course[i].title+"</a>";
        footer.innerHTML="<a href='ders.html?d=1?id="+course[i].id+"'>İNCELE</a>";

    }
    else{
        title.innerHTML="<a href='ders.html?id="+course[i].id+"'>"+course[i].title+"</a>";
        footer.innerHTML="<a href='ders.html?id="+course[i].id+"'>İNCELE</a>";

    }

    
    
    teacher.innerHTML=course[i].teacher;
    rating.innerHTML=course[i].rating;
    picenew.innerHTML=course[i].pice_new;
    piceold.innerHTML=course[i].pice_old;

}