import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import LandingScreen from './Screens/LandingScreen';

import userApi from './api/user';
import OfflineNotice from './components/OfflineNotice';

const App = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const tempUsers = await userApi.getUsers();
    setUsers(tempUsers);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LandingScreen users={users} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
