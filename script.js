// =======================
// Alternância de Tema (Dark/Light)
// =======================
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", currentTheme);
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.checked = currentTheme === "dark";
}

function toggleTheme() {
  const checkbox = document.getElementById("themeToggle");
  const newTheme = checkbox.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Animação suave na troca de tema
  document.body.style.transition = "background-color 0.4s ease, color 0.4s ease";
}

// =======================
// Menu Responsivo (Hambúrguer)
// =======================
function toggleMenu() {
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("menuToggle");
  const themeSlotNav = document.getElementById("themeSlotNav");
  const themeSlotHeader = document.getElementById("themeSlotHeader");
  const themeWrapper = document.getElementById("themeToggleWrapper");

  const isOpening = !nav.classList.contains("active");

  nav.classList.toggle("active");
  toggleBtn.classList.toggle("active");

  // Move o switch de tema para dentro do menu ao abrir, e de volta ao header ao fechar
  if (isOpening) {
    if (themeWrapper && themeSlotNav) themeSlotNav.appendChild(themeWrapper);
    // 👉 adiciona margem inferior no modo responsivo quando o menu está aberto
    themeWrapper.style.marginBottom = "1rem";
  } else {
    if (themeWrapper && themeSlotHeader) themeSlotHeader.appendChild(themeWrapper);
    // 👉 remove a margem quando o menu é fechado
    themeWrapper.style.marginBottom = "";
  }
}

// =======================
// Fechar o menu ao clicar em um link
// =======================
function closeMenuOnLinkClick() {
  const links = document.querySelectorAll(".navbar a");
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("menuToggle");
  const themeSlotHeader = document.getElementById("themeSlotHeader");
  const themeWrapper = document.getElementById("themeToggleWrapper");

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggleBtn.classList.remove("active");

      // Retorna o botão de tema para o header
      if (themeWrapper && themeSlotHeader && !themeSlotHeader.contains(themeWrapper)) {
        themeSlotHeader.appendChild(themeWrapper);
      }

      // Remove margem extra caso esteja ativa
      themeWrapper.style.marginBottom = "";
    });
  });
}

// =======================
// Garantir o comportamento correto no resize
// =======================
function handleResize() {
  const nav = document.getElementById("navbar");
  const toggleBtn = document.getElementById("menuToggle");
  const themeSlotHeader = document.getElementById("themeSlotHeader");
  const themeWrapper = document.getElementById("themeToggleWrapper");

  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    toggleBtn.classList.remove("active");

    // Garante que o switch volte ao header no modo desktop
    if (themeWrapper && themeSlotHeader && !themeSlotHeader.contains(themeWrapper)) {
      themeSlotHeader.appendChild(themeWrapper);
    }

    // Remove margem extra
    themeWrapper.style.marginBottom = "";
  }
}

// =======================
// Inicialização
// =======================
document.addEventListener("DOMContentLoaded", () => {
  setInitialTheme();

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) themeToggle.addEventListener("change", toggleTheme);

  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) menuToggle.addEventListener("click", toggleMenu);

  closeMenuOnLinkClick();
  window.addEventListener("resize", handleResize);
});
