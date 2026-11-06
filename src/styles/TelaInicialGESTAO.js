
import { StyleSheet } from 'react-native';

const CORES = {
    azul: '#357DBF',
    azulEscuro: '#285D8C',
    fundo: '#A6BCC9',
    creme: '#FFF4EB',
    branco: '#F1F0EF',
    texto: '#171717',
    rosa: '#D9A4A4',
    verde: '#B6D6A7',
    amarelo: '#F0E27A',
    roxo: '#3E4BCC',
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

    /* CABEÇALHO DESKTOP */

    cabecalho: {
        minHeight: 48,
        backgroundColor: '#F0EFEE',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },

    logo: {
        width: 34,
        height: 34,
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
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        color: CORES.azul,
    },

    marcaSubtitulo: {
        fontSize: 8,
        fontFamily: 'Montserrat-Regular',
        color: CORES.azul,
        marginTop: 2,
    },

    espaco: {
        flex: 1,
    },

    sino: {
        width: 20,
        height: 20,
        marginRight: 12,
    },

    avatar: {
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: '#E3D2B9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7,
    },

    avatarIcone: {
        width: 20,
        height: 20,
        tintColor: CORES.azul,
    },

    usuario: {
        color: CORES.azul,
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
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
        paddingHorizontal: 20,
        paddingTop: 22,
    },

    conteudoRolavel: {
        paddingBottom: 25,
    },

    ola: {
        fontSize: 13,
        color: CORES.texto,
        marginBottom: 5,
        fontFamily: 'Montserrat-Regular',
    },

    linhaTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    tituloPrincipal: {
        fontSize: 22,
        fontFamily: 'Montserrat-Bold',
        color: '#101010',
    },

    busca: {
        flex: 1,
        minWidth: 0,
        height: 35,
        borderWidth: 1,
        borderColor: '#B5C3CD',
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 9,
    },

    lupa: {
        color: CORES.azulEscuro,
        fontSize: 21,
        marginRight: 6,
    },

    inputBusca: {
        flex: 1,
        minWidth: 0,
        paddingVertical: 0,
        fontSize: 11,
        color: '#222222',
        fontFamily: 'Montserrat-Regular',
    },

    /* MENU DESKTOP */

    menu: {
        width: 145,
        backgroundColor: CORES.azul,
        paddingHorizontal: 10,
        paddingTop: 20,
    },

    menuTitulo: {
        color: '#FFFFFF',
        fontSize: 9,
        marginBottom: 12,
        fontFamily: 'Montserrat-SemiBold',
    },

    itemMenu: {
        minHeight: 35,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginBottom: 6,
    },

    itemSelecionado: {
        backgroundColor: '#F1F0EF',
    },

    iconeMenu: {
        width: 18,
        height: 18,
        marginRight: 8,
        tintColor: '#FFFFFF',
    },

    iconeSelecionado: {
        tintColor: CORES.azul,
    },

    textoMenu: {
        color: '#FFFFFF',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
    },

    textoSelecionado: {
        color: CORES.azul,
        fontFamily: 'Montserrat-SemiBold',
    },

    rodapeMenu: {
        position: 'absolute',
        bottom: 18,
        left: 10,
    },

    rodapeTexto: {
        fontSize: 9,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Regular',
    },

    rodapeVersao: {
        fontSize: 8,
        color: '#D8E8F5',
        marginTop: 4,
        fontFamily: 'Montserrat-Regular',
    },

    /* FILTROS */

    linhaFiltros: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        gap: 8,
    },

    listaFiltros: {
        flex: 1,
        minWidth: 0,
    },

    filtrosConteudo: {
        alignItems: 'center',
    },

    filtro: {
        borderWidth: 1,
        borderColor: '#B6BEC3',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 15,
        paddingHorizontal: 12,
        minHeight: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7,
    },

    filtroAtivo: {
        backgroundColor: CORES.azul,
        borderColor: CORES.azul,
    },

    textoFiltro: {
        color: '#171717',
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
    },

    textoFiltroAtivo: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
    },

    botaoAdicionar: {
        width: 34,
        height: 34,
        borderRadius: 7,
        backgroundColor: '#4548C9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    BotaoAdicao: {
        width: 30,
        height: 30,
    },

    /* RESULTADOS */

    resultadosCabecalho: {
        marginTop: 30,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    resultadosTitulo: {
        color: '#111111',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
    },

    verTodas: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: '#111111',
    },

    grade: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    cartao: {
        width: '48.5%',
        minHeight: 90,
        backgroundColor: 'rgba(241,240,239,0.8)',
        borderColor: '#B5C1CA',
        borderWidth: 1,
        borderRadius: 9,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    cartaoConteudo: {
        flex: 1,
        justifyContent: 'center',
        minWidth: 0,
    },

    etiqueta: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        marginBottom: 6,
    },

    /* TEXTO PADRÃO DOS STATUS */

    etiquetaTexto: {
        color: '#171717',
        fontSize: 9,
        fontFamily: 'Montserrat-Regular',
    },

    /* SOMENTE RESERVADA */

    etiquetaReservada: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
    },

    nomeSala: {
        color: '#151515',
        fontSize: 11,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 4,
    },

    detalheSala: {
        color: '#414141',
        fontSize: 9,
        fontFamily: 'Montserrat-Regular',
    },

    botaoEditar: {
        width: 30,
        height: 30,
        borderRadius: 6,
        backgroundColor: CORES.azul,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    lapis: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    semResultados: {
        color: '#333333',
        fontSize: 13,
        paddingVertical: 20,
        fontFamily: 'Montserrat-Regular',
    },

    /* RESPONSIVIDADE CELULAR */

    conteudoCelular: {
        flexDirection: 'column',
    },

    areaPrincipalCelular: {
        flex: 1,
        paddingHorizontal: 14,
        paddingTop: 12,
        minHeight: 0,
    },

    conteudoRolavelCelular: {
        paddingBottom: 20,
    },

    linhaTituloCelular: {
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 12,
    },

    linhaFiltrosCelular: {
        alignItems: 'flex-start',
        marginTop: 12,
        gap: 8,
    },

    filtrosMobile: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        rowGap: 7,
    },

    /* CARTÕES NO CELULAR */

    gradeCelular: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
    },

    cartaoCelular: {
        width: '100%',
        minHeight: 78,
        marginBottom: 10,
        padding: 12,
    },

    /* RODAPÉ MOBILE */

    menuCelular: {
        width: '100%',
        height: 65,
        minHeight: 65,
        backgroundColor: CORES.azul,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 5,
        paddingVertical: 4,
    },

    itemMenuCelular: {
        flex: 1,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
    },

    iconeMenuCelular: {
        width: 23,
        height: 23,
        tintColor: '#FFFFFF',
    },

    iconeMenuAtivoCelular: {
        tintColor: CORES.destaque,
    },

    textoMenuCelular: {
        color: '#FFFFFF',
        fontSize: 9,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
    },

});

export default styles;
