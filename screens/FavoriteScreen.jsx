import { StyleSheet, Text, SafeAreaView,FlatList,RefreshControl } from 'react-native'
import {useEffect, useState,useCallback} from 'react'
import FavoriteItem from '../components/FavoriteItem'
import {ApiService} from '../Services/ApiService'

const FavoriteScreen = () => {

  const [refreshing, setRefreshing] = useState(false);

  const [favorites, setfavorites] = useState([])

  const getFavorites = async () => {
    const result = await ApiService.get("favourites");
    setfavorites(result)
  }

  useEffect(() => {
    getFavorites();
  }, [])

  const onRefresh = useCallback(() => {

    getFavorites();
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={favorites}
        renderItem={({item}) => <FavoriteItem favoriteId={item.id} id={item.image.id} url={item.image.url} getfavs={getFavorites} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})