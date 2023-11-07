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
    // Set focus on previous input
    if(id > 0 && this.inputs['_results'][id - 1].value.length == 0){ 
      if(id != this.inputs['_results'].length && this.inputs['_results'][id].value.length > 0){
        for(let i = 0; i<this.inputs['_results'].length; i++){
          this.inputs['_results'][i].value = '';
        }
        this.inputs['_results'][0].setFocus();
      }else{
        if(id > 1){
          this.inputs['_results'][id - 2].setFocus();
        }else{
          this.inputs['_results'][0].setFocus();
        }
      }
    }else{
      // Set focus on next input
      if(id < this.inputs['_results'].length){
        this.inputs['_results'][id].setFocus();
      }
    }
  }

  ngOnInit() {
  }

}
