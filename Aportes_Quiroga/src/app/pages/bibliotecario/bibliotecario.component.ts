import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.component.html',
  styleUrls: ['./bibliotecario.component.css']
})
export class BibliotecarioComponent implements OnInit {

  form: FormGroup;

  constructor(
    private libroService: LibroService
  ){
    this.form = new FormGroup({
      category: new FormControl(),
      description: new FormControl(),
      editorial: new FormControl(),
      file: new FormControl(),
      image: new FormControl(),
      name: new FormControl(),
      // historico: new FormControl(),
      // romantico: new FormControl(),
      // cientifico: new FormControl(),
      // comedio: new FormControl(),
    })
  }
  ngOnInit(): void {
  }
  async onSubmit(){
    console.log(this.form.value)
    const response = await this.libroService.addBook(this.form.value);
    console.log(response)
  }
}
