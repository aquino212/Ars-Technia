
import { StyleSheet } from 'react-native';

const CORES = {
    azul: '#357DBF',
    azulEscuro: '#285D8C',
    creme: '#FFF4EB',
    branco: '#F8F8F8',
    azulClaro: '#D6E5EE',
    texto: '#171717',
};

const styles = StyleSheet.create({

    /* TELA GERAL */

    tela: {
        flex: 1,
        backgroundColor: CORES.branco,
    },

    teclado: {
        flex: 1,
    },

    conteudo: {
        flexGrow: 1,
        flexDirection: 'row',
        minHeight: '100%',
    },

    /* LOGO DESKTOP */

    areaLogo: {
        width: '41.5%',
        minHeight: '100%',
    },

    gradienteLogo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },

    logo: {
        width: '100%',
        maxWidth: 420,
        height: 400,
    },

    /* FORMULÁRIO DESKTOP */

    areaFormulario: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingVertical: 35,
    },

    formulario: {
        width: '100%',
        maxWidth: 445,
    },

    /* TÍTULOS */

    titulo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: '#101010',
        marginBottom: 3,
    },

    subtitulo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: '#111111',
        marginBottom: 44,
    },

    /* CAMPOS */

    grupoCampo: {
        width: '100%',
        marginBottom: 12,
    },

    rotulo: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#30385F',
        marginBottom: 9,
        marginLeft: 1,
    },

    campo: {
        width: '100%',
        height: 34,
        borderWidth: 1,
        borderColor: '#6698D0',
        borderRadius: 8,
        paddingHorizontal: 11,
        backgroundColor: '#FFF4EB',
        color: CORES.texto,
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
    },

    /* ESQUECEU A SENHA */

    areaEsqueceu: {
        alignSelf: 'flex-start',
        marginTop: 0,
    },

    textoEsqueceu: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 9,
        color: '#111111',
    },

    /* CADASTRO */

    areaCadastrar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9,
        gap: 7,
    },

    textoCadastrar: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: '#30385F',
    },

    linkCadastrar: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 9,
        color: '#111111',
    },

    /* BOTÃO ENTRAR */

    botaoEntrar: {
        width: '100%',
        height: 35,
        backgroundColor: CORES.azul,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
    },

    textoBotao: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 11,
    },

    /* ================================= */
    /* MOBILE */
    /* ================================= */

    conteudoCelular: {
        flexDirection: 'column',
        minHeight: 650,
    },

    areaLogoCelular: {
        width: '100%',
        height: 145,
        minHeight: 145,
    },

    logoCelular: {
        width: 180,
        height: 135,
    },

    areaFormularioCelular: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: 12,
        paddingBottom: 25,
        minHeight: 505,
        justifyContent: 'flex-start',
    },

    formularioCelular: {
        width: '100%',
        maxWidth: '100%',
    },

    /* TÍTULOS */

    tituloCelular: {
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 3,
    },

    subtituloCelular: {
        fontSize: 11,
        lineHeight: 15,
        textAlign: 'center',
        marginBottom: 19,
    },

    /* CAMPOS */

    grupoCampoCelular: {
        width: '100%',
        marginBottom: 11,
    },

    rotuloCelular: {
        fontSize: 12,
        marginBottom: 9,
    },

    campoCelular: {
        width: '88%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 10,
    },

    /* ESQUECEU A SENHA */

    textoEsqueceuCelular: {
        fontSize: 9,
    },

    /* CADASTRO */

    areaCadastrarCelular: {
        marginTop: 10,
        gap: 6,
    },

    textoCadastrarCelular: {
        fontSize: 10,
    },

    linkCadastrarCelular: {
        fontSize: 10,
        color: CORES.azul,
    },

    /* BOTÃO */

    botaoEntrarCelular: {
        height: 49,
        borderRadius: 8,
        marginTop: 42,
    },

    textoBotaoCelular: {
        fontSize: 13,
    },

});

export default styles;
