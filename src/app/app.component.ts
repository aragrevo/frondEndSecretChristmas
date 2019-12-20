import { Component, OnInit } from '@angular/core';
import { MembersService } from './services/members.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Family Christmas';

  showCard = false;
  family = [];
  genderFriend = '';

  constructor(private membersService: MembersService) { }


  ngOnInit() {
    this.family = this.membersService.getFamily();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  requestFriend(algo: string) {
    console.log(algo);
    let name = algo.toLowerCase();
    const chart = name[0];
    name = name.replace(chart, chart.toUpperCase());

    const exists = this.family.find(x => {
      return x.name === name;
    });
    if (!exists) {
      const messageExists = `${name}  no existe en nuestra Familia! \uD83D\uDE1C`;
      M.toast({ html: messageExists });
      alert(messageExists);
      return;
    }

    const free = this.family.find(x => {
      this.genderFriend = x.gender;
      return x.secretFriend !== '' && x.name === name;
    });

    if (free) {
      const messageFree = `${name} ya tienes amiguito!
      Solo te puedo decir que es  ${this.genderFriend}  \uD83D\uDE1C`;
      M.toast({ html: messageFree });
      alert(messageFree);
      this.genderFriend = '';
      return;
    }
    // tslint:disable-next-line: no-shadowed-variable
    const freeNames = this.family.filter(free => {
      return free.selected === false && free.name !== name;
    });

    const randomNumber = this.getRandomInt(0, freeNames.length);
    const secret = freeNames[randomNumber].name;
    const message = `Tú amigo secreto es:
    \u2764\uFE0F  ${secret}`;
    alert(message);
    M.toast({ html: message });
    // Actualiza secretFriend
    // Actualiza selected
    this.family.forEach(member => {
      if (member.name === secret) {
        member.selected = true;
      }
      if (member.name === name) {
        member.secretFriend = secret;
      }
    });
  }

}
