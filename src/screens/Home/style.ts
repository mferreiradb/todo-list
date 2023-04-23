import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
	containerImg: {
		backgroundColor: '#0D0D0D',
		alignItems: 'center',
		paddingHorizontal: 24,
		zIndex: 20,
	},
	rocketContainer: {
		flexDirection: 'row',
		marginTop: 80
	},
	rocket: {
		marginRight: 5
	},
	formContainer: {
		width: '100%',
		height: 56,
		marginTop: '25%',
		zIndex: 30
	},
	form: {
		flexDirection: 'row',
		marginTop: '8%',
		zIndex: 30
	},
	input: {
		backgroundColor: '#262626',
		paddingVertical: 10,
		paddingHorizontal: 15,
		flex: 1,
		borderRadius: 5,
		height: 56,
		fontSize: 16,
		marginRight: 12,
		color: '#fff'
	},
	button: {
		backgroundColor: '#1e6f9f',
		width: 56,
		height: 56,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center'
	},
	containerTasks: {
		backgroundColor: '#1A1A1A',
		flex: 1,
		alignItems: 'center',
		paddingTop: 80,
		paddingHorizontal: 8,
		zIndex: 10
	},
	flatList: {
		flex: 1
	},
	containerCountTasks: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: 26,
		paddingHorizontal: 28
	},
	countTasks: {
		flexDirection: 'row'
	},
	allTasks: {
		color: '#4EA8DE',
		fontWeight: '900',
		fontSize: 16
	},
	finishedTasks: {
		color: '#8284fa',
		fontWeight: '900',
		fontSize: 16
	},
	textCountTasks: {
		backgroundColor: '#333333',
		marginLeft: 12,
		color: '#fff',
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 100
	}
});