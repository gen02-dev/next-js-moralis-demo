import axios from 'axios';

export const getUserNFTs = async(token: string | null) => {
  const result = await axios.post(`http://localhost:3002/secret`, {sessionToken: token})
  .then(res => {
    return res.data
  })
  .catch((error) => {
    return error
  });

  return result;
}