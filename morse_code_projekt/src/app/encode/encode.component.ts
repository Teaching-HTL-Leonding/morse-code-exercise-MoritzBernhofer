import {Component, Inject} from '@angular/core';
import {MorseCodeMapperService} from "../morse-code-mapper.service";

@Component({
  selector: 'app-encode',
  standalone: true,
  imports: [],
  templateUrl: './encode.component.html',
  styleUrl: './encode.component.css'
})
export class EncodeComponent {

  constructor(private morseCodeService: MorseCodeMapperService) {
  }

  public encode() {
    let text = "" + this.morseCodeService.mapToMorseCode("HALLO DU SEPP");
    console.log(text);
  }
}
