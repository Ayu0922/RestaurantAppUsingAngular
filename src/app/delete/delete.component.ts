import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  searchText:any;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,private rs:RestaurantService,@Inject(MAT_DIALOG_DATA) public data:any) {}

  confirmDelete(){
this.rs.delete(this.data.id).subscribe(()=>{
  this.dialogRef.close(this.data.id)
})
  }
}
