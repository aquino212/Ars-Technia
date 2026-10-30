import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  menu: {
    width: 240,
    backgroundColor: '#357DBF',
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 65px)',
  },
  menuTitulo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 20,
    letterSpacing: 1,
    paddingLeft: 8,
  },
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 6,
  },
  itemSelecionado: {
    backgroundColor: '#FFFFFF',
  },
  iconeMenu: {
    width: 18,
    height: 18,
    marginRight: 12,
    tintColor: '#FFFFFF',
  },
  iconeSelecionado: {
    tintColor: '#357DBF',
  },
  textoMenu: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  textoSelecionado: {
    color: '#357DBF',
    fontWeight: 'bold',
  },
  rodapeMenu: {
    marginTop: 'auto',
    paddingTop: 16,
    paddingLeft: 8,
  },
  rodapeTexto: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
  },
});