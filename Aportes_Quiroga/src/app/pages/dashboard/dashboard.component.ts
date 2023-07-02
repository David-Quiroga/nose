import { Component, OnInit } from '@angular/core';
import book from 'src/app/interfaces/book.interface'
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  book: book[];

  constructor(
    private libroService: LibroService
  ){
    this.book = [{
      name: '{{book.name}}',
      category: 'Prueba de categoria',
      description: 'Prueba de estilo',
      editorial: 'prueba de estilo',
      file: 'prueba',
      image: ''
    }];
  }
  ngOninit(): void {
    this.libroService.getBook().subscribe(book => {
      this.book = book;
    })
  }
  async onClickDelete(book: book){
    const response = await this.libroService.deleteBook(book);
    console.log(response);
  }
}
