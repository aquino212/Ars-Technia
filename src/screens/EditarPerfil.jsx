
// ========================================
// EDITAR PERFIL
// REACT NATIVE + EXPO
// DESKTOP E CELULAR RESPONSIVOS
// CAMPOS INICIALMENTE VAZIOS
// ========================================

import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import {
  validarPerfil,
  salvarPerfil,
  sairDaConta,
  obterIconeNavegacao,
} from "../styles/EditarPerfil.js";

// ========================================
// IMAGENS
// ========================================

const Logo = require("../../assets/Logo.png");
const LogoCamera = require("../../assets/LogoCamera.png");
const Perfil = require("../../assets/Perfil.png");
const PerfilAzul = require("../../assets/PerfilAzul.png");

const Inicio = require("../../assets/Inicio.png");
const Reservas = require("../../assets/Reservas.png");
const Salas = require("../../assets/Salas.png");
const Solicitacoes = require("../../assets/Solicitacoes.png");
const SolicitacoesAzul = require("../../assets/SolicitacoesAzul.png");

// ========================================
// ÍCONES
// ========================================

const icones = {
  Inicio,
  Reservas,
  Salas,
  Solicitacoes,
  SolicitacoesAzul,
  Perfil,
  PerfilAzul,
};

// ========================================
// MENU
// ========================================

const itensMenu = [
  { id: "Inicio", label: "Início" },
  { id: "Reservas", label: "Reservas" },
  { id: "Salas", label: "Salas" },
  { id: "Solicitacoes", label: "Solicitações" },
  { id: "Perfil", label: "Perfil" },
];

// ========================================
// CORES
// ========================================

const CORES = {
  azul: "#347FBD",
  azulEscuro: "#286DA8",
  azulBorda: "#82ACD0",

  creme: "#FFF3E9",
  branco: "#F5F5F5",

  desktopInicio: "#F0F1F2",
  desktopMeio: "#DCE6EB",
  desktopFinal: "#AFC8D9",

  mobileInicio: "#FFF3E9",
  mobileMeio: "#F7F0EA",
  mobileFinal: "#DCE6EA",

  texto: "#111111",
};

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

