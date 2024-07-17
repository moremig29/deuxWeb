import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  apikey: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJpNHNzbTh6a3h5YjI2b3pjM3N3bWszampmb2M2ZHdwZWowbndqeXg0czFoa211dmcwYyIsInNlY3JldCI6IjZkOTM0a200em42Mnp3ZWhrZmwiLCJpYXQiOjE3MjEyNDA5NjZ9.tm5xpa6q01Un7GCOleFEfhijtZY4_6znv5UStq4jeiI';
  baseUrl: string = 'http://localhost:4000/api';
  //baseUrl: string = 'https://deuxserver.onrender.com/api',

  get headers() {
    return {
      headers: {
        'x-api-key': this.apikey,
      },
    };
  }

  constructor(private http: HttpClient) {}

  postMessage(mensaje: Message) {
    return this.http
      .post(`${this.baseUrl}/mensaje`, mensaje, this.headers)
      .pipe
      // tap(() => {
      //   this.getCuentas();
      //   this.getCuentasByType();
      // })
      ()
  }
}
