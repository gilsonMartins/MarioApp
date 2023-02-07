import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation,useFocusEffect } from '@react-navigation/native'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highligt';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';
import { groupGet } from '@storage/group/groupGet';
import { Loading } from '@components/Loading';


export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();


  function handleListPerson() {
    navigation.navigate('list', { group: 'players' });
  }

  function handleSerch() {
    navigation.navigate('select');
  }

  async function fetchGroups(){
    try {
      setIsLoading(true);
      const data = await groupGet("nintendo");
      setGroups(data)
    } catch (error) {
      console.log(error);
    }finally {
      setIsLoading(false);
    } 
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))
  
  return (
    <Container>
      <Header
      />

      <Highlight
        tittle="Nitendo"
        subtitle="Super Mario World"
      />
       {
        isLoading ? <Loading /> :
          <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard 
                title={item}
                onAction={() => handleListPerson()}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty  message="Não há encanadores aqui...." />
            )}
          />
      }
      
      <Button
        tittle="Lista de Personagem"
        onPress={handleListPerson}
      />
      <Button
        onPress={handleSerch}
        type='SECUNDARY'
        tittle="Ver Personagem" />
    </Container>
  );
}
