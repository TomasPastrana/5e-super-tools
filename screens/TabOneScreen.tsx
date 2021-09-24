import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import spellList from '../assets/data/spells.json';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

	function showSpellList() {
		var byLevel = spellList.sort(
			function(a:Number, b:Number) {
				return a.level - b.level;
			});
		var byLeter = byLevel.sort();
		var data = spellList.map((spell, index) => {
			// console.log(spell.name);
			return (
				<View key={index}>
					<Text style={styles.title}>{spell.name}</Text>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</View>
			);
		});
		
		return data;
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.spacerTop} />
				{showSpellList()}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
	spacerTop: {
		marginTop: 15,
	}
});
