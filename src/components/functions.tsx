
// Constantes de contacto
export const EMAIL = "correo@ejemplo.com";
export const INSTAGRAM = "https://instagram.com/noiseless_ok";
export const LINKEDIN = "https://linkedin.com/in/tuusuario";
export const WHATSAPP_NUMBER = "5492316403482"; // formato internacional sin +
export const WHATSAPP_TEMPLATE = "Hola! Me gustaría saber más sobre tu trabajo.";

// Funciones para abrir cada red
export function openInstagram() {
  window.open(INSTAGRAM, "_blank");
}

export function openLinkedIn() {
  window.open(LINKEDIN, "_blank");
}

export function openEmail() {
  const subject = "Contacto";
  const body = "Hola,\n\n";
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openWhatsApp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEMPLATE)}`;
  window.open(url, "_blank");
}