import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { Text } from "react-native-elements";
import BootstrapStyleSheet from "react-native-bootstrap-styles";

export default function About() {
	const bootstrapStyleSheet = new BootstrapStyleSheet();
	const { s, c } = bootstrapStyleSheet;
	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	return (
		<View style={[s.col, s.bgDark, s.m1, s.overflowAuto]}>
			<Text h2 class="text-danger shadow" style={[s.textDanger]}>
				About
			</Text>
			<View
				style={[
					s.row,

					[width > widthBreakpoint ? styles.lgWidth : styles.xsMobile],
				]}
				class="s.row bg-dark mx-5 text-white  p-3 m-3 overflow-auto "
			>
				<View style={[s.col6, s.bgDark, s.p5]}>
					<Text style={[s.textWhite, s.shadow, s.m2]}>
						<Text
							h5
							class="text-warning"
							style={[s.textWarning, s.shadow, s.m1]}
						>
							A skilled front-end web developer
						</Text>
						: is adept at using new methodologies and technical developments to
						drive improvements throughout the entire development lifecycle. I
						have extensive industry experience with web-based environments as
						well as exceptional analytical and problem-solving skills.
					</Text>
					<Text style={[s.textWhite, s.shadow, s.m1]}>
						<Text
							h5
							class="text-warning"
							style={[s.textWarning, s.shadow, s.m1]}
						>
							Due to my extensive experience
						</Text>
						: in designing and developing full-stack web applications using
						React, ReactNative, JavaScript, TypeScript, CSS and HTML5, I am
						capable of developing solutions for a wide range of corporations.
						Furthermore, I am passionate about my work and have the desire to
						complete projects in a timely manner.
					</Text>
					<Text style={[s.textWhite, s.shadow, s.mb5, s.m2]}>
						<Text
							class="text-warning"
							h5
							style={[s.textWarning, s.shadow, s.m1]}
						>
							My attention to detail and passion
						</Text>
						: for organization make me uniquely qualified To successfully
						complete a project. I devote my time, effort, and resources to
						accomplishing tasks on time. In my family, we value honesty,
						integrity, diligence, loyalty, teamwork, hard work, and commitment.
					</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	cent: {
		textAlign: "center",
		backgroundColor: "#1a1a1a",
	},
	lgWidth: {
		flex: 1,
		flexDirection: "row",
		borderRadius: 10,
		paddingTop: 50,
		marginBottom: 10,
	},
	xsMobile: {
		flex: 1,
		flexDirection: "column",
		// paddingTop: 50,
		marginBottom: 5,
		borderRadius: 10,
	},
	img: {
		width: "100%",
		height: "100%",
		alignItems: "flex-end",
		alignSelf: "flex-end",
	},
});
