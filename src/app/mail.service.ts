import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [{id:0, text:'you ve got mail'},{id:1, text:'John liked your tweet'},{id:2, text:'You´ll never believe what john said'}];
  constructor() { }
 update (id,text){
    this.messages = this.messages.map(m=> m.id === id ? {id,text}: m)
 }
}
