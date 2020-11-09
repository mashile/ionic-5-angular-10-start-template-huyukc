import { Component, ViewChild, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { NavController, AlertController, IonicModule } from 'ionic-angular';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit {

 taskList = [];
  taskName: string = "";
  @ViewChild('taskInput') input;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
ngOnInit(): void {
throw new Error('Method not implemented.');
}
   ionViewDidLoad() {
    setTimeout(() => {
      this.input.setFocus();
    }, 500);
  }

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
    this.input.setFocus();
  }

  updateTask(index) {
    let alert = this.alertCtrl.create({
      title: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Update', handler: data => { this.taskList[index] = data.editTask; } }
      ]
    });
    alert.present();
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}