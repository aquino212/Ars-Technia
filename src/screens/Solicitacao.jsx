
import React from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
    useWindowDimensions,
    Alert,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import styles from '../styles/Solicitacao';

const CORES = {
    azul: '#357DBF',
    fundo: '#A6BCC9',
    creme: '#FFF4EB',
};

const itensMenu = [
    { nome: 'Início', icone: require('../../assets/Inicio.png') },
    { nome: 'Reservas', icone: require('../../assets/Reservas.png') },
    { nome: 'Salas', icone: require('../../assets/Salas.png') },
    { nome: 'Solicitações', icone: require('../../assets/Solicitacoes.png') },
    { nome: 'Perfil', icone: require('../../assets/Perfil.png') },
];

const solicitacoes = [
    {
        id: 1,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professora: 'Alexia Vitória',
        status: 'Aprovada',
        icone: require('../../assets/IconeAceito.png'),
    },
    {
        id: 2,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professora: 'Alexia Vitória',
        status: 'Aprovada',
        icone: require('../../assets/IconeAceito.png'),
    },
    {
        id: 3,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professora: 'Samara Reis',
        status: 'Em manutenção',
        icone: require('../../assets/IconeManutencao.png'),
    },
    {
        id: 4,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professora: 'Eduardo Mendes Costa',
        status: 'Recusada',
        icone: require('../../assets/IconeRecusado.png'),
    },
];

