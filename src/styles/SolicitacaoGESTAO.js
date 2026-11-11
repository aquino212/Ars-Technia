
import { StyleSheet } from 'react-native';

const CORES = {
    azul: '#357DBF',
    fundo: '#A6BCC9',
    creme: '#FFF4EB',
    branco: '#F1F0EF',
    roxo: '#3E4BCC',
};

const styles = StyleSheet.create({

    // TELA GERAL
    tela: {
        flex: 1,
        backgroundColor: CORES.fundo,
    },

    aplicativo: {
        flex: 1,
        overflow: 'hidden',
    },

    // CABEÇALHO
    cabecalho: {
        minHeight: 44,
        backgroundColor: CORES.branco,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#AABFCB',
    },

    imagemLogo: {
        width: 34,
        height: 32,
        marginRight: 18,
    },

    marca: {
        justifyContent: 'center',
    },

    marcaTitulo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: CORES.azul,
    },

    marcaSubtitulo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 7,
        color: CORES.azul,
        marginTop: 1,
    },

    espaco: {
        flex: 1,
    },

    iconeNotificacao: {
        width: 17,
        height: 17,
        marginRight: 10,
    },

    avatar: {
        width: 24,
        height: 24,
        borderRadius: 15,
        backgroundColor: '#E3D2B9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },

    iconePerfil: {
        width: 16,
        height: 16,
    },

    usuario: {
        fontFamily: 'Montserrat-Regular',
        color: CORES.azul,
        fontSize: 9,
    },

    // CONTEÚDO GERAL
    conteudo: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 0,
    },

    areaPrincipal: {
        flex: 1,
        minWidth: 0,
        paddingHorizontal: 22,
        paddingTop: 22,
        backgroundColor: CORES.creme,
    },

    conteudoRolavel: {
        paddingBottom: 30,
        flexGrow: 1,
    },

    identificacao: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 8,
        color: CORES.azul,
        marginBottom: 3,
    },

    tituloPrincipal: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 21,
        color: '#080808',
    },

    descricaoPagina: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: '#171717',
        marginTop: 5,
        marginBottom: 17,
    },

    tituloHoje: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        color: '#171717',
        marginBottom: 10,
    },

    // MENU DESKTOP
    menu: {
        width: 147,
        backgroundColor: CORES.azul,
        paddingHorizontal: 9,
        paddingTop: 25,
    },

    menuTitulo: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        fontSize: 8,
        marginBottom: 14,
    },

    itemMenu: {
        minHeight: 37,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
    },

    itemSelecionado: {
        backgroundColor: CORES.branco,
    },

    iconeMenu: {
        width: 17,
        height: 17,
        marginRight: 9,
        tintColor: '#FFFFFF',
    },

    iconeSelecionado: {
        tintColor: CORES.azul,
    },

    textoMenu: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        fontSize: 10,
    },

    textoSelecionado: {
        fontFamily: 'Montserrat-SemiBold',
        color: CORES.azul,
    },

    areaGestaoMenu: {
        marginTop: 20,
    },

    textoCadastro: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        fontSize: 8,
        marginTop: 3,
    },

    rodapeMenu: {
        position: 'absolute',
        bottom: 23,
        left: 9,
        right: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.2)',
        paddingTop: 10,
    },

    rodapeTexto: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 8,
        color: '#FFFFFF',
    },

    rodapeVersao: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 7,
        color: '#D8E8F5',
        marginTop: 4,
    },

    // ÁREA DAS SOLICITAÇÕES
    conteudoSolicitacoes: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 18,
    },

    listaSolicitacoes: {
        flex: 1,
        minWidth: 0,
        gap: 11,
    },

    cartaoSolicitacao: {
        minHeight: 86,
        backgroundColor: 'rgba(255,244,235,0.82)',
        borderWidth: 1,
        borderColor: '#AABFCB',
        borderRadius: 13,
        paddingHorizontal: 13,
        paddingVertical: 11,
        justifyContent: 'flex-start',
    },

    dadosSolicitacao: {
        justifyContent: 'center',
    },

    horario: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 8,
        color: '#111111',
        marginBottom: 2,
    },

    nomeSala: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 11,
        color: '#111111',
    },

    nomeProfessor: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: '#111111',
        marginTop: 8,
    },

    nomeProfessorNegrito: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 9,
        color: '#111111',
    },

    botaoDetalhes: {
        position: 'absolute',
        top: 4,
        right: 13,
        backgroundColor: CORES.roxo,
        borderRadius: 9,
        minHeight: 29,
        paddingHorizontal: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 10,
    },

    // PAINÉIS LATERAIS
    paineisLaterais: {
        width: 155,
        gap: 15,
        marginTop: -27,
    },

    cartaoGestao: {
        backgroundColor: '#E9CFA9',
        borderRadius: 13,
        padding: 13,
        minHeight: 120,
    },

    iconePainel: {
        width: 17,
        height: 17,
        marginBottom: 10,
        tintColor: '#111111',
    },

    tituloPainel: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 9,
        color: '#111111',
        marginBottom: 8,
    },

    textoPainel: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 7,
        lineHeight: 11,
        color: CORES.roxo,
    },

    cartaoSolicitacoesSalas: {
        borderWidth: 1,
        borderColor: '#AABFCB',
        borderRadius: 13,
        padding: 12,
        minHeight: 78,
        backgroundColor: 'rgba(255,244,235,0.45)',
    },

    tituloPainelSecundario: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 8,
        color: '#111111',
        marginBottom: 7,
    },

    // RESPONSIVIDADE CELULAR
    conteudoCelular: {
        flexDirection: 'column-reverse',
    },

    areaPrincipalCelular: {
        paddingHorizontal: 20,
        paddingTop: 29,
        paddingBottom: 0,
    },

    conteudoRolavelCelular: {
        paddingBottom: 20,
        flexGrow: 1,
    },

    identificacaoCelular: {
        fontSize: 11,
        marginBottom: 1,
    },

    tituloPrincipalCelular: {
        fontSize: 23,
        lineHeight: 28,
    },

    descricaoPaginaCelular: {
        fontSize: 10,
        lineHeight: 15,
        marginBottom: 5,
    },

    menuCelular: {
        width: '100%',
        height: 75,
        minHeight: 75,
        paddingHorizontal: 5,
        paddingTop: 7,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    itemMenuCelular: {
        flex: 1,
        minHeight: 62,
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
        width: 27,
        height: 27,
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

    // LISTA MOBILE
    conteudoSolicitacoesCelular: {
        flexDirection: 'column',
        gap: 0,
    },

    listaSolicitacoesCelular: {
        width: '100%',
        gap: 22,
        marginTop: 26,
    },

    cartaoSolicitacaoCelular: {
        width: '100%',
        height: 115,
        minHeight: 115,
        backgroundColor: 'rgba(255,244,235,0.90)',
        borderWidth: 1,
        borderColor: '#AABFCB',
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingTop: 14,
        paddingBottom: 10,
        justifyContent: 'flex-start',
    },

    nomeProfessorCelular: {
        fontSize: 11,
        marginTop: 11,
    },

    botaoDetalhesCelular: {
        top: 5,
        right: 11,
        minHeight: 33,
        paddingHorizontal: 8,
        borderRadius: 10,
    },

    textoBotaoCelular: {
        fontSize: 12,
    },

    paineisLateraisCelular: {
        display: 'none',
    },

});

export default styles;
