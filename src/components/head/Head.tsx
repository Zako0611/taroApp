import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import Top from './Top'
import Activity from './Activity'
import './head.scss'

export default class Head extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            store: {
                title: "川湘居",
                notice: "欢迎光临，很高兴为你服务",
                tags: ["味道赞", "分量足"]
            }
        }

    }
    render() {
        let { store } = this.state
        return (<View className="head">
            <Top />
            <Image className="back" src={require("../../assets/img/info.jpg")}></Image>
            <View className="store">
                <Image className="store-img" src={require("../../assets/img/info.jpg")} ></Image>
                <View className="store-text">
                    <Text>{store.title}</Text> 
                    <Text>{store.notice}</Text>
                    <View>
                        {
                            store.tags.map((item, index) => <Text className="tags-text" key={index}>{item}</Text> )
                        }
                    </View>
                </View>
            </View>
            <Activity/>
        </View>)
    }
}