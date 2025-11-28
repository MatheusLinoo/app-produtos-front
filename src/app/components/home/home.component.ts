import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Produto {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
  desconto: number;
  estoque: number;
  ativo: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produtos: Produto[] = [
    {
      id: 1,
      imagem: '',
      titulo: 'Camiseta Preta',
      descricao: 'Camiseta de algodão 100%, confortável e estilosa',
      preco: 49.90,
      desconto: 10,
      estoque: 100,
      ativo: true
    },
    {
      id: 2,
      imagem: '',
      titulo: 'Tênis Esportivo',
      descricao: 'Tênis leve com amortecimento de alta performance',
      preco: 299.90,
      desconto: 15,
      estoque: 50,
      ativo: true
    },
    {
      id: 3,
      imagem: '',
      titulo: 'Headphone Pro',
      descricao: 'Cancelamento de ruído ativo e alta fidelidade',
      preco: 49.90,
      desconto: 10,
      estoque: 0,
      ativo: false
    }
  ];
}
