import Firebase from 'firebase'

let firebaseConfig = {
  apiKey: 'AIzaSyBWUtbA9MEIv98kG5J7vRvunjMzpB29S64',
  authDomain: 'akaradech-baef9.firebaseapp.com',
  databaseURL: 'https://akaradech-baef9.firebaseio.com',
  projectId: 'akaradech-baef9',
  storageBucket: 'akaradech-baef9.appspot.com',
  messagingSenderId: '23401654695'
}
let firebaseApp = Firebase.initializeApp(firebaseConfig)

export const database = firebaseApp.database()
export const API_ENDPOINT = 'api/dev/'
export default firebaseApp
