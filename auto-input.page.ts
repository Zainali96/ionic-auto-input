import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-auto-input',
  templateUrl: './auto-input.page.html',
  styleUrls: ['./auto-input.page.scss'],
})
export class AutoInputPage implements OnInit {
  @ViewChildren('inputs') inputs: QueryList<any>;
  
  constructor() {
    setTimeout(res=>{
      this.checkInput(0);
    },500); 
  }

  checkInput(id:any){
    console.log('id',id);
    console.log('inputs',this.inputs['_results']);
    if(id < 4){
    this.inputs['_results'][id].setFocus();
    }
  }

  ngOnInit() {
  }

}
// var dom = document.getElementById("key"+i);
//     var ml = dom.maxLength;
//     var lg = dom.value.length;
//     if (lg >= ml) {
//         document.getElementById("key"+(i+1)).focus()
//     }
