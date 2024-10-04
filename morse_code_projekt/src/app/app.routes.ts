import {Routes} from '@angular/router';
import {DecodeComponent} from "./decode/decode.component";
import {EncodeComponent} from "./encode/encode.component";

export const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'encode'
},
  {path: 'decode', component: DecodeComponent},
  {path: 'encode', component: EncodeComponent}
];
