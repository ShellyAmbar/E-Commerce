import {action, makeAutoObservable, observable} from "mobx";
import User from "./interfaces";

class UserStore {
  user: User = {name: "", id: "0", isLogedIn: false};

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      setUser: action,
      login: action,
      logout: action,
    });
  }

  setUser(user: User) {
    this.user = user;
  }

  login() {
    this.user.isLogedIn = true;
  }

  logout() {
    this.user.isLogedIn = false;
  }
}

export const User = new UserStore();
