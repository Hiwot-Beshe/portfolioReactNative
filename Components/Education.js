import { StyleSheet, View, useWindowDimensions, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
export default function Experiences() {
	const bootstrapStyleSheet = new BootstrapStyleSheet();
	const { s, c } = bootstrapStyleSheet;
	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	return (
		<ScrollView>
			<View Style={styles.contWarp}>
				<View
					style={[width > widthBreakpoint ? styles.lgWidth : styles.xsMobile]}
				>
					<View style={styles.titleWrap}>
						<Text style={styles.title}>Education</Text>
					</View>
					<View
						style={[width > widthBreakpoint ? styles.expTwo : styles.expOne]}
					>
						<Text style={styles.expOneText}>Addis Ababa University</Text>
						<Text style={styles.expOneTex}>
							{""}Addis Ababa, Ethiopia.2004-2009,
						</Text>
						<Text style={styles.expOneTexCourse}>
							{""}Construction Technology and Management
						</Text>
						<View>
							<Text style={styles.bullet}>
								{"\u2022"}
								<Text style={styles.bulletText}>
									Completed courses in Civil Engineering, Architectural Design,
									and Construction Management.
								</Text>
							</Text>
						</View>
						<View
							style={[width > widthBreakpoint ? styles.expTwo : styles.expOne]}
						>
							<Text style={styles.expOneText}>College of Southern Nevada</Text>
							<Text style={styles.expOneTex}>Las Vegas, Nevada.2015-2018,</Text>
							<Text style={styles.expOneTexCourse}>
								Computer and Information Technology with Software emphasizes.
							</Text>

							<View
								style={[
									width > widthBreakpoint ? styles.expTwo : styles.expOne,
								]}
							>
								<Text style={styles.expOneText}>Geekwise Academy</Text>
								<Text style={styles.expOneTex}>Jan 2021-Apr 2021</Text>
								<Text style={styles.expOneTexCourse}>
									Online Completed classes in Javascript / React.
								</Text>
							</View>
						</View>
						<View
							style={[
								width > widthBreakpoint ? styles.lgWidth : styles.xsMobile,
							]}
						>
							<View style={styles.titleWrap}>
								<Text style={styles.title}>Skill</Text>
							</View>
							<View style={styles.expTwoSkill}>
								<View style={styles.expTwo}>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>JavaScript</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>HTML5/CSS3</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>Bootstrap, jQuery</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>React/ReactNative</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>Node JS/NPM</Text>
									</Text>
								</View>
								<View style={styles.expTwo}>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>MySQL /Rest API</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>Git, Visual Studio</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>Scrum, and Agile</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>
											G-Suite, Microsoft office suite
										</Text>
									</Text>
									<Text style={styles.bullet}>
										{"\u2022"}
										<Text style={styles.bulletText}>
											Presentation, Spreadsheet
										</Text>
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	contWarp: {
		flex: 1,
		alignItems: "center",
		flexDirection: "row",
		// padding: 10,
		
	},
	lgWidth: {
		flexDirection: "column",
		borderRadius: 10,
		backgroundColor: "#1a1a1a",
	},
	xsMobile: {
		flexDirection: "column",
		// padding: 10,
		backgroundColor: "#1a1a1a",
		borderRadius: 10,
		margin: 20,
		marginTop: 0,
		width:"90%",
	},
	titleWrap: {
		flexDirection: "row",
		padding: 10,
		margin: 10,
	},

	title: {
		color: "#de4e45",
		// backgroundColor: "#1a1a1a",
		fontWeight: "bold",

		fontSize: 40,
		padding: 5,
	},
	expOne: {
		flexDirection: "column",
		margin: 5,
	},
	expTwo: {
		flexDirection: "column",
		width: "100%",
	},
	expTwoSkill: {
		flexDirection: "column",
		width: "100%",
	},
	expOneText: {
		color: "#f7c004",

		// backgroundColor: "#1a1a1a",
		fontWeight: "bold",

		fontSize: 18,
		padding: 5,
	},
	expOneTex: {
		color: "#fff",
		// backgroundColor: "#1a1a1a",
		fontWeight: "bold",

		fontSize: 13,
		padding: 5,
		margin: 5,
	},
	expOneTexCourse: {
		color: "#fff",
		// backgroundColor: "#1a1a1a",
		fontWeight: "bold",

		fontSize: 15,
		padding: 5,
		margin: 5,
	},
	item: {
		padding: 10,
		fontSize: 15,
		// height: 110,
		color: "#fff",
	},
	bullet: {
		color: "#f7c004",

		fontWeight: "bold",
		alignItems: "center",
		fontSize: 30,
		margin: 2,
		paddingHorizontal: 5,
	},
	bulletText: {
		color: "#fff",
		// backgroundColor: "#1a1a1a",
		fontWeight: "bold",
		width: "80%",
		margin: 2,
		marginLeft:5,
		fontSize: 15,
		alignItems: "center",
		textAlign: "center",
		paddingLeft: 5,
	},
});
