import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { DatosFormulario, Lugar } from '../model/Tipos'
import { globalStyles } from '../styles/GlobalStyles'
import { Image } from 'expo-image'
import Boton from './Boton'

type EditorLugarProps = {
    lugarSeleccionado:Lugar|undefined
    aceptarPulsado: (datos: DatosFormulario) => void
    accionCerrarEditorLugar: () => void
}

export default function EditorLugar({lugarSeleccionado,aceptarPulsado,accionCerrarEditorLugar}:EditorLugarProps) {
    const [nombre, setNombre] = useState(lugarSeleccionado?.nombre ?? "")
    const [pais, setPais] = useState(lugarSeleccionado?.pais ?? "")
    const [ciudad, setCiudad] = useState(lugarSeleccionado?.ciudad ?? "")
    const [foto, setFoto] = useState(lugarSeleccionado?.foto ?? "")
    const [descripcion, setDescripcion] = useState(lugarSeleccionado?.descripcion ?? "")
    function getDatosFormulario():DatosFormulario {
        return {nombre, pais, ciudad, foto, descripcion}
    }
    const titulo = lugarSeleccionado === undefined ? "Nuevo Lugar" : lugarSeleccionado.nombre
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.contenedor}>
                <Text style={globalStyles.titulo}>{titulo}</Text>
                <Image source={foto} contentFit={"cover"} style={globalStyles.foto}/>
                <TextInput
                    value={nombre}
                    onChangeText={setNombre}
                    style={globalStyles.cuadroTexto}
                    placeholder='Nombre del lugar'
                    placeholderTextColor='#9ca3af'
                />
                <TextInput
                    value={pais}
                    onChangeText={setPais}
                    style={globalStyles.cuadroTexto}
                    placeholder='País'
                    placeholderTextColor='#9ca3af'
                />
                <TextInput
                    value={ciudad}
                    onChangeText={setCiudad}
                    style={globalStyles.cuadroTexto}
                    placeholder='Ciudad'
                    placeholderTextColor='#9ca3af'
                />
                <TextInput
                    value={foto}
                    onChangeText={setFoto}
                    style={globalStyles.cuadroTexto}
                    placeholder='URL de la foto'
                    placeholderTextColor='#9ca3af'
                />
                <TextInput
                    value={descripcion}
                    onChangeText={setDescripcion}
                    style={globalStyles.cuadroTexto}
                    placeholder='Descripción'
                    placeholderTextColor='#9ca3af'
                />
                <View style={styles.contenedorBotones}>
                    <Boton
                        texto={"Aceptar"}
                        onPress={ () => aceptarPulsado( getDatosFormulario() ) }
                    />
                    <Boton
                        texto={"Cancelar"}
                        onPress={ accionCerrarEditorLugar }
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        backgroundColor: "#F3F4F6",
        rowGap: 20
    },
    areaTexto: {
        ...globalStyles.cuadroTexto,
        textAlignVertical: "top",
        height: 100
    },
    contenedorBotones: {
        flex: 1,
        justifyContent: "flex-end",
        rowGap: 20
    }
})