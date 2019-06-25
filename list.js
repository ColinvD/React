import React, { Component } from 'react';
class List extends Component{



  constructor(){
    super();

    this.state = {
    };


  }

   render(){
      return (
         <div>
            {this.props.items.map(item => (
              <div onClick={() => this.props.onItemClicked(item)}>{item.label}</div>
            ))}
         </div>
      );
   }
}
export default List;
