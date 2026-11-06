import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Image,
    Pressable,
    ScrollView,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import styles from '../styles/CadastroDeConta';

export default function CadastroDeContas({ onEntrar, onCriarConta }) {
    const { width } = useWindowDimensions();
    const celular = width <= 700;

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [aceitouTermos, setAceitouTermos] = useState(false);

    const [fontesCarregadas] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontesCarregadas) {
        return null;
    }

    function criarConta() {
        if (!nome.trim() || !email.trim() || !senha.trim()) {
            Alert.alert('Atenção', 'Preencha todos os campos.');
            return;
        }

        if (!aceitouTermos) {
            Alert.alert(
                'Atenção',
                'Você precisa aceitar os termos de uso e a política de privacidade.'
            );
            return;
        }

        if (onCriarConta) {
            onCriarConta({ nome, email, senha });
        } else {
            Alert.alert(
                'Cadastro',
                'Cadastro preenchido! A integração ainda precisa ser conectada.'
            );
        }
    }

    function entrar() {
        if (onEntrar) {
            onEntrar();
        } else {
            Alert.alert(
                'Entrar',
                'A tela de login ainda precisa ser conectada.'
            );
        }
    }

    return (
        <View style={styles.tela}>
            <KeyboardAvoidingView
                style={styles.teclado}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={[
                        styles.conteudo,
                        celular && styles.conteudoCelular,
                    ]}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >

                    {/* LOGO */}

                    <View
                        style={[
                            styles.areaLogo,
                            celular && styles.areaLogoCelular,
                        ]}
                    >
                        <LinearGradient
                            colors={
                                celular
                                    ? ['#FFF4EB', '#FFF4EB']
                                    : ['#FFF4EB', '#A6BCC9']
                            }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradienteLogo}
                        >
                            <Image
                                source={
                                    celular
                                        ? require('../../assets/LogoArsTechnia.png')
                                        : require('../../assets/LogoComNome.png')
                                }
                                style={[
                                    styles.logo,
                                    celular && styles.logoCelular,
                                ]}
                                resizeMode="contain"
                            />
                        </LinearGradient>
                    </View>

                    {/* FORMULÁRIO */}

                    <LinearGradient
                        colors={
                            celular
                                ? ['#FFF4EB', '#D6E5EE']
                                : ['#F8F8F8', '#D6E5EE']
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={[
                            styles.areaFormulario,
                            celular && styles.areaFormularioCelular,
                        ]}
                    >
                        <View
                            style={[
                                styles.formulario,
                                celular && styles.formularioCelular,
                            ]}
                        >

                            <Text
                                style={[
                                    styles.titulo,
                                    celular && styles.tituloCelular,
                                ]}
                            >
                                Criar Conta
                            </Text>

                            <Text
                                style={[
                                    styles.subtitulo,
                                    celular && styles.subtituloCelular,
                                ]}
                            >
                                Preencha os dados abaixo para acessar o aplicativo.
                            </Text>

                            {/* NOME COMPLETO */}

                            <View
                                style={[
                                    styles.grupoCampo,
                                    celular && styles.grupoCampoCelular,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.rotulo,
                                        celular && styles.rotuloCelular,
                                    ]}
                                >
                                    Nome Completo
                                </Text>

                                <TextInput
                                    style={[
                                        styles.campo,
                                        celular && styles.campoCelular,
                                    ]}
                                    placeholder="Escreva seu nome completo"
                                    placeholderTextColor="#30385F"
                                    value={nome}
                                    onChangeText={setNome}
                                    autoCapitalize="words"
                                />
                            </View>

                            {/* E-MAIL */}

                            <View
                                style={[
                                    styles.grupoCampo,
                                    celular && styles.grupoCampoCelular,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.rotulo,
                                        celular && styles.rotuloCelular,
                                    ]}
                                >
                                    E-mail
                                </Text>

                                <TextInput
                                    style={[
                                        styles.campo,
                                        celular && styles.campoCelular,
                                    ]}
                                    placeholder="nome@email.com"
                                    placeholderTextColor="#30385F"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>

                            {/* SENHA */}

                            <View
                                style={[
                                    styles.grupoCampo,
                                    celular && styles.grupoCampoCelular,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.rotulo,
                                        celular && styles.rotuloCelular,
                                    ]}
                                >
                                    Senha
                                </Text>

                                <TextInput
                                    style={[
                                        styles.campo,
                                        celular && styles.campoCelular,
                                    ]}
                                    placeholder="Crie uma senha segura"
                                    placeholderTextColor="#30385F"
                                    value={senha}
                                    onChangeText={setSenha}
                                    secureTextEntry
                                />
                            </View>

                            {/* TERMOS DE USO */}

                            <Pressable
                                style={[
                                    styles.areaTermos,
                                    celular && styles.areaTermosCelular,
                                ]}
                                onPress={() => setAceitouTermos(!aceitouTermos)}
                            >
                                <View
                                    style={[
                                        styles.checkbox,
                                        aceitouTermos && styles.checkboxAtivo,
                                    ]}
                                >
                                    {aceitouTermos && (
                                        <Text style={styles.check}>✓</Text>
                                    )}
                                </View>

                                <Text
                                    style={[
                                        styles.textoTermos,
                                        celular && styles.textoTermosCelular,
                                    ]}
                                >
                                    Li e aceito os termos de uso e a política de privacidade.
                                </Text>
                            </Pressable>

                            {/* BOTÃO CADASTRAR */}

                            <Pressable
                                style={[
                                    styles.botaoCriar,
                                    celular && styles.botaoCriarCelular,
                                ]}
                                onPress={criarConta}
                            >
                                <Text
                                    style={[
                                        styles.textoBotao,
                                        celular && styles.textoBotaoCelular,
                                    ]}
                                >
                                    Cadastrar
                                </Text>
                            </Pressable>

                            {/* ENTRAR */}

                            <View
                                style={[
                                    styles.areaEntrar,
                                    celular && styles.areaEntrarCelular,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.textoEntrar,
                                        celular && styles.textoEntrarCelular,
                                    ]}
                                >
                                    Já tem uma conta?{' '}
                                </Text>

                                <Pressable onPress={entrar}>
                                    <Text
                                        style={[
                                            styles.linkEntrar,
                                            celular && styles.linkEntrarCelular,
                                        ]}
                                    >
                                        Entrar
                                    </Text>
                                </Pressable>
                            </View>

                        </View>
                    </LinearGradient>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}