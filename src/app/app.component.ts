import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  count = 0;
  nome = "Etevaldo Jose Pedro Antunes";//Fazendo biding direcional da logica para o template

  text = '';

  /**
  
  Nota: Quando queremos enviar dados da logica para o template , usamos propriedade dentro de chaves( [] ),
        e quando queremos exibir so valor colocamos dentro de chaves duplas ( {{}} )


  Pergunta: como podemos enviar informação do html para logica?

  - Desenvolvendo um two way data binding

    Data binding permite fazer a comunicação entre os dois lados da template para logica e da logica para template

    */

  pessoas = [
    {
      nome: "Etevaldo",
      sobrenome: "Antunes"
    },
    {
      nome: "Daniel",
      sobrenome: "Canhamena"
    },
    {
      nome: "Ester",
      sobrenome: "Apolinario"
    },
    {
      nome: "Antonio",
      sobrenome: "Moniz"
    }
  ]

  constructor(){
    //this.count = count;
  }

  ngOnInit(){
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  contador(): any {
      for (let index = 0; index <= 10; index++) {
        this.count = index;   
      }   
  }

  //Metodo que recebe dados do view 
  public clicou(nome: string): void{
    console.log('Clicou em mim', nome);
  }
}
