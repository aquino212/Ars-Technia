import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    minHeight: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    flexWrap: 'wrap',
    gap: 15,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  brandTextContainer: {
    justifyContent: 'center',
  },
  brandTitle: {
    fontFamily: 'Montserrat_700Bold',
    color: '#357DBF',
    fontSize: 16,
  },
  brandSubtitle: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#357DBF',
    fontSize: 10,
    opacity: 0.8,
    letterSpacing: 0.5,
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  notificationIcon: {
    width: 20,
    height: 20,
    tintColor: '#357DBF',
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3D8C2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    width: 20,
    height: 20,
    tintColor: '#357DBF',
  },
  userName: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#357DBF',
    fontSize: 14,
  },
});