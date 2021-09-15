import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import LandingScreen from './Screens/LandingScreen';

import {getUsers} from './actions';

import OfflineNotice from './components/OfflineNotice';

const App = ({getUsers, users}) => {
  useEffect(() => {
    getUsers();
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

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUsers})(App);
