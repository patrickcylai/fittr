import { Component } from '@angular/core';

import { StatsPage } from '../stats/stats';
import { CalendarPage } from '../calendar/calendar';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHomeRoot = HomePage;
  tabStatsRoot = StatsPage;
  tabCalendarRoot = CalendarPage;
  tabSettingsRoot = SettingsPage;

  constructor() {

  }
}
