import firebase from "./firebase";

const db = firebase.firestore();

export const getTitles = () => {
	const titles = [];

	return new Promise((resolve, reject) => {
		db.collection("Titles")
			.get()
			.then((snapshot) => {
				snapshot.docs.map((doc) => {
					titles.push(doc.data().title);
				});
				resolve(titles);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
