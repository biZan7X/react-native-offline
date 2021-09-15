import apiClient from './client';

const endpoint = '/api/?results=20';

const getUsers = async () => {
  const res = await apiClient.get(endpoint);
  const data = res.data;

  if (data) {
    const users = await data.results.map(item => {
      return {
        name: item.name.first,
        email: item.email,
        image: item.picture.medium,
      };
    });

    return users;
  }
};

export default {getUsers};
