import { Component } from '@angular/core';

import { QuizPage } from '../quiz/quiz';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = QuizPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
