import React from 'react';
import { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


interface props {
    name: string;
    onRemove: () => void;
	onCheck: () => void
}

export function Task({ name, onRemove, onCheck }: props) {
	const [checked, setChecked] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.containerButton}>
				<BouncyCheckbox
					fillColor={checked ? '#5E60CE' : '#4EA8DE'}
					
					text={name}
					textStyle={{ color: checked ? '#808080' : '#fff' }}
					onPress={() => {
						setChecked(!checked);
						onCheck();
					}}
				/>
			</View>

			<TouchableOpacity style={styles.toucheRemove} onPress={onRemove}>
				<Image style={styles.button} source={require('../../../assets/Layer2.png')} />
			</TouchableOpacity>
		</View>
	);
}