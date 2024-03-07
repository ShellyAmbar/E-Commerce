import {action, makeAutoObservable, observable} from "mobx";

class ModalStore {
  isOpen: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      isOpen: observable,
      setIsOpen: action,
      onClose: action,
    });
  }

  setIsOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }
  onClose() {
    this.isOpen = false;
  }
}

export const Modal = new ModalStore();
