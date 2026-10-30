import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/Header';

import LogoCamera from '../../assets/LogoCamera.png';
import SolicitacoesIcon from '../../assets/Solicitacoes.png';
import PerfilIcon from '../../assets/Perfil.png';

export default function Header({ nomeUsuario = 'Aléxia Victória' }) {
  return (
    <View style={styles.header}>
      <View style={styles.brandContainer}>
        <Image source={LogoCamera} style={styles.logoImage} resizeMode="contain" />
        <View style={styles.brandTextContainer}>
          <Text style={styles.brandTitle}>Minhas salas</Text>
          <Text style={styles.brandSubtitle}>PROFESSOR</Text>
        </View>
      </View>

      <View style={styles.userProfile}>
        <Image source={SolicitacoesIcon} style={styles.notificationIcon} resizeMode="contain" />
        <View style={styles.avatarCircle}>
          <Image source={PerfilIcon} style={styles.avatarIcon} resizeMode="contain" />
        </View>
        <Text style={styles.userName}>{nomeUsuario}</Text>
      </View>
    </View>
  );
}