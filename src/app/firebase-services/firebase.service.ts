import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  unsubList;
  // unsubSingle;
  UserList: User[] = [];

  constructor() {

    this.unsubList = this.subUserList();
    // this.unsubSingle = onSnapshot(this.getSingleUserRef('users', 'asdhajg2hqehjka'), (element) => {

    // });

  }

  firestore: Firestore = inject(Firestore);

  /**
   * This function returns the Reference (id) of an item of the collection "User"
   * @returns 
   */
  getUserRef() {
    return collection(this.firestore, 'users');
  }

  /**
   * This function returns the Reference of a single Object in the collection of firebase
   * @param colId id of the collection (here: User)
   * @param docId if of the item in the collection (automatically generated code of firebase)
   * @returns the object of the docId
   */
  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

  /**
   * This function adds a User to the firebase-Storage
   * @param item = object of User
   */
  async addUser(item: {}) {
    await addDoc(this.getUserRef(), item).catch(
      (err) => {
        console.error(err);
      }
    ).then(
      (docRef) => {
        console.log("Document written with ID: ", docRef?.id);
      }
    )
  }

  /**
   * This function subscribes the collection "user" for live-time updates
   * @returns the collection data
   */
  subUserList() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.UserList = []
      list.forEach(element => {
        this.UserList.push(this.setUserObject(element.data()));
      })
    });
  }

  /**
   * This function sets the incoming data to a readable Object of typ "User"
   * @param obj incoming data
   * @returns readable Object like in the firebase database
   */
  setUserObject(obj: any): User {
    return {
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      birthDate: obj.birthDate || "",
      street: obj.street || "",
      zipCode: obj.zipCode || "",
      city: obj.city || ""
    }
  }

  /**
   * Destroys the subscribtion(s)
   */
  ngOnDestroy() {
    this.unsubList();
    // this.unsubSingle();
  }

  async updateUser(user: User) {
    // if (user.firstName && user.lastName) {
    //   await updateDoc(this.getSingleUserRef("users", docId), User).catch(
    //     (err) => { console.log(err); }
    //   )
    // }
  }
}
