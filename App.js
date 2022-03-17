import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView ,ScrollView} from "react-native";
import Profile from "./Components/profile";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import { useState } from "react";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

export default function App() {
	const [page, setPage] = useState("Profile");
	return (
		<SafeAreaView style={styles.container}>
			<Header setPage={setPage} />
			{/* <ScrollView> */}
				{page === "Profile" && <Profile />}
				{page === "About" && <About />}
				{page === "Experiences" && <Experiences />}
				{page === "Education" && <Education />}
				{page === "Contact" && <Contact />}
			{/* </ScrollView> */}
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
    justifyContent: "center",
    width:"100%"
	},
});
