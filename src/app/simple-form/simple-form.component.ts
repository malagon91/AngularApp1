import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: [`
:host{
display: flex;
flex-direction: column;
}
.mousedown{
border: 2px solid green;
}
*{
font-family: monospace;
}
input:focus{
font-weight: bold;
outline: none;
}
button{
border: none;
}
`]
})
export class SimpleFormComponent implements OnInit {
  isMousedown;
 @Input() message;
 @Output() update = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
