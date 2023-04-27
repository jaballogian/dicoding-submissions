const keyBase = 'dicoding-submission-react-fundamental'
const keyTheme = `${keyBase}-theme`
const keyUser = `${keyBase}-user`

// THEME
export const setThemeToLocalStorage = (theme) => {
  localStorage.setItem(keyTheme, JSON.stringify(theme))
}

export const readThemeFromLocalStorage = () => {
  return localStorage.getItem(keyTheme)
    ? JSON.parse(localStorage.getItem(keyTheme))
    : {}
}

export const removeThemeFromLocalStorage = () => {
  return localStorage.removeItem(keyTheme)
}

// USER
export const setUserToLocalStorage = (user) => {
  localStorage.setItem(keyUser, JSON.stringify(user))
}

export const readUserFromLocalStorage = () => {
  return localStorage.getItem(keyUser)
    ? JSON.parse(localStorage.getItem(keyUser))
    : {}
}

export const removeUserFromLocalStorage = () => {
  return localStorage.removeItem(keyUser)
}