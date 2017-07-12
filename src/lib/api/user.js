import { database, API_ENDPOINT } from '@/lib/firebase'

export default {
  getUsers () {
    console.log('Get users')
    // firebase.database().ref('users/1').set({
    //   username: 'name',
    //   email: 'email',
    //   profile_picture: 'imageUrl'
    // })
    var query = database.ref(`${API_ENDPOINT}/users`).orderByKey().limitToFirst(3)
    query.once('value').then((snapshot) => {
      console.log(snapshot.val())
    })

    // ref.once('value').then((value) => {
    //   console.log(value)
    //   console.log(value.val())
    // })
    // database.ref('users').once('value').then((user) => {
    //   console.log(user.val())
    // })
  }
}
