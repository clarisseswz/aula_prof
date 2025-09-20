// Botão "Voltar ao topo"
const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.innerText = "↑ Topo";
document.body.appendChild(btnTopo);

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Animações de fade-in ao rolar
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

