import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Header } from '../../components/Home'
const Home = ({ navigation, route }) => {
    return (
        <View>
            <Header
                navigation={navigation}
                title={route.name}
                focusinput={false}
            />
            <Text>Halaman Home KO</Text>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
