import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
	Pressable,
	Linking,
	useWindowDimensions,
} from "react-native";
function Contact() {
     const { width, height } = useWindowDimensions();
			const widthBreakpoint = 500;
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const sendContactForm = () => {
		let mailto = `mailto:beshehiwot@gmail.com`;
		mailto += `?subject=${subject}`;
		mailto += `& body=${message}`;
		Linking.openURL(mailto);
    };
   
	return (
		<SafeAreaView>
			<View Style={styles.contWarp}>
				<View
					style={[width > widthBreakpoint ? styles.lgWidth : styles.xsMobile]}
				>
					<View style={styles.titleWrap}>
						<Text style={styles.title}>Education</Text>
					</View>
					<View style={styles.inputWrap}>
						<Text style={styles.inputTitle}> Name*</Text>
						<TextInput
							style={styles.input}
							onChangeText={(e) => setName(e)}
							value={name}
							placeholder="Name"
						/>

						<Text style={styles.inputTitle}>Subject*</Text>
						<TextInput
							style={styles.input}
							onChangeText={(text) => setSubject(text)}
							value={subject}
							placeholder="Subject"
						/>

						<Text style={styles.inputTitle}>Message</Text>
						<TextInput
							style={styles.input1}
							onChangeText={(text) => setMessage(text)}
							value={message}
							placeholder="Insert your Message!"
							numberOfLines={10}
							multiline={true}
						/>

						<Pressable onPress={sendContactForm}>
							<View>
								<Text style={styles.btn}>Submit</Text>
							</View>
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	contWarp: {
		// flex: 1,
		alignItems: "center",
		flexDirection: "row",
		// padding: 10,
		justifyContent: "center",
		backgroundColor: "#1a1a1a",
		width: "100%",
	},
	lgWidth: {
		flexDirection: "column",
		borderRadius: 10,
		backgroundColor: "#1a1a1a",
		justifyContent: "center",
		width: "100%",
	},
	xsMobile: {
		flexDirection: "column",
		padding: 10,
		backgroundColor: "#1a1a1a",
		borderRadius: 10,
		justifyContent: "center",
		width: "100%",
	},
	titleWrap: {
		flexDirection: "row",
		padding: 10,
		margin: 10,
		shadowRadius: 5,
		width: "100%",
		// justifyContent: "center",
	},

	title: {
		color: "#de4e45",
		// backgroundColor: "#1a1a1a",
		fontWeight: "bold",
		textShadowColor: "#de4e45",
		fontSize: 40,
		padding: 5,
		width: "80%",
	},
	inputWrap: {
		// flex: 1,
		backgroundColor: "#1a1a1a",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		width: "80%",
		marginHorizontal: 20,
		color: "white",
	},

	input: {
		backgroundColor: "#fff",
		width: "100%",
		height: 20,
		borderColor: "#de4e45",
		borderWidth: 2,
		color: "#1a1a1a",
		marginHorizontal: 20,
		height: 30,
		padding: 6,
	},
	input1: {
		backgroundColor: "#fff",
		width: "100%",
		borderColor: "#de4e45",
		borderWidth: 2,
		color: "#1a1a1a",
		fontSize: 15,
		padding: 10,
	},
	inputTitle: {
		color: "#f7c004",

		fontWeight: "bold",
		alignItems: "center",
		fontSize: 18,
		margin: 5,
		paddingHorizontal: 10,
	},
	btn: {
		color: "#f7c004",
		borderColor: "#de4e45",
		borderWidth: 2,
		fontWeight: "bold",
		alignItems: "center",
		fontSize: 18,
		margin: 30,
		paddingHorizontal: 10,
	},
});
export default Contact;
