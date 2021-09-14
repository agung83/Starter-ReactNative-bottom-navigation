import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { CartActive, CartNonActive, ExploreActive, ExploreNonActive, HomeAktif, HomeNonActive, ProfileActive, ProfilNonActive } from '../assets/icon/'


const TabButtonNavigator = ({ isFocused, label, options, onPress, onLongPress }) => {

    const Icon = () => {
        if (label === "Home") {
            return isFocused ? <HomeAktif height={29} /> : <HomeNonActive height={29} />
        }

        if (label === "Explore") {
            return isFocused ? <ExploreActive height={29} /> : <ExploreNonActive height={29} />
        }

        if (label === "Cart") {
            return isFocused ? <CartActive height={29} /> : <CartNonActive height={29} />
        }

        if (label === "Profil") {
            return isFocused ? <ProfileActive height={29} /> : <ProfilNonActive height={29} />
        }


    }

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={isFocused ? styles.labelFocus : styles.labelNonFocus}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabButtonNavigator

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5
    },
    labelFocus: {
        color: 'white',
        textAlign: 'center'

    },
    labelNonFocus: {
        color: 'gray',
        textAlign: 'center'
    }
})
