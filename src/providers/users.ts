import { User } from '@/types/entities';
import { BaseRestProvider, POST, GET } from './base';

class Users extends BaseRestProvider {
  public constructor() {
    super(process.env.VUE_APP_API_URL);
  }

  /**
   * create
   * @param payload FormData
   */
  public async create(payload: FormData) {
    console.log(payload);

    try {
      const { data } = await this[POST]<{ user: User }>(
        '/users',
        payload,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
      console.log('Users/create:', data);
      return data.user;
    } catch (error) {
      console.error('Users/create:', error);
      throw error;
    }
  }

  /**
   * create
   */
  public async list() {
    try {
      const { data } = await this[GET]<{ users: User[] }>('/users');
      console.log('Users/list:', data);
      return data.users;
    } catch (error) {
      console.error('Users/list:', error);
      throw error;
    }
  }

  /**
   * create
   * @param id string
   */
  public async getById(id: string) {
    try {
      const { data } = await this[GET]<{ user: User }>(`/users/${id}`);
      console.log('Users/getById:', data);
      return data.user;
    } catch (error) {
      console.error('Users/getById:', error);
      throw error;
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const UsersProvider = new Users();
