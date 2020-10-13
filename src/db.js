import firebase from "./firebase";
import dayjs from "dayjs";

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

export const addPost = (
	authorId,
	authorName,
	title,
	topic,
	body,
	pic,
	datePosted
) => {
	return new Promise((resolve, reject) => {
		db.collection("Posts")
			.add({
				authorId,
				authorName,
				body,
				title,
				topic,
				datePosted,
			})
			.then((res) => {
				db.collection("Titles")
					.add({
						postid: res.id,
						title,
						topic,
						pic,
						author: authorId,
					})
					.then(() => resolve("Success"));
			})
			.catch((err) => console.log(err));
	});
};

export const addMember = (memberDetail) => {
	memberDetail.joined = String(dayjs());
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

export const addReply = (postId, reply) => {
	return new Promise((resolve, reject) => {
		db.collection("Posts")
			.doc(postId)
			.update({
				reply: firebase.firestore.FieldValue.arrayUnion(reply),
			})
			.then((res) => resolve("Added"))
			.catch((err) => console.log(err));
	});
};

export const getMemberProfile = (id) => {
	return new Promise((resolve, reject) => {
		db.collection("Members")
			.doc(id)
			.get()
			.then((doc) => resolve(doc.data()))
			.catch((err) => reject(err));
	});
};

export const getMemberPosts = (id) => {
	const posts = [];
	return new Promise((resolve, reject) => {
		db.collection("Titles")
			.where("author", "==", id)
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					posts.push(doc.data());
				});
				resolve(posts);
			})
			.catch((err) => reject(err));
	});
};
