import React from 'react';
import { connect } from 'react-redux';

class Total extends React.Component {
    constructor(props){
        super(props);         
        this.state = { };
    }
    render() {
        const {count} = this.props;
        return (
            <div>
                <h4>{count}</h4>
            </div>
        );
    }
}
const mapStateToProps = store => ({
    count: store.changeState.count
  });
export default connect(mapStateToProps)(Total);