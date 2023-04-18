import React, {useState} from "react"
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { View,Text } from "react-native";
import ResultIMC from "./ResultIMC/"
import styles from "./style";

 export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageIMC, setMessageImc]= useState("preencha o peso e altura");
const [imc, setImc]= useState(null)
const [textButton, setTextButton ] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("seu imc é igual: ")
        setTextButton("Calcular Novamente:")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencher o peso e altura")
}
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 175"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.386"
                keyboardType="numeric"
                />

                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => validationImc()}
                title={textButton}>

                    <Text style={styles.textbuttonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    );
 }