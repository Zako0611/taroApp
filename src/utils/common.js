import Taro from '@tarojs/taro'

const foodKey = "taro_meituan"

export function getFoodCount(food){
  let store = Taro.getStorageSync(foodKey)
  if(store){
      //查找
      if(store[food.id]){
          return store[food.id].Num
      }else{
          return 0
      }
  }else{
      return 0
  }
}
export function setFoodCount(food,Num,type,callBack){
    if(food){
      let store =  Taro.getStorageSync(foodKey)
      if(type="cut"){
          if(Num==1){
              if(store[food.id]){
                  delete store[food.id]
              }
          }else{
              if(store[food.id]){
                store[food.id].Num--
              }
          }

      }
      if(type="add"){

      }
    }
}