
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

import styles from '../styles/Login';

export default function Login({
    onEntrar,
    onCadastrar,
    onEsqueceuSenha,
}) {
    const { width } = useWindowDimensions();
    const celular = width <= 700;

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [fontesCarregadas] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontesCarregadas) {
        return null;
    }

    function entrar() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert(
                'Atenção',
                'Preencha seu e-mail e sua senha.'
            );
            return;
        }

        if (onEntrar) {
            onEntrar({ email, senha });
        } else {
            Alert.alert(
                'Login',
                'Os dados foram preenchidos! A integração ainda precisa ser conectada.'
            );
        }
    }

    function cadastrar() {
        if (onCadastrar) {
            onCadastrar();
        } else {
            Alert.alert(
                'Cadastro',
                'A navegação para a tela de cadastro ainda precisa ser conectada.'
            );
        }
    }

    function esqueceuSenha() {
        if (onEsqueceuSenha) {
            onEsqueceuSenha();
        } else {
            Alert.alert(
                'Recuperar senha',
                'A recuperação de senha ainda precisa ser conectada.'
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

                            {/* TÍTULO */}

                            <Text
                                style={[
                                    styles.titulo,
                                    celular && styles.tituloCelular,
                                ]}
                            >
                                Bem-vindo de volta
                            </Text>

                            <Text
                                style={[
                                    styles.subtitulo,
                                    celular && styles.subtituloCelular,
                                ]}
                            >
                                Preencha os dados abaixo para acessar o aplicativo.
                            </Text>

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
                                    placeholder="Digite seu e-mail"
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
                                    placeholder="Digite sua senha"
                                    placeholderTextColor="#30385F"
                                    value={senha}
                                    onChangeText={setSenha}
                                    secureTextEntry
                                />

                            </View>

                            {/* ESQUECEU A SENHA */}

                            <Pressable
                                style={styles.areaEsqueceu}
                                onPress={esqueceuSenha}
                            >

                                <Text
                                    style={[
                                        styles.textoEsqueceu,
                                        celular && styles.textoEsqueceuCelular,
                                    ]}
                                >
                                    Esqueceu a senha?
                                </Text>

                            </Pressable>

                            {/* CADASTRO */}

                            <View
                                style={[
                                    styles.areaCadastrar,
                                    celular && styles.areaCadastrarCelular,
                                ]}
                            >

                                <Text
                                    style={[
                                        styles.textoCadastrar,
                                        celular && styles.textoCadastrarCelular,
                                    ]}
                                >
                                    Ainda não tem uma conta?
                                </Text>

                                <Pressable onPress={cadastrar}>

                                    <Text
                                        style={[
                                            styles.linkCadastrar,
                                            celular && styles.linkCadastrarCelular,
                                        ]}
                                    >
                                        Cadastre-se
                                    </Text>

                                </Pressable>

                            </View>

                            {/* BOTÃO ENTRAR */}

                            <Pressable
                                style={[
                                    styles.botaoEntrar,
                                    celular && styles.botaoEntrarCelular,
                                ]}
                                onPress={entrar}
                            >

                                <Text
                                    style={[
                                        styles.textoBotao,
                                        celular && styles.textoBotaoCelular,
                                    ]}
                                >
                                    Entrar
                                </Text>

                            </Pressable>

                        </View>

                    </LinearGradient>

                </ScrollView>

            </KeyboardAvoidingView>

        </View>
    );
}
