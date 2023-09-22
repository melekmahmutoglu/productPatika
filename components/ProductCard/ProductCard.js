import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ProductCard.style';

const ProductCard = ({ product, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: product.image }}
                />
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} TL</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ProductCard