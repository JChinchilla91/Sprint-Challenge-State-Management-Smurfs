import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions/smurfActions';

const DisplaySmurfs = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            <h2>Occupants?</h2>
            {props.isFetching && (
                <p>Hol up!</p>
            )}
            {props.smurfs.map(smurfs => (
                <p key={smurfs.id}>{smurfs.name}, {smurfs.age}, {smurfs.height}</p>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.smurfs);
    return {
        smurfs: state.smurfs.smurfs
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(DisplaySmurfs);