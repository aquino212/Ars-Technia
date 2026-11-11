import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardSala({ item, celular }) {
  const getCorStatus = (status) => {
    switch (status) {
      case 'Reservada':
        return { bg: '#2563EB', texto: '#FFFFFF' };
      case 'Fechada':
        return { bg: '#E8A5A5', texto: '#1E293B' };
      case 'Aberta':
        return { bg: '#B6D6A7', texto: '#1E293B' };
      case 'Manutenção':
        return { bg: '#F0E27A', texto: '#1E293B' };
      default:
        return { bg: '#94A3B8', texto: '#FFFFFF' };
    }
  };

  const cor = getCorStatus(item.status);

  return (
    <View style={[styles.card, celular && styles.cardCelular]}>
      <View style={[styles.badge, { backgroundColor: cor.bg }]}>
        <Text style={[styles.textoBadge, { color: cor.texto }]}>{item.status}</Text>
      </View>
      <Text style={styles.tituloSala}>{item.sala}</Text>
      <Text style={styles.detalhes}>
        {item.professor} - Máx.{item.capacidade}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 16,
    width: '48.5%',
    minWidth: 280,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  cardCelular: {
    width: '100%',
    minWidth: '100%',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  textoBadge: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  tituloSala: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  detalhes: {
    fontSize: 12,
    color: '#64748B',
  },
});