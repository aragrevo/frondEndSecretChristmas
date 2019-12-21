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
    this.membersService.getFamily().subscribe(resp => {
      this.family = [...resp.members];
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  onClick(algo: string) {
    if (algo === '') {
      const messageVacio = `Ingresa un nombre! \uD83D\uDE1C`;
      alert(messageVacio);
      return;
    }

    let name = algo.toLowerCase();
    const chart = name[0];
    name = name.replace(chart, chart.toUpperCase());

    const exists = this.family.find(x => {
      return x.name === name;
    });

    if (!exists) {
      const messageExists = `${name}  no existe en nuestra Familia! \uD83D\uDE1C`;
      alert(messageExists);
      return;
    }

    const free = this.family.find(x => {
      this.genderFriend = x.gender;
      return x.secretFriend !== '' && x.name === name;
    });

    if (free) {
      const messageFree = `${name} ya tienes amiguito!
      \uD83D\uDE1C`;
      alert(messageFree);
      this.genderFriend = '';
      return;
    }

    this.requestFriend(name);
  }

  requestFriend(name: string) {
    const freeNames = this.family.filter(free => {
      return free.selected === false && free.name !== name;
    });

    const randomNumber = this.getRandomInt(0, freeNames.length);
    const secret = freeNames[randomNumber].name;
    const message = `Tú amigo secreto es:
    \u2764\uFE0F  ${secret}`;
    alert(message);
    this.family.forEach(member => {
      if (member.name === secret) {
        member.selected = true;
        this.membersService.updateMember(member).then(respo => {
          console.log(respo);
        });
      }
      if (member.name === name) {
        member.secretFriend = secret;
        this.membersService.updateMember(member).then(respon => {
          console.log(respon);
        });
      }
    });


  }

}
