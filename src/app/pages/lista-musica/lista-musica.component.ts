import { Subscription } from 'rxjs';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/Common/factories';
import { IMusica } from './../../interfaces/IMuscia';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.scss']
})
export class ListaMusicaComponent implements OnInit, OnDestroy {

  bannerImagemUrl = '';
  bannerTexto ='';

  musicas: IMusica[] = [];
  musicaAtual: IMusica = newMusica();
  playIcone = faPlay;

  sub: Subscription[] = []

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.sub.forEach(sub => sub.unsubscribe)
  }

  ngOnInit(): void {
    this.obterMusicas();
  }

  obterMusicas(){
    const sub = this.activedRoute.paramMap
    .subscribe(async params =>{
      console.log(params.get)
    })
  }

}
