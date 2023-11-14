import { useState } from 'react'
import { StyleSheet, Text, Pressable, Image, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { ApiService } from '../Services/ApiService';

const FavoriteItem = ({ favoriteId, id, url, getfavs }) => {

    const [isFavorite, setisFavorite] = useState(true)

    const handleFavoriteButton = async () => {
        setisFavorite(!isFavorite);

        try {
            const result = ApiService.delete("favourites", favoriteId);

            Alert.alert("Gatito eliminado de favoritos :c");
            getfavs();

            console.log('Respuesta del servidor:', result);
        } catch (error) {
            console.error('Error al crear:', error);
        }
    }

    return (
        <Pressable style={styles.container}>
            <Pressable style={styles.favorite} onPress={() => handleFavoriteButton()}>
                <AntDesign name="heart" size={30} color={isFavorite ? "red" : "gray"} />
            </Pressable>
            <Image
                style={styles.image}
                source={{
                    uri: url,
                }}
                loadingIndicatorSource={{ uri: "../assets/cat-what.gif" }}
            />

        </Pressable>
    )
}

export default FavoriteItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: 'row',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 25,
        height: "auto",
    },
    text: {
        maxWidth: "85%",
        paddingHorizontal: 20,
    },
    image: {
        width: 280,
        height: 250,
        borderRadius: 25,
    },
    favorite: {


    }
})