export default function (iterable) {
  const obj = {}
  iterable.forEach(([key, value]) => {
    obj[key] = value
  })
  return obj
}
