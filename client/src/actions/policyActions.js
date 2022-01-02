import { ADD_POLICY, FIND_ALL_POLICY } from './types';
import axios from 'axios';

export const findPolicy = () => async (dispatch) => {
  try {
    console.log('You clicked on list all policy: ');
    const users = await axios.get('/premium/find');
    dispatch({
      type: FIND_ALL_POLICY,
      payload: users.data,
    });
  } catch (err) {
    dispatch({
      type: FIND_ALL_POLICY,
      payload: err.response.data,
    });
  }
};

export const addPolicy = (data, navigate) => async (dispatch) => {
  try {
    const users = await axios.post('/premium/add', data);
    console.log('==save data ', users);
    window.flash('Policy data saved');
    dispatch({
      type: ADD_POLICY,
      payload: users.data,
    });
    navigate('/');
  } catch (err) {
    window.flash(err.response.data.content);
    dispatch({
      type: ADD_POLICY,
      payload: err.response.data,
    });
  }
};
