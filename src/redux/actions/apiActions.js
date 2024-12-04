import axios from 'axios';

// Action Types
export const LOGOUT = 'LOGOUT';

export const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE';
export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';

export const FETCH_ADDEVENT_REQUEST = 'FETCH_ADDEVENT_REQUEST';
export const FETCH_ADDEVENT_SUCCESS = 'FETCH_ADDEVENT_SUCCESS';
export const FETCH_ADDEVENT_FAILURE = 'FETCH_ADDEVENT_FAILURE';

export const FETCH_ENROLL_REQUEST = 'FETCH_ENROLL_REQUEST';
export const FETCH_ENROLL_SUCCESS = 'FETCH_ENROLL_SUCCESS';
export const FETCH_ENROLL_FAILURE = 'FETCH_ENROLL_FAILURE';

// Action Creators
export const fetchRegisterRequest = () => ({
  type: FETCH_REGISTER_REQUEST,
});

export const fetchRegisterSuccess = (user) => ({
  type: FETCH_REGISTER_SUCCESS,
  payload: user,
});

export const fetchRegisterFailure = (error) => ({
  type: FETCH_REGISTER_FAILURE,
  payload: error,
});

export const fetchloginRequest = () => ({
    type: FETCH_REGISTER_REQUEST,
  });
  
  export const fetchloginSuccess = (user) => ({
    type: FETCH_LOGIN_SUCCESS,
    payload: user,
  });
  
  export const fetchloginFailure = (error) => ({
    type: FETCH_REGISTER_FAILURE,
    payload: error,
  });
  
  export const fetcheventRequest = () => ({
    type: FETCH_EVENT_REQUEST,
  });
  
  export const fetcheventSuccess = (user) => ({
    type: FETCH_EVENT_SUCCESS,
    payload: user,
  });
  
  export const fetcheventFailure = (error) => ({
    type: FETCH_EVENT_FAILURE,
    payload: error,
  });

  export const fetchaddeventRequest = () => ({
    type: FETCH_ADDEVENT_REQUEST,
  });
  
  export const fetchaddeventSuccess = (user) => ({
    type: FETCH_ADDEVENT_SUCCESS,
    payload: user,
  });
  
  export const fetchaddeventFailure = (error) => ({
    type: FETCH_ADDEVENT_FAILURE,
    payload: error,
  });

  export const logoutUser = () => ({
    type: LOGOUT,
  });
  
  export const fetchenrollRequest = () => ({
    type: FETCH_ENROLL_REQUEST,
  });
  
  export const fetchenrollSuccess = (user) => ({
    type: FETCH_ENROLL_SUCCESS,
    payload: user,
  });
  
  export const fetchenrollFailure = (error) => ({
    type: FETCH_ENROLL_FAILURE,
    payload: error,
  });
  
// Async Action (API Call)
export const registerUser = (formData) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest());
    
    axios
      .post('/users', formData)  // Adjust the API URL as needed
      .then((response) => {
        dispatch(fetchRegisterSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchRegisterFailure(error.message));
      });
  };
};

export const loginUser = (formData) => {
    return (dispatch) => {
      dispatch(fetchloginRequest());
      
      axios
        .post('/users/login', formData)  // Adjust the API URL as needed
        .then((response) => {
           console.log("response---",response)
          dispatch(fetchloginSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchloginFailure(error.message));
        });
    };
  };

  export const event = () => {
    return (dispatch) => {
      dispatch(fetcheventRequest());
      
      axios
        .get('/events/events')  // Adjust the API URL as needed
        .then((response) => {
           console.log("response---",response)
          dispatch(fetcheventSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetcheventFailure(error.message));
        });
    };
  };

  export const addevent = (formData) => {
    return (dispatch) => {
      dispatch(fetchaddeventRequest());
      
      axios
        .post('/events/addevent',formData)  // Adjust the API URL as needed
        .then((response) => {
           console.log("response---",response)
          dispatch(fetchaddeventSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchaddeventFailure(error.message));
        });
    };
  };

  export const enroll = (req) => {
    return (dispatch) => {
      dispatch(fetchenrollRequest());
      
      axios
        .post('/users/enroll',req)  // Adjust the API URL as needed
        .then((response) => {
           console.log("response---",response)
          dispatch(fetchenrollSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchenrollFailure(error.message));
        });
    };
  };