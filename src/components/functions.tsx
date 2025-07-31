// Constantes de contacto
export const EMAIL = "noiseless3d@gmail.com";
export const INSTAGRAM = "https://instagram.com/noiseless_ok";

// Funciones para abrir cada red
export function openInstagram() {
  window.open(INSTAGRAM, "_blank");
}

export function openEmail() {
  const subject = "Contact";
  const body = "Hello NOISELESS Team,\n\n";
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}