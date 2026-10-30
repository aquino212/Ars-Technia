import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/Sidebar';
import { useApp } from '../context/context';

import InicioIcon from '../../assets/Inicio.png';
import ReservasIcon from '../../assets/Reservas.png';
import SalasIcon from '../../assets/Salas.png';
import SolicitacoesIcon from '../../assets/Solicitacoes.png';
import PerfilIcon from '../../assets/Perfil.png';

export default function Sidebar() {
  const { telaAtual, navegarPara } = useApp();

  const menuItems = [
    { id: 'Inicio', label: 'Início', icon: InicioIcon },
    { id: 'Reservas', label: 'Reservas', icon: ReservasIcon },
    { id: 'Salas', label: 'Salas', icon: SalasIcon },
    { id: 'Solicitacoes', label: 'Solicitações', icon: SolicitacoesIcon },
    { id: 'Perfil', label: 'Perfil', icon: PerfilIcon },
  ];

  return (
    <View style={styles.sidebar}>
      <View>
        <Text style={styles.sidebarSectionTitle}>MENU PRINCIPAL</Text>

        {menuItems.map((item) => {
          const isActive =
            telaAtual === item.id ||
            (telaAtual === 'DetalhesdoLocal' && item.id === 'Reservas');

          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.menuItem, isActive && styles.menuItemActive]}
              onPress={() =>
                navegarPara(item.id === 'Reservas' ? 'DetalhesdoLocal' : item.id)
              }
              activeOpacity={0.8}
            >
              <Image
                source={item.icon}
                style={[styles.menuIcon, isActive && styles.menuIconActive]}
                resizeMode="contain"
              />
              <Text
                style={
                  isActive ? styles.menuItemTextActive : styles.menuItemText
                }
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.sidebarFooter}>
        <Text style={styles.sidebarFooterText}>Portal do professor</Text>
      </View>
    </View>
  );
}