import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native'
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import RenderHtml from 'react-native-render-html';

const DetailScreen = ({ navigation }) => {
  const { selectedCard } = useContext(DataContext);
  const { width } = useWindowDimensions();

  return (

    <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} >
      <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 16, color: 'tomato' }}> {'back'} </Text>
      </Pressable>
      <RenderHtml
        contentWidth={width}
        source={{ html: selectedCard.content }}
      />
    </ScrollView>

  );
};

export default DetailScreen

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
    paddingTop: 50,
    padding: 14,
  },
  pressable: {
    backgroundColor: 'lightgray',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})