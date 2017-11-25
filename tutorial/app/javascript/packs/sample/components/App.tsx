import * as React from 'react';
import {connect} from 'react-redux';
import { addCounterAction } from '../actions';
const App = (that: any) => (
    <div>
        {that.state.id}
        {that.state.texts}
        <br />
        <button onClick={() => { that.dispatch(addCounterAction('aaaa')); }}>1 up</button>
    </div>
);

const mapStateToProps = (state: number)  => {
    return {state};
};

export default connect(mapStateToProps)(App);
