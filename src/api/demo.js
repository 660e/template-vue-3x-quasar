import { api } from '@/boot/axios.js';

const demoApi = {
  randomuser(results, page, seed) {
    return api.get('https://randomuser.me/api/', { params: { results, page, seed } });
  }
};

export { demoApi };
