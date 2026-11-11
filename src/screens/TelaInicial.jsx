import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CardSala from '../components/CardSala';
import styles from '../styles/TelaInicial';

const salasIniciais = [
  { id: 1, status: 'Reservada', sala: 'Sala 14 - MAC', professor: 'Professora Jéssica', capacidade: 30 },
  { id: 2, status: 'Manutenção', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 3, status: 'Fechada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 4, status: 'Aberta', sala: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick', capacidade: 20 },
];

const filtros = ['Todos', 'Abertas', 'Reservadas', 'Em manutenção', 'Fechadas'];

export default function TelaInicial({ itemAtivo = 'Início', onNavegar }) {
  const { width } = useWindowDimensions();
  const celular = width <= 600;

  const [filtro, setFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [buscaFocada, setBuscaFocada] = useState(false);

  const salasFiltradas = salasIniciais.filter((item) => {
    const correspondeBusca = item.sala.toLowerCase().includes(busca.toLowerCase());
    const correspondeFiltro =
      filtro === 'Todos' ||
      (filtro === 'Abertas' && item.status === 'Aberta') ||
      (filtro === 'Reservadas' && item.status === 'Reservada') ||
      (filtro === 'Em manutenção' && item.status === 'Manutenção') ||
      (filtro === 'Fechadas' && item.status === 'Fechada');

    return correspondeBusca && correspondeFiltro;
  });

  return (
    <View style={styles.tela}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.aplicativo}>
        {!celular && <Header />}

        <View style={[styles.conteudo, celular && styles.conteudoCelular]}>
          {!celular && (
            <Sidebar
              celular={celular}
              itemAtivo={itemAtivo}
              onNavegar={onNavegar}
            />
          )}

          <LinearGradient
            colors={['#FFF4EB', '#A6BCC9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.areaPrincipal, celular && styles.areaPrincipalCelular]}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.conteudoRolavel,
                celular && styles.conteudoRolavelCelular,
              ]}
            >
              <Text style={styles.ola}>Olá, Aléxia</Text>

              {celular ? (
                /* ESTRUTURA PARA TELEMÓVEL: TÍTULO E BUSCA EM LINHAS SEPARADAS */
                <>
                  <Text style={styles.tituloPrincipalCelular}>Minhas salas</Text>
                  <View style={[styles.busca, styles.buscaCelular, buscaFocada && styles.buscaFocada]}>
                    <Text style={styles.lupa}>⌕</Text>
                    <TextInput
                      style={styles.inputBusca}
                      placeholder="Buscar por salas, eventos e aulas"
                      placeholderTextColor="#64748B"
                      value={busca}
                      onChangeText={setBusca}
                      onFocus={() => setBuscaFocada(true)}
                      onBlur={() => setBuscaFocada(false)}
                    />
                  </View>
                </>
              ) : (
                /* ESTRUTURA PARA DESKTOP: LADO A LADO */
                <View style={styles.linhaTitulo}>
                  <Text style={styles.tituloPrincipal}>Minhas salas</Text>
                  <View style={[styles.busca, buscaFocada && styles.buscaFocada]}>
                    <Text style={styles.lupa}>⌕</Text>
                    <TextInput
                      style={styles.inputBusca}
                      placeholder="Buscar por salas, eventos e aulas"
                      placeholderTextColor="#64748B"
                      value={busca}
                      onChangeText={setBusca}
                      onFocus={() => setBuscaFocada(true)}
                      onBlur={() => setBuscaFocada(false)}
                    />
                  </View>
                </View>
              )}

              <View style={[styles.linhaFiltros, celular && styles.linhaFiltrosCelular]}>
                {celular ? (
                  <View style={styles.filtrosGridCelular}>
                    {filtros.map((nome) => (
                      <TouchableOpacity
                        key={nome}
                        onPress={() => setFiltro(nome)}
                        style={[styles.filtro, filtro === nome && styles.filtroAtivo]}
                      >
                        <Text style={[styles.textoFiltro, filtro === nome && styles.textoFiltroAtivo]}>
                          {nome}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                ) : (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.listaFiltros}
                    contentContainerStyle={styles.filtrosConteudo}
                  >
                    {filtros.map((nome) => (
                      <TouchableOpacity
                        key={nome}
                        onPress={() => setFiltro(nome)}
                        style={[styles.filtro, filtro === nome && styles.filtroAtivo]}
                      >
                        <Text style={[styles.textoFiltro, filtro === nome && styles.textoFiltroAtivo]}>
                          {nome}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>

              <View style={styles.resultadosCabecalho}>
                <Text style={styles.resultadosTitulo}>Resultados</Text>
                <TouchableOpacity onPress={() => setFiltro('Todos')}>
                  <Text style={styles.verTodas}>Ver todas</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.grade, celular && styles.gradeCelular]}>
                {salasFiltradas.map((item) => (
                  <CardSala key={item.id} item={item} celular={celular} />
                ))}

                {salasFiltradas.length === 0 && (
                  <Text style={styles.semResultados}>Nenhuma sala encontrada.</Text>
                )}
              </View>
            </ScrollView>
          </LinearGradient>

          {celular && (
            <Sidebar
              celular={celular}
              itemAtivo={itemAtivo}
              onNavegar={onNavegar}
            />
          )}
        </View>
      </View>
    </View>
  );
}