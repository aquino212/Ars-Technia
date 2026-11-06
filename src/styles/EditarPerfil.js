
// ========================================
// EDITAR PERFIL
// FUNÇÕES JAVASCRIPT
// ========================================

// VALIDAR NOME E E-MAIL
export function validarPerfil({ nome, email }) {
  if (!nome || !nome.trim()) {
    return {
      valido: false,
      mensagem: "Digite seu nome completo.",
    };
  }

  const emailValido =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

  if (!emailValido) {
    return {
      valido: false,
      mensagem: "Digite um e-mail válido.",
    };
  }

  return {
    valido: true,
    mensagem: "",
  };
}

// SALVAR PERFIL
export async function salvarPerfil(dados, callback) {
  try {
    if (typeof callback === "function") {
      return await callback(dados);
    }

    console.log("Dados do perfil:", dados);

    return {
      sucesso: true,
      dados,
      persistido: false,
    };
  } catch (error) {
    console.error("Erro ao salvar perfil:", error);
    throw error;
  }
}

// SAIR DA CONTA
export function sairDaConta(callback) {
  if (typeof callback === "function") {
    return callback();
  }

  console.log("Logout ainda não conectado.");
}

// ÍCONES DA NAVEGAÇÃO
export function obterIconeNavegacao(id, ativo, icones) {
  if (id === "Perfil" && ativo) {
    return icones.PerfilAzul || icones.Perfil;
  }

  if (id === "Solicitacoes" && ativo) {
    return icones.SolicitacoesAzul || icones.Solicitacoes;
  }

  return icones[id] || null;
}
