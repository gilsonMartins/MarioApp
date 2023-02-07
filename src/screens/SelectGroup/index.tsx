import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highligt";
import { ListEmpty } from '@components/ListEmpty';
import { groupGet } from '@storage/group/groupGet';
import { Loading } from '@components/Loading';

import { Header } from "@components/Header";
import { PersonCard } from '@components/PersonCards';
import { removeGroup } from '@storage/group/removeGroup';
export function SelectGroup() {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState<string[]>([]);
    const navigation = useNavigation();

    async function fetchGroups() {
        try {
            setIsLoading(true);
            const data = await groupGet("nintendo");
            setGroups(data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    async function RemovePerson(personName:string) {
        try {
            await removeGroup(personName,"nintendo");
            console.log(personName);
            fetchGroups();
        } catch (error) {
            throw error
        }

    }
    
    useFocusEffect(useCallback(() => {
        fetchGroups()
    }, []))

    return (
        <Container>
            <Header ShowBackButton />
            <Content>
                <Icon />
                <Highlight
                    tittle={"Veja seu personagem"}
                    subtitle={"Seu personagem favorito"}
                />

                {
                    isLoading ? <Loading /> :
                        <FlatList
                            data={groups}
                            keyExtractor={item => item}
                            renderItem={({ item }) => (
                                <PersonCard
                                    name={item}
                                    onRemove={() => RemovePerson(item)}
                                />
                            )}
                            contentContainerStyle={groups.length === 0 && { flex: 1 }}
                            ListEmptyComponent={() => (
                                <ListEmpty message="Falta adicionar um personagem..." />
                            )}
                        />
                }


            </Content>
        </Container>
    );
}