
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'trust-score',
    loadChildren: () => import('./trust-score/trust-score.module').then(m => m.TrustScorePageModule)

  },
  {
    path: 'user-home',
    loadChildren: () => import('./user-home/user-home.module').then(m => m.UserHomePageModule)
  },
  {
  path: 'notifications',
  loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
{
  path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
},
{
  path: 'pref-partner',
    loadChildren: () => import('./pref-partner/pref-partner.module').then(m => m.PrefPartnerPageModule)
},
{
  path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
},

{
  path: 'pref-part',
    loadChildren: () => import('./pref-part/pref-part.module').then(m => m.PrefPartPageModule)
},

{
  path: 'ed-car',
    loadChildren: () => import('./ed-car/ed-car.module').then(m => m.EdCarPageModule)
},
{
  path: 'family-details',
    loadChildren: () => import('./family-details/family-details.module').then(m => m.FamilyDetailsPageModule)
},

  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'edit-preference',
    loadChildren: () => import('./edit-preference/edit-preference.module').then( m => m.EditPreferencePageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'education-career',
    loadChildren: () => import('./education-career/education-career.module').then( m => m.EducationCareerPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'private-chat',
    loadChildren: () => import('./private-chat/private-chat.module').then( m => m.PrivateChatPageModule)
  },
  {
  path: 'notifications',
  loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
{
  path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
},
{
  path: 'pref-partner',
    loadChildren: () => import('./pref-partner/pref-partner.module').then(m => m.PrefPartnerPageModule)
},
{
  path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
},

{
  path: 'pref-part',
    loadChildren: () => import('./pref-part/pref-part.module').then(m => m.PrefPartPageModule)
},

{
  path: 'ed-car',
    loadChildren: () => import('./ed-car/ed-car.module').then(m => m.EdCarPageModule)
},
{
  path: 'family-details',
    loadChildren: () => import('./family-details/family-details.module').then(m => m.FamilyDetailsPageModule)
},

  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'edit-preference',
    loadChildren: () => import('./edit-preference/edit-preference.module').then( m => m.EditPreferencePageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'education-career',
    loadChildren: () => import('./education-career/education-career.module').then( m => m.EducationCareerPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'privacy-settings',
    loadChildren: () => import('./additional-pages/privacy-settings/privacy-settings.module').then( m => m.PrivacySettingsPageModule)
  },

  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  }



  // {
  //   path: 'tab1',
  //   loadChildren: () => import('./tabs/tab1/tab1.module').then( m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('./tabs/tab2/tab2.module').then( m => m.Tab2PageModule)
  // },
  // {
  //   path: 'tabs2',
  //   loadChildren: () => import('./tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }