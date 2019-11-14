import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './top.scss'

export default class Top extends Component {

    render() {
        return (
        <View className="nav-box">
        <View className="top">
            <View className="left">
                <Image className="img" src={require("../../assets/img/arrow_left.png")} />
            </View>
            <View className="right">
                <Image className="img" src={require("../../assets/img/search.png")} />
                <Image className="img" src={require("../../assets/img/star.png")} />
                <Image className="img" src={require("../../assets/img/list.png")} />
            </View>
        </View>
        </View>)
    }
}