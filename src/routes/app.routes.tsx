import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { ListPerson } from "@screens/ListPerson"; 
import { SelectGroup } from "@screens/SelectGroup";
import { Splash } from "@screens/Pages";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown:false}}>
            <Screen
                name="pages"
                component={Splash}
            />
            <Screen
                name="groups"
                component={Groups}
            />
             <Screen
                name="list"
                component={ListPerson}
            />
             <Screen
                name="select"
                component={SelectGroup}
            />

        </Navigator>
    )
}