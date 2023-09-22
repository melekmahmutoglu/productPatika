import { StyleSheet } from "react-native";

export default StyleSheet.create({
    productContainer: {
        backgroundColor: 'white',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    errorContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.7,
        color: '#595959',
        textAlign: 'center',
    }
})