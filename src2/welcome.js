export class Welcome{
  heading = 'Welcome to My Aurelia App, METCS651!';
  firstName = 'Raymond';
  lastName = 'Wu';

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    alert(`Welcome, ${this.fullName}!`);
  }
}