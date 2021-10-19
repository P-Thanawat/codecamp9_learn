const axios = require('axios');

// axios({
//   url: 'https://jsonplaceholder.typicode.com/todos/1/posts',
//   method: 'GET',
// })
// .then(result => {
//   console.log(result)
// })
// .catch(err => {
//   console.log(err)
// })

const main = async()=> {
  try {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1/users/1')
    // const res = await axios.delete('https://jsonplaceholder.typicode.com/todos/1/')
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    console.log(res.data)
    console.log(res.status)
    console.log(res.statusText)
  }
  catch (err) {
    console.log(err)
  }
}

main()