import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

  game: Game = {
    name: '',
    price: 0,
    releaseDate: '',
    rating: 0
  };
  submitted = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  saveGame(): void {
    const data = {
      name: this.game.name,
      price: this.game.price, 
      releaseDate: this.game.releaseDate,
      rating: this.game.rating
    };
    this.gameService.create(data)
      .subscribe(response => { this.submitted = true })
  }

  newGame(): void {
    this.submitted = false;
    this.game = {
      name: '',
      price: 0,
      releaseDate: '',
      rating: 0
    }
  }
}
