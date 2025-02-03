export const AUTH_COOKIE_NAME = "auth_token"

export function setAuthCookie(token: string) {
  // Configurar la cookie para que expire en 7 días
  const maxAge = 7 * 24 * 60 * 60
  document.cookie = `${AUTH_COOKIE_NAME}=${token}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`
}

export function removeAuthCookie() {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax; Secure`
}

