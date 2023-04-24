import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataContext } from '../../context/DataContext'

const MainScreen = () => {
    const {data} = useContext(DataContext);
   
  return (
    <View>
      
      {data.map((item,index)=>(
        <Text key={index}>{item.title}</Text>
      ))}
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})