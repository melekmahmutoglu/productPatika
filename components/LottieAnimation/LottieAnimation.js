import LottieView from 'lottie-react-native';
import React from 'react'

const LottieAnimation = () => {
    return (
        <LottieView source={require('../../assets/Loading.animation.json')} autoPlay />
    )
}

export default LottieAnimation