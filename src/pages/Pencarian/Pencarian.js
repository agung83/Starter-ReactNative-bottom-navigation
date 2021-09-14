import React, { useCallback } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Header } from '../../components/Home'

const Pencarian = ({ navigation, route }) => {
    const prosesPencarian = useCallback((value) => alert(value))
    return (
        <View>
            <Header
                navigation={navigation}
                title={route.name}
                focusinput={true}
                filter={prosesPencarian}
            />
            <Text>
                <Button
                    title="Press me"
                    onPress={() => navigation.navigate('Login')}
                />
            </Text>
        </View>
    )
}

export default Pencarian

const styles = StyleSheet.create({})
