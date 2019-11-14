import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane } from 'taro-ui'


import "taro-ui/dist/style/components/tabs.scss";
import './food.scss'

import Cata from './Cata'
import FoodList from './FoodList'

export default class Food extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
            tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
            selectCata:null,
            foodlist: [],
            currentlist: []
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    changeCata(selectCata) {

        this.setState({selectCata:selectCata})
        if (this.state.foodlist.some(item => item.pid == selectCata.id)) {
            //不需要加载数据
             console.log(11111111)
            this.setState({ currentlist: this.state.foodlist.filter(item => item.pid == selectCata.id) })
        } else {
            //需要加载数据
            let newlist=this.state.foodlist.concat(this.getData(selectCata))
            this.setState({foodlist:newlist},()=>{
                this.setState({ currentlist: this.state.foodlist.filter(item => item.pid == selectCata.id) })
            })
        }
  
    }
    getData(selectCata) {
        return  Array.from(Array( Math.round( Math.random()*10)),(v,k)=>({
          title:"cata: "+selectCata.id+" 菜品"+(k+1),
          id:selectCata.id+"_"+(k+1),
          pid:selectCata.id,
          img:"../../assets/img/info.jpg",
          sole:Math.round(Math.random()*10),
          price:Math.round(Math.random()*20)
        }))
    }

    render() {
        let { current, tabList, currentlist,selectCata } = this.state
        return (
            <View className="food">
                <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={current} index={0} >
                        <View className="food-body" >
                            <Cata onchangeCata={this.changeCata.bind(this)} />
                            <FoodList selectCata={selectCata} currentlist={currentlist} />
                        </View>

                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>评价</View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={2}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>商家</View>
                    </AtTabsPane>

                </AtTabs>
            </View>
        )
    }
}
