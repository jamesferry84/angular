export class DemoAuthService {
  loggedIn = false;

  isAuthenicated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('logged in: ', this.loggedIn);
        resolve(this.loggedIn);
      }, 1000)
    })

    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log('logged in: ', this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log('logged in: ', this.loggedIn);
  }
}
