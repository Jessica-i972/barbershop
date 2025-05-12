// Form contact
// script.js
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupérer les valeurs des inputs
  const fullName = document.getElementById("fullName").value;
  const subject = document.getElementById("subject").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Afficher un message dans la console
  console.log("Nom complet:", fullName);
  console.log("Sujet:", subject);
  console.log("Téléphone:", phone);
  console.log("Email:", email);
  console.log("Message:", message);

  // Message de confirmation
  alert("Formulaire soumis avec succès!");
});

// GSAP
// Animation title header et H1 call to action
const timelineHightlight = gsap.timeline({
  scrollTrigger: {
    trigger: ".header__content",
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

timelineHightlight.fromTo(
  ".highlight",
  { color: "rgba(255,255,255, 1)" },
  { color: "rgba(255,255,255, 0.4)", stagger: 1 }
);

// Bouton header
gsap.from(".btn-1", {
  scrollTrigger: {
    trigger: ".header_content",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// Bouton "Browse services"
gsap.from(".btn-2", {
  scrollTrigger: {
    trigger: ".header__content-btns",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.2,
});

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation section infobox "address, phone, hours"
gsap.from(".infobox__content", {
  scrollTrigger: {
    trigger: ".infobox",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
});

// Etape 1: Section "Your personal barber"
aboutTimeline.from(".about__content h2, .about__content p", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Etape 2: Animation de l'image "Your personal barber"
aboutTimeline.from(
  ".about__image img",
  {
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "<"
);

// Etape 3: Animation  des chiffres "Your personal barber"
aboutTimeline.from(".about__numbers", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Section "browse our services"
const servicesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Animation section "Browse our services"
servicesTimeline.from(
  ".services__intro",
  {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  ">"
);

servicesTimeline.from(".service1, .service3, .service5", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

servicesTimeline.from(".service2, .service4, .service6", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Bouton section "Browse our services"
servicesTimeline.from(
  ".btn-3",
  {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  },
  "-=0.3"
);

// Section "Call to action"
const tlHightlight = gsap.timeline({
  scrollTrigger: {
    trigger: ".call-to-action",
    scrub: true,
    start: "20%",
    end: "53%",
  },
});

tlHightlight.fromTo(
  ".highlight-2",
  { color: "rgba(255,255,255, 1)" },
  { color: "rgba(255,255,255, 0.4)", stagger: 1 }
);

tlHightlight.fromTo(
  ".btn-4",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
  "<"
);

// Animation section "Why choose us"
const chooseTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".choose",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Animation des services
chooseTimeline.from(".choose__intro", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

chooseTimeline.from(
  ".choose1",
  {
    x: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

chooseTimeline.from(
  ".choose2",
  {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

chooseTimeline.from(
  ".choose3",
  {
    x: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

chooseTimeline.from(
  ".choose4",
  {
    x: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

chooseTimeline.from(
  ".choose5",
  {
    y: 40,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

chooseTimeline.from(
  ".choose6",
  {
    x: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

// Section "Make an appointment"
const contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".appointment",
    start: "top 50%",
    end: "top 25%",
    toggleActions: "play none none none",
  },
});

// Animation pour rendre visible la section ".appointment"
contactTimeline.to(".appointment", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.out",
});

// Animation pour le H2 et le paragraphe de "Make an appointment"
contactTimeline.from(
  ".appointment__content h2, .appointment__content p",
  {
    x: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=1"
);

// Animation partie gauche section "Make an appointment"
contactTimeline.from(
  ".appointment__content-contact",
  {
    x: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

// Animation du formulaire
contactTimeline.from(
  ".appointment__form",
  {
    x: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  },
  "-=0.7"
);

// Animation de google maps
contactTimeline.from(
  ".maps",
  {
    x: 50,
    opacity: 0,
    filter: "blur(8px)",
    duration: 1.5,
    ease: "power2.out",
  },
  "-=1.5"
);

// Footer
const footerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".maps",
    start: "bottom bottom",
    toggleActions: "play none none none",
  },
});

footerTimeline.fromTo(
  ".footer",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
  }
);

footerTimeline.from(
  ".footer__copyright",
  {
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  },
  "-=0.3"
);

footerTimeline.from(
  ".footer__social-media",
  {
    x: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  },
  "-=0.3"
);
