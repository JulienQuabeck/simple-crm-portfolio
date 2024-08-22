import { inject, Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, limit, onSnapshot, orderBy, query, updateDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  unsubList;
  // unsubSingle;
  UserList: User[] = [];

  colId: string = "";

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
        console.log("Document written with ID: ", docRef?.id);//colID
        this.addingdocRefToUser(item, docRef?.id);
      }
    )
  }

  /**
   * This function adds the firebase docId as Element ID of the user
   * @param item the User Object
   * @param docId firebase document ID 
   */
  async addingdocRefToUser(item: any, docId: any) {
    item.id = docId;
    await updateDoc(this.getSingleUserRef("users", docId), item).catch(
      (err) => { console.log(err); }
    )
  }

  /**
   * This function subscribes the collection "user" for live-time updates
   * @returns the collection data
   */
  subUserList() {
    const q = query(this.getUserRef(), orderBy('lastName'), limit(10));
    return onSnapshot(q, (list) => {
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
      id: obj.id || "",
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      mail: obj.mail ||"",
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

  /**
   * This function updates the user data
   * @param user user data
   */
  async updateUser(user: User) {
      if (user.firstName && user.lastName) {        
        await updateDoc(this.getSingleUserRef("users", user.id), this.getCleanJson(user)).catch(
          (err) => { console.log(err); }
        )
      }
  }

  /**
   * This function creates a clean Json from the user data
   * @param user 
   * @returns user data as Json
   */
  getCleanJson(user: User):{}{
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      street: user.street,
      zipCode: user.zipCode,
      city: user.city
    }
  }

  /**
   * This function deletes a User
   * @param userdata userdata
   */
  async deleteUser(userdata: any){
    const docRef = doc(this.firestore, "users", userdata.id);
    await deleteDoc(docRef).catch((err) => {
      console.log(err);
    });
  }
}