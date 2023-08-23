import { Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]' 
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo = 'yellow';
  @Input() corDoTexto = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit(){
    this.mudarFundo();//Ignorando o parametro do metodo porque já foi inicializado parecendo que é opcional.
  }

  private mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }

}
