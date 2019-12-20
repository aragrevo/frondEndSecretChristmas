import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  family = [
    // tslint:disable-next-line: max-line-length
    { name: 'Elvira', secretFriend: 'Eduardo', selected: false, gender: 'Femenino', avatar: 'https://image.flaticon.com/icons/png/512/921/921076.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Herlinda', secretFriend: '', selected: false, gender: 'Femenino', avatar: 'https://image.flaticon.com/icons/png/512/921/921098.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Eduardo', secretFriend: '', selected: true, gender: 'Masculino', avatar: 'https://image.flaticon.com/icons/png/512/921/921110.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Adriana', secretFriend: '', selected: false, gender: 'Femenino', avatar: 'https://image.flaticon.com/icons/png/512/921/921089.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'José', secretFriend: '', selected: false, gender: 'Masculino', avatar: 'https://image.flaticon.com/icons/png/512/1090/premium/1090783.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Luisa', secretFriend: '', selected: false, gender: 'Femenino', avatar: 'https://image.flaticon.com/icons/png/512/921/921094.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Hugo', secretFriend: '', selected: false, gender: 'Masculino', avatar: 'https://image.flaticon.com/icons/png/512/921/921108.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Mechis', secretFriend: '', selected: false, gender: 'Femenino', avatar: 'https://image.flaticon.com/icons/png/512/921/921126.png' },
    // tslint:disable-next-line: max-line-length
    { name: 'Martin', secretFriend: '', selected: false, gender: 'Masculino', avatar: 'https://image.flaticon.com/icons/png/512/921/921077.png' }
  ];

  constructor() { }

  getFamily() {
    return this.family;
  }
}
