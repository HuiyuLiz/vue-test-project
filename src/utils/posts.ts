export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response) {
    throw new Error('No Data Found.')
  }
  const data = response.json()
  return data
}
