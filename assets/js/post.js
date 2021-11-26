let formDom = document.querySelector("#loginForm");
formDom.addEventListener("submit",formSubmit);

function formSubmit(event) {
    event.preventDefault();
    let email= document.querySelector("#email").value;
    let pass= document.querySelector("#pass").value;

    if(email=="admin" && pass=="12345"){
        var securty=pass+"#7854@63";
        window.location.href="index.html?e=" + email +"?p="+securty;
    }
}