import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#b3b3ff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        backgroundColor: 'white',
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
    },
    bodyContainer: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-between',

    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.7,
        color: '#595959'

    },
    price: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 0.7,
        color: '#4d4dff'

    },

});