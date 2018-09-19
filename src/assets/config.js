// Initialize Firebase
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyB8C30aW3U6neq3Mt5EKdtDOr5xT5Ux8Aw',
  authDomain: 'kanban-74e11.firebaseapp.com',
  databaseURL: 'https://kanban-74e11.firebaseio.com',
  projectId: 'kanban-74e11',
  storageBucket: 'kanban-74e11.appspot.com',
  messagingSenderId: '413408229398'
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
