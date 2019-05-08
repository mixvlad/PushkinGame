import { Question } from './question';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {
        id: 1,
        questionText: 'Наш график — пять рабочих дней в неделю и ещё два как бонус.',
        correctText: 'Наш график — пять рабочих дней в неделю и ещё два <span class="resultText">как бонус</span>.',
        helpMessage: 'Будучи взрослым человеком, я пошёл и уволился, а не бросился в слёзы!',
        ruleInfo: 'Запятая не нужна, потому что оборот можно заменить фразой «в качестве бонуса».',
        isCorrect: true
      },
      {
        id: 2,
        questionText: 'Зацепил на парковке машину шефа. И как взрослый человек пошёл написал заявление на увольнение.',
        correctText:
          'Зацепил на парковке машину шефа. И<span class="resultText">, как взрослый человек,</span> пошёл написал заявление на увольнение.',
        helpMessage: 'Нет подсказки',
        ruleInfo: 'Запятые нужны, потому что оборот имеет значение причины. Можно заменить на «будучи взрослым».',
        isCorrect: false
      },
      {
        id: 3,
        questionText: 'Вера умела варить раф и как следствие считалась ценным сотрудником.',
        correctText:
          'Вера умела варить раф и<span class="resultText">, как следствие,</span> считалась ценным сотрудником.',
        helpMessage: 'Нет подсказки',
        ruleInfo: 'Запятая нужна, если оборот близок по смыслу к вводной конструкции: «как обычно», «как нарочно».',
        isCorrect: false
      }
    ];
    return { questions };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map(question => question.id)) + 1 : 1;
  }
}
