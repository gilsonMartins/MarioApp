import AsyncStorage from "@react-native-async-storage/async-storage";
import {PERSON_COLLECTION } from "@storage/storageConfig";
export async function groupGet(group:string) {
    try {
        const storage = await AsyncStorage.getItem(`${PERSON_COLLECTION}-${group}`);

        const persons: string[] = storage ? JSON.parse(storage) :[];
        console.log(persons)
        return persons;    

    } catch (error) {
        throw error;
    }
    
}