const formatTime = (seconds) => {
  const days = Math.floor(seconds / (3600 * 24))
  seconds -= days * 3600 * 24
  const hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  return { days, hours, minutes, seconds }
}

export default formatTime
