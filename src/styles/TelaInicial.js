import { StyleSheet } from 'react-native';

const CORES = {
  fundo: '#A6BCC9',
  azul: '#357DBF',
  bordaInput: '#CBD5E1',
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  conteudoRolavel: {
    paddingBottom: 30,
  },

  conteudoRolavelCelular: {
    paddingBottom: 80,
  },

  ola: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },

  linhaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 16,
    width: '100%',
  },

  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  tituloPrincipalCelular: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 12,
  },

  busca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F3',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 44,
    flex: 1,
    borderWidth: 1,
    borderColor: CORES.bordaInput,
  },

  // Específico para mobile: impede o colapso e fixa a altura em 44px
  buscaCelular: {
    width: '100%',
    flex: 0,
    height: 44,
    minHeight: 44,
    marginBottom: 16,
  },

  buscaFocada: {
    borderColor: CORES.azul,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
  },

  lupa: {
    fontSize: 16,
    color: '#64748B',
    marginRight: 8,
  },

  inputBusca: {
    flex: 1,
    fontSize: 13,
    color: '#1E293B',
    height: '100%',
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: 'none',
  },

  linhaFiltros: {
    marginBottom: 20,
  },

  linhaFiltrosCelular: {
    marginBottom: 20,
  },

  filtrosGridCelular: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  listaFiltros: {
    flexDirection: 'row',
  },

  filtrosConteudo: {
    gap: 8,
  },

  filtro: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  filtroAtivo: {
    backgroundColor: CORES.azul,
    borderColor: CORES.azul,
  },

  textoFiltro: {
    fontSize: 12,
    color: '#1E293B',
    fontWeight: '600',
  },

  textoFiltroAtivo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  resultadosCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  resultadosTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  verTodas: {
    fontSize: 12,
    color: CORES.azul,
    fontWeight: '600',
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },

  gradeCelular: {
    flexDirection: 'column',
    width: '100%',
    gap: 12,
  },

  semResultados: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 20,
  },
});

export default styles;