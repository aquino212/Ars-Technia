import { StyleSheet } from 'react-native';

const CORES = {
  fundo: '#A6BCC9',
  azul: '#357DBF',
  verdeBotao: '#B6D6A7',
  rosaBotao: '#D9A4A4',
  amareloBotao: '#F0E27A',
  bordaInput: '#CBD5E1',
  fundoInput: '#FFF8F3',
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },

  aplicativo: {
    flex: 1,
    backgroundColor: CORES.fundo,
    overflow: 'hidden',
  },

  conteudo: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 0,
  },

  conteudoCelular: {
    flexDirection: 'column',
  },

  areaPrincipal: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 28,
    paddingTop: 24,
  },

  areaPrincipalCelular: {
    paddingHorizontal: 14,
    paddingTop: 14,
  },

  conteudoRolavel: {
    paddingBottom: 30,
  },

  conteudoRolavelCelular: {
    paddingBottom: 20,
  },

  blocoConteudo: {
    width: '100%',
  },

  tagGestao: {
    fontSize: 11,
    fontWeight: 'bold',
    color: CORES.azul,
    letterSpacing: 1,
    marginBottom: 4,
  },

  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#101010',
    marginBottom: 4,
  },

  subtitulo: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 20,
  },

  cartaoFormulario: {
    backgroundColor: 'rgba(248, 250, 252, 0.85)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(226, 232, 240, 0.9)',
    padding: 26,
    width: '100%',
  },

  rotulo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },

  containerInput: {
    backgroundColor: CORES.fundoInput,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: CORES.bordaInput,
    marginBottom: 16,
    paddingHorizontal: 14,
    justifyContent: 'center',
    height: 44,
  },

  containerInputFocado: {
    borderColor: CORES.azul,
    borderWidth: 2,
  },

  containerAreaTexto: {
    height: 110,
    paddingVertical: 10,
    marginBottom: 24,
  },

  input: {
    fontSize: 13,
    color: '#1E293B',
    flex: 1,
    outlineWidth: 0,
    outlineStyle: 'none',
  },

  areaTexto: {
    height: '100%',
  },

  botaoAceitar: {
    backgroundColor: CORES.verdeBotao,
    borderRadius: 12,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoNegar: {
    backgroundColor: CORES.rosaBotao,
    borderRadius: 12,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoRevisao: {
    backgroundColor: CORES.amareloBotao,
    borderRadius: 12,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
  },
});

export default styles;