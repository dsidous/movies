import React from 'react';
import {
  Text,
  FlatList,
  View,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const getImagePath = path =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

const getBackdropPath = path =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
  },
});

const Backdrop = ({ movies, scrollX }) => {
  return (
    <View
      style={{
        position: 'absolute',
        width,
        height: BACKDROP_HEIGHT,
      }}
    >
      <FlatList
        data={movies}
        keyExtractor={item => `${item.id}-backdrop`}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop_path) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{ uri: getBackdropPath(item.backdrop_path) }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

const Home = ({ upcomingLoading, upcoming }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (upcomingLoading) {
    return <Text>Loading...</Text>;
  }

  const movies = [{ id: 'left-spacer' }, ...upcoming, { id: 'right-spacer' }];

  return (
    <View style={{ flex: 1 }}>
      <Backdrop movies={movies} scrollX={scrollX} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
        }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.poster_path) {
            return (
              <View
                style={{
                  width: SPACER_ITEM_SIZE,
                }}
              />
            );
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
          });

          return (
            <View
              style={{
                width: ITEM_SIZE,
              }}
            >
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 24,
                  transform: [{ translateY }],
                }}
              >
                <Image
                  source={{ uri: getImagePath(item.poster_path) }}
                  style={styles.posterImage}
                />
                <Text>{item.title}</Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
