import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

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
				<TextInput
					placeholder='My Goals'
					style={styles.textInput}
					onChangeText={handleGoalInput}
					value={newGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title='Cancel' onPress={onCancel} />
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
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		padding: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '100%',
		padding: 8,
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
