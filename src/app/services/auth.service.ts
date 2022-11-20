import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signUp(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkzgfXTmHUpjb05AbiXVR7d5L3-8iF3jk',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  }

  signIn(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkzgfXTmHUpjb05AbiXVR7d5L3-8iF3jk',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
      )
  }
}
