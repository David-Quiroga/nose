import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Book from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore: Firestore) { }
  addBook(book: Book){
    const placeRef = collection(this.firestore, 'Libros');
    return addDoc(placeRef, book);
  }
  getBook(): Observable<Book[]> {
    const placeRef = collection(this.firestore, 'Libros');
    return collectionData(placeRef, {idField: 'Libros'}) as Observable<Book[]>;
  }
  deleteBook(book: Book){
    const placeDocRef = doc(this.firestore, `Libros/${book.name}`)
    return deleteDoc(placeDocRef)
  }
}
