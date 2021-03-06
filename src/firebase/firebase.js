import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach(child => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     })
//   })
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//     .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });

//       console.log(expenses);
//     });

// database.ref('expenses').push({
//   description: 'Description 1',
//   note: 'Note 1',
//   amount: 10,
//   createdAt: 1
// })

// database.ref('notes/-MUVwfi4FYGXTxIUh9eJ').update({
//   body: 'Buy food'
// });

// database.ref('notes').push({
//   title: 'Courses',
//   body: 'React, Vue, Angular'
// });

// database.ref().on('value', (snapshot) => {
//   const { name, job } = snapshot.val()
//   const phrase = `${name} is ${job.title} at ${job.company}`
//   console.log(phrase)
// })

// setTimeout(() => {
//   database.ref().update(
//     {
//       'job/company': 'Amazon'
//     }
//   );
// }, 3500)


// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

// setTimeout(() => {
//   database.ref('age').set(37)
// }, 3500)

// setTimeout(() => {
//   database.ref().off();
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(39)
// }, 10500)

// database.ref()
// .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Marcelo Seiji',
//   age: 36,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Curitiba',
//     country: 'Brasil'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'São Paulo'
// });
