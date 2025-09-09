// DOM Elements
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const themeToggle = document.getElementById("theme-toggle")
const contactForm = document.getElementById("contact-form")
const downloadCV = document.getElementById("download-cv")
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

// Mobile Navigation Toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Theme Toggle
let isDarkMode = true

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode

  if (isDarkMode) {
    document.documentElement.removeAttribute("data-theme")
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
  } else {
    document.documentElement.setAttribute("data-theme", "light")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Project filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block"
        setTimeout(() => {
          card.style.opacity = "1"
          card.style.transform = "scale(1)"
        }, 100)
      } else {
        const category = card.getAttribute("data-category")
        if (category === filter) {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "scale(1)"
          }, 100)
        } else {
          card.style.opacity = "0"
          card.style.transform = "scale(0.8)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      }
    })
  })
})

// Contact form handling
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Create mailto link
  const subject = `Contacto desde portafolio - ${name}`
  const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
  const mailtoLink = `mailto:tu-email@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  // Open email client
  window.location.href = mailtoLink

  // Show success message
  showNotification("¡Mensaje enviado! Se abrirá tu cliente de correo.", "success")

  // Reset form
  contactForm.reset()
})

// Download CV functionality
downloadCV.addEventListener("click", (e) => {
  e.preventDefault()

  // You can replace this with actual CV download logic
  showNotification("Funcionalidad de descarga de CV - Agrega tu archivo CV aquí", "info")

  // Example: Create a simple text CV
  const cvContent = `
CURRICULUM VITAE

Nombre: Tu Nombre
Email: tu-email@ejemplo.com
Teléfono: +XX XXX XXX XXX

PERFIL PROFESIONAL:
Desarrollador Full Stack especializado en backend con C# y .NET, 
con experiencia en desarrollo de aplicaciones web y de escritorio.

HABILIDADES TÉCNICAS:
- Backend: C#, .NET, MySQL, FastAPI
- Frontend: React, JavaScript, HTML, CSS
- Herramientas: Docker, Git, VS Code

PROYECTOS DESTACADOS:
- Sistema de Gestión de Fútbol (C# + MySQL)
- Gestor de Reservas Coworking (Python + FastAPI)
- Ecommerce de Ropa (React + Node.js)
    `

  // Create and download file
  const blob = new Blob([cvContent], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "CV_Desarrollador_FullStack.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
})

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `

  // Set background color based on type
  switch (type) {
    case "success":
      notification.style.background = "#10B981"
      break
    case "error":
      notification.style.background = "#EF4444"
      break
    case "info":
    default:
      notification.style.background = "#3B82F6"
      break
  }

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".project-card, .skill-category, .experience-item")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.98)"
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)"
  }
})

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  const originalText = heroTitle.textContent
  typeWriter(heroTitle, originalText, 50)
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})