import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Login = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Halaman Login</Text>
        </View>
    )
}

export default memo(Login)

const styles = StyleSheet.create({})
