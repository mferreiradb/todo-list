import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Task } from '../../components/task';
import { styles } from './style';
import { EmptTasks } from '../../components/emptyTasks';

interface ITask {
	name: string;
	completed: boolean
}

export function Home() {
	const [ task, setTask ] = useState<string>('');
	const [ tasks, setTasks ] = useState<ITask[]>([]);

	const completed = false;
	const [ completedTasks, setcompletedTasks ] = useState<ITask[]>([]);

	function handleMarkTaskAsCompleted(task: ITask) {
		const updatedTasks = tasks.map(item => {
			if (item.name === task.name) {
				item.completed = !item.completed;
				if (item.completed) {
					setcompletedTasks([...completedTasks, item]);
				} else {
					setcompletedTasks(completedTasks.filter(t => t.name !== item.name));
				}
			}
			return item;
		});
		setTasks(updatedTasks);
	}

	function handleAddTask() {
		if (task == undefined || task == null || task == '' || task == ' ') {
			setTask('');
			return Alert.alert('Tarefa vazia', 'A tarefa está vazia. Digite os dados corretamente.');
		}
		setTask('');
		setTasks((prevState) => [...prevState, {name: task, completed}]);
	}

	function handleRemoveTask(taskToRemove: string) {
		return Alert.alert('Remover tarefa', 'Tem certeza que deseja remover esta tarefa?', [
			{
				text: 'Sim',
				onPress: () => {
					setTasks((prevState) =>
						prevState.filter((task) => task.name !== taskToRemove));
						
					setcompletedTasks((prevState) =>
						prevState.filter(t => t.name !== taskToRemove));
				}
			},
			{
				text: 'Não',
				style: 'cancel'
			}
		]);
	}

	return (
		<>
			<View style={styles.containerImg}>

				<View style={styles.rocketContainer}>
					<Image style={styles.rocket} source={require('../../../assets/rocket.png')} />
					<Image source={require('../../../assets/to.png')} />
					<Image source={require('../../../assets/do.png')} />
				</View>

				<View style={styles.formContainer}>
					<View style={styles.form}>
						<TextInput
							style={styles.input}
							placeholder='Adicione uma nova tarefa'
							placeholderTextColor='#6b6b6b'
							onChangeText={setTask}
							value={task}
						/>
						<TouchableOpacity style={styles.button} onPress={handleAddTask}>
							<Text style={styles.buttonText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.containerTasks}>
				<View style={styles.containerCountTasks}>
					<View style={styles.countTasks}>
						<Text style={styles.allTasks}>Criadas</Text>
						<Text style={styles.textCountTasks}>{tasks.length}</Text>
					</View>
					
					<View style={styles.countTasks}>
						<Text style={styles.finishedTasks}>Concluídas</Text>
						<Text style={styles.textCountTasks}>{completedTasks.length}</Text>
					</View>
				</View>

				<FlatList
					data={tasks}
					keyExtractor={(item) => item.name}
					showsVerticalScrollIndicator={true}
					ListEmptyComponent={() => (
						<EmptTasks />
					)}
					renderItem={({ item }) => (
						<Task
							key={item.name}
							name={item.name}
							onRemove={() => handleRemoveTask(item.name)}
							onCheck={() => handleMarkTaskAsCompleted(item)}
						/>
					)}
				/>
			</View>
		</>
	);
}