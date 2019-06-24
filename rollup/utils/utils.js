export const isProduction = () => {
  if (process.env.NODE_ENV === 'production') {
    return true
  }

  return false
}
