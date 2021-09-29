import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import spellList from '../assets/data/spells.json';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

	const [data, setData] = useState();

	// sorts the json file in spell level 0 to 9 and in alphabetical order and shows it on screen
	function showSpellList() {
		var byLevel = spellList.sort(
			function(a, b) {
				return a.level - b.level;
			});
		var byLeter = spellList.sort(
			function(a, b) {
				return (a.name > b.name) ? 1 : -1;
			});
		var data = spellList.map((spell, index) => {
			// console.log(spell.name);
			return (
				<View key={index}>
					<Text style={styles.title}>{spell.name}</Text>
					<Text style={styles.school}>{spell.school}</Text>
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
	school: {
		fontSize: 14,
		backgroundColor: '#ccc',
		width: 'fit-content',
		padding: 3,
		borderRadius: 5,
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
