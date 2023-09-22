import { SafeAreaView, View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import LottieAnimationError from '../../components/LottieAnimation/LottieAnimationError';

const Details = ({ route }) => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const { id } = route.params;
    const { isLoading, error, data } = useFetch(`${apiUrl}/${id}`);

    if (isLoading) {
        return (
            <View style={styles.activityIndicator}>
                <LottieAnimation />
            </View>
        )
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <LottieAnimationError />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={{ uri: data.image }} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.explain}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Details