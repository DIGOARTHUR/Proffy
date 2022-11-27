import React, { useState } from 'react';
import { View, ScrollView, Text, } from 'react-native';

import PageHeader from '../../components/PageHeader';
import { TeacherItem } from '../../components/TeacherItem';

import styles from './styles';
import { TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
export function TeacherList() {

  const [isFilterVisible, setFilterVisible] = useState(false);

  function _handleToggleFiltersVisible(){
    setFilterVisible(!isFilterVisible)
  }
  return (
    <>
      <View style={styles.container}>
        <PageHeader title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={_handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF"/>
          </BorderlessButton>
        )}
        >
          {isFilterVisible &&
            (
              <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput placeholder="Qual a matéria?" style={styles.input} placeholderTextColor="#c1bccc" />
                <View style={styles.inputGroup}>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana </Text>
                    <TextInput style={styles.input} placeholder="Qual dia?" placeholderTextColor="#c1bccc" />
                  </View>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário </Text>
                    <TextInput style={styles.input} placeholder="Qual horário?" placeholderTextColor="#c1bccc" />
                  </View>
                </View>
              <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}> Filtrar</Text>
              </RectButton>
              </View>)}
        </PageHeader>

        <ScrollView style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>

      </View>

    </>

  );
}