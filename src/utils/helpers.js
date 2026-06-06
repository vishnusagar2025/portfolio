/**
 * Truncate a string to maxLen characters, appending '…' if needed.
 */
export const truncate = (str, maxLen = 120) =>
  str.length <= maxLen ? str : str.slice(0, maxLen).trimEnd() + '…'

/**
 * Format an ISO date string to a human-readable form.
 */
export const formatDate = (isoString) =>
  new Date(isoString).toLocaleDateString('en-IN', {
    year: 'month', month: 'long', day: 'numeric',
  })

/**
 * Scroll smoothly to an element by id.
 */
export const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Debounce a function.
 */
export const debounce = (fn, delay = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
