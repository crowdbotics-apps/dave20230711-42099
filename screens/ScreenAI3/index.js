import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
const data = [{
  id: '1',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '4',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '5',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '6',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '7',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '8',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '9',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '10',
  image: 'https://tinyurl.com/42evm3m3'
}];

const GalleryScreen = () => {
  const renderItem = ({
    item
  }) => <Card style={styles.card}>
      <Card.Cover source={{
      uri: item.image
    }} />
    </Card>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.listContainer} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    padding: 16
  },
  card: {
    margin: 8,
    borderRadius: 8,
    elevation: 4
  }
});
export default GalleryScreen;