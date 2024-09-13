// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AccountScreen = () => {
//   return (
//     <View>
//       <Text>coming soon</Text>
//     </View>
//   )
// }

// export default AccountScreen

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

const AccountScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' }} // Replace with a real profile picture URL
          style={styles.profileImage} 
        />
        <Text style={styles.userName}>
        Simon Robben</Text>
        <Text style={styles.userEmail}>
        Simon Robben@example.com</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666666',
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: '#8FD14F',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
