// ==============================
// MENU CHE CAMBIA COLORE
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";

        document.querySelectorAll(".navbar a").forEach(link=>{
            link.style.color="#333";
        });

        document.querySelector(".logo").style.color="#ff5ea8";

    }else{

        navbar.style.background="rgba(255,255,255,.15)";
        navbar.style.boxShadow="none";

        document.querySelectorAll(".navbar a").forEach(link=>{
            link.style.color="white";
        });

        document.querySelector(".logo").style.color="white";

    }

});


// ==============================
// ANIMAZIONI ALLO SCROLL
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ==============================
// CONTATORE ANIMATO
// ==============================

const counters = document.querySelectorAll(".number h2");

counters.forEach(counter=>{

    const update = ()=>{

        const target = +counter.innerText.replace("+","").replace("%","");

        const current = +counter.getAttribute("data-value") || 0;

        const increment = target / 80;

        if(current < target){

            const next = Math.ceil(current + increment);

            counter.setAttribute("data-value",next);

            if(counter.innerText.includes("%")){

                counter.innerText = next + "%";

            }else{

                counter.innerText = next + "+";

            }

            setTimeout(update,20);

        }

    };

    update();

});


// ==============================
// LIGHTBOX GALLERIA
// ==============================

const gallery = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

gallery.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src=image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


// ==============================
// TORNA SU
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ==============================
// PRENOTAZIONE
// ==============================

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefono = document.getElementById("telefono").value;
    const servizio = document.getElementById("servizio").value;
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const messaggio = document.getElementById("messaggio").value;

    const testo =
`Ciao Sabry! 💖

Vorrei prenotare un appuntamento.

👤 Nome: ${nome}

📞 Telefono: ${telefono}

💅 Servizio: ${servizio}

📅 Data: ${data}

🕒 Ora: ${ora}

📝 Richieste:
${messaggio}`;

    const url = `https://wa.me/393274377875?text=${encodeURIComponent(testo)}`;

    window.open(url, "_blank");

});
======================
 ANIMAZIONI
==============================*/

.hidden{
    opacity:0;
    transform:translateY(80px);
    transition:1s;
    }
    
    .show{
    opacity:1;
    transform:translateY(0);
    }
    
    #lightbox{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.9);
    display:none;
    justify-content:center;
    align-items:center;
    z-index:9999;
    }
    
    #lightbox.active{
    display:flex;
    }
    
    #lightbox img{
    max-width:90%;
    max-height:90%;
    border-radius:20px;
    }
    
    #topBtn{
    position:fixed;
    bottom:30px;
    right:30px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:#ff5ea8;
    color:white;
    font-size:24px;
    cursor:pointer;
    display:none;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
    transition:.3s;
    }
    
    #topBtn:hover{
    transform:scale(1.1);
    }
    
    const toggle=document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");

toggle.addEventListener("click",()=>{

    menu.classList.toggle("active");

});

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});