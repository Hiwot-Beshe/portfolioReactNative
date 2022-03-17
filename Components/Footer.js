// import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Pressable,
    useWindowDimensions,
    Linking,
	TouchableHighlight,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import { FontAwesome5, Foundation, Zocial } from "@expo/vector-icons";
function Footer () {
	// const { width, height } = useWindowDimensions();
	// const widthBreakpoint = 500;
	return (
		<View Style={styles.contWarp}>
			<TouchableHighlight>
				<View style={styles.lgWidth}>
					<Pressable
						onPress={() => {
							Linking.openURL("https://github.com/Hiwot-Beshe");
						}}
					>
						<Text style={styles.expOneText}>
							<FontAwesome5 name="github" size={10} color="#cdcdcd" />
							Hiwot-Beshe
						</Text>
					</Pressable>

					<Pressable
						onPress={() => {
							Linking.openURL("https://www.linkedin.com/in/hiwot-beshe");
						}}
					>
						<Text style={styles.expOneText}>
							<Foundation name="social-linkedin" size={10} color="#cdcdcd" />
							hiwot-beshe
						</Text>
					</Pressable>
					<Pressable
						onPress={() => {
							Linking.openURL("mailto: beshehiwot@gmail.com");
						}}
					>
						<Text style={styles.expOneText}>
							<Zocial name="email" size={10} color="#cdcdcd" />
							beshehiwot@gmail.com
						</Text>
					</Pressable>
				</View>
			</TouchableHighlight>
			<View Style={styles.lgWidth}>
				<Text style={styles.title}>Hiwot Beshe</Text>
				<Text style={styles.expOne}>Front-end Developer</Text>
			</View>
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
        marginTop:5,
	},
	expOneText: {
		color: "#f7c004",
		backgroundColor: "#1a1a1a",
		fontWeight: "bold",
		margin: 1,
		fontSize: 13,
		padding: 7,
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
		// marginTop: 50,
		fontSize: 30,
		paddingHorizontal: 70,
	},
});

export default Footer;
