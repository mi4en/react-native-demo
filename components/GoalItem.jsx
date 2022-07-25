import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = ({ item, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={onDeleteItem.bind(this, item.id)}
				android_ripple={{ color: '#210664' }}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalItemText}>{item.text}</Text>
			</Pressable>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalItemText: {
		padding: 8,
		color: 'white',
	},
})
