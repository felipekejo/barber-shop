import { somar } from '@barber/core'
import { Text, View } from 'react-native'
export default function App(){
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App</Text>
      <Text>   <div>
    {somar(1111,2)}
   </div></Text>
    </View>
  )
}