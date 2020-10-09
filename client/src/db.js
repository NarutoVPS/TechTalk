import firebase from "./firebase";

const db = firebase.firestore();

export const getTitles = () => {
	const titles = [];

	return new Promise((resolve, reject) => {
		db.collection("Titles")
			.get()
			.then((snapshot) => {
				snapshot.docs.map((doc) => {
					titles.push(doc.data());
				});
				resolve(titles);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const getPost = (id) => {
	return new Promise((resolve, reject) => {
		db.collection("Posts")
			.doc(id)
			.get()
			.then((doc) => resolve(doc.data()))
			.catch((err) => reject(err));
	});
};
