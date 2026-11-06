
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import styles from "./CadastroStyle";

export default function Cadastro({ onEntrar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(true);

  function criarConta() {
    if (nome === "" || email === "" || senha === "") {
      Alert.alert("Atenção", "Preencha todos os campos.");
    } else if (aceitouTermos === false) {
      Alert.alert("Atenção", "Aceite os termos para continuar.");
    } else {
      Alert.alert("Cadastro", "Cadastro preenchido com sucesso!");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>

        <Image
          source={require("../../assets/LogoArsTechnia.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Criar Conta</Text>

          <Text style={styles.subtitulo}>
            Preencha os dados abaixo para acessar o
            {"\n"} aplicativo.
          </Text>
        </View>

        <View style={styles.formulario}>

          <View style={styles.campo}>
            <Text style={styles.label}>Nome Completo</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>E-mail</Text>

            <TextInput
              style={styles.input}
              placeholder="nome@email.com"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Senha</Text>

            <TextInput
              style={styles.input}
              placeholder="Crie uma senha segura"
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <Pressable
            style={styles.termos}
            onPress={() => setAceitouTermos(!aceitouTermos)}
          >
            <View style={styles.caixaCheckbox}>
              {aceitouTermos && (
                <Text style={styles.check}>✓</Text>
              )}
            </View>

            <Text style={styles.textoTermos}>
              Li e aceito os termos de uso e a política de privacidade.
            </Text>
          </Pressable>

        </View>

        <View style={styles.rodape}>

          <View style={styles.areaLogin}>
            <Text style={styles.textoLogin}>
              Já tem uma conta?{" "}
            </Text>

            <Pressable onPress={onEntrar}>
              <Text style={styles.linkLogin}>Entrar</Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.botao}
            onPress={criarConta}
          >
            <Text style={styles.textoBotao}>Criar Conta</Text>
          </Pressable>

        </View>

      </ScrollView>
    </View>
  );
}
