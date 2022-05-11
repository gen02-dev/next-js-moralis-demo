import axios from 'axios';

export const getUserNFTs = async (token: string) => {
  const result = await axios.post(`http://localhost:3000/api/secret`, { sessionToken: token })
    .then(res => {
      return res.data
    })
    .catch((error) => {
      return error
    });

  return result;
}