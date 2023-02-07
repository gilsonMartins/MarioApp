import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { PERSON_COLLECTION } from "@storage/storageConfig";

import { PersonStorageDTO } from "@storage/group/PersonStorageDTO";
import { groupGet } from "@storage/group/groupGet";

export async function groupCreate(NewPerson: string, Groups: string) {
    try {
        const storedPersons = await groupGet(Groups)

        const personAlreadExist = storedPersons.filter(person => person === NewPerson);
        if (personAlreadExist.length > 0) {
            throw "Nao e possivel usar esse personagem";
        }

        const storage = JSON.stringify([...storedPersons, NewPerson]);

        await AsyncStorage.setItem(`${PERSON_COLLECTION}-${Groups}`, storage);
        console.log("criou")
    } catch (error) {
        throw error
    }

} 