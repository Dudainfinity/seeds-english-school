// ====== Configuração ======
const telefone = "5541987988877"; // Número que recebe as inscrições (55 + DDD 41 + número)

// ====== Envio do formulário pelo WhatsApp ======
function enviarWhatsApp() {
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const curso = document.getElementById("curso").value;
  const nivel = document.getElementById("nivel").value;
  const horario = document.getElementById("horario").value.trim();
  const mensagemExtra = document.getElementById("mensagem").value.trim();

  if (!nome || !idade || !whatsapp || !curso || !nivel || !horario) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  let mensagem = `Olá! Meu nome é ${nome} (${idade} anos).\n`;
  mensagem += `Quero fazer inscrição no curso *${curso}*.\n`;
  mensagem += `Meu nível de inglês: ${nivel}.\n`;
  mensagem += `Meu melhor horário: ${horario}.\n`;
  mensagem += `WhatsApp para contato: ${whatsapp}.`;

  if (mensagemExtra) {
    mensagem += `\n\nObservação: ${mensagemExtra}`;
  }

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  // No celular o window.open costuma ser bloqueado; navega direto se for o caso.
  const novaAba = window.open(url, "_blank");
  if (!novaAba) {
    window.location.href = url;
  }
}

// ====== Menu mobile ======
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ====== Ano dinâmico no footer ======
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ====== Máscara simples para WhatsApp ======
const whatsappInput = document.getElementById("whatsapp");
if (whatsappInput) {
  whatsappInput.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 10) {
      v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    } else if (v.length > 6) {
      v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (v.length > 2) {
      v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    } else if (v.length > 0) {
      v = v.replace(/(\d{0,2})/, "($1");
    }
    e.target.value = v;
  });
}

// ====== Reveal cards on scroll ======
const courseCards = document.querySelectorAll('.reveal-card');

if (courseCards.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 120);
      }
    });
  }, {
    threshold: 0.2,
  });

  courseCards.forEach((card) => revealObserver.observe(card));
}
