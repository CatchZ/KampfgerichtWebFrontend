import { Time } from "@angular/common";

export interface Spiel {
  id: number;
  date: Date;
  time: Time;
  shotclock: string;
  score: string;
  scoreSheet: string;
}

export const gameList = [
  {
    id: 1,
    date: 1/1/1994,
    time: 1600,
    shotclock:'test',
    score: 'testa',
    scoreSheet: 'testo',
  },
  {
    id: 1,
    date: 1/1/1994,
    time: 1600,
    shotclock:'test1',
    score: 'tes2',
    scoreSheet: 'test3',
  }
];