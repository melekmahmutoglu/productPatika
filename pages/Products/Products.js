import { FlatList, View } from 'react-native'
import React from 'react'
import ProductCard from '../../components/ProductCard';
import styles from './Products.style';
import useFetch from '../../hooks/useFetch';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import LottieAnimationError from '../../components/LottieAnimation/LottieAnimationError';

const Products = ({ navigation }) => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const { data, error, isLoading } = useFetch(apiUrl);

    const handleProduct = id => {
        navigation.navigate('Details', { id });
    }

    const renderProducts = (({ item }) => <ProductCard product={item} onPress={() => handleProduct(item.id)} />);

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
        <View style={styles.productContainer}>
            <View style={styles.productContainer}>
                <FlatList
                    data={data}
                    renderItem={renderProducts}
                />
            </View>
        </View>
    )
}

export default Products