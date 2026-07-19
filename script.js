/*==============================
MENU HAMBURGER
==============================*/

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

/*==============================
CHIUSURA MENU
==============================*/

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/*==============================
NAVBAR SCROLL
==============================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.12)";

        document.querySelector(".logo").style.color="#d46ba5";

        document.querySelectorAll(".menu a").forEach(link=>{
            link.style.color="#444";
        });

        menuToggle.style.color="#d46ba5";

    }

    else{

        header.style.background="rgba(255,255,255,.15)";
        header.style.boxShadow="none";

        document.querySelector(".logo").style.color="white";

        document.querySelectorAll(".menu a").forEach(link=>{
            link.style.color="white";
        });

        menuToggle.style.color="white";

    }

});


/*==============================
ANIMAZIONI SCROLL
==============================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


/*==============================
PRENOTAZIONE WHATSAPP
==============================*/

const form = document.getElementById("bookingForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const nome=document.getElementById("nome").value;
const telefono=document.getElementById("telefono").value;
const servizio=document.getElementById("servizio").value;
const data=document.getElementById("data").value;
const ora=document.getElementById("ora").value;
const messaggio=document.getElementById("messaggio").value;

const testo =
`💅 *Nuova Prenotazione*%0A%0A
👤 Nome: ${nome}%0A
📞 Telefono: ${telefono}%0A
💖 Servizio: ${servizio}%0A
📅 Data: ${data}%0A
🕒 Ora: ${ora}%0A
📝 Richiesta:%0A${messaggio}`;

window.open(
`https://wa.me/393274377875?text=${testo}`,
"_blank"
);

});

}