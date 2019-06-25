import React, { Component } from 'react';
import List from './list';

class App extends Component{
   render(){
     const items = [{label:"item 1", value: 34}, {label:"item 2", value: 34}, {label:"item 3", value: 34}];

      return(
         <div>
            <h1 id = "Text">Hello World</h1>
            <List
              items={items}
              onItemClicked={item => console.log(item)}
            />
         </div>
      );
   }
}
export default App;
