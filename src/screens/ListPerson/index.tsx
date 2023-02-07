import { FlatList } from 'react-native'
import { useEffect, useState } from 'react';

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highligt";
import { Container, Content } from "./styles";
import { Input } from "@components/Input";
import { GroupCard } from '@components/GroupCard';
import { groupCreate } from '@storage/group/groupCreat';
import { ButtonIcon } from '@components/ButtonIcon';



export function ListPerson() {
    const result = ['Mario', 'Peach', 'Luigi', 'Browser', 'Toad']
    const [search, setSearch] = useState('');
    const [players, setPlayers] = useState(result);

    async function action(item:string) {
        console.log("passou aqui")
        await groupCreate(item, "nintendo");
    }
    useEffect(() => {
        if (search === "") {
            setPlayers(result)
        } else {
            setPlayers(
                result.filter(
                    (item) =>
                        item.toLowerCase().indexOf(search.toLowerCase()) > -1
                )
            )
        }
    }, [search]);
    return (

        <Container>

            <Header ShowBackButton />

            <Content >

                <Highlight
                    tittle={"Listagem dos seus personagens"}
                    subtitle={"Veja aqui seus aventureiros"}
                />

                <Input
                    placeholder='pesquise um personagem'
                    value={search}
                    onChangeText={(text) => setSearch(text)}

                />
            
                <FlatList
                    data={players}
                    renderItem={({ item }) => (
                        <GroupCard
                            title={item}
                            onAction={() => action(item)}
                        />
                    )}
                    keyExtractor={item => item}>
                    
                </FlatList>



            </Content>


        </Container>
    );
}