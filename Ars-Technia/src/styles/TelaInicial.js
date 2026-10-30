import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tela: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  areaPrincipal: {
    flex: 1,
    minWidth: 300,
    paddingHorizontal: '4%',
    paddingVertical: 24,
  },
  conteudoRolavel: {
    paddingBottom: 40,
  },
  ola: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  linhaTitulo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  busca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
    minWidth: 240,
    maxWidth: 420,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  lupa: {
    fontSize: 16,
    color: '#64748B',
    marginRight: 10,
  },
  inputBusca: {
    flex: 1,
    fontSize: 13,
    color: '#1E293B',
  },
  linhaFiltros: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  listaFiltros: {
    flexGrow: 0,
    width: '100%',
  },
  filtrosConteudo: {
    flexDirection: 'row',
    gap: 10,
    paddingRight: 16,
  },
  filtro: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filtroAtivo: {
    backgroundColor: '#357DBF',
    borderColor: '#357DBF',
  },
  textoFiltro: {
    fontSize: 13,
    color: '#475569',
  },
  textoFiltroAtivo: {
    color: '#FFFFFF',
    fontWeight: '600',
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
    fontSize: 13,
    color: '#357DBF',
    fontWeight: '600',
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  cartao: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 320,
    maxWidth: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cartaoConteudo: {
    flex: 1,
  },
  etiqueta: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  etiquetaTexto: {
    fontSize: 12,
  },
  nomeSala: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },
  detalheSala: {
    fontSize: 12,
    color: '#64748B',
  },
  semResultados: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 20,
  },
});