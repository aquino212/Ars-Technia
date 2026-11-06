
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
        fontSize: 23,
        color: '#101010',
        marginBottom: 3,
    },

    subtitulo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
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

    /* TERMOS */

    areaTermos: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 0,
        marginBottom: 28,
        gap: 8,
    },

    checkbox: {
        width: 14,
        height: 14,
        borderWidth: 1,
        borderColor: '#62627B',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    checkboxAtivo: {
        backgroundColor: CORES.azul,
        borderColor: CORES.azul,
    },

    check: {
        color: '#FFFFFF',
        fontSize: 10,
        fontFamily: 'Montserrat-Bold',
        lineHeight: 12,
    },

    textoTermos: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: '#30385F',
        flexShrink: 1,
    },

    /* BOTÃO */

    botaoCriar: {
        width: '100%',
        height: 35,
        backgroundColor: CORES.azul,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 11,
    },

    /* ENTRAR */

    areaEntrar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
    },

    textoEntrar: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 9,
        color: '#111111',
    },

    linkEntrar: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 9,
        color: '#111111',
    },


    /* ================================= */
    /* MOBILE */
    /* ================================= */

    conteudoCelular: {
        flexDirection: 'column',
        minHeight: 800,
    },

    areaLogoCelular: {
        width: '100%',
        height: 135,
        minHeight: 135,
    },

    logoCelular: {
        width: 180,
        height: 130,
    },

    areaFormularioCelular: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 26,
        paddingTop: 0,
        paddingBottom: 25,
        minHeight: 665,
        justifyContent: 'flex-start',
    },

    formularioCelular: {
        width: '100%',
        maxWidth: '100%',
    },

    /* TÍTULO */

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

    /* TERMOS */

    areaTermosCelular: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 1,
        marginBottom: 88,
        gap: 7,
    },

    textoTermosCelular: {
        flex: 1,
        fontSize: 10,
        lineHeight: 13,
        textAlign: 'left',
    },

    /* BOTÃO */

    botaoCriarCelular: {
        height: 49,
        borderRadius: 8,
    },

    textoBotaoCelular: {
        fontSize: 13,
    },

    /* ENTRAR */

    areaEntrarCelular: {
        marginTop: 10,
    },

    textoEntrarCelular: {
        fontSize: 10,
    },

    linkEntrarCelular: {
        fontSize: 10,
        color: CORES.azul,
    },


});

export default styles;
