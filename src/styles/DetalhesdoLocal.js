
import { StyleSheet } from 'react-native';

const CORES = {
    azul: '#357DBF',
    azulEscuro: '#285D8C',
    fundo: '#A6BCC9',
    creme: '#FFF4EB',
    branco: '#F1F0EF',
    texto: '#171717',
    roxo: '#3E4BCC',
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

    /* CABEÇALHO */

    cabecalho: {
        minHeight: 60,
        backgroundColor: CORES.branco,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
    },

    imagemLogo: {
        width: 46,
        height: 40,
        marginRight: 25,
    },

    marca: {
        justifyContent: 'center',
    },

    marcaTitulo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        color: CORES.azul,
    },

    marcaSubtitulo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: CORES.azul,
        marginTop: 2,
    },

    espaco: {
        flex: 1,
    },

    iconeNotificacao: {
        width: 20,
        height: 20,
        marginRight: 15,
    },

    avatar: {
        width: 31,
        height: 31,
        borderRadius: 16,
        backgroundColor: '#E3D2B9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    iconePerfil: {
        width: 20,
        height: 20,
    },

    usuario: {
        fontFamily: 'Montserrat-Regular',
        color: CORES.azul,
        fontSize: 12,
    },

    /* CONTEÚDO GERAL */

    conteudo: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 0,
    },

    areaPrincipal: {
        flex: 1,
        minWidth: 0,
        paddingHorizontal: 30,
        paddingTop: 30,
    },

    conteudoRolavel: {
        paddingBottom: 30,
        flexGrow: 1,
    },

    tituloPrincipal: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
        color: '#101010',
    },

    subtituloPagina: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#101010',
        marginTop: 7,
        marginBottom: 33,
    },

    /* MENU DESKTOP */

    menu: {
        width: 175,
        backgroundColor: CORES.azul,
        paddingHorizontal: 16,
        paddingTop: 28,
    },

    menuTitulo: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        fontSize: 9,
        marginBottom: 15,
    },

    itemMenu: {
        minHeight: 41,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 11,
        marginBottom: 7,
    },

    itemSelecionado: {
        backgroundColor: CORES.branco,
    },

    iconeMenu: {
        width: 18,
        height: 18,
        marginRight: 11,
        tintColor: '#FFFFFF',
    },

    iconeSelecionado: {
        tintColor: CORES.azul,
    },

    textoMenu: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        fontSize: 12,
    },

    textoSelecionado: {
        fontFamily: 'Montserrat-SemiBold',
        color: CORES.azul,
    },

    rodapeMenu: {
        position: 'absolute',
        bottom: 30,
        left: 16,
        right: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.2)',
        paddingTop: 12,
    },

    rodapeTexto: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: '#FFFFFF',
    },

    rodapeVersao: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 8,
        color: '#D8E8F5',
        marginTop: 4,
    },

    /* CARTÕES DESKTOP */

    colunas: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 20,
    },

    cartaoSala: {
        flex: 1.8,
        minWidth: 0,
        minHeight: 410,
        backgroundColor: 'rgba(241,240,239,0.88)',
        borderColor: '#AABFCB',
        borderWidth: 1,
        borderRadius: 16,
        padding: 21,
    },

    linhaSala: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },

    nomeSala: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: '#111111',
    },

    status: {
        backgroundColor: CORES.roxo,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
    },

    statusTexto: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        fontSize: 12,
    },

    tituloDetalhes: {
        fontFamily: 'Montserrat-Regular',
        color: '#111111',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 19,
    },

    blocoSala: {
        backgroundColor: '#F7DDBB',
        borderRadius: 14,
        padding: 12,
    },

    nomeEspaco: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 11,
        color: '#111111',
        marginBottom: 10,
    },

    informacoesSala: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },

    areaImagem: {
        flex: 1,
        minWidth: 80,
        height: 190,
        backgroundColor: CORES.branco,
        borderRadius: 14,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fotoSala: {
        width: '100%',
        height: '100%',
    },

    dadosSala: {
        flex: 1,
        minWidth: 0,
        gap: 13,
        paddingVertical: 10,
    },

    dadoSala: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#111111',
        fontSize: 16,
    },

    cartaoDetalhes: {
        flex: 0.9,
        minWidth: 180,
        backgroundColor: 'rgba(241,240,239,0.88)',
        borderColor: '#AABFCB',
        borderWidth: 1,
        borderRadius: 16,
        padding: 20,
    },

    tituloPainel: {
        fontFamily: 'Montserrat-Bold',
        color: CORES.azul,
        fontSize: 13,
        marginBottom: 19,
    },

    comunicacao: {
        backgroundColor: CORES.roxo,
        borderRadius: 15,
        padding: 12,
        minHeight: 105,
    },

    linhaComunicacao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 5,
    },

    tituloComunicacao: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        fontSize: 10,
    },

    dataComunicacao: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        backgroundColor: 'rgba(255,255,255,0.18)',
        borderRadius: 10,
        paddingHorizontal: 7,
        paddingVertical: 4,
        fontSize: 9,
    },

    mensagem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 12,
    },

    iconeMegafone: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    textoComunicacao: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        fontSize: 10,
        lineHeight: 15,
    },

    botaoSolicitacao: {
        backgroundColor: CORES.azul,
        borderRadius: 11,
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        paddingHorizontal: 8,
    },

    textoBotaoSolicitacao: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 13,
    },

    /* RESPONSIVIDADE CELULAR */

    conteudoCelular: {
        flexDirection: 'column-reverse',
    },

    menuCelular: {
        width: '100%',
        height: 68,
        minHeight: 68,
        paddingHorizontal: 5,
        paddingTop: 7,
        paddingBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    itemMenuCelular: {
        flex: 1,
        minHeight: 55,
        marginBottom: 0,
        paddingHorizontal: 0,
        paddingVertical: 3,
        borderRadius: 9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
    },

    iconeMenuCelular: {
        width: 24,
        height: 24,
        marginRight: 0,
        tintColor: '#FFFFFF',
    },

    textoMenuCelular: {
        fontSize: 9,
        textAlign: 'center',
        color: '#FFFFFF',
    },

    itemSelecionadoCelular: {
        backgroundColor: 'transparent',
    },

    iconeSelecionadoCelular: {
        tintColor: '#FFCEAB',
    },

    textoSelecionadoCelular: {
        color: '#FFCEAB',
    },

    cartaoMobile: {
        backgroundColor: 'rgba(248,248,248,0.96)',
        borderWidth: 1,
        borderColor: '#B5C9D3',
        borderRadius: 16,
        padding: 14,
        marginTop: 25,
        marginHorizontal: 1,
        minHeight: 580,
    },

    linhaSalaMobile: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nomeSalaMobile: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 23,
        color: '#111111',
        marginTop: 8,
        marginBottom: 7,
    },

    tituloDetalhesMobile: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: '#111111',
        marginBottom: 9,
    },

    comunicacaoMobile: {
        backgroundColor: CORES.roxo,
        borderRadius: 15,
        padding: 12,
        minHeight: 79,
        marginTop: 25,
    },

    botaoSolicitacao: {
        backgroundColor: CORES.azul,
        borderRadius: 11,
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        paddingHorizontal: 8,
    },

});

export default styles;
