import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import Addcut from '../addcut/Addcut'
import './foodlist.scss'

export default class FoodList extends Component {
    constructor() {
        super(...arguments)
    }


    render() {
        let { selectCata, currentlist } = this.props
        // console.log(currentlist)
        return (<View className="food-list">
            <Text  >{selectCata?selectCata.name:" "}</Text>
            <View className="foodlist-forlist">
                {
                    currentlist.map((item,index)=>{
                        return (<View key={item.id} className="foodlist-item">
                            <Image className="foodlist-item-img" src={require("../../assets/img/info.jpg")}></Image>
                            <View className="foodlist-item-info">
                                <Text className="foodlist-item-info-title">{item.title}</Text>
                                <Text className="foodlist-item-info-sole">月售{item.sole}</Text>
                                <Text className="foodlist-item-info-price">￥{item.price}</Text>
                                <Addcut food={item}/>
                            </View>
                            
                        </View>)
                    })
                }

            </View>
        </View>)
    }
}
