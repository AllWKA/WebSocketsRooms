import { Component } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { ToastController } from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socket: Socket, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.socket.connect()
  }

}
