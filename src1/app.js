export class Welcome{
  heading = 'Welcome to My App, METCS651!';
  firstName = 'Raymond';
  lastName = 'Wu';

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    alert(`Hello, ${this.fullName}!`);
  }
  
}
