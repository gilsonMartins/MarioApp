import AsyncStorage from "@react-native-async-storage/async-storage";
import { PERSON_COLLECTION } from "@storage/storageConfig";

import {groupGet} from "@storage/group/groupGet";

export async function removeGroup(personName:string, group:string) {
    try {
        const storage = await groupGet(group);

        const filtered = storage.filter(person => person !== personName);

        const persons = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${PERSON_COLLECTION}-${group}`, persons); 
        console.log(persons)

    } catch (error) {
        throw error;
    }
    
}