export class Account {

  // would never pass passwords around like this, but just for
  // the sample project
  constructor(public firstname: string,
              public lastname: string,
              public accountType: string,
              public email: string,
              public password: string,
              public confirm: string) {
  }

  hiddenPassword() {
    let hidden = '';
    const length = this.password.length;

    for (let i = 0; i < length; i++) {
      hidden += '*';
    }

    return hidden;
  }
}
