import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import LandingScreen from './Screens/LandingScreen';

import userApi from './api/user';
import OfflineNotice from './components/OfflineNotice';

const App = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const tempUser = await userApi.getUsers();
    setUsers([...users, tempUser]);
  };

  return (
    <>
      <OfflineNotice />

      <SafeAreaView style={styles.container}>
        <LandingScreen getUser={getUser} users={users} />
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
