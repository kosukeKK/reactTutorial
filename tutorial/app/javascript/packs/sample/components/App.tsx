import * as React from 'react'
import {connect} from 'react-redux';
import { addCr } from '../actions';
const App = (that :any) => (
    <div>
        {that.state.id}
        Hello World!
        <button onClick={e => {that.dispatch(addCr());}}/>
    </div>
);

const mapStateToProps = (state :number)  => {
    return {state};
};

export default connect(mapStateToProps)(App);
