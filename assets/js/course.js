/*let courseInfo = document.querySelectorAll(".accrodions-head");
console.log(courseInfo);
*/

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

function accrodion(par){
    par=`#${par}`;
    console.log(par);
    
    let panel = document.querySelector(par);
    
    if( panel.style.display=="block")
        panel.style.display="none";
    else
        panel.style.display="block";
}

var url = window.location.href; //http://127.0.0.1:5500/index.html?email=admin

var params= url.split("?");
var d=0;
if(params.length==3){
    courseId=params[2].split("=")[1];
    d=1;
}else
    courseId=params[1].split("=")[1];

console.log(courseId);
//http://127.0.0.1:5500/index.html,d=1,c=2

var ders=document.querySelector(".ders");
var dersImg=ders.querySelector(".ders-img");
var title=ders.querySelector(".title");
var teacher=ders.querySelector(".teacher");
var rating=ders.querySelector(".rating");
var pice_new=ders.querySelector(".pice-new");
var pice_old=ders.querySelector(".pice-old");
var footer=ders.querySelector(".ders-footer");
for(var i=0;i<course.length;i++){
    if(course[i].id==Number(courseId)){
        if(d==1){
        footer.innerHTML="<a href='ders.html?d=1?id="+course[i].id+"'>Satın Al</a>";
        dersImg.innerHTML="<a href='ders.html?d=1?id="+course[i].id+"'><img src='https://drive.google.com/u/0/uc?id="+course[i].imgId+"&export=download'></a>";
        }
        else{
            dersImg.innerHTML="<a href='ders.html?id="+course[i].id+"'><img src='https://drive.google.com/u/0/uc?id="+course[i].imgId+"&export=download'></a>";
            footer.innerHTML="<a href='ders.html?id="+course[i].id+"'>Satın Al</a>";
        }
        
        title.innerHTML=course[i].title;
        teacher.innerHTML=course[i].teacher;
        rating.innerHTML=course[i].rating;
        pice_old.innerHTML=course[i].pice_old;
        pice_new.innerHTML=course[i].pice_new;
        break;
    }
}

console.log(dersImg);
