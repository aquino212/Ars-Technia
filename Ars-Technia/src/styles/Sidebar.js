import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sidebar: {
    width: 240,
    backgroundColor: '#357DBF',
    paddingVertical: 25,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  },
  sidebarSectionTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 11,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 20,
    paddingLeft: 10,
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 8,
  },
  menuItemActive: {
    backgroundColor: '#FFFFFF',
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  menuItemText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  menuItemTextActive: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#357DBF',
  },
  sidebarFooter: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingLeft: 10,
  },
  sidebarFooterText: {
    fontFamily: 'Montserrat_400Regular',
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.8,
  },
});