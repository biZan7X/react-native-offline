import apiClient from './client';

const endpoint = '/api';

const getUsers = async () => {
  const res = await apiClient.get(endpoint);
  const data = res.data;
  const user = {
    name: data.results[0].name.first,
    email: data.results[0].email,
    image: data.results[0].picture.medium,
  };

  return user;
};

export default {getUsers};
