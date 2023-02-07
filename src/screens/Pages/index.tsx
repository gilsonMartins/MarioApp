import AnimatedLottieView from "lottie-react-native";
import { View } from "react-native";
import{useNavigation} from '@react-navigation/native'
export function Splash(){
    
  const navigation = useNavigation();


  function handleListPerson(){
    navigation.navigate('groups');
  }

    return(
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <AnimatedLottieView 
            source={require('@assets/splash.json')}
            autoPlay
            loop ={false}
            onAnimationFinish = {handleListPerson}
            />
        </View> 
    )
}