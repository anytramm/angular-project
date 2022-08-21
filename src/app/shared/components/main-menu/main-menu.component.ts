import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  url: string;
  matIcon: string;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public menuItems: Array<MenuItem> = [
    {
      name: 'Players',
      url: 'players',
      matIcon: 'person_outline'
    },
    {
      name: 'Teams',
      url: 'teams',
      matIcon: 'people_outline'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
