import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const DetailScreen = () => {
  const { selectedCart } = useContext(DataContext);

  return (
    <View>
      <Text>{selectedCart.content}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})