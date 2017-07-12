import { database } from '../firebase'

export default {
  login () {
    // firebase.auth()
    //   .signInWithEmailAndPassword('iamakaradech@gmail.com', 'a1b2c3d4')
    //   .catch((error) => {
    //     console.log(error)
    //   })

    let ref = database.ref('api/dev')
    let user = ref.push()
    user.set({
      username: 'name',
      email: 'email',
      profile_picture: 'imageUrl'
    })
  },
  checkLogin () {
    // console.log(firebase.auth().currentUser)
    // console.log(firebase.auth())
  }
}
