import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native'

const Cart = ({ post }) => {
    return (
        <Pressable>
            <ImageBackground source={{ uri: post.banner }} style={styles.post}>
                <View style={styles.overlay} />
                <View style={{ padding: 6 }}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text numberOfLines={2} style={{ color: 'white' }}>{post.summary}</Text>
                </View>
                    <Text style={styles.readCount}>read {post.totalReadingTime} m</Text>
            </ImageBackground>
        </Pressable>
    )
}

export default Cart
const styles = StyleSheet.create({
    post: {
        width: '100%',
        height: 200,
        justifyContent:'flex-end',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        ...StyleSheet.absoluteFill
    },
    title:{
        fontSize:20,
        fontWeight:'600',
        color:'white'
    },
    readCount:{
        color: 'white',
        position:'absolute',
        right:10,
        top:10,
        fontWeight:'bold'
    }
})