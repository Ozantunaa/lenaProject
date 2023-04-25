import { useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { DataContext } from '../../context/DataContext'
import Cart from '../../components/Card';

const MainScreen = () => {
  const { data } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Cart post={item} />}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 60,
  }
})