import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    if (theme === "light") {
      if (window) {
        window.localStorage.setItem("theme", "dark")
      }
      setTheme("dark")
    } else {
      if (window) {
        window.localStorage.setItem("theme", "light")
      }
      setTheme("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, toggleTheme]
}
