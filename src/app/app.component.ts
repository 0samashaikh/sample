import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private socket: Socket;

  title = 'sample';
  url = window.location.origin;
  constructor() {
    this.socket = io();
  }
}
