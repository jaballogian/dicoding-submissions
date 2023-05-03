const keyBase = 'dicoding-submission-react-fundamental'
const keyAccessToken = `${keyBase}-access-token`
const keyTheme = `${keyBase}-theme`

// ACCESS TOKEN
export const setAccessTokenToLocalStorage = (accessToken) => {
  localStorage.setItem(keyAccessToken, accessToken)
}

export const readAccessTokenFromLocalStorage = () => {
  return localStorage.getItem(keyAccessToken) ? localStorage.getItem(keyAccessToken) : null
}

export const removeAccessTokenFromLocalStorage = () => {
  return localStorage.removeItem(keyAccessToken)
}

// THEME
export const setThemeToLocalStorage = (theme) => {
  localStorage.setItem(keyTheme, theme)
}

export const readThemeFromLocalStorage = () => {
  return localStorage.getItem(keyTheme) ? localStorage.getItem(keyTheme) : 'dark'
}

export const removeThemeFromLocalStorage = () => {
  return localStorage.removeItem(keyTheme)
}