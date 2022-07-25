import { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [goals, setGoals] = useState([])

	const addGoalHandler = enteredGoalText => {
		setGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), text: enteredGoalText },
		])

		endAddGoalHandler()
	}

	const deleteGoalHandler = id => {
		setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id))
	}

	const startAddGoalHandler = () => setModalIsVisible(true)

	const endAddGoalHandler = () => setModalIsVisible(false)

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color='#b180f0'
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={itemData => (
							<GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
						)}
						keyExtractor={item => item.id}
						alwaysBounceVertical={false}
					></FlatList>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 7,
	},
})

