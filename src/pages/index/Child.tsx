import Taro,{Component} from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Child extends Component{
    clickHandle(){
        this.props.onmyChange()
    }
    render(){
        return(<View>
            <Button onClick={this.clickHandle} >调用上层事件</Button>
            {this.props.name}
            </View>)
    }
}