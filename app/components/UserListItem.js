import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const UserListItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{url: item.image}} style={styles.image} />
        <View>
          <Text style={styles.heading}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default UserListItem;
