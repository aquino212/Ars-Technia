import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { styles } from '../styles/TelaInicial';
import { useApp } from '../context/context';

import BuscarIcon from '../../assets/Buscar.png';

const SALAS_MOCK = [
  { id: '1', nome: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo - Máx.30', status: 'Reservada' },
  { id: '2', nome: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo - Máx.30', status: 'Fechada' },
  { id: '3', nome: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo - Máx.30', status: 'Fechada' },
  { id: '4', nome: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo - Máx.30', status: 'Reservada' },
  { id: '5', nome: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick - Máx.20', status: 'Aberta' },
  { id: '6', nome: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo - Máx.30', status: 'Manutenção' },
  { id: '7', nome: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo - Máx.30', status: 'Manutenção' },
  { id: '8', nome: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick - Máx.20', status: 'Aberta' },
];

export default function TelaInicial() {
  const { navegarPara } = useApp();
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [busca, setBusca] = useState('');

  const categorias = ['Todos', 'Abertas', 'Reservadas', 'Em manutenção', 'Fechadas'];

  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Reservada': return { badge: styles.badgeReservada, text: styles.badgeTextReservada };
      case 'Fechada': return { badge: styles.badgeFechada, text: styles.badgeTextFechada };
      case 'Aberta': return { badge: styles.badgeAberta, text: styles.badgeTextAberta };
      default: return { badge: styles.badgeManutencao, text: styles.badgeTextManutencao };
    }
  };

  const abrirDetalhes = (sala) => {
    navegarPara('DetalhesdoLocal', {
      id: sala.id,
      professor: sala.professor,
      local: sala.nome,
      status: sala.status,
    });
  };

  const salasFiltradas = SALAS_MOCK.filter((item) => {
    const combinaFiltro =
      filtroAtivo === 'Todos' ||
      (filtroAtivo === 'Abertas' && item.status === 'Aberta') ||
      (filtroAtivo === 'Reservadas' && item.status === 'Reservada') ||
      (filtroAtivo === 'Em manutenção' && item.status === 'Manutenção') ||
      (filtroAtivo === 'Fechadas' && item.status === 'Fechada');

    const combinaBusca =
      item.nome.toLowerCase().includes(busca.toLowerCase()) ||
      item.professor.toLowerCase().includes(busca.toLowerCase());

    return combinaFiltro && combinaBusca;
  });

  return (
    <View style={styles.layout}>
      <Sidebar />

      {/* Gradiente vertical fiel à imagem: Creme no topo (#FFF6EF) descendo para Azul-Acinzentado (#CBD8E6) */}
      <View 
        style={[
          styles.mainContent, 
          { 
            backgroundColor: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #FFF6EF 0%, #E2E8F0 55%, #CBD8E6 100%)' 
          }
        ]}
      >
        <Header nomeUsuario="Aléxia Victória" />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.greeting}>Olá, Aléxia</Text>

          <View style={styles.topHeaderRow}>
            <Text style={styles.pageTitle}>Minhas salas</Text>

            <View style={styles.searchContainer}>
              <Image source={BuscarIcon} style={styles.searchIcon} resizeMode="contain" />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar por salas, eventos e aulas"
                placeholderTextColor="#999999"
                value={busca}
                onChangeText={setBusca}
              />
            </View>
          </View>

          <View style={styles.filtersRow}>
            {categorias.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.filterChip, filtroAtivo === cat && styles.filterChipActive]}
                onPress={() => setFiltroAtivo(cat)}
              >
                <Text style={[styles.filterChipText, filtroAtivo === cat && styles.filterChipTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Resultados</Text>
            <TouchableOpacity onPress={() => setFiltroAtivo('Todos')}>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardsGrid}>
            {salasFiltradas.map((sala, index) => {
              const styleBadge = getBadgeStyle(sala.status);
              return (
                <TouchableOpacity 
                  key={index} 
                  style={styles.card} 
                  onPress={() => abrirDetalhes(sala)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.badge, styleBadge.badge]}>
                    <Text style={[styles.badgeText, styleBadge.text]}>{sala.status}</Text>
                  </View>
                  <Text style={styles.cardTitle}>{sala.nome}</Text>
                  <Text style={styles.cardSubtitle}>{sala.professor}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}