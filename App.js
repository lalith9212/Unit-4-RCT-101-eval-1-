import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);

    this.state={

      newItem:"",
      list:[]
    }
  }
}



addItem();{
  const newItem={
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };

  const list = {...this.state.list};

  list.push(newItem);

  this.setstate({
    list,
    newItem:""
  })
}

deleteItem(id);{
  const list = [...this.state.list];

  const updateList = list.filter(item => item.id !== id);

  this.setstate({list: updateList});
}

function App() {
  return <div className="App">
   <div>
     Add an Item...
     <br/>
     <input type="text" placeholder="Type item here..." value={this.state.newItem}
     onChange={e => this.updateInput("newItem", e.target.value)}
     />
     <button
     onClick={() => this.addItem()}>
       Add
     </button>
     <br/>
     <ul>
       {this.state.list.map(item =>{
         return(
          <li key={item.id}>
          {item.value}
          <button
          onClick={() => this.deleteItem(item.id)}
          >

            </button>
          </li>
         )
       })}
     </ul>
   </div>
  </div>;
}

export default App;
