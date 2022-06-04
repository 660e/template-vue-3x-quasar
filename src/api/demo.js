import { request } from '@/utils/request.js';

const demoApi = {
  randomuser(results, page, seed) {
    return request.get('https://randomuser.me/api/', { params: { results, page, seed } });
  }
};

export { demoApi };
