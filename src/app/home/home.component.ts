import { Component, OnInit } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  winnerName = 'Mr.Sagar Bhosale';
  winnerAmount = 1500;
  isActive = false;


  ngOnInit() {
    this.createNewScratchCard();
  }


  createNewScratchCard() {
    const scContainer = document.getElementById('js--sc--container')
    const sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 300,//scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: './assets/images/scratchCard2.png',
      //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
      htmlBackground: '<div class="cards"><img style="height: 165px;\n' +
        '    margin-top: -60px;" src="https://www.puppyprize.com/wp-content/plugins/prizebox/public/images/prize-box-close.png?v=1.0.0"></img><div class="won-amount" >₹'+this.winnerAmount+' Won!</div><div class="won-text">'+this.winnerName+'</div></div>',
      clearZoneRadius: 40,
      nPoints: 30,
      pointSize: 4,
      callback: () => {
        this.isActive = true;
        document.body.style.background = '#6a6060';
      }
    })

    // Init
    sc.init();
  }

}
