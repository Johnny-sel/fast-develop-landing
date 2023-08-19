import {Component} from '@angular/core';

type Service = {
  icon: string;
  title: string;
  desc: string;
  content: string;
  tags: string[];
  startSteps: string[];
  isReady: boolean;
};

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
})
export class PreviewComponent {
  services: Service[] = [
    {
      icon: 'pi-user',
      title: 'Auth service for production',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      `,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      `,
      tags: ['oauth2', '2fa', 'google', 'twitter', 'telegram'],
      startSteps: [
        'git clone git@github.com:Johnny-sel/fast-develop-auth.git',
        'yarn install',
        'yarn start',
      ],
      isReady: true,
    },
    {
      icon: 'pi-phone',
      title: 'Feedback service for customer',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      `,
      content: ``,
      tags: [],
      startSteps: [''],
      isReady: false,
    },
    {
      icon: 'pi-whatsapp',
      title: 'Team private chat',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      `,
      content: ``,
      tags: [],
      startSteps: [''],
      isReady: false,
    },
    {
      icon: 'pi-book',
      title: 'Generate docs',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      `,
      content: ``,
      tags: [],
      startSteps: [''],
      isReady: false,
    },
    {
      icon: 'pi-eye',
      title: 'Landing for presentation product',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      `,
      content: ``,
      tags: [],
      startSteps: [''],
      isReady: false,
    },
    {
      icon: 'pi-file-edit',
      title: 'Log system',
      desc: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      `,
      content: ``,
      tags: [],
      startSteps: [''],
      isReady: false,
    },
  ];

  selectedService?: Service;
  visible: boolean = false;

  showDialog(service: Service) {
    this.selectedService = service;
    this.visible = true;
  }
}