export default function Solicitacao() {
    const { width } = useWindowDimensions();
    const celular = width <= 600;

    const [fontesCarregadas] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontesCarregadas) {
        return null;
    }

    const mostrarAviso = (tela) => {
        Alert.alert(
            'Aviso',
            `A navegação para ${tela} ainda não foi configurada.`
        );
    };

    const abrirDetalhes = (item) => {
        Alert.alert(
            'Detalhes da solicitação',
            `Horário: ${item.horario}\n\n` +
            `Sala: ${item.sala}\n\n` +
            `Professora: ${item.professora}\n\n` +
            `Status: ${item.status}`
        );
    };

    return (
        <View style={styles.tela}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.aplicativo}>

                {/* CABEÇALHO DESKTOP */}
                {!celular && (
                    <View style={styles.cabecalho}>
                        <Image
                            source={require('../../assets/Logo.png')}
                            style={styles.imagemLogo}
                            resizeMode="contain"
                        />

                        <View style={styles.marca}>
                            <Text style={styles.marcaTitulo}>
                                Minhas salas
                            </Text>

                            <Text style={styles.marcaSubtitulo}>
                                PROFESSOR
                            </Text>
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

                        <Text style={styles.usuario}>
                            Alexia Vitória
                        </Text>
                    </View>
                )}

                {/* CONTEÚDO */}
                <View
                    style={[
                        styles.conteudo,
                        celular && styles.conteudoCelular,
                    ]}
                >

                    {/* MENU */}
                    <View
                        style={[
                            styles.menu,
                            celular && styles.menuCelular,
                        ]}
                    >
                        {!celular && (
                            <Text style={styles.menuTitulo}>
                                MENU PRINCIPAL
                            </Text>
                        )}

                        {itensMenu.map((item) => {
                            const selecionado =
                                item.nome === 'Solicitações';

                            return (
                                <TouchableOpacity
                                    key={item.nome}
                                    style={[
                                        styles.itemMenu,
                                        celular && styles.itemMenuCelular,
                                        selecionado &&
                                            (celular
                                                ? styles.itemSelecionadoCelular
                                                : styles.itemSelecionado),
                                    ]}
                                    activeOpacity={0.75}
                                    onPress={() => mostrarAviso(item.nome)}
                                >
                                    <Image
                                        source={item.icone}
                                        style={[
                                            styles.iconeMenu,
                                            celular && styles.iconeMenuCelular,
                                            selecionado &&
                                                (celular
                                                    ? styles.iconeSelecionadoCelular
                                                    : styles.iconeSelecionado),
                                        ]}
                                        resizeMode="contain"
                                    />

                                    <Text
                                        style={[
                                            styles.textoMenu,
                                            celular && styles.textoMenuCelular,
                                            selecionado && styles.textoSelecionado,
                                            selecionado &&
                                                celular &&
                                                styles.textoSelecionadoCelular,
                                        ]}
                                    >
                                        {item.nome}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}

                        {!celular && (
                            <View style={styles.rodapeMenu}>
                                <Text style={styles.rodapeTexto}>
                                    Portal do professor
                                </Text>

                                <Text style={styles.rodapeVersao}>
                                    Versão Desktop
                                </Text>
                            </View>
                        )}
                    </View>

                    {/* ÁREA PRINCIPAL */}
                    <LinearGradient
                        colors={[CORES.creme, CORES.fundo]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                            styles.areaPrincipal,
                            celular && styles.areaPrincipalCelular,
                        ]}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[
                                styles.conteudoRolavel,
                                celular && styles.conteudoRolavelCelular,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.identificacao,
                                    celular && styles.identificacaoCelular,
                                ]}
                            >
                                PROFESSOR
                            </Text>

                            <Text
                                style={[
                                    styles.tituloPrincipal,
                                    celular && styles.tituloPrincipalCelular,
                                ]}
                            >
                                Solicitações
                            </Text>

                            {!celular && (
                                <>
                                    <Text style={styles.descricaoPagina}>
                                        Acompanhe as solicitações e consulte os detalhes de cada reserva.
                                    </Text>

                                    <Text style={styles.tituloHoje}>
                                        Hoje · {solicitacoes.length} solicitações
                                    </Text>
                                </>
                            )}

                            {/* LISTA E PAINÉIS */}
                            <View
                                style={[
                                    styles.conteudoSolicitacoes,
                                    celular && styles.conteudoSolicitacoesCelular,
                                ]}
                            >

                                {/* CARTÕES */}
                                <View
                                    style={[
                                        styles.listaSolicitacoes,
                                        celular && styles.listaSolicitacoesCelular,
                                    ]}
                                >
                                    {solicitacoes.map((item) => (
                                        <View
                                            key={item.id}
                                            style={[
                                                styles.cartaoSolicitacao,
                                                celular && styles.cartaoSolicitacaoCelular,
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.ladoEsquerdo,
                                                    celular && styles.ladoEsquerdoCelular,
                                                ]}
                                            >
                                                <Image
                                                    source={item.icone}
                                                    style={[
                                                        styles.iconeStatus,
                                                        celular && styles.iconeStatusCelular,
                                                    ]}
                                                    resizeMode="contain"
                                                />

                                                <View style={styles.dadosSolicitacao}>
                                                    <Text
                                                        style={[
                                                            styles.horario,
                                                            celular && styles.horarioCelular,
                                                        ]}
                                                    >
                                                        {item.horario}
                                                    </Text>

                                                    <Text
                                                        style={[
                                                            styles.nomeSala,
                                                            celular && styles.nomeSalaCelular,
                                                        ]}
                                                    >
                                                        {item.sala}
                                                    </Text>
                                                </View>
                                            </View>

                                            <TouchableOpacity
                                                style={[
                                                    styles.botaoDetalhes,
                                                    celular && styles.botaoDetalhesCelular,
                                                ]}
                                                activeOpacity={0.8}
                                                onPress={() => abrirDetalhes(item)}
                                            >
                                                <Text
                                                    style={[
                                                        styles.textoBotao,
                                                        celular && styles.textoBotaoCelular,
                                                    ]}
                                                >
                                                    Ver Detalhes
                                                </Text>
                                            </TouchableOpacity>

                                            <Text
                                                style={[
                                                    styles.nomeProfessora,
                                                    celular && styles.nomeProfessoraCelular,
                                                ]}
                                            >
                                                Professora{' '}
                                                <Text
                                                    style={[
                                                        styles.nomeProfessorNegrito,
                                                        celular && styles.nomeProfessorNegritoCelular,
                                                    ]}
                                                >
                                                    {item.professora}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))}
                                </View>

                                {/* PAINÉIS LATERAIS - SOMENTE DESKTOP */}
                                {!celular && (
                                    <View style={styles.paineisLaterais}>

                                        <View style={styles.cartaoMinhasSolicitacoes}>
                                            <Image
                                                source={require('../../assets/Solicitacoes.png')}
                                                style={styles.iconePainel}
                                                resizeMode="contain"
                                            />

                                            <Text style={styles.tituloPainel}>
                                                Minhas solicitações
                                            </Text>

                                            <Text style={styles.textoPainel}>
                                                Consulte o retorno de cada solicitação de sala pelo botão Ver Detalhes.
                                            </Text>
                                        </View>

                                        <View style={styles.cartaoLegenda}>
                                            <Text style={styles.tituloLegenda}>
                                                Status da solicitação
                                            </Text>

                                            <View style={styles.itemLegenda}>
                                                <View style={styles.bolinhaAprovada} />

                                                <Text style={styles.textoLegenda}>
                                                    Aprovada
                                                </Text>
                                            </View>

                                            <View style={styles.itemLegenda}>
                                                <View style={styles.bolinhaRecusada} />

                                                <Text style={styles.textoLegenda}>
                                                    Recusada
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                )}
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}
