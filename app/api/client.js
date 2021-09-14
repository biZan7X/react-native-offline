import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://randomuser.me',
});

export default apiClient;
