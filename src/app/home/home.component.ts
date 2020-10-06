import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item:string="Product:Vivo"
  price:string="Price:20000";
  Quantity:string="Quantity:3";
  item1:string="Product:Watches";
  Quantity1:string="Quantity:2";
  product:string="Product:Laptop";
  Money:string="Price:99999.99"
  Quantity2:string="Quantity:5";
  Product1:string="Product:Camera";
  skin:string="Product:Anti-aging-Product";
  Price:string="Price:9999";
  Quantity4:string="Quantity:9";
  grocessory:string="Product:HomeProducts";

 imgonline="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg"
 imgonline1="https://www-file.huawei.com/-/media/corp2020/home/box/1/watchgt2-mob.jpg";
 img="https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png";
 img1="https://in.canon/media/image/2018/05/03/642e7bbeae5741e3b872e082626c0151_eos6d-mkii-ef-24-70m-l.png";
 imgsrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-052820-best-anti-aging-products-1590700658.png";
 imgsrc1="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/12/w900X450/TATA_.jpg";
 constructor() { }

  ngOnInit(): void {
  }

}
