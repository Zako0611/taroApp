import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import './cata.scss'

export default class Cata extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            selectCata:null,
            cata: [
                { name: '热销', id: 1 },
                { name: '折扣', id: 2 },
                { name: '午餐', id: 3 },
                { name: '夜宵', id: 4 },
                { name: '专场', id: 5 },
                { name: '早餐', id: 6 },
                { name: '烧烤', id: 7 },
            ]
        }
    }
    clickHandle(item){
        if(!this.state.selectCata||this.state.selectCata.id!=item.id){
            this.setState({selectCata:item},()=>{
                this.props.onchangeCata && this.props.onchangeCata(this.state.selectCata)
            })
        }
    }
    
    render() {
        let{cata,selectCata}=this.state
        return (<View className="cata">
            {cata.map( (item,index) => 
            <Text onClick={this.clickHandle.bind(this,item)} 
            className={"cata-name " + ((selectCata && selectCata.id == item.id)?"select":"") } 
            key={item.id}>{item.name}
            </Text>)}
        </View>)
    }
}