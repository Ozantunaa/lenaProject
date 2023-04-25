import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const DetailScreen = () => {
  const { selectedCard } = useContext(DataContext);

  return (
    <View>
      <Text>{selectedCard.content}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})