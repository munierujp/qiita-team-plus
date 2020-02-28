function newDate ({ year, month, day, hour, minute, second, millisecond }) {
  const args = [ year ]

  // NOTE: month value is zero-based
  if (month != null) {
    args.push(month - 1)
  } else {
    args.push(0)
  }

  if (day != null) {
    args.push(day)
  } else {
    args.push(1)
  }

  if (hour != null) {
    args.push(hour)
  } else {
    args.push(0)
  }

  if (minute != null) {
    args.push(minute)
  } else {
    args.push(0)
  }

  if (second != null) {
    args.push(second)
  } else {
    args.push(0)
  }

  if (millisecond != null) {
    args.push(millisecond)
  } else {
    args.push(0)
  }

  return new Date(...args)
}

export default newDate
