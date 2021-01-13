import { create } from 'apisauce';
	
const request = create({
  baseURL: 'https://5ffea991a4a0dd001701adb5.mockapi.io',
});

function login(username: any, password: any) {
  console.log(`Request: ${username} ${password}`);
  return request
    .post('/user')
    .then( (response: any) => {
      console.log('Request response==================== ', response);
      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      };
    })
    .catch(err => {
      console.log(err);
    });
}

export default {
  login,
};