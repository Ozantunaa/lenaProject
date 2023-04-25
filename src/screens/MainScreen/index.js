import { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'

import { DataContext } from '../../context/DataContext'
import Cart from '../../components/Card';

const MainScreen = () => {
  const { data, getData } = useContext(DataContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    try {
      setRefreshing(true)
      await getData();
    } catch (error) {
      console.log(error)
    } finally {
      setRefreshing(false)
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Cart post={item} />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        onEndReached={() => getData()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
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