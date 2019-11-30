import React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { isDark } from '../../services/config.json';

import Icon from 'react-native-vector-icons/FontAwesome5';

import blackFriday from '../../assets/black-friday.png';
import spotlight1 from '../../assets/spotlight-1.png';
import spotlight2 from '../../assets/spotlight-2.png';
import spotlight3 from '../../assets/spotlight-3.png';

import lanches from '../../assets/lanches.jpg';
import pastel from '../../assets/pastel.jpg';
import pizza from '../../assets/pizza.jpg';
import docesBolos from '../../assets/doces-e-bolos.jpg';
import cozinhaRapida from '../../assets/cozinha-rapida.jpg';
import brasileira from '../../assets/brasileira.jpg';
import sorvetes from '../../assets/sorvetes.jpg';
import saudavel from '../../assets/saudavel.jpg';
import salgados from '../../assets/salgados.jpg';

export default function Main() {

    return (
        <ScrollView style={white.container}
            showsVerticalScrollIndicator={false}
        >
            <View>
                <Text style={white.deliveryAtTitle}>ENTREGAR EM</Text>
                <View style={white.deliveryAtSelector}>
                    <Text style={white.deliveryAtSelectorText}>Iguaba Grande, 167</Text>
                    <Icon name="angle-down" size={16} color='#f56055' />
                </View>
                <View style={white.searchContainer}>
                    <View style={white.searchForm}>
                        <Icon name="search" size={16} color='#f56055' style={white.searchFormIcon} />
                        <TextInput style={white.search}
                            placeholder="Prato ou restaurante"
                            placeholderTextColor="#ada9a6"
                            autoCapitalize='words'
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={white.filterButton}>Filtros</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={white.spotlightContainer}
                    horizontal
                    alwaysBounceHorizontal={true}
                    showsHorizontalScrollIndicator={false}
                >   
                    <View>
                        <Image source={blackFriday} style={white.spotlightPhoto} />
                        <Text style={white.spotlightText}>Começou a Black Friday!</Text>
                    </View>
                    <View>
                        <Image source={spotlight1} style={white.spotlightPhoto} />
                        <Text style={white.spotlightText}>Confira sua entrega grátis na sacola</Text>
                    </View>
                    <View>
                        <Image source={spotlight3} style={white.spotlightPhoto} />
                        <Text style={white.spotlightText}>Alguém disse Entrega Grátis?</Text>
                    </View>
                </ScrollView>

                <View style={white.categoryContainer}>
                    <Text style={white.categoryTitle}>Categorias</Text>
                    <ScrollView
                        horizontal
                        alwaysBounceHorizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={white.cat}>
                            <Image source={lanches} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Lanches</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={pizza} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Pizza</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={sorvetes} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Sorvetes</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={brasileira} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Brasileira</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={pizza} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Pizza</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={saudavel} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Saudavel</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={salgados} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Salgados</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={cozinhaRapida} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Cozinha Rápida</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={docesBolos} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Doces e Bolos</Text>
                        </View>
                        <View style={white.cat}>
                            <Image source={pastel} style={white.categoryPhoto} />
                            <Text style={white.categoryText}>Pastel</Text>
                        </View>
                    </ScrollView>
                </View>
                <Image source={spotlight2} style={white.gourmet} />
            </View>
        </ScrollView>
    );
}

const white = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingLeft: 15,
        backgroundColor: isDark ? '#000' : '#fff'
    },
    deliveryAtTitle: {
        fontWeight: 'bold',
        color: isDark ? '#fff' : '#333',
    },
    deliveryAtSelector: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliveryAtSelectorText: {
        marginRight: 5,
        color: isDark ? '#fff' : '#000',
    },
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchForm: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isDark ? '#313131' : '#f6f5f5',
        padding: 5,
        borderRadius: 4,
        marginRight: 15
    },
    searchFormIcon: {
        marginRight: 5,
    },
    search: {
        height: 40,
        width: '75%'
    },
    filterButton: {
        fontWeight: 'bold',
        color: '#f56055'
    },
    spotlightContainer: {
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    spotlightPhoto: {
        resizeMode: 'cover',
        borderRadius: 4,
        height: 150,
        width: 300,
        marginRight: 10,
        marginBottom: 5
    },
    spotlightText: {
        color: isDark ? '#fff' : '#333',
        fontWeight: 'bold'
    },
    categoryContainer: {
        marginBottom: 10,
    },
    categoryTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18,
        color: isDark ? '#fff' : '#000',
    },
    cat: {
        marginRight: 10,
    },
    categoryPhoto: {
        resizeMode: 'cover',
        width: 120,
        height: 80,
        borderRadius: 4,
    },
    categoryText: {
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: isDark ? '#fff' : '#333',
    },
    gourmet: {
        paddingRight: 15,
        marginRight: 10,
        resizeMode: 'cover',
        width: '95%',
        height: 150,
        marginBottom: 25,
    }
});
