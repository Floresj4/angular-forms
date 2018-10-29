export class Account {

  security: {};

  // would never pass passwords around like this, but just for
  // the sample project
  constructor(public firstname: string,
              public lastname: string,
              public accountType: string,
              public email: string,
              public password: string,
              public confirm: string) {
  }

  setSecurity(security: {}) {
    this.security = security;
  }
}
