import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';


export function EmptTasks() {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require('../../../assets/Clipboard.png')} />

			<Text style={styles.text1}>Nenhuma tarefa foi cadastrada</Text>
			<Text style={styles.text2}>Digite uma tarefa no campo acima e clique no botão para adicionar</Text>
		</View>
	);
}