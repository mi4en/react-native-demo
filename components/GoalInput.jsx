import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
	const [newGoalText, setNewGoalText] = useState('')

	const handleGoalInput = val => setNewGoalText(val)

	const addGoalHandler = () => {
		onAddGoal(newGoalText)
		setNewGoalText('')
	}

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					source={require('../assets/images/goal.png')}
					style={styles.image}
				/>
				<TextInput
					placeholder='My Goals'
					style={styles.textInput}
					onChangeText={handleGoalInput}
					value={newGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Cancel' onPress={onCancel} color='#f31282' />
					</View>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
})
