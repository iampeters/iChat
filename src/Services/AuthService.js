// import db from '../../db/';
import {API} from '../API';

export default class AuthService {
  constructor() {}

  token = API.localhost + 'token';

  async login(data) {
    try {
      let response = await fetch(this.token, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  // async register(data) {
  //   try {
  //     const response = await axios.post(this.admin, data);
  //     return response;
  //   } catch (err) {
  //     return err;
  //   }
  // }

  // async getUser(data) {
  //   try {
  //     const response = await axios.post(this.admin, data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${this.token}`,
  //       },
  //     });

  //     return response;
  //   } catch (err) {
  //     return err;
  //   }
  // }
}
