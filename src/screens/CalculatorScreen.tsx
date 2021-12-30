import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const { numeroAnterior,
            numero,
            clean,
            positivoNegativo,
            btnDel,
            btnDividir,
            armarNumero,
            btnMultiplicar,
            btnRestar,
            btnSumar,
            calcular } = useCalculator();

    return (
        <View style={ styles.calculadoraContainer }>
            {
                ( numeroAnterior !== '0' ) && (
                    <Text style={styles.smallresult}>{ numeroAnterior }</Text>
                )
            }

            <Text 
                style={styles.result}
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>

            <View style={styles.fila}>
                <ButtonCalc text="C" color="#9B9B9B" accion={clean}/>
                <ButtonCalc text="+/-" color="#9B9B9B" accion={positivoNegativo}/>
                <ButtonCalc text="del" color="#9B9B9B" accion={btnDel}/>
                <ButtonCalc text="/"  color="#FF9427" accion={btnDividir}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="7" accion={armarNumero}/>
                <ButtonCalc text="8" accion={armarNumero}/>
                <ButtonCalc text="9" accion={armarNumero}/>
                <ButtonCalc text="X" color="#FF9427" accion={btnMultiplicar}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="4" accion={armarNumero}/>
                <ButtonCalc text="5" accion={armarNumero}/>
                <ButtonCalc text="6" accion={armarNumero}/>
                <ButtonCalc text="-"  color="#FF9427" accion={btnRestar}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="1" accion={armarNumero}/>
                <ButtonCalc text="2" accion={armarNumero}/>
                <ButtonCalc text="3" accion={armarNumero}/>
                <ButtonCalc text="+"  color="#FF9427" accion={btnSumar}/>
            </View>

            <View style={styles.fila}>
                <ButtonCalc text="0" accion={armarNumero} ancho/>
                <ButtonCalc text="." accion={armarNumero}/>
                <ButtonCalc text="="  color="#FF9427" accion={calcular}/>
            </View>
        </View>
    )
}
