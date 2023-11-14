import {useState} from 'react'
import { StyleSheet, Pressable, Image, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {ApiService} from '../Services/ApiService';

const CatItem = ({ id, url }) => {

    const [isFavorite, setisFavorite] = useState(false)

    const handleFavoriteButton = async () => {
        setisFavorite(!isFavorite);

        const item = {
            image_id:id,
            sub_id:"my-user-1234"
        };

        try {
            const result = await ApiService.create("favourites",item);

            Alert.alert("Gatito agregado a favoritos");

            console.log('Respuesta del servidor:', result);
            
          } catch (error) {
            console.error('Error al crear:', error);
          }
    }

    return (
        <Pressable style={styles.container}>

            <Image
                style={styles.image}
                source={{
                    uri: url,
                }}
                loadingIndicatorSource={{uri: "../assets/cat-what.gif"}}
            />
            <Pressable style={styles.favorite} onPress={() => handleFavoriteButton()}>
                <AntDesign name="heart" size={30} color={isFavorite ? "red":"gray"} />
            </Pressable>
        </Pressable>
    )
}

export default CatItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
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
        width: 250,
        height: 250,
        borderRadius:25
    },
    favorite: {


    }
})