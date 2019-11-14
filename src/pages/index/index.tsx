import Taro, { Component, Config } from '@tarojs/taro'
import { View,  } from '@tarojs/components'
import './index.scss'

import Head from '../../components/head/Head'
import Food from '../../components/food/Food'

export default class Index extends Component {

 
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state = {
    // name: "zako"
  }

  componentWillMount() { }

  componentDidMount() {
    // this.setState({name:"zako"})
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className='index'>
      <Head/>
      <Food/>
      </View>
    )
  }
}
