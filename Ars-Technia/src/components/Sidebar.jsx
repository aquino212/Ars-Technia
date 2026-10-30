import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Sidebar';

import InicioIcon from '../../assets/Inicio.png';
import ReservasIcon from '../../assets/Reservas.png';
import SalasIcon from '../../assets/Salas.png';
import SolicitacoesIcon from '../../assets/Solicitacoes.png';
import PerfilIcon from '../../assets/Perfil.png';

const itensMenu = [
  { nome: 'Início', icone: InicioIcon },
  { nome: 'Reservas', icone: ReservasIcon },
  { nome: 'Salas', icone: SalasIcon },
  { nome: 'Solicitações', icone: SolicitacoesIcon },
];

export default function Sidebar() {
  return (
    <View style={styles.menu}>
      <Text style={styles.menuTitulo}>MENU PRINCIPAL</Text>

      {itensMenu.map((item, index) => (
        <TouchableOpacity
          key={item.nome}
          style={[
            styles.itemMenu,
            index === 0 && styles.itemSelecionado,
          ]}
          activeOpacity={0.75}
        >
          <Image
            source={item.icone}
            style={[
              styles.iconeMenu,
              index === 0 && styles.iconeSelecionado,
            ]}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.textoMenu,
              index === 0 && styles.textoSelecionado,
            ]}
          >
            {item.nome}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.itemMenu} activeOpacity={0.75}>
        <Image
          source={PerfilIcon}
          style={styles.iconeMenu}
          resizeMode="contain"
        />
        <Text style={styles.textoMenu}>Perfil</Text>
      </TouchableOpacity>

      <View style={styles.rodapeMenu}>
        <Text style={styles.rodapeTexto}>Portal do professor</Text>
      </View>
    </View>
  );
}