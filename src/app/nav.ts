export class Nav {
  public name: string;
  public dropdown: string[];

  constructor(name: string, dropdown: string[] = null) {
    this.name = name;
    if (dropdown) {
      this.dropdown = dropdown;
    }
  }
}