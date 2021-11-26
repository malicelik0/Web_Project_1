/*let courseInfo = document.querySelectorAll(".accrodions-head");
console.log(courseInfo);
*/

function accrodion(par){
    par=`#${par}`;
    console.log(par);
    
    let panel = document.querySelector(par);
    
    if( panel.style.display=="block")
        panel.style.display="none";
    else
        panel.style.display="block";
}