import Taro,{Component} from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'

import {getFoodCount,setFoodCount}  from '../../utils/common'
import './addcut.scss'

export default class Addcut extends Component{
    constructor(){
        super()
        this.state={
            Num:0
        }
    }
    componentDidMount(){
      
    }
    cutFood(){
       if(this.props.food) {
           if(this.state.Num>0){
            setFoodCount(this.props.food,this.state.Num,"cut",()=>{
                this.setState({Num:getFoodCount( this.props.food)}) 
            })
           }else{
                console.error("不能减少")
           }
       }
    }
    addFood(){
        if(this.props.food) {
            setFoodCount(this.props.food,this.state.Num,"add",()=>{
                    this.setState({Num:getFoodCount( this.props.food)}) 
            })
       }
    }
    render(){
        let {Num}=this.props
        let hideClass=Num>0?"":"hide"
        return(<View className="addcut">
                <Image onClick={this.cutFood.bind(this)} className={"opeate-img "+hideClass} src={require("../../assets/img/cut.png")}></Image>
                <Text className={"food-num "+ hideClass}>{Num}</Text>
                <Image onClick={this.addFood.bind(this)} className="opeate-img" src={require("../../assets/img/add.png")}></Image>
            </View>)
    }
}