
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1ED",
  },

  conteudo: {
    flexGrow: 1,
    paddingHorizontal: 21,
    paddingTop: 8,
    paddingBottom: 24,
  },

  logo: {
    width: 180,
    height: 115,
    alignSelf: "center",
    marginBottom: 3,
  },

  cabecalho: {
    alignItems: "center",
    marginBottom: 0,
  },

  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#080808",
  },

  subtitulo: {
    fontSize: 13,
    lineHeight: 15,
    color: "#080808",
    textAlign: "center",
    marginTop: 5,
  },

  formulario: {
    paddingHorizontal: 13,
    paddingTop: 16,
  },

  campo: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#080808",
    marginBottom: 15,
  },

  input: {
    height: 41,
    backgroundColor: "#FFF5ED",
    borderWidth: 1,
    borderColor: "#4A91D6",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 12,
    color: "#080808",
  },

  termos: {
    flexDirection: "row",
    alignItems: "center",
  },

  caixaCheckbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: "#B8C9D6",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },

  check: {
    fontSize: 13,
    color: "#3482C5",
    fontWeight: "bold",
  },

  textoTermos: {
    flex: 1,
    fontSize: 10.5,
    lineHeight: 14,
    color: "#080808",
  },

  rodape: {
    marginTop: "auto",
    paddingTop: 70,
  },

  areaLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  textoLogin: {
    fontSize: 11,
    color: "#080808",
  },

  linkLogin: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#287EC0",
  },

  botao: {
    height: 44,
    backgroundColor: "#347FBD",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default styles;
