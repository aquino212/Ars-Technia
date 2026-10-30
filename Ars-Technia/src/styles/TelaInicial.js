import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    minHeight: '100vh',
    width: '100%',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: '4%',
    paddingVertical: 25,
    width: '100%',
    maxWidth: 1400,
    alignSelf: 'center',
  },
  greeting: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 6,
  },
  topHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    flexWrap: 'wrap',
    gap: 15,
  },
  pageTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 28,
    color: '#000000',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    maxWidth: 480,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: '#357DBF',
  },
  searchInput: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
    flexWrap: 'wrap',
  },
  filterChip: {
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  filterChipActive: {
    backgroundColor: '#357DBF',
    borderColor: '#357DBF',
  },
  filterChipText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 13,
    color: '#444444',
  },
  filterChipTextActive: {
    color: '#FFFFFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    color: '#000000',
  },
  seeAllText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#000000',
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 280,
    maxWidth: '100%',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 11,
  },
  badgeReservada: {
    backgroundColor: '#357DBF',
  },
  badgeTextReservada: {
    color: '#FFFFFF',
  },
  badgeFechada: {
    backgroundColor: '#F5B7B1',
  },
  badgeTextFechada: {
    color: '#78281F',
  },
  badgeAberta: {
    backgroundColor: '#D4F8C4',
  },
  badgeTextAberta: {
    color: '#1E8449',
  },
  badgeManutencao: {
    backgroundColor: '#FFF59D',
  },
  badgeTextManutencao: {
    color: '#7D6608',
  },
  cardTitle: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    color: '#000000',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: '#777777',
  },
});