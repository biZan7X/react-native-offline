import React from 'react';
import {View, Button, FlatList, StyleSheet} from 'react-native';

import UserListItem from '../components/UserListItem';

const LandingScreen = ({users, getUser}) => {
  return (
    <View style={styles.container}>
      <Button title="Add Users" onPress={() => getUser()} />
      <FlatList
        data={users}
        keyExtractor={item => item.name}
        renderItem={({item}) => <UserListItem item={item} />}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default LandingScreen;
