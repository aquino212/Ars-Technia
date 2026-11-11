
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

import styles from '../styles/SolicitacaoGESTAO';

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
        professor: 'Alexia Vitória',
    },
    {
        id: 2,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professor: 'Alexia Vitória',
    },
    {
        id: 3,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professor: 'Samara Reis',
    },
    {
        id: 4,
        horario: 'Hoje · 14:05',
        sala: 'Sala 01',
        professor: 'Eduardo Mendes Costa',
    },
];

export default function SolicitacaoGESTAO() {
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
            `Professor(a): ${item.professor}`
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
                                GESTÃO
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
                            Juscelino
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
                            <>
                                <Text style={styles.menuTitulo}>
                                    MENU PRINCIPAL
                                </Text>
                            </>
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

                        {/* ÁREA DE GESTÃO */}
                        {!celular && (
                            <>
                                <View style={styles.areaGestaoMenu}>
                                    <Text style={styles.menuTitulo}>
                                        ÁREA DE GESTÃO
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => mostrarAviso('Cadastro de Salas')}
                                    >
                                        <Text style={styles.textoCadastro}>
                                            Cadastro de Salas
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.rodapeMenu}>
                                    <Text style={styles.rodapeTexto}>
                                        Gestão de salas
                                    </Text>

                                    <Text style={styles.rodapeVersao}>
                                        Versão Desktop
                                    </Text>
                                </View>
                            </>
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
                                GESTÃO
                            </Text>

                            <Text
                                style={[
                                    styles.tituloPrincipal,
                                    celular && styles.tituloPrincipalCelular,
                                ]}
                            >
                                Solicitações
                            </Text>

                            <Text
                                style={[
                                    styles.descricaoPagina,
                                    celular && styles.descricaoPaginaCelular,
                                ]}
                            >
                                Consulte as solicitações de reserva recebidas dos professores.
                            </Text>

                            <Text style={styles.tituloHoje}>
                                Hoje · {solicitacoes.length} solicitações
                            </Text>

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
                                            <View style={styles.dadosSolicitacao}>
                                                <Text style={styles.horario}>
                                                    {item.horario}
                                                </Text>

                                                <Text style={styles.nomeSala}>
                                                    {item.sala}
                                                </Text>
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
                                                    styles.nomeProfessor,
                                                    celular && styles.nomeProfessorCelular,
                                                ]}
                                            >
                                                Professor(a){' '}
                                                <Text style={styles.nomeProfessorNegrito}>
                                                    {item.professor}
                                                </Text>
                                            </Text>
                                        </View>
                                    ))}
                                </View>

                                {/* PAINÉIS LATERAIS - DESKTOP */}
                                {!celular && (
                                    <View style={styles.paineisLaterais}>
                                        <View style={styles.cartaoGestao}>
                                            <Image
                                                source={require('../../assets/Salas.png')}
                                                style={styles.iconePainel}
                                                resizeMode="contain"
                                            />

                                            <Text style={styles.tituloPainel}>
                                                Área de gestão
                                            </Text>

                                            <Text style={styles.textoPainel}>
                                                Acompanhe as solicitações dos professores e abra os detalhes para consultar as informações de cada reserva.
                                            </Text>
                                        </View>

                                        <View style={styles.cartaoSolicitacoesSalas}>
                                            <Text style={styles.tituloPainelSecundario}>
                                                Solicitações de salas
                                            </Text>

                                            <Text style={styles.textoPainel}>
                                                O nome do professor e o horário de envio estão disponíveis em cada solicitação.
                                            </Text>
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
