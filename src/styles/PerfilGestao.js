import { StyleSheet } from 'react-native';


export const CORES = {
    azul: '#357DBF',
    azulEscuro: '#285D8C',
    fundo: '#A6BCC9',
    creme: '#FFF4EB',
    branco: '#FFFFFF',
    cabecalho: '#F0EFEE',
    cartaoFundo: 'rgba(247, 244, 239, 0.95)',
    cartaoBorda: '#C4D2DC',
    textoEscuro: '#111111',
    textoCinza: '#2C2C2C',
    textoRotulo: '#333333',
    textoSubtitulo: '#5A5A5A',
    avatarFundo: '#8A96A3',
    avatarIcone: '#1F242A',
    badgeRoxo: '#3E4BCC',
    boxFundo: 'rgba(255, 255, 255, 0.65)',
    boxBorda: '#CBD5DE',
    destaque: '#FFCEAB',
};

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: CORES.fundo,
    },

    aplicativo: {
        flex: 1,
        backgroundColor: CORES.fundo,
        overflow: 'hidden',
    },

    /* ========================================================
       CABEÇALHO (SOMENTE DESKTOP)
       ======================================================== */
    cabecalho: {
        minHeight: 54,
        backgroundColor: CORES.cabecalho,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#E2DFDA',
        zIndex: 10,
    },

    logoContainer: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    imagemLogo: {
        width: 34,
        height: 34,
    },

    marca: {
        justifyContent: 'center',
    },

    marcaTitulo: {
        fontSize: 13,
        fontFamily: 'Montserrat-Bold',
        color: CORES.azul,
        letterSpacing: 0.2,
    },

    marcaSubtitulo: {
        fontSize: 8.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.azul,
        marginTop: 1,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },

    espaco: {
        flex: 1,
    },

    sino: {
        width: 20,
        height: 20,
        marginRight: 16,
    },

    avatarTopo: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#E3D2B9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    avatarTopoIcone: {
        width: 17,
        height: 17,
        tintColor: CORES.azul,
    },

    usuarioTopo: {
        color: CORES.azul,
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
    },
    conteudo: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 0,
    },

    conteudoCelular: {
        flexDirection: 'column',
    },
    menu: {
        width: 165,
        backgroundColor: CORES.azul,
        paddingHorizontal: 12,
        paddingTop: 24,
    },

    menuTitulo: {
        color: '#FFFFFF',
        fontSize: 9,
        marginBottom: 14,
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 0.4,
    },

    itemMenu: {
        minHeight: 38,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 6,
    },

    itemSelecionado: {
        backgroundColor: CORES.branco,
    },

    iconeMenu: {
        width: 18,
        height: 18,
        marginRight: 10,
        tintColor: '#FFFFFF',
    },

    iconeSelecionado: {
        tintColor: CORES.azul,
    },

    textoMenu: {
        color: '#FFFFFF',
        fontSize: 11.5,
        fontFamily: 'Montserrat-Regular',
    },

    textoSelecionado: {
        color: CORES.azul,
        fontFamily: 'Montserrat-SemiBold',
    },

    rodapeMenu: {
        position: 'absolute',
        bottom: 20,
        left: 12,
        right: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.2)',
        paddingTop: 10,
    },

    rodapeTexto: {
        fontSize: 9,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Regular',
    },

    rodapeVersao: {
        fontSize: 8,
        color: '#D8E8F5',
        marginTop: 3,
        fontFamily: 'Montserrat-Regular',
    },

    areaPrincipal: {
        flex: 1,
        minWidth: 0,
    },

    areaPrincipalDesktop: {
        paddingHorizontal: 30,
        paddingVertical: 24,
    },

    areaPrincipalCelular: {
        paddingHorizontal: 18,
        paddingTop: 24,
    },

    conteudoRolavel: {
        flexGrow: 1,
    },

    /* Centralizado no meio da tela no desktop */
    conteudoRolavelDesktop: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },

    conteudoRolavelCelular: {
        alignItems: 'stretch',
        paddingBottom: 24,
    },

    /* Container centralizador no Desktop */
    centralizador: {
        width: '100%',
        maxWidth: 580,
    },

    centralizadorCelular: {
        maxWidth: '100%',
    },
    blocoTitulo: {
        marginBottom: 18,
        width: '100%',
    },

    blocoTituloCelular: {
        marginBottom: 16,
    },

    tagPerfil: {
        fontSize: 11,
        fontFamily: 'Montserrat-Bold',
        color: CORES.azul,
        textTransform: 'uppercase',
        letterSpacing: 0.6,
        marginBottom: 4,
    },

    tagPerfilCelular: {
        fontSize: 12,
        marginBottom: 2,
    },

    tituloPrincipal: {
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
        color: CORES.textoEscuro,
        lineHeight: 34,
    },

    tituloPrincipalCelular: {
        fontSize: 25,
        lineHeight: 30,
    },

    subtituloDescricao: {
        fontSize: 12.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.textoSubtitulo,
        marginTop: 4,
    },

    cartaoPerfil: {
        backgroundColor: CORES.cartaoFundo,
        borderWidth: 1,
        borderColor: CORES.cartaoBorda,
        borderRadius: 16,
        padding: 24,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
    },

    cartaoPerfilCelular: {
        padding: 18,
        borderRadius: 15,
    },

    /* AVATAR + NOME */
    linhaUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatarCirculo: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: CORES.avatarFundo,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginRight: 16,
    },

    avatarCirculoCelular: {
        width: 58,
        height: 58,
        borderRadius: 29,
        marginRight: 14,
    },

    avatarCabeca: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2.2,
        borderColor: CORES.avatarIcone,
        marginBottom: 2,
    },

    avatarCabecaCelular: {
        width: 19,
        height: 19,
        borderRadius: 9.5,
        borderWidth: 2,
        marginBottom: 2,
    },

    avatarOmbros: {
        width: 38,
        height: 18,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderWidth: 2.2,
        borderBottomWidth: 0,
        borderColor: CORES.avatarIcone,
    },

    avatarOmbrosCelular: {
        width: 32,
        height: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 2,
        borderBottomWidth: 0,
    },

    infoUsuario: {
        flex: 1,
        justifyContent: 'center',
    },

    nomeUsuario: {
        fontSize: 21,
        fontFamily: 'Montserrat-Bold',
        color: CORES.textoEscuro,
    },

    nomeUsuarioCelular: {
        fontSize: 19,
    },

    emailUsuario: {
        fontSize: 12.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.textoRotulo,
        marginTop: 2,
    },

    emailUsuarioCelular: {
        fontSize: 12,
    },

    linhaEstatisticas: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
        marginBottom: 24,
    },

    linhaEstatisticasCelular: {
        gap: 8,
        marginTop: 18,
        marginBottom: 22,
    },

    boxEstatistica: {
        flex: 1,
        backgroundColor: CORES.boxFundo,
        borderWidth: 1,
        borderColor: CORES.boxBorda,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 62,
    },

    rotuloEstatistica: {
        fontSize: 10.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.textoRotulo,
        marginBottom: 4,
        textAlign: 'center',
    },

    valorEstatistica: {
        fontSize: 19,
        fontFamily: 'Montserrat-Bold',
        color: CORES.textoEscuro,
    },

    valorEstatisticaTexto: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: CORES.textoEscuro,
    },

    /* ========================================================
       DETALHES DA CONTA
       ======================================================== */
    secaoDetalhes: {
        marginTop: 2,
    },

    tituloDetalhes: {
        fontSize: 14.5,
        fontFamily: 'Montserrat-Bold',
        color: CORES.textoEscuro,
        marginBottom: 14,
    },

    linhaDetalhe: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },

    rotuloDetalhe: {
        fontSize: 12.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.textoRotulo,
    },

    valorDetalhe: {
        fontSize: 12.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.textoEscuro,
        textAlign: 'right',
    },

    valorDetalheNegrito: {
        fontFamily: 'Montserrat-SemiBold',
    },

    linhaAtualizacaoDireita: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    badgeHoje: {
        backgroundColor: CORES.badgeRoxo,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    badgeHojeTexto: {
        color: CORES.branco,
        fontSize: 10,
        fontFamily: 'Montserrat-Bold',
    },

    horaAtualizacao: {
        fontSize: 12.5,
        fontFamily: 'Montserrat-Regular',
        color: CORES.textoEscuro,
    },

    /* ========================================================
       BOTÃO EDITAR PERFIL
       ======================================================== */
    botaoEditarDesktop: {
        width: '100%',
        height: 42,
        borderWidth: 1.2,
        borderColor: CORES.azul,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
    },

    botaoEditarCelular: {
        width: '100%',
        height: 44,
        borderWidth: 1.2,
        borderColor: CORES.azul,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        marginBottom: 10,
    },

    textoBotaoEditar: {
        fontSize: 13.5,
        fontFamily: 'Montserrat-SemiBold',
        color: CORES.azul,
    },

    /* ========================================================
       BARRA DE NAVEGAÇÃO INFERIOR MOBILE
       ======================================================== */
    menuCelular: {
        width: '100%',
        height: 65,
        minHeight: 65,
        backgroundColor: CORES.azul,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 6,
        paddingVertical: 4,
    },

    itemMenuCelular: {
        flex: 1,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
    },

    iconeMenuCelular: {
        width: 22,
        height: 22,
        tintColor: '#FFFFFF',
    },

    iconeMenuAtivoCelular: {
        tintColor: '#FFFFFF',
    },

    textoMenuCelular: {
        color: '#FFFFFF',
        fontSize: 9,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
    },

    textoMenuAtivoCelular: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    },
});

export default styles;