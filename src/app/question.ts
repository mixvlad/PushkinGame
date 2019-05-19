import { Button } from './button';
export class Question {
  id: number;
  questionText: string;
  correctText: string;
  buttons: Button[];
  trueBtnText: string;
  falseBtnText: string;
  needCommas: boolean;
  trueRuleInfo: string;
  falseRuleInfo: string;
  helpMessage: string;
  author: string;
}
