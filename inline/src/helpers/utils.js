/** Abbreviated ClassNames
 * Used with ab function to evaluate dynamic classnames for styling */
export const cns = (...args) => {
  let index = 0
  let classNames = ''
  while (index < args.length) {
    classNames += !args[index] ? '' : `${args[index]} `
    index += 1
  }
  return classNames.trimEnd()
}

/* === Strings === */
/** caution DON'T PASS NULL */
export const toPersian = text => {
  if (!text) return text
  if (typeof text === 'number') return text.toLocaleString('fa-IR')
  return text.replace(/[0-9]/g, num =>
    parseInt(num, 10).toLocaleString('fa-IR'),
  )
}
