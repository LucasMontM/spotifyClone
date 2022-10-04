import { IMusica } from './../../interfaces/IMuscia';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playIcone = faPlay;
  musicas: IMusica[] = []


  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.obterMusicas()
  }

  async obterMusicas(){
    this.musicas = await this.spotifyService.buscarMusicas();
    console.log(this.musicas)
  }

  obterArtistas(musica: IMusica){
    return musica.artistas.map(artista => artista.nome).join(', ')
  }

  async executarMusica(musica: IMusica){
    await this.spotifyService.executarMusica(musica.id);
  }



}
