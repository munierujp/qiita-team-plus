function getCurrentUserId () {
  const userId = Array.from(document.querySelectorAll('script'))
    .map(script => script.textContent)
    .map(text => text.match(/"url_name":"(.+?)"/))
    .filter(matched => matched)
    .map(matched => matched[1])
    .find(userId => userId)
  return userId
}

export default getCurrentUserId
