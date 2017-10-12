import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import 'chartjs-plugin-annotation';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  statsMode : string = "currentWeek";  

  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{
          label: 'Steps',
          data: [5434, 4924, 8092, 9234, 10300, 3348, 2023],
          backgroundColor: 'rgba(66, 134, 244,0.3)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        annotation: {
          annotations: [{
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 10000,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            label: {
              enabled: true,
              content: 'Recommended Level',
              position: "left",
              fontSize: 11,
              fontColor: "grey",
              backgroundColor: 'rgba(0,0,0,0)',
              xAdjust: 10,
              yAdjust: -10
            }
          }]
        }
      }
    });
  }  
}
