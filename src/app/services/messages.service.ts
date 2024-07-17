import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../interfaces/Message.interface';
import { environment } from '../../environments/environment';
const env = environment;
@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  apikey = env.apikey
  baseUrl = env.baseUrl

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
