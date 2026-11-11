import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

import styles from "../styles/CadastroDeSalas";

// ======================================
// IMAGENS E ÍCONES
// ======================================

const Logo = require("../../assets/Logo.png");
const Inicio = require("../../assets/Inicio.png");
const Reservas = require("../../assets/Reservas.png");
const Salas = require("../../assets/Salas.png");
const Solicitacoes = require("../../assets/Solicitacoes.png");
const SolicitacoesAzul = require("../../assets/SolicitacoesAzul.png");
const PerfilAzul = require("../../assets/PerfilAzul.png");
const Adicionar = require("../../assets/Adicionar.png");

export default function CadastroSalas({ navigation }) {
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  const escalaDesktop = Math.min(
    Math.max(width / 1440, 0.86),
    1
  );

  const escalaCabecalho = Math.min(
    Math.max(width / 1440, 0.93),
    1
  );

  // ======================================
  // ESTADOS
  // ======================================

  const [quantidade, setQuantidade] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  // ======================================
  // SELECIONAR IMAGEM
  // ======================================

  async function selecionarImagem() {
    try {
      const permissao =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissao.granted) {
        Alert.alert(
          "Permissão necessária",
          "Permita o acesso à galeria para adicionar uma imagem."
        );
        return;
      }

      const resultado =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          allowsEditing: true,
          quality: 0.8,
        });

      if (
        !resultado.canceled &&
        resultado.assets?.length > 0
      ) {
        setImagem(resultado.assets[0].uri);
      }
    } catch (erro) {
      Alert.alert(
        "Erro",
        "Não foi possível selecionar a imagem."
      );
    }
  }

  // ======================================
  // CADASTRAR SALA
  // ======================================

  function cadastrarSala() {
    if (
      !quantidade.trim() ||
      !local.trim() ||
      !descricao.trim() ||
      !imagem
    ) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha todos os campos e adicione uma imagem."
      );
      return;
    }

    Alert.alert(
      "Sucesso",
      "Os dados da sala foram preenchidos!"
    );
  }

  // ======================================
  // ITENS DO MENU
  // ======================================

  const itensMenu = [
    {
      titulo: "Início",
      icone: Inicio,
      tela: "Inicio",
    },
    {
      titulo: "Reservas",
      icone: Reservas,
      tela: "Reservas",
    },
    {
      titulo: "Salas",
      icone: Salas,
      tela: "Salas",
      ativo: true,
    },
    {
      titulo: "Solicitações",
      icone: Solicitacoes,
      tela: "Solicitacoes",
    },
    {
      titulo: "Perfil",
      icone: PerfilAzul,
      tela: "Perfil",
    },
  ];

  function navegar(tela) {
    navigation?.navigate(tela);
  }

  // ======================================
  // MENU LATERAL DESKTOP
  // ======================================

  function renderMenuDesktop() {
    return (
      <View
        style={[
          styles.sidebar,
          {
            width: 152 * escalaDesktop,
            minWidth: 152 * escalaDesktop,
          },
        ]}
      >
        <View style={styles.menuPrincipal}>
          <Text style={styles.menuLegenda}>
            MENU PRINCIPAL
          </Text>

          {itensMenu.map((item) => (
            <TouchableOpacity
              key={item.titulo}
              style={[
                styles.menuItem,
                {
                  minHeight: 41 * escalaDesktop,
                },
                item.ativo && styles.menuItemAtivo,
              ]}
              onPress={() => navegar(item.tela)}
            >
              <Image
                source={item.icone}
                style={[
                  styles.menuIcone,
                  {
                    width: 17 * escalaDesktop,
                    height: 17 * escalaDesktop,
                  },
                  item.ativo && styles.menuIconeAtivo,
                ]}
                resizeMode="contain"
              />

              <Text
                style={[
                  styles.menuTexto,
                  {
                    fontSize: 11 * escalaDesktop,
                  },
                  item.ativo && styles.menuTextoAtivo,
                ]}
              >
                {item.titulo}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.areaGestao}>
            <Text style={styles.menuLegenda}>
              ÁREA DE GESTÃO
            </Text>

            <Text style={styles.menuTextoPequeno}>
              Cadastro de Salas
            </Text>
          </View>
        </View>

        <View style={styles.rodapeMenu}>
          <Text style={styles.rodapeTitulo}>
            Gestão de salas
          </Text>

          <Text style={styles.rodapeSubtitulo}>
            Versão Desktop
          </Text>
        </View>
      </View>
    );
  }

  // ======================================
  // MENU INFERIOR MOBILE
  // ======================================

  function renderMenuMobile() {
    return (
      <View style={styles.menuInferior}>
        {itensMenu.map((item) => (
          <TouchableOpacity
            key={item.titulo}
            style={styles.menuItemInferior}
            onPress={() => navegar(item.tela)}
          >
            <Image
              source={item.icone}
              style={styles.menuIconeInferior}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.menuTextoInferior,
                item.ativo &&
                  styles.menuTextoInferiorAtivo,
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {item.titulo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  // ======================================
  // CABEÇALHO DESKTOP
  // ======================================

  function renderHeader() {
    return (
      <View
        style={[
          styles.header,
          {
            height: 56 * escalaCabecalho,
            paddingHorizontal: 26 * escalaDesktop,
          },
        ]}
      >
        <View style={styles.headerEsquerda}>
          <View
            style={[
              styles.logoContainer,
              {
                width: 42 * escalaDesktop,
                height: 34 * escalaDesktop,
              },
            ]}
          >
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View>
            <Text
              style={[
                styles.tituloMarca,
                {
                  fontSize: 14 * escalaDesktop,
                },
              ]}
            >
              Minhas salas
            </Text>

            <Text style={styles.subtituloMarca}>
              GESTÃO
            </Text>
          </View>
        </View>

        <View style={styles.headerDireita}>
          <TouchableOpacity
            style={styles.iconeNotificacao}
            onPress={() => navegar("Solicitacoes")}
          >
            <Image
              source={SolicitacoesAzul}
              style={styles.notificacaoImagem}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatar}
            onPress={() => navegar("Perfil")}
          >
            <Image
              source={PerfilAzul}
              style={styles.avatarIcone}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text style={styles.nomeUsuario}>
            Juscelino
          </Text>
        </View>
      </View>
    );
  }

  // ======================================
  // FORMULÁRIO
  // ======================================

  function renderFormulario() {
    return (
      <View
        style={[
          styles.formulario,
          {
            paddingHorizontal: 25 * escalaDesktop,
            paddingVertical: 24 * escalaDesktop,
          },
          isMobile && styles.formularioMobile,
        ]}
      >
        {/* QUANTIDADE DE ALUNOS */}

        <View style={styles.campo}>
          <Text style={styles.label}>
            Quantidade alunos *
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                height: 25 * escalaDesktop,
                fontSize: 10 * escalaDesktop,
              },
              isMobile && styles.inputMobile,
            ]}
            value={quantidade}
            onChangeText={setQuantidade}
            placeholder="Ex: Máx.20"
            placeholderTextColor="#A0A0A0"
            keyboardType="numeric"
          />
        </View>

        {/* LOCAL / SETOR */}

        <View style={styles.campo}>
          <Text style={styles.label}>
            Local / Setor *
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                height: 25 * escalaDesktop,
                fontSize: 10 * escalaDesktop,
              },
              isMobile && styles.inputMobile,
            ]}
            value={local}
            onChangeText={setLocal}
            placeholder="Ex: Sala 02 / Administração"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        {/* DESCRIÇÃO */}

        <View style={styles.campoDescricao}>
          <Text style={styles.label}>
            Descrição do Local *
          </Text>

          <TextInput
            style={[
              styles.inputDescricao,
              {
                height: 62 * escalaDesktop,
                fontSize: 10 * escalaDesktop,
              },
              isMobile &&
                styles.inputDescricaoMobile,
            ]}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Ex: Local reservado para aulas práticas[...]"
            placeholderTextColor="#A0A0A0"
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* IMAGEM */}

        <View style={styles.campoImagem}>
          <Text style={styles.label}>
            Imagem *
          </Text>

          {!isMobile && (
            <TouchableOpacity
              style={[
                styles.botaoSelecionar,
                {
                  height: 26 * escalaDesktop,
                },
              ]}
              onPress={selecionarImagem}
            >
              <Text style={styles.textoSelecionar}>
                {imagem
                  ? "Imagem selecionada"
                  : "Adicionar foto do problema"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* AVISO DESKTOP */}

        {!isMobile && (
          <Text style={styles.aviso}>
            Os campos com * são obrigatórios.
          </Text>
        )}

        {/* ÁREA DE ADICIONAR IMAGEM */}

        <TouchableOpacity
          style={[
            styles.areaAdicionar,
            {
              height: 91 * escalaDesktop,
            },
            isMobile && styles.areaAdicionarMobile,
          ]}
          onPress={selecionarImagem}
          activeOpacity={0.8}
        >
          {/* ALTERAÇÃO: ESTILO DIFERENTE PARA MOBILE */}

          <View
            style={[
              styles.areaAdicionarInterna,
              isMobile &&
                styles.areaAdicionarInternaMobile,
            ]}
          >
            {imagem ? (
              <Image
                source={{ uri: imagem }}
                style={styles.previewImagem}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={Adicionar}
                style={styles.iconeAdicionar}
                resizeMode="contain"
              />
            )}
          </View>
        </TouchableOpacity>

        {/* AVISO MOBILE */}

        {isMobile && (
          <Text style={styles.aviso}>
            Os campos com * são obrigatórios.
          </Text>
        )}

        {/* BOTÃO CADASTRAR */}

        <TouchableOpacity
          style={styles.botaoCadastrar}
          onPress={cadastrarSala}
          activeOpacity={0.8}
        >
          <Text style={styles.textoCadastrar}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ======================================
  // RENDERIZAÇÃO PRINCIPAL
  // ======================================

  return (
    <SafeAreaView
      style={[
        styles.container,
        isMobile && styles.containerMobile,
      ]}
    >
      {!isMobile && renderHeader()}

      <View
        style={[
          styles.corpoAplicacao,
          isMobile && styles.corpoMobile,
        ]}
      >
        {!isMobile && renderMenuDesktop()}

        <View
          style={[
            styles.conteudo,
            isMobile && styles.conteudoMobile,
          ]}
        >
          {/* DEGRADÊ SOMENTE DESKTOP */}

          {!isMobile && (
            <LinearGradient
              colors={["#A6BCC9", "#FFF4EB"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradiente}
              pointerEvents="none"
            />
          )}

          <ScrollView
            style={styles.scroll}
            contentContainerStyle={[
              styles.scrollConteudo,
              {
                paddingHorizontal: 28 * escalaDesktop,
                paddingTop: 30 * escalaDesktop,
                paddingBottom: 35 * escalaDesktop,
              },
              isMobile &&
                styles.scrollConteudoMobile,
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* TÍTULO */}

            <View
              style={[
                styles.tituloPagina,
                isMobile &&
                  styles.tituloPaginaMobile,
              ]}
            >
              {!isMobile && (
                <Text style={styles.categoria}>
                  GESTÃO
                </Text>
              )}

              <Text
                style={[
                  styles.tituloPaginaTexto,
                  {
                    fontSize: 25 * escalaDesktop,
                  },
                  isMobile && styles.tituloMobile,
                ]}
              >
                Cadastro de Salas
              </Text>

              {!isMobile && (
                <Text style={styles.descricaoPagina}>
                  Cadastre o local e as informações necessárias para as reservas.
                </Text>
              )}
            </View>

            {renderFormulario()}
          </ScrollView>
        </View>
      </View>

      {/* MENU MOBILE */}

      {isMobile && renderMenuMobile()}
    </SafeAreaView>
  );
}
