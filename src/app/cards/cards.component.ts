import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../model/services/livros.service';
import { Ilivros } from '../model/services/ilivros';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[LivrosService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private livros:LivrosService ) {}
  products: Ilivros[] = [];

  ngOnInit(): void {
    this.products = this.livros.getLivros();
  }

}
