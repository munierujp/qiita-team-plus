import getMetadata from './getMetadata'

function getCurrentUserId () {
  const metadata = getMetadata()
  return metadata.user.url_name
}

export default getCurrentUserId
