import axios from 'axios';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_START' });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => 
                dispatch({ type: 'FETCH_SMURFS_SUCCESS', payload: res.data })
            )
            .catch(err => 
                dispatch({ type: 'FETCH_SMURFS_FAILURE', payload: `Error ${err.response.status}: ${err.response.data}`})
                )
    }
}

export const addSmurf = newSmurf => dispatch => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => 
        dispatch({ type: 'ADD_NEW_SMURF', payload: res.data })
        )
      .catch(err =>
        console.log('error?', err)
        )
}