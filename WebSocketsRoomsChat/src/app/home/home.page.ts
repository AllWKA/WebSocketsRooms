import { Component } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { ToastController } from "@ionic/angular";
// import { Socket } from "ngx-socket-io";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socket: Socket, private toastCtrl: ToastController) { }
  messages = [];
  inputMessage = "aaaaaaa"
  ngOnInit() {
    this.socket.connect()
    this.socket.fromEvent('otherMessage').subscribe((message: JSON) => {
      this.messages.push(message["nick"] + " ---> " + message["hello"]);
    });
  }
  sendMessage() {
    console.log("mando mensaje")
    this.socket.emit('message', this.inputMessage);
  }

}
