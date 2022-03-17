import {
	StyleSheet,
	View,
	Image,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import { Text } from "react-native-elements";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
export default function Profile() {
	const bootstrapStyleSheet = new BootstrapStyleSheet();
	const { s, c } = bootstrapStyleSheet;
	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	return (
		<View style={[[s.col, s.p3, s.m2], styles.cent]}>
			<Text h2 style={[s.textDanger, s.shadow]}>
				Profile
			</Text>

			<View
				style={
					[
						// s.mb5,
						// [width > widthBreakpoint ? styles.lgWidth : styles.xsMobile],
					]
				}
			>
				<View style={[s.col, s.m3]}>
					<Image
						source={require("./image/profile2.jpg")}
						// style={styles.profile}
						style={[
							[width > widthBreakpoint ? styles.lgWidth : styles.xsMobile],
							s.col,
							s.floatMdStart,
							s.dMdBlock,
							// s.m3
						]}
					/>
				</View>
				<View style={[styles.cent, [s.col]]}>
					<Text h4 style={[s.textWhite]}>
						Hi, I'm{" "}
						<Text
							h4
							style={[s.textWarning, s.shadow]}
							class="text-warning shadow fs-4"
						>
							Hiwot.
						</Text>
					</Text>

					<Text
						h4
						style={[s.textDanger, s.shadow]}
						class="text-danger shadow"
					>
						Front-end Developer
					</Text>
					<Text style={s.textWhite}>
						My biggest assets are first and foremost my commitment to providing
						a professional service to all my colleagues and clients. A second
						quality is my ability to establish and maintain a close working
						relationship with every client, which helps me gain a deep
						understanding of their needs. As a web developer, in general, I have
						a genuine passion for spotting trends and developing best practices.
					</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	cent: {
		alignItems: "center",
		backgroundColor: "#1a1a1a",
	},
	profile: {
		flex: 1,
		// alignItems: "center",
		flexDirection: "row",
		padding: 10,
		width: "70%",
		height: "50%",
		alignItems: "flex-start",
	},
	lgWidth: {
		flexDirection: "row",
		borderRadius: 10,
		backgroundColor: "#1a1a1a",
	},
	xsMobile: {
		// flex: 1,
		flexDirection: "column",
		// padding: 20,
		// margin: 20,
		backgroundColor: "#1a1a1a",
		borderRadius: 10,
	},
	pa: {
		padding: 20,
	},
});
