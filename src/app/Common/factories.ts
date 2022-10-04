import { IMusica } from './../interfaces/IMuscia';
import { IArtista } from './../interfaces/IArtistas';

export function newArtista(): IArtista{
  return{
    id: '',
    imagemUrl: '',
    nome: '',
  }
}

export function newMusica(): IMusica{
  return {
    id: '',
    album:
    {
      id: '',
      imagemUrl: '',
      nome: ''
    },
    artistas: [],
    tempo:'',
    titulo: ''
  }
}
