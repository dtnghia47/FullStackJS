import axios from "axios"

export const getListPost = () => {
  return axios({
    url: 'http://127.0.0.1:5000/graphql',
    method: 'get',
    data: {
      query: `
        query posts {
          title
          description
        }
      `
    }
  })
}