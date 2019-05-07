import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickAddCountButton, clickRemoveCountButton } from './actions/count-actions';
import { addList } from './actions/todoList-actions';
import Total from './Total';
import TotalLastOfList from './TotalLastOfList';

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state= { 
      value: ''     
    };
    console.log(props);
  }
  render() {    
    const { clickAddCountButton, clickRemoveCountButton, addList, ofList } = this.props;
    return (
      <div className="App"> {this.state.value}
        <p>{this.props.count}</p>
        <div>
          <button type="button" onClick={() => clickAddCountButton()}>Adicionar</button> 
          <button type="button" onClick={() => clickRemoveCountButton()}>Remover</button>
        </div>
        <Total />
        <div> {ofList.length}
          <ul>
          {ofList.map(item =>(
            <li key={item.id}>{item.name}</li>
          ))} 
          </ul> 
          <input type="text" onChange={(e) => this.setState({value: e.target.value})} /> 
          <button onClick={() => addList(this.state.value)}>Inserir</button>
        </div>
        <div>
          <TotalLastOfList></TotalLastOfList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  count: store.changeState.count,
  ofList: store.addState.ofList
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
    clickAddCountButton, 
    clickRemoveCountButton,
    addList
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);
