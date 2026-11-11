import React, { useState } from 'react';
import TelaInicial from './src/screens/TelaInicial';
import VerificacaoAgendamento from './src/screens/VerificacaoAgendamento';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Solicitações');

  if (telaAtual === 'Solicitações') {
    return (
      <VerificacaoAgendamento
        itemAtivo={telaAtual}
        onNavegar={(proximaTela) => setTelaAtual(proximaTela)}
      />
    );
  }

  return (
    <TelaInicial
      itemAtivo={telaAtual}
      onNavegar={(proximaTela) => setTelaAtual(proximaTela)}
    />
  );
}