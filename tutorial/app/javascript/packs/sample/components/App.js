import React from 'react'
import {connect} from 'react-redux';
import { addCr } from '../actions';
const App = (that) => (
    <div>
        {that.state.id}
        Hello World!
        <button onClick={e => {that.dispatch(addCr());}}/>
    </div>
);

const mapStateToProps = (state)  => {
    return {state};
};

export default connect(mapStateToProps)(App);
