import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native'
import { AsyncStorage } from 'react-native';
import styles from './styles';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);


        setFavorites(favoritedTeachers);
      }
    });
  }


  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container} >
      <PageHeader title="Meus proffys favoritos" >
      </PageHeader>

      <ScrollView style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited

            />
          )
        })}
      </ScrollView>
    </View>
  );
}