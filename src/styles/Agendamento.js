import { StyleSheet } from "react-native";

const CORES = {
  azul: "#357DBF",
  azulEscuro: "#245A87",
  branco: "#FFFFFF",
  texto: "#263746",
  cinza: "#777777",
  borda: "#C5D6E0",
};

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: "transparent",
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  scrollMobile: {
    paddingBottom: 30,
  },

  // =================================
  // CABEÇALHO DESKTOP
  // =================================

  cabecalho: {
    width: "100%",
    minHeight: 48,
    paddingHorizontal: 18,
    paddingVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#D5D5D5",
  },

  marca: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },

  logo: {
    width: 34,
    height: 34,
    marginRight: 10,
  },

  nomeSistema: {
    fontSize: 12,
    fontWeight: "bold",
    color: CORES.azul,
  },

  subtitulo: {
    fontSize: 8,
    color: CORES.azul,
    marginTop: 1,
  },

  usuario: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconeSolicitacoes: {
    width: 17,
    height: 17,
  },

  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#F5D9B5",
    alignItems: "center",
    justifyContent: "center",
  },

  iconePerfil: {
    width: 13,
    height: 13,
    tintColor: "#357DBF",
  },

  nomeUsuario: {
    fontSize: 9,
    color: CORES.azulEscuro,
  },

  // =================================
  // CONTEÚDO DESKTOP
  // =================================

  conteudo: {
    width: "100%",
    paddingHorizontal: "10%",
    paddingTop: 24,
    alignItems: "stretch",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 35,
    textAlign: "left",
  },

  cartao: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    paddingHorizontal: "9%",
    paddingTop: 25,
    paddingBottom: 30,
    marginBottom: 20,
  },

  formulario: {
    width: "100%",
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 6,
    marginTop: 6,
  },

  input: {
    width: "100%",
    height: 26,
    backgroundColor: "#FFF4EB",
    borderWidth: 1,
    borderColor: "#CED8DE",
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 11,
    color: CORES.texto,
  },

  textarea: {
    height: 65,
    paddingTop: 8,
    textAlignVertical: "top",
  },

  aviso: {
    color: "#111111",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 16,
  },

  botaoCadastrar: {
    width: "100%",
    height: 32,
    backgroundColor: CORES.azul,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },

  textoBotao: {
    color: CORES.branco,
    fontSize: 12,
    fontWeight: "bold",
  },

  // =================================
  // RESPONSIVIDADE PARA CELULAR
  // MANTIDA COMO NA VERSÃO ANTERIOR
  // =================================

  conteudoMobile: {
    width: "100%",
    paddingHorizontal: "9.5%",
    paddingTop: 30,
    alignItems: "stretch",
  },

  tituloMobile: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
    textAlign: "left",
  },

  cartaoMobile: {
    width: "100%",
    minHeight: 592,
    alignSelf: "center",
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 15,
    paddingHorizontal: "9%",
    paddingTop: 42,
    paddingBottom: 82,
    marginBottom: 20,
  },

  labelMobile: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
    marginTop: 5,
    marginBottom: 8,
  },

  inputMobile: {
    width: "100%",
    height: 38,
    backgroundColor: "#FFF4EB",
    borderWidth: 1,
    borderColor: "#B8CCD8",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 12,
    color: CORES.texto,
  },

  textareaMobile: {
    height: 100,
    paddingTop: 10,
    paddingHorizontal: 12,
    textAlignVertical: "top",
  },

  avisoMobile: {
    color: "#111111",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 38,
  },

  botaoCadastrarMobile: {
    width: "100%",
    height: 44,
    backgroundColor: CORES.azul,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },

  textoBotaoMobile: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;