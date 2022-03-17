// import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Pressable,
    useWindowDimensions,
    TouchableHighlight,
    Linking,
} from "react-native";

function Header({ setPage }) {
	// const { width, height } = useWindowDimensions();
	// const widthBreakpoint = 500;
	return (
		<View Style={styles.contWarp}>
			<View Style={styles.lgWidth}>
				<Text style={styles.title}>Hiwot Beshe</Text>
				<Text style={styles.expOne}>Front-end Developer</Text>
			</View>
	
			<TouchableHighlight>
				<View style={styles.lgWidth}>
					<Text
						name="Profile"
						onPress={() => setPage("Profile")}
						style={styles.expOneText}
					>
						Profile
					</Text>

					<Text
						name="about"
						onPress={() => setPage("About")}
						style={styles.expOneText}
					>
						About
					</Text>

					<Text
						name="Experiences"
						onPress={() => setPage("Experiences")}
						style={styles.expOneText}
					>
						Experiences
					</Text>

					<Text
						name="Education"
						onPress={() => setPage("Education")}
						style={styles.expOneText}
					>
						Education
					</Text>

					<Text
						name="Contact"
						onPress={() => setPage("Contact")}
						style={styles.expOneText}
					>
						Contact
					</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
}
const styles = StyleSheet.create({
	contWarp: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#1a1a1a",
		flexDirection: "column",
		// padding: 5,
		width: "100%",

		borderWidth: 10,
	},
	lgWidth: {
		flexDirection: "row",
		borderRadius: 5,
		backgroundColor: "#1a1a1a",
		// alignItems: "flex-start",
		color: "#fff",
		alignItems: "center",
		// padding: 10,
		margin: 5,
	},
	expOneText: {
		color: "#f7c004",
		backgroundColor: "#1a1a1a",
		fontWeight: "bold",
		margin: 2,
		fontSize: 14,
		padding: 5,
	},
	expOne: {
		color: "#f7c004",
		backgroundColor: "#1a1a1a",
		fontWeight: "bold",
	fontSize: 18,
		padding: 5,
		alignItems: "center",
		paddingHorizontal: 70,
	},
	title: {
		color: "#de4e45",
		backgroundColor: "#1a1a1a",
		fontWeight: "bold",
		// margin: 2,
		marginTop: 50,
		fontSize: 30,
		paddingHorizontal: 70,
	},
});

export default Header;