export default function EditarPerfil({
  onSalvar,
  onSair,
  onNavegar,
  onAlterarFoto,
}) {
  const { width } = useWindowDimensions();

  const mobile = width <= 700;

  // ======================================
  // CAMPOS VAZIOS
  // ======================================

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [salvando, setSalvando] = useState(false);

  // ======================================
  // SALVAR PERFIL
  // ======================================

  async function handleSalvar() {
    setErro("");
    setMensagem("");

    const resultado = validarPerfil({
      nome,
      email,
    });

    if (!resultado.valido) {
      setErro(resultado.mensagem);
      return;
    }

    try {
      setSalvando(true);

      const resposta = await salvarPerfil(
        {
          nome: nome.trim(),
          email: email.trim(),
        },
        onSalvar
      );

      if (resposta?.sucesso === false) {
        setErro(
          resposta.mensagem ||
          "Não foi possível salvar o perfil."
        );
      } else if (onSalvar) {
        setMensagem("Perfil atualizado com sucesso!");
      } else {
        setMensagem(
          "Dados validados! Conecte o salvamento ao seu banco de dados."
        );
      }
    } catch (error) {
      setErro("Não foi possível salvar o perfil.");
    } finally {
      setSalvando(false);
    }
  }

  // ======================================
  // SAIR DA CONTA
  // ======================================

  function handleSair() {
    if (onSair) {
      sairDaConta(onSair);
      return;
    }

    Alert.alert(
      "Sair da Conta",
      "A função de logout ainda não está conectada."
    );
  }

  // ======================================
  // FOTO DE PERFIL
  // ======================================

  function handleAlterarFoto() {
    if (onAlterarFoto) {
      onAlterarFoto();
      return;
    }

    Alert.alert(
      "Foto de perfil",
      "Conecte aqui o seletor de imagens do Expo."
    );
  }

  // ======================================
  // MENU
  // ======================================

  function renderMenu(item, inferior = false) {
    const ativo = item.id === "Perfil";

    const icone = inferior
      ? icones[item.id]
      : obterIconeNavegacao(item.id, ativo, icones);

    return (
      <Pressable
        key={item.id}
        onPress={() => {
          if (onNavegar) {
            onNavegar(item.id);
          }
        }}
        style={({ pressed }) => [
          inferior
            ? styles.itemMenuInferior
            : styles.itemMenuLateral,

          !inferior && ativo && styles.itemMenuAtivo,

          { opacity: pressed ? 0.75 : 1 },
        ]}
      >
        {icone && (
          <Image
            source={icone}
            resizeMode="contain"
            style={
              inferior
                ? styles.iconeMenuInferior
                : styles.iconeMenuLateral
            }
          />
        )}

        <Text
          style={[
            styles.textoMenu,
            inferior
              ? styles.textoMenuInferior
              : styles.textoMenuLateral,
            !inferior && ativo && styles.textoMenuAtivo,
          ]}
        >
          {item.label}
        </Text>
      </Pressable>
    );
  }

  // ======================================
  // CABEÇALHO DESKTOP
  // ======================================

  function renderCabecalho() {
    return (
      <View style={styles.topo}>
        <View style={styles.marca}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={styles.logo}
          />

          <View>
            <Text style={styles.nomeSistema}>
              Minhas salas
            </Text>

            <Text style={styles.subSistema}>
              GESTÃO
            </Text>
          </View>
        </View>

        <View style={styles.usuarioTopo}>
          <Image
            source={SolicitacoesAzul}
            resizeMode="contain"
            style={styles.iconeNotificacao}
          />

          <Image
            source={PerfilAzul}
            resizeMode="contain"
            style={styles.perfilTopo}
          />
        </View>
      </View>
    );
  }

  // ======================================
  // MENU LATERAL DESKTOP
  // ======================================

  function renderSidebar() {
    return (
      <LinearGradient
        colors={["#347FBD", "#286DA8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.sidebar}
      >
        <Text style={styles.tituloMenuLateral}>
          MENU PRINCIPAL
        </Text>

        <View style={styles.listaMenu}>
          {itensMenu.map((item) => renderMenu(item))}
        </View>

        <View style={styles.rodapeMenu}>
          <Text style={styles.textoRodape}>
            Portal do professor
          </Text>

          <Text style={styles.versao}>
            Versão Desktop
          </Text>
        </View>
      </LinearGradient>
    );
  }

  // ======================================
  // CARTÃO DE PERFIL
  // SEM NOME OU E-MAIL PREENCHIDOS
  // ======================================

  function renderCartaoUsuario() {
    return (
      <View style={styles.cartaoUsuario}>
        <View style={styles.avatar}>
          <Image
            source={Perfil}
            resizeMode="contain"
            style={styles.iconePerfil}
          />

          <Pressable
            onPress={handleAlterarFoto}
            style={styles.botaoCamera}
          >
            <Image
              source={LogoCamera}
              resizeMode="contain"
              style={styles.iconeCamera}
            />
          </Pressable>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.nomeUsuario}>
            Meu perfil
          </Text>

          <Text style={styles.emailUsuario}>
            Preencha suas informações abaixo
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
      <View style={styles.formulario}>
        {!mobile && (
          <Text style={styles.tituloFormulario}>
            Informações pessoais
          </Text>
        )}

        <View style={styles.campos}>
          <Text style={styles.label}>
            Nome
          </Text>

          <TextInput
            value={nome}
            onChangeText={(valor) => {
              setNome(valor);
              setErro("");
              setMensagem("");
            }}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#777777"
            style={styles.input}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
          />

          <Text style={styles.label}>
            E-mail
          </Text>

          <TextInput
            value={email}
            onChangeText={(valor) => {
              setEmail(valor);
              setErro("");
              setMensagem("");
            }}
            placeholder="nome@email.com"
            placeholderTextColor="#777777"
            style={[styles.input, styles.ultimoInput]}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>

        {!!erro && (
          <Text style={styles.erro}>
            {erro}
          </Text>
        )}

        {!!mensagem && (
          <Text style={styles.sucesso}>
            {mensagem}
          </Text>
        )}

        {mobile && (
          <Pressable
            onPress={handleSair}
            style={({ pressed }) => [
              styles.botaoSair,
              { opacity: pressed ? 0.75 : 1 },
            ]}
          >
            <Text style={styles.textoBotaoSair}>
              Sair da Conta
            </Text>
          </Pressable>
        )}

        <Pressable
          onPress={handleSalvar}
          disabled={salvando}
          style={({ pressed }) => [
            mobile
              ? styles.botaoSalvarMobile
              : styles.botaoSalvarDesktop,
            {
              opacity: pressed || salvando ? 0.7 : 1,
            },
          ]}
        >
          <Text
            style={
              mobile
                ? styles.textoSalvarMobile
                : styles.textoSalvarDesktop
            }
          >
            {salvando ? "Salvando..." : "Salvar"}
          </Text>
        </Pressable>
      </View>
    );
  }

  // ======================================
  // SESSÃO DESKTOP
  // ======================================

  function renderSessao() {
    return (
      <View style={styles.sessao}>
        <View style={{ flex: 1 }}>
          <Text style={styles.tituloSessao}>
            Sessão da conta
          </Text>

          <Text style={styles.descricaoSessao}>
            Encerre o acesso neste dispositivo.
          </Text>
        </View>

        <Pressable
          onPress={handleSair}
          style={({ pressed }) => [
            styles.botaoSairDesktop,
            { opacity: pressed ? 0.75 : 1 },
          ]}
        >
          <Text style={styles.textoBotaoSair}>
            Sair da Conta
          </Text>
        </Pressable>
      </View>
    );
  }

  // ======================================
  // CONTEÚDO PRINCIPAL
  // ======================================

  function renderConteudo() {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.conteudo,
          mobile
            ? styles.conteudoMobile
            : styles.conteudoDesktop,
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          {!mobile && (
            <Text style={styles.miniTitulo}>
              MINHA CONTA
            </Text>
          )}

          <Text
            style={
              mobile
                ? styles.tituloMobile
                : styles.tituloDesktop
            }
          >
            {mobile ? "Perfil" : "Editar Perfil"}
          </Text>

          {!mobile && (
            <Text style={styles.descricao}>
              Atualize seu nome, e-mail e foto de perfil.
            </Text>
          )}
        </View>

        {renderCartaoUsuario()}

        {renderFormulario()}

        {!mobile && renderSessao()}
      </ScrollView>
    );
  }

  // ======================================
  // INTERFACE PRINCIPAL
  // ======================================

  return (
    <View style={styles.pagina}>
      <StatusBar
        backgroundColor={mobile ? "#FFF3E9" : "#F5F5F5"}
        barStyle="dark-content"
      />

      {!mobile && renderCabecalho()}

      <View
        style={[
          styles.areaPrincipal,
          mobile
            ? styles.areaPrincipalMobile
            : styles.areaPrincipalDesktop,
        ]}
      >
        {!mobile && renderSidebar()}

        <LinearGradient
          colors={
            mobile
              ? [
                  CORES.mobileInicio,
                  CORES.mobileMeio,
                  CORES.mobileFinal,
                ]
              : [
                  CORES.desktopInicio,
                  CORES.desktopMeio,
                  CORES.desktopFinal,
                ]
          }
          locations={[0, 0.55, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.fundoConteudo}
        >
          <KeyboardAvoidingView
            style={styles.teclado}
            behavior={
              Platform.OS === "ios" ? "padding" : undefined
            }
          >
            {renderConteudo()}
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>

      {mobile && (
        <LinearGradient
          colors={["#347FBD", "#286DA8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.menuInferior}
        >
          {itensMenu.map((item) =>
            renderMenu(item, true)
          )}
        </LinearGradient>
      )}
    </View>
  );
}

// ========================================
// ESTILOS
// ========================================

const styles = StyleSheet.create({

  // GERAL

  pagina: {
    flex: 1,
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    borderWidth: 0,
    backgroundColor: "#FFF3E9",
    overflow: "hidden",
  },

  areaPrincipal: {
    flex: 1,
    width: "100%",
    minHeight: 0,
  },

  areaPrincipalDesktop: {
    flexDirection: "row",
  },

  areaPrincipalMobile: {
    flexDirection: "column",
  },

  fundoConteudo: {
    flex: 1,
    minWidth: 0,
    width: "100%",
  },

  teclado: {
    flex: 1,
    minHeight: 0,
  },

  scroll: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },

  conteudo: {
    flexGrow: 1,
  },

  conteudoDesktop: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    paddingHorizontal: 27,
    paddingTop: 28,
    paddingBottom: 35,
  },

  conteudoMobile: {
    width: "100%",
    paddingHorizontal: 23,
    paddingTop: 35,
    paddingBottom: 25,
  },

  // CABEÇALHO

  topo: {
    height: 60,
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 1,
    borderBottomColor: "#C3D0D8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },

  marca: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  logo: {
    width: 42,
    height: 34,
  },

  nomeSistema: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2874B5",
  },

  subSistema: {
    fontSize: 9,
    color: "#2874B5",
  },

  usuarioTopo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconeNotificacao: {
    width: 19,
    height: 19,
  },

  perfilTopo: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#EAD0AD",
    padding: 5,
  },

  // MENU LATERAL

  sidebar: {
    width: 156,
    flexShrink: 0,
    paddingHorizontal: 14,
    paddingTop: 26,
    paddingBottom: 18,
  },

  tituloMenuLateral: {
    color: "#FFFFFF",
    fontSize: 8,
    marginBottom: 12,
  },

  listaMenu: {
    gap: 4,
  },

  itemMenuLateral: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 43,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 10,
  },

  itemMenuAtivo: {
    backgroundColor: "#F4F5F6",
  },

  iconeMenuLateral: {
    width: 20,
    height: 20,
  },

  textoMenu: {
    fontSize: 11,
  },

  textoMenuLateral: {
    color: "#FFFFFF",
  },

  textoMenuAtivo: {
    color: "#2874B5",
    fontWeight: "bold",
  },

  rodapeMenu: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.2)",
    paddingTop: 12,
    paddingHorizontal: 9,
  },

  textoRodape: {
    fontSize: 9,
    color: "#FFFFFF",
  },

  versao: {
    fontSize: 8,
    color: "#DDEBFA",
    marginTop: 5,
  },

  // TÍTULOS

  miniTitulo: {
    color: "#2874B5",
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 4,
  },

  tituloDesktop: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 5,
  },

  tituloMobile: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 38,
  },

  descricao: {
    fontSize: 11,
    color: "#222222",
    marginBottom: 23,
  },

  // CARTÃO DO PERFIL

  cartaoUsuario: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    minHeight: 91,
    backgroundColor: "#FFF3E9",
    borderWidth: 1,
    borderColor: "#A9C2D5",
    borderRadius: 16,
    marginBottom: 30,
  },

  avatar: {
    width: 66,
    height: 66,
    borderRadius: 35,
    backgroundColor: "#A3A3A3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
    position: "relative",
  },

  iconePerfil: {
    width: 40,
    height: 40,
  },

  botaoCamera: {
    position: "absolute",
    right: -3,
    bottom: -3,
    width: 21,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  iconeCamera: {
    width: 19,
    height: 19,
  },

  nomeUsuario: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
  },

  emailUsuario: {
    fontSize: 12,
    color: "#111111",
    marginTop: 4,
  },

  // FORMULÁRIO

  formulario: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#82ACD0",
    borderRadius: 17,
    padding: 17,
    backgroundColor: "rgba(248,248,248,0.55)",
  },

  tituloFormulario: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 18,
  },

  campos: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#82ACD0",
    borderRadius: 14,
    padding: 15,
    backgroundColor: "rgba(248,248,248,0.65)",
  },

  label: {
    fontSize: 11,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 7,
  },

  input: {
    height: 42,
    width: "100%",
    borderWidth: 1,
    borderColor: "#82ACD0",
    borderRadius: 11,
    backgroundColor: "#FFF3E9",
    paddingHorizontal: 12,
    fontSize: 12,
    color: "#111111",
    marginBottom: 14,
  },

  ultimoInput: {
    marginBottom: 0,
  },

  // BOTÃO SAIR MOBILE

  botaoSair: {
    height: 43,
    width: "100%",
    marginTop: 10,
    backgroundColor: "#347FBD",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  // BOTÃO SALVAR MOBILE

  botaoSalvarMobile: {
    width: "100%",
    height: 43,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#78A9D1",
    borderRadius: 11,
    backgroundColor: "#FFF3E9",
    justifyContent: "center",
    alignItems: "center",
  },

  textoSalvarMobile: {
    color: "#2874B5",
    fontSize: 13,
    fontWeight: "bold",
  },

  // BOTÃO SALVAR DESKTOP

  botaoSalvarDesktop: {
    width: 256,
    maxWidth: "100%",
    height: 43,
    marginTop: 14,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 11,
    backgroundColor: "#F3E9E1",
    justifyContent: "center",
    alignItems: "center",
  },

  textoSalvarDesktop: {
    color: "#111111",
    fontSize: 13,
    fontWeight: "bold",
  },

  textoBotaoSair: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  // SESSÃO DESKTOP

  sessao: {
    width: "78%",
    maxWidth: 850,
    minHeight: 75,
    marginTop: 28,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  tituloSessao: {
    fontSize: 12,
    color: "#2874B5",
    fontWeight: "bold",
  },

  descricaoSessao: {
    fontSize: 9,
    color: "#506B9A",
    marginTop: 5,
  },

  botaoSairDesktop: {
    width: 194,
    maxWidth: "45%",
    height: 43,
    backgroundColor: "#347FBD",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  // MENU INFERIOR MOBILE

  menuInferior: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    flexShrink: 0,
    margin: 0,
    borderWidth: 0,
  },

  itemMenuInferior: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 2,
  },

  iconeMenuInferior: {
    width: 27,
    height: 27,
  },

  textoMenuInferior: {
    color: "#FFFFFF",
    fontSize: 10,
    textAlign: "center",
  },

  // MENSAGENS

  erro: {
    color: "#B42318",
    fontSize: 11,
    marginTop: 10,
    textAlign: "center",
  },

  sucesso: {
    color: "#187044",
    fontSize: 11,
    marginTop: 10,
    textAlign: "center",
  },
});
