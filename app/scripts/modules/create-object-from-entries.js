function createObjectFromEntries (iterable) {
  const obj = {}
  iterable.forEach(([key, value]) => {
    obj[key] = value
  })
  return obj
}

export default createObjectFromEntries
