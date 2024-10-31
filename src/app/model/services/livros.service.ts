import { Injectable } from '@angular/core';
import { Ilivros } from './ilivros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private livros: Ilivros[] = [
    { id: 1, name: 'É assim que acaba ', price: 50.00, description: 'Collen Houver', image: '../livro1.png'},
    { id: 2, name: 'Crepúsculo', price: 60.00, description: 'Stephenie Meyer', image: '../livro2.png'},
    { id: 3, name: 'Jogos Vorazes', price: 69.00, description: 'Suzanne Collins', image: '../livro3.png'},
    { id: 4, name: 'Em rota de colisão', price: 55.00, description: 'Bal Khabra', image: '../livro4.png'},
    { id: 5, name: 'um beijo da neve', price: 45.00, description: 'Babi A. Sette', image: '../livro5.png'},
    { id: 6, name: 'O acordo', price: 65.00, description: 'Kennedy, Elle', image: '../livro6.png'},
    { id: 7, name: 'É assim que começa', price: 50.00, description: 'Collen Houver', image: '../livro7.png'},
    { id: 8, name: 'Verity', price: 65.00, description: 'Collen Houver', image: '../livro8.png'},
  ];

  getLivros(): Ilivros[] {
    return this.livros;
  }
}

