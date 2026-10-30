import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { styles } from '../styles/TelaInicial';

const CORES = {
  roxo: '#3E4BCC',
};

const salasIniciais = [
  { id: 1, status: 'Reservada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 2, status: 'Fechada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 3, status: 'Fechada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 4, status: 'Reservada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 5, status: 'Aberta', sala: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick', capacidade: 20 },
  { id: 6, status: 'Manutenção', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 7, status: 'Manutenção', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
  { id: 8, status: 'Aberta', sala: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick', capacidade: 20 },
];

const filtros = [
  'Todos',
  'Abertas',
  'Reservadas',
  'Em manutenção',
  'Fechadas',
];

function getEstiloEtiqueta(status) {
  if (status === 'Reservada') {
    return {
      bg: CORES.roxo,
      textoColor: '#FFFFFF',
      fontWeight: 'bold',
    };
  }
  return {
    bg: '#E2E8F0',
    textoColor: '#000000',
    fontWeight: 'normal',
  };
}

export default function TelaInicial() {
  const [filtro, setFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [salas] = useState(salasIniciais);

  const salasFiltradas = salas.filter((item) => {
    const correspondeBusca = item.sala
      .toLowerCase()
      .includes(busca.toLowerCase());

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

      <Header />

      <View style={styles.conteudo}>
        <Sidebar />

        <LinearGradient
          colors={['#FFF4EB', '#A6BCC9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.areaPrincipal}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.conteudoRolavel}
          >
            <Text style={styles.ola}>Olá, Alexia</Text>

            <View style={styles.linhaTitulo}>
              <Text style={styles.tituloPrincipal}>Minhas salas</Text>

              <View style={styles.busca}>
                <Text style={styles.lupa}>⌕</Text>
                <TextInput
                  style={styles.inputBusca}
                  placeholder="Buscar por salas, eventos e aulas"
                  placeholderTextColor="#64748B"
                  value={busca}
                  onChangeText={setBusca}
                />
              </View>
            </View>

            <View style={styles.linhaFiltros}>
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
                    style={[
                      styles.filtro,
                      filtro === nome && styles.filtroAtivo,
                    ]}
                  >
                    <Text
                      style={[
                        styles.textoFiltro,
                        filtro === nome && styles.textoFiltroAtivo,
                      ]}
                    >
                      {nome}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.resultadosCabecalho}>
              <Text style={styles.resultadosTitulo}>Resultados</Text>

              <TouchableOpacity onPress={() => setFiltro('Todos')}>
                <Text style={styles.verTodas}>Ver todas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.grade}>
              {salasFiltradas.map((item) => {
                const estiloTag = getEstiloEtiqueta(item.status);

                return (
                  <View style={styles.cartao} key={item.id}>
                    <View style={styles.cartaoConteudo}>
                      <View
                        style={[
                          styles.etiqueta,
                          { backgroundColor: estiloTag.bg },
                        ]}
                      >
                        <Text
                          style={[
                            styles.etiquetaTexto,
                            {
                              color: estiloTag.textoColor,
                              fontWeight: estiloTag.fontWeight,
                            },
                          ]}
                        >
                          {item.status}
                        </Text>
                      </View>

                      <Text style={styles.nomeSala} numberOfLines={2}>
                        {item.sala}
                      </Text>

                      <Text style={styles.detalheSala} numberOfLines={1}>
                        {item.professor} - Máx. {item.capacidade}
                      </Text>
                    </View>
                  </View>
                );
              })}

              {salasFiltradas.length === 0 && (
                <Text style={styles.semResultados}>
                  Nenhuma sala encontrada.
                </Text>
              )}
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </View>
  );
}