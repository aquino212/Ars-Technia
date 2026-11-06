import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Image,
    useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import styles from '../styles/PerfilGestao';

const itensMenu = [
    { nome: 'Início', icone: require('../../assets/Inicio.png') },
    { nome: 'Reservas', icone: require('../../assets/Reservas.png') },
    { nome: 'Salas', icone: require('../../assets/Salas.png') },
    { nome: 'Solicitações', icone: require('../../assets/Solicitacoes.png') },
    { nome: 'Perfil', icone: require('../../assets/PerfilAzul.png') },
];

export default function Perfil({ onNavegar }) {
    const { width } = useWindowDimensions();
    // Transição responsiva entre desktop e mobile
    const celular = width <= 768;

    const [fontesCarregadas] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    const tratarNavegacao = (nomeItem) => {
        if (onNavegar) {
            onNavegar(nomeItem);
            return;
        }

        try {
            const { router } = require('expo-router');
            if (router) {
                if (nomeItem === 'Início') router.push('/');
                else if (nomeItem === 'Reservas') router.push('/reservas');
                else if (nomeItem === 'Salas') router.push('/salas');
                else if (nomeItem === 'Solicitações') router.push('/solicitacoes');
                else if (nomeItem === 'Perfil') router.push('/perfil');
            }
        } catch (e) {
            // Expo router opcional
        }
    };

    return (
        <View style={styles.tela}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.aplicativo}>

                {/* ========================================================
                    CABEÇALHO DESKTOP (Oculto no celular)
                    ======================================================== */}
                {!celular && (
                    <View style={styles.cabecalho}>
                        <TouchableOpacity
                            style={styles.logoContainer}
                            activeOpacity={0.8}
                            onPress={() => tratarNavegacao('Início')}
                        >
                            <Image
                                source={require('../../assets/Logo.png')}
                                style={styles.imagemLogo}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <View style={styles.marca}>
                            <Text style={styles.marcaTitulo}>Minhas salas</Text>
                            <Text style={styles.marcaSubtitulo}>Gestão</Text>
                        </View>

                        <View style={styles.espaco} />

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => tratarNavegacao('Solicitações')}
                        >
                            <Image
                                source={require('../../assets/SolicitacoesAzul.png')}
                                style={styles.sino}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        <View style={styles.avatarTopo}>
                            <Image
                                source={require('../../assets/PerfilAzul.png')}
                                style={styles.avatarTopoIcone}
                                resizeMode="contain"
                            />
                        </View>

                        <Text style={styles.usuarioTopo}>Jucelino</Text>
                    </View>
                )}

                {/* ========================================================
                    CORPO COM MENU LATERAL E ÁREA PRINCIPAL
                    ======================================================== */}
                <View
                    style={[
                        styles.conteudo,
                        celular && styles.conteudoCelular,
                    ]}
                >
                    {/* MENU LATERAL DESKTOP */}
                    {!celular && (
                        <View style={styles.menu}>
                            <Text style={styles.menuTitulo}>MENU PRINCIPAL</Text>

                            {itensMenu.map((item) => {
                                const selecionado = item.nome === 'Perfil';

                                return (
                                    <TouchableOpacity
                                        key={item.nome}
                                        style={[
                                            styles.itemMenu,
                                            selecionado && styles.itemSelecionado,
                                        ]}
                                        onPress={() => tratarNavegacao(item.nome)}
                                        activeOpacity={0.75}
                                    >
                                        <Image
                                            source={item.icone}
                                            style={[
                                                styles.iconeMenu,
                                                selecionado && styles.iconeSelecionado,
                                            ]}
                                            resizeMode="contain"
                                        />

                                        <Text
                                            style={[
                                                styles.textoMenu,
                                                selecionado && styles.textoSelecionado,
                                            ]}
                                        >
                                            {item.nome}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}

                            <View style={styles.rodapeMenu}>
                                <Text style={styles.rodapeTexto}>
                                    Portal do Gestor
                                </Text>
                                <Text style={styles.rodapeVersao}>
                                    Versão Desktop
                                </Text>
                            </View>
                        </View>
                    )}

                    {/* ÁREA PRINCIPAL (CENTRALIZADA NO MEIO NO DESKTOP) */}
                    <LinearGradient
                        colors={['#FFF4EB', '#A6BCC9']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                            styles.areaPrincipal,
                            celular ? styles.areaPrincipalCelular : styles.areaPrincipalDesktop,
                        ]}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[
                                styles.conteudoRolavel,
                                celular
                                    ? styles.conteudoRolavelCelular
                                    : styles.conteudoRolavelDesktop,
                            ]}
                        >
                            {/* CONTAINER CENTRALIZADOR NO MEIO DA TELA */}
                            <View
                                style={
                                    celular
                                        ? styles.centralizadorCelular
                                        : styles.centralizador
                                }
                            >
                                {/* CABEÇALHO DO CONTEÚDO */}
                                <View
                                    style={[
                                        styles.blocoTitulo,
                                        celular && styles.blocoTituloCelular,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.tagPerfil,
                                            celular && styles.tagPerfilCelular,
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
                                        Perfil
                                    </Text>

                                    {!celular && (
                                        <Text style={styles.subtituloDescricao}>
                                            Consulte seus dados e gerencie sua conta.
                                        </Text>
                                    )}
                                </View>

                                {/* CARTÃO DO PERFIL */}
                                <View
                                    style={[
                                        styles.cartaoPerfil,
                                        celular && styles.cartaoPerfilCelular,
                                    ]}
                                >
                                    {/* AVATAR + NOME */}
                                    <View style={styles.linhaUsuario}>
                                        <View
                                            style={[
                                                styles.avatarCirculo,
                                                celular && styles.avatarCirculoCelular,
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.avatarCabeca,
                                                    celular && styles.avatarCabecaCelular,
                                                ]}
                                            />
                                            <View
                                                style={[
                                                    styles.avatarOmbros,
                                                    celular && styles.avatarOmbrosCelular,
                                                ]}
                                            />
                                        </View>

                                        <View style={styles.infoUsuario}>
                                            <Text
                                                style={[
                                                    styles.nomeUsuario,
                                                    celular && styles.nomeUsuarioCelular,
                                                ]}
                                                numberOfLines={1}
                                            >
                                                Jucelino
                                            </Text>

                                            <Text
                                                style={[
                                                    styles.emailUsuario,
                                                    celular && styles.emailUsuarioCelular,
                                                ]}
                                                numberOfLines={1}
                                            >
                                                JussaADM@gmail.com
                                            </Text>
                                        </View>
                                    </View>

                                    {/* 3 BOXES DE ESTATÍSTICAS */}
                                    <View
                                        style={[
                                            styles.linhaEstatisticas,
                                            celular && styles.linhaEstatisticasCelular,
                                        ]}
                                    >
                                        <View style={styles.boxEstatistica}>
                                            <Text style={styles.rotuloEstatistica}>Fechadas</Text>
                                            <Text style={styles.valorEstatistica}>1</Text>
                                        </View>

                                        <View style={styles.boxEstatistica}>
                                            <Text style={styles.rotuloEstatistica}>Fechadas</Text>
                                            <Text style={styles.valorEstatistica}>1</Text>
                                        </View>

                                        <View style={styles.boxEstatistica}>
                                            <Text style={styles.rotuloEstatistica}>Último acesso</Text>
                                            <Text style={styles.valorEstatisticaTexto}>Hoje</Text>
                                        </View>
                                    </View>

                                    {/* DETALHES DA CONTA */}
                                    <View style={styles.secaoDetalhes}>
                                        <Text style={styles.tituloDetalhes}>
                                            Detalhes da conta
                                        </Text>

                                        <View style={styles.linhaDetalhe}>
                                            <Text style={styles.rotuloDetalhe}>Nome completo</Text>
                                            <Text style={styles.valorDetalhe}>Jucelino</Text>
                                        </View>

                                        <View style={styles.linhaDetalhe}>
                                            <Text style={styles.rotuloDetalhe}>E-mail</Text>
                                            <Text style={styles.valorDetalhe}>JussaADM@gmail.com</Text>
                                        </View>

                                        <View style={styles.linhaDetalhe}>
                                            <Text style={styles.rotuloDetalhe}>Perfil</Text>
                                            <Text style={styles.valorDetalhe}>Gestão</Text>
                                        </View>

                                        <View style={styles.linhaDetalhe}>
                                            <Text style={styles.rotuloDetalhe}>Última atualização</Text>
                                            <View style={styles.linhaAtualizacaoDireita}>
                                                <View style={styles.badgeHoje}>
                                                    <Text style={styles.badgeHojeTexto}>Hoje</Text>
                                                </View>
                                                <Text style={styles.horaAtualizacao}>11:11</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* BOTÃO EDITAR PERFIL */}
                                <TouchableOpacity
                                    style={
                                        celular
                                            ? styles.botaoEditarCelular
                                            : styles.botaoEditarDesktop
                                    }
                                    activeOpacity={0.75}
                                >
                                    <Text style={styles.textoBotaoEditar}>
                                        Editar Perfil
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </LinearGradient>

                    {/* ========================================================
                        BARRA DE NAVEGAÇÃO INFERIOR (CELULAR)
                        ======================================================== */}
                    {celular && (
                        <View style={styles.menuCelular}>
                            {itensMenu.map((item) => {
                                const selecionado = item.nome === 'Perfil';

                                return (
                                    <TouchableOpacity
                                        key={item.nome}
                                        style={styles.itemMenuCelular}
                                        onPress={() => tratarNavegacao(item.nome)}
                                        activeOpacity={0.75}
                                    >
                                        <Image
                                            source={item.icone}
                                            style={[
                                                styles.iconeMenuCelular,
                                                selecionado && styles.iconeMenuAtivoCelular,
                                            ]}
                                            resizeMode="contain"
                                        />

                                        <Text
                                            style={[
                                                styles.textoMenuCelular,
                                                selecionado && styles.textoMenuAtivoCelular,
                                            ]}
                                        >
                                            {item.nome}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}