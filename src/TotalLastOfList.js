import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalLastOfList extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    getLastData(ofList){
        if (ofList.length > 0){
            return ofList[ofList.length - 1];
        }        
        return {};
    }

    render(){
        const { ofList } = this.props;        
        let data = this.getLastData(ofList);        
        return (
            <div>
            { ofList.length > 0 ?                
                (   
                    
                    <div>
                        <div>Último Id inserido: {data.id}</div>
                        <div>Último Nome inserido: {data.name}</div>
                    </div>                 
                )
                :
                (
                    <div>Nenhum item adicionado</div>
                )    
            }
            </div>
        );
    }
}

const mapStateToProps = store => ({    
    ofList: store.addState.ofList
  });

export default connect(mapStateToProps)(TotalLastOfList);