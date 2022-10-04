import { SpotifyService } from './spotify.service';
import { newMusica } from 'src/app/Common/factories';

import { IMusica } from './../interfaces/IMuscia';
import { Injectable } from '@angular/core';
import { BehaviorSubject,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicaAtual = new BehaviorSubject<IMusica>(newMusica());
  timerId: any = null

  constructor(private spotifyService: SpotifyService) {
      this.obterMusicaAtual();
   }

  async obterMusicaAtual(){
    clearImmediate(this.timerId)
    const musica = await this.spotifyService.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 3000)
  }

  definirMusicaAtual(musica: IMusica){
    this.musicaAtual.next(musica)
  }
}
