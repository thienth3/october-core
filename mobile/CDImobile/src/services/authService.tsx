
import { create } from 'apisauce';

export const request = create({ baseURL: 'https://5ffea991a4a0dd001701adb5.mockapi.io/' });

export function login(username: any, password: any) {
    console.log(`Request: ${username} ${password}`);
    const api = request
    .get("user/1", 
          {
              "username":JSON.stringify(username),
              "password":JSON.stringify(password) 
          } 
      )
    return api
      .then( (response: any) => {
        return {
          id: response.data.id,
          createdAt: response.data.createdAt,
          name: response.data.name,
          avatar: response.data.avatar,
          email: response.data.email,
        };
      })
      .catch(err => {
        console.log(err);
      });
}