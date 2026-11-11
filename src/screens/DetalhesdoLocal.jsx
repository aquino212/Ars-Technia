import React from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
    useWindowDimensions,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import styles from '../styles/DetalhesdoLocal';

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

export default function DetalhesdoLocal() {
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

    return (
        <View style={styles.tela}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.aplicativo}>

                {/* CABEÇALHO - SOMENTE DESKTOP */}
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
                            const selecionado = item.nome === 'Reservas';

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
                                    styles.tituloPrincipal,
                                    celular && styles.tituloPrincipalCelular,
                                ]}
                            >
                                Detalhes do Local
                            </Text>

                            {!celular && (
                                <Text style={styles.subtituloPagina}>
                                    Reservas / Detalhes do Local
                                </Text>
                            )}

                            {celular ? (

                                /* LAYOUT CELULAR */
                                <View style={styles.cartaoMobile}>

                                    <View style={styles.linhaSalaMobile}>
                                        <View style={styles.status}>
                                            <Text style={styles.statusTexto}>
                                                Reservada
                                            </Text>
                                        </View>
                                    </View>

                                    <Text style={styles.nomeSalaMobile}>
                                        Sala 14
                                    </Text>

                                    <Text style={styles.tituloDetalhesMobile}>
                                        Detalhes do local
                                    </Text>

                                    <View style={styles.blocoSalaMobile}>
                                        <Text style={styles.nomeEspaco}>
                                            SALA MAC
                                        </Text>

                                        <View style={styles.informacoesSalaMobile}>
                                            <View style={styles.areaImagemMobile}>
                                                <Image
                                                    source={require('../../assets/SalaSenai.png')}
                                                    style={styles.fotoSalaMobile}
                                                    resizeMode="cover"
                                                />
                                            </View>

                                            <View style={styles.dadosSalaMobile}>
                                                <Text style={styles.dadoSalaMobile}>
                                                    Segundo andar
                                                </Text>

                                                <Text style={styles.dadoSalaMobile}>
                                                    Professora Jéssica
                                                </Text>

                                                <Text style={styles.dadoSalaMobile}>
                                                    Máximo 30 alunos
                                                </Text>

                                                <Text style={styles.dadoSalaMobile}>
                                                    08:30 até às 11:30
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.comunicacaoMobile}>
                                        <View style={styles.linhaComunicacao}>
                                            <Text style={styles.tituloComunicacao}>
                                                Comunicação
                                            </Text>
                                        </View>

                                        <View style={styles.mensagem}>
                                            <Image
                                                source={require('../../assets/Megafone.png')}
                                                style={styles.iconeMegafone}
                                                resizeMode="contain"
                                            />

                                            <Text style={styles.textoComunicacao}>
                                                Professor confirmou a reserva da sala para hoje.
                                            </Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.botaoSolicitacaoMobile}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={styles.textoBotaoSolicitacao}>
                                            Enviar Solicitação
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            ) : (

                                /* LAYOUT COMPUTADOR */
                                <View style={styles.colunas}>

                                    <View style={styles.cartaoSala}>
                                        <View style={styles.linhaSala}>
                                            <Text style={styles.nomeSala}>
                                                Sala 14
                                            </Text>

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
                                            <Text style={styles.nomeEspaco}>
                                                SALA MAC
                                            </Text>

                                            <View style={styles.informacoesSala}>
                                                <View style={styles.areaImagem}>
                                                    <Image
                                                        source={require('../../assets/SalaSenai.png')}
                                                        style={styles.fotoSala}
                                                        resizeMode="cover"
                                                    />
                                                </View>

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
                            )}
                        </ScrollView>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}
