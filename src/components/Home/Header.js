import React, { memo } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native'
import { WarnaUtama } from '../../utils/Colors'
import { PlaceHeader, UserProfile } from '../../assets/icon'

const Header = ({ navigation, title, focusinput, filter }) => {
    console.log('render header')
    const focusTextInput = () => {
        if (title == "Home") {
            return navigation.navigate('Pencarian')
        }
        if (title == "Pencarian") {
            return ""
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.firtsProfile}>
                    <View style={styles.placeAddrres}>
                        <View style={styles.iconPlace} >
                            <PlaceHeader />
                        </View>
                        <View style={styles.alamat}>
                            <Text style={styles.textAlamat}>Jl. Olo Ladang No 13, Padang</Text>
                        </View>
                    </View>
                    <View>
                        <UserProfile />
                    </View>
                </View>
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Makan apa hari ini?"
                    onChangeText={filter}
                    onFocus={focusTextInput}
                    autoFocus={focusinput}
                />

            </View>
        </SafeAreaView>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    container: {
        backgroundColor: WarnaUtama,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    firtsProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 5
    },
    placeAddrres: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconPlace: {

    },
    alamat: {
        paddingLeft: 5,
        paddingTop: 3
    },
    textAlamat: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    inputSearch: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
    }
})
