import { Question } from './question';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const commaQuestions = [
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
        correctText: `Зацепил на парковке машину шефа. И
        <span class="resultText">, как взрослый человек,</span>
         пошёл написал заявление на увольнение.`,
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

    const timerQuestions = [
      {
        id: 1,
        questionText: 'Марья Гавриловна была воспитана на французских романах и следственно была влюблена.',
        correctText:
          'Марья Гавриловна была воспитана на французских романах и<span class="resultText">, следственно,</span> была влюблена.',
        helpMessage: '—',
        ruleInfo: 'А.С. Пушкин «Метель»',
        isCorrect: false
      },
      {
        id: 2,
        questionText: 'Старушка сидела однажды одна в гостиной, раскладывая гран-пасьянс.',
        correctText: 'Старушка сидела однажды одна в гостиной, раскладывая гран-пасьянс.',
        helpMessage: 'Нет подсказки',
        ruleInfo: 'Запятые не нужны',
        isCorrect: true
      }
    ];

    const dashQuestions = [
      {
        id: 1,
        questionText:
          'Погода !_dash-!_ несносная, дорога !_dash-!_ скверная, ямщик  !_dash-!_ упрямый — а виноват смотритель.',
        correctText:
          'Погода !_dash-!_ несносная, дорога !_dash-!_ скверная, ямщик  !_dash-!_ упрямый — а виноват смотритель.',
        helpMessage: '',
        ruleInfo: `Тире не ставится во всех частях предложения, так как сказуемые в них выражены прилагательными,
          а тире ставится между двумя существительными, глаголами или числительными.`,
        isCorrect: true
      },
      {
        id: 2,
        questionText: 'Петр Петрович, по крайней мере по моим признакам, !_dash-!_ человек весьма почтенный.',
        correctText: 'Петр Петрович, по крайней мере по моим признакам, !_dash-!_ человек весьма почтенный.',
        helpMessage: 'Нет подсказки',
        ruleInfo:
          'Тире не ставится, так как между подлежащим и сказуемым есть вводная конструкция «по крайней мере по моим признакам».',
        isCorrect: false
      },
      {
        id: 3,
        questionText: 'Я !_dash-!_ честный человек и никогда не говорю комплиментов.',
        correctText: 'Я !_dash-!_ честный человек и никогда не говорю комплиментов.',
        helpMessage: 'Нет подсказки',
        ruleInfo: 'Тире не ставится, когда подлежащее выражено местоимением.',
        isCorrect: false
      },
      {
        id: 4,
        questionText: 'Театр уж полон; ложи блещут; Партер и кресла !_dash+!_ все кипит.',
        correctText: 'Театр уж полон; ложи блещут; Партер и кресла !_dash+!_ все кипит.',
        helpMessage: '',
        ruleInfo:
          'Тире ставится перед обобщающим словом «всё», которое стоит после однородных членов предложения «партер» и «кресла».',
        isCorrect: true
      }
    ];

    return { commaQuestions, timerQuestions, dashQuestions };
  }

  // Overrides the genId method to ensure that a item always has an id.
  // If the array is empty,
  // the method below returns the initial number (1).
  // if the array is not empty, the method below returns the highest
  // item id + 1.
  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map(question => question.id)) + 1 : 1;
  }
}
