
export enum Persona {
  Student = 'Student',
  Professional = 'Professional',
}

export enum Sender {
  User = 'user',
  Bot = 'bot',
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
}
