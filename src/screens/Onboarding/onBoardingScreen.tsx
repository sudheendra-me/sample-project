import React, { useState,useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';



const { width, height } = Dimensions.get('window');


const slides = [
  {
    key: '1',
    image: require('../../assets/coin.png'),
    title: 'Turn your clutter into 💵',
    subtitle: 'Discover a world of seamless buying and selling at your fingertips with the Sellular app!',
  },
  {
    key: '2',
    image: require('../../assets/clock.png'),
    title: 'Unleash the Extraordinary!',
    subtitle: 'Unlock the power of your event empire on our platform with events to attend from various colleges at your fingertips 📣.',
  },
  {
    key: '3',
    image: require('../../assets/clock.png'),
    title: 'Title',
    subtitle: 'Savings adventure like never before, where vouchers and deals await at every turn.',
  },
];

const OnBoardingScreen = ({ navigation }: any) => {
  const [current, setCurrent] = useState(0);
  const flatListRef = useRef<FlatList>(null);


  const handleNext = () => {
    if (current < slides.length - 1) {
        flatListRef.current?.scrollToIndex({ index: current + 1 });
      setCurrent(current + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => navigation.replace('Login');

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrent(index);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSkip} style={styles.skip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />

        <View style={styles.pagination}>
        {slides.map((_, index) => (
            <View
            key={index}
            style={[
                styles.dot,
                current === index ? styles.activeDot : styles.inactiveDot,
            ]}
            />
        ))}
        </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {current === slides.length - 1 ? 'Get started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skip: {
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginRight: 20,
    backgroundColor: '#34a0a4',
    padding: 6,
    borderRadius: 20,
    paddingHorizontal: 12,
    zIndex: 1,
  },
  skipText: {
    color: '#fff',
    fontWeight: '500',
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: width * 0.7,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34a0a4',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#34a0a4',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  
  button: {
    backgroundColor: '#34a0a4',
    paddingVertical: 14,
    borderRadius: 12,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
