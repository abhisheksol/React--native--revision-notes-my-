import React, { useState } from 'react'
import { View ,ActivityIndicator,Button} from 'react-native'

function loader1() {
    const [status, setstatus] = useState(false)
  return (
    <View style={{backgroundColor:''}}>
    
    {
        status?  <ActivityIndicator
        size={155}
        color={'green'}
        />:null
    }

     <Button
     title={status? 'hide':"Show"}
     onPress={()=>setstatus(!status)}
     />

    </View>
  )
}

export default loader1