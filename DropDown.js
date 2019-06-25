import React, { Component } from 'react';
class DropDown extends Component{
  constructor(){
    super();

    this.state = {
      showMenu: false,
      buttons: 0,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  showMenu(event){
    event.preventDefault();

    this.setState({ showMenu: true }, () =>{
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event){
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({showMenu: false}, () =>{
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  changeState(event){
    var temp = parseInt(event.target.id, 10);
    this.setState({buttons: temp}, function (){
      this.changeText(event);
    })
  }

  changeText(event){
    var text = document.getElementById('Text');
    switch (this.state.buttons) {
      case 1:
        text.textContent = "No";
        break;
      case 2:
        text.textContent = "OH MY FUCKING GOD JUST WORK";
        break;
      case 3:
        text.textContent = "Fuck";
        break;
      case 4:
        text.textContent = "Yes";
        break;
      case 5:
        text.textContent = "Happy";
        break;
      default:
        text.textContent = "Hello World";
        break;
      }
  }

  render(){
    return(
      <div>
        <button onClick={this.showMenu}>
          DropDown
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element)=>{
                  this.dropdownMenu = element;
                }}
              >
                <button id = "1" onClick={this.changeState}> Menu item 1 </button>
                <button id = "2" onClick={this.changeState}> Menu item 2 </button>
                <button id = "3" onClick={this.changeState}> Menu item 3 </button>
                <button id = "4" onClick={this.changeState}> Menu item 4 </button>
                <button id = "5" onClick={this.changeState}> Menu item 5 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default DropDown;



/*

x  - Hoe werkt React met State? Kun je een voorbeeld geven?
    Als de state word aangepast update react de pagina. let op als je de state wijzigd in een functie en daarna met die gewijzigde functie verder wil gaan gebruik dan a callback method.

x  - Wat doe je met props? Kun je een voorbeeld geven?
    Props zijn alleen voor read only. pas nooit 1 van die variables aan in de functie.

O  - Hoe renderen we een lijst met gegevens (bijvoorbeeld een Array met namen)

x  - Hoe handel je een event af, zoals bijvoorbeeld onClick
    Zet er een eventlistener op

O  - Hoe filter je een lijst met gegevens (bijvoorbeeld een Array met namen). Maak bijvoorbeeld een input field waar je iets intypt. onChange of onKeyUp ga je de array filteren.

O  - Zorg ervoor dat je een menu open en dicht kan maken door middel van state.

O  - Hoe maak je een Class aan

O  - Hoe werken forEach(), map(), filter(), sort()

O  - Hoe werkt de destructuring assignment bij een Object?

O  - Hoe werkt de destructuring assignment bij een Array?

O  - Hoe werken fat arrow functies en hoe maak ik die aan?


*/
