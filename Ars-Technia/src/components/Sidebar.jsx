import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Sidebar';

const itensMenu = [
  { nome: 'Início', icone: require('../../assets/Inicio.png') },
  { nome: 'Reservadas', icone: require('../../assets/Reservas.png') },
  { nome: 'Salas', icone: require('../../assets/Salas.png') },
  { nome: 'Solicitações', icone: require('../../assets/Solicitacoes.png') },
  { nome: 'Perfil', icone: require('../../assets/Perfil.png') },
];

export default function Sidebar({ celular, itemAtivo = 'Início', onNavegar }) {
  const handlePress = (nome) => {
    if (onNavegar) {
      onNavegar(nome);
    }
  };

  if (celular) {
    return (
      <View style={styles.menuCelular}>
        {itensMenu.map((item) => {
          const ativo = item.nome === itemAtivo;
          return (
            <TouchableOpacity
              key={item.nome}
              style={styles.itemMenuCelular}
              activeOpacity={0.75}
              onPress={() => handlePress(item.nome)}
            >
              <Image
                source={item.icone}
                style={[
                  styles.iconeMenuCelular,
                  ativo && styles.iconeMenuAtivoCelular,
                ]}
                resizeMode="contain"
              />
              <Text style={styles.textoMenuCelular}>
                {item.nome === 'Reservadas' ? 'Reservas' : item.nome}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.menu}>
      <Text style={styles.menuTitulo}>MENU PRINCIPAL</Text>

      {itensMenu.map((item) => {
        const ativo = item.nome === itemAtivo;
        return (
          <TouchableOpacity
            key={item.nome}
            style={[
              styles.itemMenu,
              ativo && styles.itemSelecionado,
            ]}
            activeOpacity={0.75}
            onPress={() => handlePress(item.nome)}
          >
            <Image
              source={item.icone}
              style={[
                styles.iconeMenu,
                ativo && styles.iconeSelecionado,
              ]}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.textoMenu,
                ativo && styles.textoSelecionado,
              ]}
            >
              {item.nome === 'Reservadas' ? 'Reservas' : item.nome}
            </Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.rodapeMenu}>
        <Text style={styles.rodapeTexto}>Portal do professor</Text>
      </View>
    </View>
  );
}
 