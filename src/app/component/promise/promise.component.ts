import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  promiseval:any
  dell={
    brand:'Dell',
    HardDisk:'2 TB',
    color:'Black'

  }
  hp={
    brand:'HP',
    HardDisk:'1 TB',
    color:'Silver'

  }
  notAvil={
    brand:'Not Available',
    status:'Failed..'
  }

  constructor() { }
  dellAvailable() {
    
      return true;

    
  }
  hpAvailable() {

   
      return false;

 
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // reject('Promise is rejected')
      if(this.dellAvailable()){
       setTimeout(() => {
          // resolve('Dell is purchased')
          resolve(this.dell)
    
        }, 3000);
      
      }else if(this.hpAvailable()){
         setTimeout(() => {
          // resolve('HP is purchased')
          resolve(this.hp)
        }, 3000);
        
      }
      else{
        // reject('Laptop is not available')
        reject(this.notAvil)
      }
    });

    buyLaptop.then(res => {

      console.log('then code=>', res)
      this.promiseval=res;
    }).catch(res => {
      console.log('then reject code=>', res)
      this.promiseval=res;
    })
  }
  // myFunction(){
  //   console.log('myFuction Called....')
  // }
}
