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

export const addPost = (authorId, authorName, title, topic, body, pic) => {
	return new Promise((resolve, reject) => {
		db.collection("Posts")
			.add({
				authorId,
				authorName,
				body,
				title,
				topic,
			})
			.then((res) => {
				db.collection("Titles")
					.add({
						postid: res.id,
						title,
						topic,
						pic,
					})
					.then(() => resolve("Success"));
			});
	});
};

export const addMember = (memberDetail) => {
	return new Promise((resolve, reject) => {
		db.collection("Members")
			.doc(memberDetail.email)
			.get()
			.then((snapshot) => {
				if (snapshot.exists) resolve("Yes");
				else {
					db.collection("Members")
						.doc(memberDetail.email)
						.set(memberDetail);
				}
			})
			.catch((err) => console.log(err));
	});
};

export const getAuthor = (id) => {
	return new Promise((resolve, reject) => {
		db.collection("Members")
			.doc(id)
			.get()
			.then((doc) => resolve(doc.data()))
			.catch((err) => reject(err));
	});
};
