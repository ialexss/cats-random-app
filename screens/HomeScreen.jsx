import { StyleSheet, Text, SafeAreaView,FlatList,RefreshControl } from 'react-native'
import {useEffect, useState,useCallback} from 'react'
import CatItem from '../components/CatItem'
import {ApiService} from '../Services/ApiService'

const HomeScreen = () => {

  const [refreshing, setRefreshing] = useState(false);

  const [cats, setcats] = useState([])

  const getCats = async () => {
    const result = await ApiService.get("images/search?limit=10");
    setcats(result)
  }

  const onRefresh = useCallback(() => {

    getCats();
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    getCats();
    
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={cats}
        renderItem={({item}) => <CatItem id={item.id} url={item.url} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default HomeScreen 

const styles = StyleSheet.create({})