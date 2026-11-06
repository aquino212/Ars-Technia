import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/Agendamento";

import LogoNova from "../../assets/Logo.png";
import SolicitacoesAzul from "../../assets/SolicitacoesAzul.png";
import PerfilAzul from "../../assets/PerfilAzul.png";

export default function Agendamento() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 600;

  // Escala exclusiva para desktop
  const escalaDesktop = isMobile
    ? 1
    : Math.min(Math.max(width / 1200, 0.9), 1.15);

  const [professor, setProfessor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = () => {
    if (
      !professor.trim() ||
      !quantidade.trim() ||
      !local.trim() ||
      !descricao.trim()
    ) {
      Alert.alert(
        "Atenção",
        "Preencha todos os campos obrigatórios."
      );
      return;
    }

    if (
      !Number.isInteger(Number(quantidade)) ||
      Number(quantidade) < 1
    ) {
      Alert.alert(
        "Atenção",
        "Informe uma quantidade de alunos válida."
      );
      return;
    }

    Alert.alert(
      "Sucesso",
      "Dados do agendamento preenchidos!"
    );

    console.log({
      professor,
      quantidade,
      local,
      descricao,
    });
  };

  return (
    <LinearGradient
      colors={["#A6BCC9", "#FFF4EB"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.pagina}>
        <ScrollView
          contentContainerStyle={[
            styles.scroll,
            isMobile && styles.scrollMobile,
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* CABEÇALHO DESKTOP */}
          {!isMobile && (
            <View
              style={[
                styles.cabecalho,
                {
                  minHeight: 48 * escalaDesktop,
                  paddingHorizontal: 18 * escalaDesktop,
                },
              ]}
            >
              <View style={styles.marca}>
                <Image
                  source={LogoNova}
                  style={[
                    styles.logo,
                    {
                      width: 34 * escalaDesktop,
                      height: 34 * escalaDesktop,
                      marginRight: 10 * escalaDesktop,
                    },
                  ]}
                  resizeMode="contain"
                />

                <View>
                  <Text
                    style={[
                      styles.nomeSistema,
                      { fontSize: 12 * escalaDesktop },
                    ]}
                  >
                    Minhas salas
                  </Text>

                  <Text
                    style={[
                      styles.subtitulo,
                      { fontSize: 8 * escalaDesktop },
                    ]}
                  >
                    GESTÃO
                  </Text>
                </View>
              </View>

              <View style={styles.usuario}>
                <TouchableOpacity
                  accessibilityLabel="Solicitações"
                  onPress={() =>
                    Alert.alert(
                      "Solicitações",
                      "Área de solicitações"
                    )
                  }
                >
                  <Image
                    source={SolicitacoesAzul}
                    style={[
                      styles.iconeSolicitacoes,
                      {
                        width: 17 * escalaDesktop,
                        height: 17 * escalaDesktop,
                      },
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  accessibilityLabel="Perfil do usuário"
                  style={[
                    styles.avatar,
                    {
                      width: 22 * escalaDesktop,
                      height: 22 * escalaDesktop,
                      borderRadius: 11 * escalaDesktop,
                    },
                  ]}
                  onPress={() =>
                    Alert.alert("Perfil", "Área do perfil")
                  }
                >
                  <Image
                    source={PerfilAzul}
                    style={[
                      styles.iconePerfil,
                      {
                        width: 13 * escalaDesktop,
                        height: 13 * escalaDesktop,
                      },
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <Text
                  style={[
                    styles.nomeUsuario,
                    { fontSize: 9 * escalaDesktop },
                  ]}
                >
                  Juscelino
                </Text>
              </View>
            </View>
          )}

          {/* CONTEÚDO */}
          <View
            style={[
              styles.conteudo,
              isMobile && styles.conteudoMobile,
            ]}
          >
            <Text
              style={[
                styles.titulo,
                isMobile && styles.tituloMobile,
                !isMobile && {
                  fontSize: 22 * escalaDesktop,
                  marginBottom: 35 * escalaDesktop,
                },
              ]}
            >
              Cadastro de Agendamento
            </Text>

            {/* CARTÃO */}
            <View
              style={[
                styles.cartao,
                isMobile && styles.cartaoMobile,
                !isMobile && {
                  paddingHorizontal: `${9}%`,
                  paddingTop: 25 * escalaDesktop,
                  paddingBottom: 30 * escalaDesktop,
                  borderRadius: 10 * escalaDesktop,
                },
              ]}
            >
              <View style={styles.formulario}>
                {/* PROFESSOR */}
                <Text
                  style={[
                    styles.label,
                    isMobile && styles.labelMobile,
                    !isMobile && {
                      fontSize: 13 * escalaDesktop,
                      marginTop: 5 * escalaDesktop,
                      marginBottom: 6 * escalaDesktop,
                    },
                  ]}
                >
                  Nome do professor *
                </Text>

                <TextInput
                  style={[
                    styles.input,
                    isMobile && styles.inputMobile,
                    !isMobile && {
                      height: 26 * escalaDesktop,
                      fontSize: 11 * escalaDesktop,
                      borderRadius: 7 * escalaDesktop,
                      paddingHorizontal: 8 * escalaDesktop,
                    },
                  ]}
                  placeholder="Ex.: Marcos/Caique"
                  placeholderTextColor="#777777"
                  value={professor}
                  onChangeText={setProfessor}
                />

                {/* QUANTIDADE */}
                <Text
                  style={[
                    styles.label,
                    isMobile && styles.labelMobile,
                    !isMobile && {
                      fontSize: 13 * escalaDesktop,
                      marginTop: 6 * escalaDesktop,
                      marginBottom: 6 * escalaDesktop,
                    },
                  ]}
                >
                  Quantidade de alunos *
                </Text>

                <TextInput
                  style={[
                    styles.input,
                    isMobile && styles.inputMobile,
                    !isMobile && {
                      height: 26 * escalaDesktop,
                      fontSize: 11 * escalaDesktop,
                      borderRadius: 7 * escalaDesktop,
                      paddingHorizontal: 8 * escalaDesktop,
                    },
                  ]}
                  placeholder="Ex.: Máx. 20"
                  placeholderTextColor="#777777"
                  value={quantidade}
                  onChangeText={setQuantidade}
                  keyboardType="numeric"
                />

                {/* LOCAL */}
                <Text
                  style={[
                    styles.label,
                    isMobile && styles.labelMobile,
                    !isMobile && {
                      fontSize: 13 * escalaDesktop,
                      marginTop: 6 * escalaDesktop,
                      marginBottom: 6 * escalaDesktop,
                    },
                  ]}
                >
                  Local / Setor *
                </Text>

                <TextInput
                  style={[
                    styles.input,
                    isMobile && styles.inputMobile,
                    !isMobile && {
                      height: 26 * escalaDesktop,
                      fontSize: 11 * escalaDesktop,
                      borderRadius: 7 * escalaDesktop,
                      paddingHorizontal: 8 * escalaDesktop,
                    },
                  ]}
                  placeholder="Ex.: Sala 02 / Administração"
                  placeholderTextColor="#777777"
                  value={local}
                  onChangeText={setLocal}
                />

                {/* DESCRIÇÃO */}
                <Text
                  style={[
                    styles.label,
                    isMobile && styles.labelMobile,
                    !isMobile && {
                      fontSize: 13 * escalaDesktop,
                      marginTop: 6 * escalaDesktop,
                      marginBottom: 6 * escalaDesktop,
                    },
                  ]}
                >
                  Descrição do evento *
                </Text>

                <TextInput
                  style={[
                    styles.input,
                    styles.textarea,
                    isMobile && styles.textareaMobile,
                    !isMobile && {
                      height: 65 * escalaDesktop,
                      fontSize: 11 * escalaDesktop,
                      borderRadius: 7 * escalaDesktop,
                      paddingHorizontal: 8 * escalaDesktop,
                      paddingTop: 8 * escalaDesktop,
                    },
                  ]}
                  placeholder="Ex.: Local reservado para aulas práticas[...]"
                  placeholderTextColor="#777777"
                  value={descricao}
                  onChangeText={setDescricao}
                  multiline
                  textAlignVertical="top"
                />

                {/* AVISO */}
                <Text
                  style={[
                    styles.aviso,
                    isMobile && styles.avisoMobile,
                    !isMobile && {
                      fontSize: 12 * escalaDesktop,
                      marginTop: 12 * escalaDesktop,
                      marginBottom: 16 * escalaDesktop,
                    },
                  ]}
                >
                  Os campos com * são obrigatórios.
                </Text>

                {/* BOTÃO */}
                <TouchableOpacity
                  style={[
                    styles.botaoCadastrar,
                    isMobile && styles.botaoCadastrarMobile,
                    !isMobile && {
                      height: 32 * escalaDesktop,
                      borderRadius: 8 * escalaDesktop,
                    },
                  ]}
                  onPress={handleSubmit}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.textoBotao,
                      isMobile && styles.textoBotaoMobile,
                      !isMobile && {
                        fontSize: 12 * escalaDesktop,
                      },
                    ]}
                  >
                    Cadastrar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

