import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 65,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoImage: {
    width: 32,
    height: 32,
  },
  brandTextContainer: {
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#357DBF',
  },
  brandSubtitle: {
    fontSize: 10,
    color: '#94A3B8',
    letterSpacing: 1,
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    width: 18,
    height: 18,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
});