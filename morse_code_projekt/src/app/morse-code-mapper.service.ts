import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MorseCodeMapperService {
  morseCode = [
    /* A */ '.-',
    /* B */ '-...',
    /* C */ '-.-.',
    /* D */ '-..',
    /* E */ '.',
    /* F */ '..-.',
    /* G */ '--.',
    /* H */ '....',
    /* I */ '..',
    /* J */ '.---',
    /* K */ '-.-',
    /* L */ '.-..',
    /* M */ '--',
    /* N */ '-.',
    /* O */ '---',
    /* P */ '.--.',
    /* Q */ '--.-',
    /* R */ '.-.',
    /* S */ '...',
    /* T */ '-',
    /* U */ '..-',
    /* V */ '...-',
    /* W */ '.--',
    /* X */ '-..-',
    /* Y */ '-.--',
    /* Z */ '--..',
  ];

  private characterRegex = new RegExp('[a-z]');

  public mapToMorseCode(input: String): String {
    //check validity

    if (input
      .split("")
      .filter(c => this.checkIfCharacterIsCharacter(c))
      .some(c => c !== c.toUpperCase())) {
      //throw some error
      return "invalid";
    }

    //clean input
    input = input.trim();

    //encode input
    return input
      .split(" ")
      .map(word => word.split('')
        .map(character =>
          this.morseCode[character.charCodeAt(0) - 65]
        ))
      .join(' ');
  }


  private checkIfCharacterIsCharacter(char: string): boolean {
    return this.characterRegex.test(char);
  }

  public mapToText(morseCode: String): String {
    return "";
  }
}
