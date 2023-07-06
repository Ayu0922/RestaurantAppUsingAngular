import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    private rs:RestaurantService,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  confirmUpdate(){
    this.rs.update(this.data.payload).subscribe(()=>{
      this.dialogRef.close(this.data.payload)
    })
      }
}
