
import { StyleSheet } from "react-native";

const CORES = {
  azul: "#357DBF",
  azulMenu: "#357DBF",
  azulEscuro: "#285D8C",

  fundoAzul: "#A6BCC9",
  fundoCreme: "#FFF4EB",

  cabecalho: "#E9E9EB",
  formulario: "#E3E3E5",
  campo: "#EAE2D8",

  bordaFoto: "#F7DCBA",
  borda: "#222222",

  fundoMobile: "#FFF4EB",
  formularioMobile: "#F8F8F8",
  campoMobile: "#FFF4EB",

  preto: "#000000",
  branco: "#FFFFFF",
  textoAzul: "#357DBF",
  cinza: "#777777",
};

const styles = StyleSheet.create({

  // TELA PRINCIPAL

  container: {
    flex: 1,
    backgroundColor: CORES.fundoCreme,
  },

  containerMobile: {
    flex: 1,
    backgroundColor: CORES.fundoMobile,
  },

  // CABEÇALHO DESKTOP

  header: {
    height: 56,
    width: "100%",
    backgroundColor: CORES.cabecalho,
    borderBottomWidth: 1,
    borderBottomColor: "#D5DCE1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 26,
  },

  headerEsquerda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  logoContainer: {
    width: 42,
    height: 34,
    backgroundColor: "#E7D8C3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 36,
    height: 29,
  },

  tituloMarca: {
    color: CORES.textoAzul,
    fontSize: 14,
    fontWeight: "700",
  },

  subtituloMarca: {
    color: CORES.textoAzul,
    fontSize: 8,
    fontWeight: "600",
    letterSpacing: 0.4,
  },

  headerDireita: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconeNotificacao: {
    padding: 5,
  },

  notificacaoImagem: {
    width: 18,
    height: 18,
    tintColor: CORES.textoAzul,
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#F7DCBA",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarIcone: {
    width: 18,
    height: 18,
    tintColor: CORES.textoAzul,
  },

  nomeUsuario: {
    fontSize: 11,
    color: CORES.textoAzul,
    fontWeight: "500",
  },

  // CORPO DA APLICAÇÃO

  corpoAplicacao: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    minHeight: 0,
  },

  corpoMobile: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: CORES.fundoMobile,
    minHeight: 0,
  },

  // DEGRADÊ

  gradiente: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // MENU LATERAL

  sidebar: {
    width: 152,
    minWidth: 152,
    backgroundColor: CORES.azulMenu,
    paddingTop: 25,
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },

  menuPrincipal: {
    flex: 1,
  },

  menuLegenda: {
    color: "#F7DCBA",
    fontSize: 9,
    fontWeight: "600",
    marginLeft: 9,
    marginBottom: 14,
    marginTop: 5,
    letterSpacing: 0.4,
  },

  menuItem: {
    minHeight: 41,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    borderRadius: 9,
    marginBottom: 5,
  },

  menuItemAtivo: {
    backgroundColor: "#F1F1F1",
  },

  menuIcone: {
    width: 17,
    height: 17,
    marginRight: 10,
    tintColor: CORES.branco,
  },

  menuIconeAtivo: {
    tintColor: CORES.azulMenu,
  },

  menuTexto: {
    color: CORES.branco,
    fontSize: 11,
    fontWeight: "500",
  },

  menuTextoAtivo: {
    color: CORES.azulMenu,
    fontWeight: "700",
  },

  areaGestao: {
    marginTop: 27,
    paddingHorizontal: 9,
  },

  menuTextoPequeno: {
    color: CORES.branco,
    fontSize: 9,
    marginTop: 3,
  },

  rodapeMenu: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.18)",
    paddingTop: 12,
    paddingBottom: 15,
    paddingHorizontal: 9,
  },

  rodapeTitulo: {
    color: CORES.branco,
    fontSize: 9,
    fontWeight: "600",
  },

  rodapeSubtitulo: {
    color: "#ffffff",
    fontSize: 8,
    marginTop: 4,
  },

  // CONTEÚDO PRINCIPAL

  conteudo: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "transparent",
    position: "relative",
  },

  conteudoMobile: {
    flex: 1,
    minHeight: 0,
    backgroundColor: CORES.fundoMobile,
  },

  scroll: {
    flex: 1,
    minHeight: 0,
    zIndex: 1,
  },

  scrollConteudo: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 30,
    paddingBottom: 35,
  },

  scrollConteudoMobile: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 27,
    paddingBottom: 25,
  },

  // TÍTULOS

  tituloPagina: {
    marginBottom: 16,
  },

  tituloPaginaMobile: {
    marginBottom: 20,
  },

  categoria: {
    color: CORES.textoAzul,
    fontSize: 9,
    fontWeight: "700",
    marginBottom: 5,
  },

  tituloPaginaTexto: {
    color: CORES.preto,
    fontSize: 25,
    fontWeight: "800",
  },

  tituloMobile: {
    fontSize: 19,
    fontWeight: "800",
    color: CORES.preto,
  },

  descricaoPagina: {
    color: "#000000",
    fontSize: 11,
    marginTop: 5,
  },

  // FORMULÁRIO DESKTOP

  formulario: {
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: CORES.formulario,
    borderWidth: 1,
    borderColor: "#9d9d9d",
    borderRadius: 13,
    paddingHorizontal: 25,
    paddingVertical: 24,
  },

  campo: {
    width: "100%",
    marginBottom: 15,
  },

  label: {
    color: CORES.preto,
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 6,
  },

  input: {
    width: "100%",
    height: 25,
    borderWidth: 1,
    borderColor: "#C8C7C6",
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 0,
    color: CORES.preto,
    backgroundColor: CORES.campo,
    fontSize: 10,
  },

  inputMobile: {
    height: 28,
    fontSize: 10,
    borderRadius: 7,
    backgroundColor: CORES.campoMobile,
  },

  campoDescricao: {
    width: "100%",
    marginBottom: 15,
  },

  inputDescricao: {
    width: "100%",
    height: 62,
    borderWidth: 1,
    borderColor: "#747474",
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingTop: 9,
    color: CORES.preto,
    backgroundColor: CORES.campo,
    fontSize: 10,
  },

  inputDescricaoMobile: {
    height: 85,
    fontSize: 10,
    backgroundColor: CORES.campoMobile,
  },

  campoImagem: {
    width: "100%",
    marginBottom: 3,
  },

  botaoSelecionar: {
    width: "100%",
    height: 26,
    borderWidth: 1,
    borderColor: "#C8C7C6",
    borderRadius: 8,
    backgroundColor: CORES.campo,
    justifyContent: "center",
    paddingHorizontal: 13,
  },

  textoSelecionar: {
    color: "#555555",
    fontSize: 10,
  },

  aviso: {
    textAlign: "center",
    color: CORES.preto,
    fontSize: 10,
    fontWeight: "700",
    marginTop: 4,
    marginBottom: 16,
  },

  // ÁREA DE IMAGEM

  areaAdicionar: {
    width: "100%",
    height: 91,
    borderRadius: 15,
    padding: 7,
    backgroundColor: CORES.bordaFoto,
    marginBottom: 13,
  },

  areaAdicionarMobile: {
    height: 100,
    borderRadius: 14,
    padding: 7,
    marginTop: 2,
    marginBottom: 17,
  },

  areaAdicionarInterna: {
    flex: 1,
    backgroundColor: CORES.formulario,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  // ADICIONADO: INTERIOR DA IMAGEM NO MOBILE

  areaAdicionarInternaMobile: {
    flex: 1,
    backgroundColor: CORES.formularioMobile,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  iconeAdicionar: {
    width: 23,
    height: 23,
    tintColor: "#000000",
  },

  previewImagem: {
    width: "100%",
    height: "100%",
  },

  // BOTÃO CADASTRAR

  botaoCadastrar: {
    width: "100%",
    height: 29,
    borderRadius: 8,
    backgroundColor: CORES.azulMenu,
    justifyContent: "center",
    alignItems: "center",
  },

  textoCadastrar: {
    color: CORES.branco,
    fontSize: 11,
    fontWeight: "700",
  },

  // FORMULÁRIO MOBILE

  formularioMobile: {
    width: "100%",
    maxWidth: 460,
    alignSelf: "center",
    backgroundColor: CORES.formularioMobile,
    borderWidth: 1,
    borderColor: "#C5D4DE",
    borderRadius: 11,
    paddingHorizontal: 18,
    paddingTop: 27,
    paddingBottom: 19,
  },

  // MENU INFERIOR MOBILE

  menuInferior: {
    width: "100%",
    minHeight: 61,
    backgroundColor: CORES.azulMenu,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 3,
    paddingTop: 7,
    paddingBottom: 5,
  },

  menuItemInferior: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    minWidth: 0,
  },

  menuIconeInferior: {
    width: 22,
    height: 22,
    tintColor: CORES.branco,
  },

  menuTextoInferior: {
    color: CORES.branco,
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
  },

  menuTextoInferiorAtivo: {
    fontWeight: "800",
  },
});

export default styles;
