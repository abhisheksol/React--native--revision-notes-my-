
import { View ,Text} from 'react-native'
function Navs2(props) {
    const {name,age}=props.route.params
    console.warn(data);
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>This is Nav1</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}

export default Navs2