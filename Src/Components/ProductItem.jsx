import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const ProductItem = ({ item }) => {
  return (
    <Card>
      <Text style={styles.textCategory}>{item.title}</Text>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{ uri: item.images[0] }}
      />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  textCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
