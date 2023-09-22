import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    Image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: "contain"
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        letterSpacing: 0.7,
        color: '#1f1f1f',
        marginHorizontal: 5,
        lineHeight: '22',

    },
    explain: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.7,
        color: '#595959',
        fontStyle: 'italic',
        lineHeight: '23',
        marginHorizontal: 10,
    },
    price: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.7,
        color: '#4d4dff'
    },
    bodyContainer: {
        padding: 10,
        margin: 10,
    }
});