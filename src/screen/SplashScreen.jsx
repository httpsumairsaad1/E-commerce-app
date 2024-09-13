import React, { useEffect, useRef } from 'react';
import { View, Image, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const sliderData = [
  { uri: 'https://example.com/image1.jpg' },
  { uri: 'https://example.com/image2.jpg' },
  { uri: 'https://example.com/image3.jpg' },
];

const SplashScreen = () => {
  const navigation = useNavigation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeStack');
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.snapToNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={sliderData}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        loop
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;
