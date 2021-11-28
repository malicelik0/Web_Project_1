let formDom = document.querySelector("#loginForm");
formDom.addEventListener("submit",formSubmit);

function formSubmit(event) {
    event.preventDefault();
    let email= document.querySelector("#email").value;
    let pass= document.querySelector("#pass").value;

    if(email=="admin" && pass=="12345"){
        window.location.href="index.html?d=1";
    }
}