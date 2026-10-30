
import React from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import styles from '../styles/DetalhesdoLocal';

const CORES = {
    azul: '#357DBF',
    azulEscuro: '#285D8C',
    fundo: '#A6BCC9',
    creme: '#FFF4EB',
    branco: '#F1F0EF',
    texto: '#171717',
    roxo: '#3E4BCC',
};

const itensMenu = [
    { nome: 'Início', icone: require('../../assets/Inicio.png') },
    { nome: 'Reservas', icone: require('../../assets/Reservas.png') },
    { nome: 'Salas', icone: require('../../assets/Salas.png') },
    { nome: 'Solicitações', icone: require('../../assets/Solicitacoes.png') },
    { nome: 'Perfil', icone: require('../../assets/Perfil.png') },
];

export default function DetalhesdoLocal() {
    const [fontesCarregadas] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontesCarregadas) {
        return null;
    }

    return (
        <View style={styles.tela}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.aplicativo}>
                <View style={styles.cabecalho}>
                    <Image
                        source={require('../../assets/Logo.png')}
                        style={styles.imagemLogo}
                        resizeMode="contain"
                    />

                    <View style={styles.marca}>
                        <Text style={styles.marcaTitulo}>Minhas salas</Text>
                        <Text style={styles.marcaSubtitulo}>PROFESSOR</Text>
                    </View>

                    <View style={styles.espaco} />

                    <Image
                        source={require('../../assets/SolicitacoesAzul.png')}
                        style={styles.iconeNotificacao}
                        resizeMode="contain"
                    />

                    <View style={styles.avatar}>
                        <Image
                            source={require('../../assets/PerfilAzul.png')}
                            style={styles.iconePerfil}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.usuario}>Alexia Vitória</Text>
                </View>

                <View style={styles.conteudo}>
                    <View style={styles.menu}>
                        <Text style={styles.menuTitulo}>MENU PRINCIPAL</Text>

                        {itensMenu.map((item) => (
                            <TouchableOpacity
                                key={item.nome}
                                style={[
                                    styles.itemMenu,
                                    item.nome === 'Reservas' && styles.itemSelecionado,
                                ]}
                            >
                                <Image
                                    source={item.icone}
                                    style={[
                                        styles.iconeMenu,
                                        item.nome === 'Reservas' && styles.iconeSelecionado,
                                    ]}
                                    resizeMode="contain"
                                />

                                <Text
                                    style={[
                                        styles.textoMenu,
                                        item.nome === 'Reservas' && styles.textoSelecionado,
                                    ]}
                                >
                                    {item.nome}
                                </Text>
                            </TouchableOpacity>
                        ))}

                        <View style={styles.rodapeMenu}>
                            <Text style={styles.rodapeTexto}>Portal do professor</Text>
                            <Text style={styles.rodapeVersao}>Versão Desktop</Text>
                        </View>
                    </View>

                    <LinearGradient
                        colors={[CORES.creme, CORES.fundo]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.areaPrincipal}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.conteudoRolavel}
                        >
                            <Text style={styles.tituloPrincipal}>
                                Detalhes do Local
                            </Text>

                            <Text style={styles.subtituloPagina}>
                                Reservas / Detalhes do Local
                            </Text>

                            <View style={styles.colunas}>
                                <View style={styles.cartaoSala}>
                                    <View style={styles.linhaSala}>
                                        <Text style={styles.nomeSala}>Sala 14</Text>

                                        <View style={styles.status}>
                                            <Text style={styles.statusTexto}>
                                                Reservada
                                            </Text>
                                        </View>
                                    </View>

                                    <Text style={styles.tituloDetalhes}>
                                        Detalhes do local
                                    </Text>

                                    <View style={styles.blocoSala}>
                                        <Text style={styles.nomeEspaco}>SALA MAC</Text>

                                        <View style={styles.informacoesSala}>
                                            <TouchableOpacity
                                                style={styles.areaImagem}
                                                activeOpacity={0.8}
                                            >
                                                <Text style={styles.maisImagem}>＋</Text>
                                            </TouchableOpacity>

                                            <View style={styles.dadosSala}>
                                                <Text style={styles.dadoSala}>
                                                    Segundo andar
                                                </Text>
                                                <Text style={styles.dadoSala}>
                                                    Professora Jéssica
                                                </Text>
                                                <Text style={styles.dadoSala}>
                                                    Máximo 30 alunos
                                                </Text>
                                                <Text style={styles.dadoSala}>
                                                    08:30 até às 11:30
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.cartaoDetalhes}>
                                    <Text style={styles.tituloPainel}>
                                        Detalhes do local
                                    </Text>

                                    <View style={styles.comunicacao}>
                                        <View style={styles.linhaComunicacao}>
                                            <Text style={styles.tituloComunicacao}>
                                                Comunicação
                                            </Text>

                                            <Text style={styles.dataComunicacao}>
                                                Atualizado hoje
                                            </Text>
                                        </View>

                                        <View style={styles.mensagem}>
                                            <Image
                                                source={require('../../assets/Megafone.png')}
                                                style={styles.iconeMegafone}
                                                resizeMode="contain"
                                            />

                                            <Text style={styles.textoComunicacao}>
                                                Aviso importante sobre o uso das salas e agendamentos.
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}
