// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ReorderScreen = () => {
//   return (
//     <View>
//       <Text>Coming soon</Text>
//     </View>
//   )
// }

// export default ReorderScreen

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';

// Example data for orders
const orders = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png',
    title: 'Jacket',
    price: '$49.99',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png',
    title: 'Jeans',
    price: '$39.99',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/vy2q98s8ucsywwxjx2cf.png',
    title: 'Acrylic Sweater',
    price: '$29.99',
  },
  // Add more orders as needed
];

const ReorderScreen = () => {
  const handleReorder = (id) => {
    // Handle the reorder logic here
    console.log('Reorder item with ID:', id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Reorder Items</Text>
      {orders.map((order) => (
        <View key={order.id} style={styles.orderContainer}>
          <Image source={{ uri: order.image }} style={styles.orderImage} />
          <View style={styles.orderDetails}>
            <Text style={styles.orderTitle}>{order.title}</Text>
            <Text style={styles.orderPrice}>{order.price}</Text>
            <TouchableOpacity 
              style={styles.reorderButton} 
              onPress={() => handleReorder(order.id)}
            >
              <Text style={styles.reorderButtonText}>Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ReorderScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 20,
  },
  orderContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  orderPrice: {
    fontSize: 16,
    color: '#888888',
    marginVertical: 5,
  },
  reorderButton: {
    backgroundColor: '#8FD14F',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  reorderButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
