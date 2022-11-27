import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/digoarthur.png' }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}> Diego Arthur</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>

            </View>
            <Text style={styles.bio}>
                Entusiasta das melhores tecnologias de quimica avançada.
                {'\n'} {'\n'}
                Apaixoando por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências..
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton,styles.favorited]}>
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactsButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}> Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}