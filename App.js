<<<<<<< HEAD
import React, { useState } from "react";
// import Perfil from "./src/screens/Perfil";
import EditarPerfil from "./src/screens/EditarPerfil";

export default function App() {
  // Exibe a tela de Perfil (Professor). Para visualizar PerfilGESTAO, basta trocar para <PerfilGESTAO />
  // return <Perfil />;
   return <EditarPerfil/>;
}
=======
import React from "react";

import Agendamento from "./src/screens/Agendamento";
import Perfil from "./src/screens/Perfil";
import PerfilGestao from "./src/screens/PerfilGestao";
import CadastroDeConta from "./src/screens/CadastroDeConta";
import Login from "./src/screens/Login";
import DetalhesdoLocal from "./src/screens/DetalhesdoLocal";
import EditarPerfil from "./src/screens/EditarPerfil";
import CadastroDeSalas from "./src/screens/CadastroDeSalas";
import TelaInicialGESTAO from "./src/screens/TelaInicialGESTAO";
import Solicitacao from "./src/screens/Solicitacao";
import SolicitacaoGESTAO from "./src/screens/SolicitacaoGESTAO";
import VerificacaoAgendamento from "./src/screens/VerificacaoAgendamento";
import TelaInicial from "./src/screens/TelaInicial";

export default function App() {
    return <SolicitacaoGESTAO />;
}
>>>>>>> 0db965e97ed7e3da472fb7e2af90c8b2ef80443a
