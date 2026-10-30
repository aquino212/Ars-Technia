
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';

import styles from '../styles/TelaInicialGESTAO';

const CORES = {
    azul: '#357DBF',
    verde: '#B6D6A7',
    rosa: '#D9A4A4',
    amarelo: '#F0E27A',
    roxo: '#3E4BCC',
};

const salasIniciais = [
    { id: 1, status: 'Reservada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
    { id: 2, status: 'Fechada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
    { id: 3, status: 'Fechada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
    { id: 4, status: 'Reservada', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
    { id: 5, status: 'Aberta', sala: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick', capacidade: 20 },
    { id: 6, status: 'Manutenção', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
    { id: 7, status: 'Manutenção', sala: 'Sala 15 - Desenvolvimento de Sistemas', professor: 'Professor Eduardo', capacidade: 30 },
    { id: 8, status: 'Aberta', sala: 'Sala 18 - Redes de Computação', professor: 'Professor Patrick', capacidade: 20 },
];

const filtros = [
    'Todos',
    'Abertas',
    'Reservadas',
    'Em manutenção',
    'Fechadas',
];

const itensMenu = [
    { nome: 'Início', icone: require('../../assets/Inicio.png') },
    { nome: 'Reservas', icone: require('../../assets/Reservas.png') },
    { nome: 'Salas', icone: require('../../assets/Salas.png') },
    { nome: 'Solicitações', icone: require('../../assets/Solicitacoes.png') },
];

function corStatus(status) {
    switch (status) {
        case 'Reservada':
            return CORES.roxo;
        case 'Aberta':
            return CORES.verde;
        case 'Fechada':
            return CORES.rosa;
        case 'Manutenção':
            return CORES.amarelo;
        default:
            return '#DDDDDD';
    }
}

export default function TelaInicialGESTAO() {
    const [filtro, setFiltro] = useState('Todos');
    const [busca, setBusca] = useState('');
    const [salas, setSalas] = useState(salasIniciais);

    const [fontesCarregadas] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    if (!fontesCarregadas) return null;

    const salasFiltradas = salas.filter((item) => {
        const correspondeBusca = item.sala
            .toLowerCase()
            .includes(busca.toLowerCase());

        const correspondeFiltro =
            filtro === 'Todos' ||
            (filtro === 'Abertas' && item.status === 'Aberta') ||
            (filtro === 'Reservadas' && item.status === 'Reservada') ||
            (filtro === 'Em manutenção' && item.status === 'Manutenção') ||
            (filtro === 'Fechadas' && item.status === 'Fechada');

        return correspondeBusca && correspondeFiltro;
    });

    function adicionarSala() {
        setSalas((atuais) => [
            ...atuais,
            {
                id: Date.now(),
                status: 'Aberta',
                sala: `Nova sala ${atuais.length + 1}`,
                professor: 'Sem professor',
                capacidade: 20,
            },
        ]);
    }

    function alternarStatus(id) {
        setSalas((atuais) =>
            atuais.map((sala) =>
                sala.id === id
                    ? {
                        ...sala,
                        status:
                            sala.status === 'Aberta'
                                ? 'Reservada'
                                : 'Aberta',
                    }
                    : sala
            )
        );
    }

    return (
        <View style={styles.tela}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.aplicativo}>
                <View style={styles.cabecalho}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../assets/Logo.png')}
                            style={styles.imagemLogo}
                            resizeMode="contain"
                        />
                    </View>

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
                        style={styles.sino}
                        resizeMode="contain"
                    />

                    <View style={styles.avatar}>
                        <Image
                            source={require('../../assets/PerfilAzul.png')}
                            style={styles.avatarIcone}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.usuario}>
                        Alexia Vitória
                    </Text>
                </View>

                <View style={styles.conteudo}>
                    <View style={styles.menu}>
                        <Text style={styles.menuTitulo}>
                            MENU PRINCIPAL
                        </Text>

                        {itensMenu.map((item, index) => (
                            <TouchableOpacity
                                key={item.nome}
                                style={[
                                    styles.itemMenu,
                                    index === 0 && styles.itemSelecionado,
                                ]}
                                activeOpacity={0.75}
                            >
                                <Image
                                    source={item.icone}
                                    style={[
                                        styles.iconeMenu,
                                        index === 0 && styles.iconeSelecionado,
                                    ]}
                                    resizeMode="contain"
                                />

                                <Text
                                    style={[
                                        styles.textoMenu,
                                        index === 0 && styles.textoSelecionado,
                                    ]}
                                >
                                    {item.nome}
                                </Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={styles.itemMenu}
                            activeOpacity={0.75}
                        >
                            <Image
                                source={require('../../assets/Perfil.png')}
                                style={styles.iconeMenu}
                                resizeMode="contain"
                            />

                            <Text style={styles.textoMenu}>
                                Perfil
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.rodapeMenu}>
                            <Text style={styles.rodapeTexto}>
                                Portal do professor
                            </Text>

                            <Text style={styles.rodapeVersao}>
                                Versão Desktop
                            </Text>
                        </View>
                    </View>

                    <LinearGradient
                        colors={['#FFF4EB', '#A6BCC9']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.areaPrincipal}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.conteudoRolavel}
                        >
                            <Text style={styles.ola}>
                                Olá, Alexia
                            </Text>

                            <View style={styles.linhaTitulo}>
                                <Text style={styles.tituloPrincipal}>
                                    Minhas salas
                                </Text>

                                <View style={styles.busca}>
                                    <Text style={styles.lupa}>
                                        ⌕
                                    </Text>

                                    <TextInput
                                        style={styles.inputBusca}
                                        placeholder="Buscar por salas, eventos e aulas"
                                        placeholderTextColor="#454545"
                                        value={busca}
                                        onChangeText={setBusca}
                                    />
                                </View>
                            </View>

                            <View style={styles.linhaFiltros}>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={styles.listaFiltros}
                                    contentContainerStyle={styles.filtrosConteudo}
                                >
                                    {filtros.map((nome) => (
                                        <TouchableOpacity
                                            key={nome}
                                            onPress={() => setFiltro(nome)}
                                            style={[
                                                styles.filtro,
                                                filtro === nome && styles.filtroAtivo,
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.textoFiltro,
                                                    filtro === nome &&
                                                    styles.textoFiltroAtivo,
                                                ]}
                                            >
                                                {nome}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>

                                <TouchableOpacity
                                    style={styles.botaoAdicionar}
                                    onPress={adicionarSala}
                                >
                                    <Image
                                        source={require('../../assets/BotaoAdicao.png')}
                                        style={styles.BotaoAdicao}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.resultadosCabecalho}>
                                <Text style={styles.resultadosTitulo}>
                                    Resultados
                                </Text>

                                <TouchableOpacity
                                    onPress={() => setFiltro('Todos')}
                                >
                                    <Text style={styles.verTodas}>
                                        Ver todas
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.grade}>
                                {salasFiltradas.map((item) => (
                                    <View
                                        style={styles.cartao}
                                        key={item.id}
                                    >
                                        <View style={styles.cartaoConteudo}>
                                            <View
                                                style={[
                                                    styles.etiqueta,
                                                    {
                                                        backgroundColor: corStatus(item.status),
                                                    },
                                                ]}
                                            >
                                                <Text style={styles.etiquetaTexto}>
                                                    {item.status}
                                                </Text>
                                            </View>

                                            <Text
                                                style={styles.nomeSala}
                                                numberOfLines={2}
                                            >
                                                {item.sala}
                                            </Text>

                                            <Text
                                                style={styles.detalheSala}
                                                numberOfLines={1}
                                            >
                                                {item.professor} - Máx. {item.capacidade}
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.botaoEditar}
                                            onPress={() => alternarStatus(item.id)}
                                        >
                                            <Image
                                                source={require('../../assets/BotaoEditar.png')}
                                                style={styles.lapis}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ))}

                                {salasFiltradas.length === 0 && (
                                    <Text style={styles.semResultados}>
                                        Nenhuma sala encontrada.
                                    </Text>
                                )}
                            </View>
                        </ScrollView>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}
