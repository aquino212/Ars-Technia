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
import styles from '../styles/VerificacaoAgendamento';

export default function VerificacaoAgendamento({ itemAtivo = 'Solicitações', onNavegar }) {
  const { width } = useWindowDimensions();
  const celular = width <= 600;

  const [nomeProfessor, setNomeProfessor] = useState('');
  const [quantidadeAlunos, setQuantidadeAlunos] = useState('');
  const [localSetor, setLocalSetor] = useState('');
  const [descricaoEvento, setDescricaoEvento] = useState('');

  const [campoFocado, setCampoFocado] = useState(null);

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
              <View style={styles.blocoConteudo}>
                <Text style={styles.tagGestao}>GESTÃO</Text>
                <Text style={styles.tituloPrincipal}>Verificação de Agendamento</Text>
                <Text style={styles.subtitulo}>
                  Informações de solicitação de Agendamento, verifique-as
                </Text>

                <View style={styles.cartaoFormulario}>
                  {/* CAMPO NOME DO PROFESSOR */}
                  <Text style={styles.rotulo}>Nome do professor *</Text>
                  <View
                    style={[
                      styles.containerInput,
                      campoFocado === 'professor' && styles.containerInputFocado,
                    ]}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="Ex.: Marcos/Caique"
                      placeholderTextColor="#64748B"
                      value={nomeProfessor}
                      onChangeText={setNomeProfessor}
                      onFocus={() => setCampoFocado('professor')}
                      onBlur={() => setCampoFocado(null)}
                    />
                  </View>

                  {/* CAMPO QUANTIDADE DE ALUNOS */}
                  <Text style={styles.rotulo}>Quantidade alunos *</Text>
                  <View
                    style={[
                      styles.containerInput,
                      campoFocado === 'quantidade' && styles.containerInputFocado,
                    ]}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="Ex.: Máx.20"
                      placeholderTextColor="#64748B"
                      keyboardType="numeric"
                      value={quantidadeAlunos}
                      onChangeText={setQuantidadeAlunos}
                      onFocus={() => setCampoFocado('quantidade')}
                      onBlur={() => setCampoFocado(null)}
                    />
                  </View>

                  {/* CAMPO LOCAL / SETOR */}
                  <Text style={styles.rotulo}>Local / Setor *</Text>
                  <View
                    style={[
                      styles.containerInput,
                      campoFocado === 'local' && styles.containerInputFocado,
                    ]}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="Ex.: Sala 02 / Administração"
                      placeholderTextColor="#64748B"
                      value={localSetor}
                      onChangeText={setLocalSetor}
                      onFocus={() => setCampoFocado('local')}
                      onBlur={() => setCampoFocado(null)}
                    />
                  </View>

                  {/* CAMPO DESCRIÇÃO DO EVENTO */}
                  <Text style={styles.rotulo}>Descrição do evento *</Text>
                  <View
                    style={[
                      styles.containerInput,
                      styles.containerAreaTexto,
                      campoFocado === 'descricao' && styles.containerInputFocado,
                    ]}
                  >
                    <TextInput
                      style={[styles.input, styles.areaTexto]}
                      placeholder="Ex.: Local reservado para aulas práticas..."
                      placeholderTextColor="#64748B"
                      multiline
                      numberOfLines={4}
                      textAlignVertical="top"
                      value={descricaoEvento}
                      onChangeText={setDescricaoEvento}
                      onFocus={() => setCampoFocado('descricao')}
                      onBlur={() => setCampoFocado(null)}
                    />
                  </View>

                  {/* BOTÕES DE AÇÃO */}
                  <TouchableOpacity style={styles.botaoAceitar} activeOpacity={0.8}>
                    <Text style={styles.textoBotao}>Aceitar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botaoNegar} activeOpacity={0.8}>
                    <Text style={styles.textoBotao}>Negar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botaoRevisao} activeOpacity={0.8}>
                    <Text style={styles.textoBotao}>Em Revisão</Text>
                  </TouchableOpacity>
                </View>
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