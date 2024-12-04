import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    FETCH_ADDEVENT_REQUEST,
    FETCH_ADDEVENT_SUCCESS,
    FETCH_ADDEVENT_FAILURE,
    FETCH_ENROLL_REQUEST,
    FETCH_ENROLL_SUCCESS,
    FETCH_ENROLL_FAILURE,
    LOGOUT,
  } from '../actions/apiActions';
  
  const initialState = {
    Registerloading: false,
    Registeruser: null,
    Registererror: null,
    Loginloading: false,
    Loginuser: null,
    Loginerror: null,
    Eventloading: false,
    Eventuser: null,
    Eventerror: null,
    AddEventloading: false,
    AddEventuser: null,
    AddEventerror: null,
    ENROLLloading: false,
    ENROLLuser: null,
    ENROLLerror: null,
  };
  
  const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REGISTER_REQUEST:
        return {
          ...state,
          Registerloading: true,
        };
      case FETCH_REGISTER_SUCCESS:
        return {
          ...state,
          Registerloading: false,
          Registeruser: action.payload,
        };
      case FETCH_REGISTER_FAILURE:
        return {
          ...state,
          Registerloading: false,
          Registererror: action.payload,
        };

        case FETCH_LOGIN_REQUEST:
        return {
          ...state,
          Loginloading: true,
        };
      case FETCH_LOGIN_SUCCESS:
        return {
          ...state,
          Loginloading: false,
          Loginuser: action.payload,
         
        };
      case FETCH_LOGIN_FAILURE:
        return {
          ...state,
          Loginloading: false,
          Loginerror: action.payload,
        };

        case FETCH_EVENT_REQUEST:
          return {
            ...state,
            Eventloading: true,
          };
        case FETCH_EVENT_SUCCESS:
          return {
            ...state,
            Eventloading: false,
            Event: action.payload,
           
          };
        case FETCH_EVENT_FAILURE:
          return {
            ...state,
            Eventloading: false,
            Event: action.payload,
          };

          case FETCH_ADDEVENT_REQUEST:
            return {
              ...state,
              AddEventloading: true,
            };
          case FETCH_ADDEVENT_SUCCESS:
            return {
              ...state,
              AddEventloading: false,
              AddEvent: action.payload,
             
            };
          case FETCH_ADDEVENT_FAILURE:
            return {
              ...state,
              AddEventloading: false,
              Addvent: action.payload,
            };

            case FETCH_ENROLL_REQUEST:
              return {
                ...state,
                enrollloading: true,
              };
            case FETCH_ENROLL_SUCCESS:
              return {
                ...state,
               enrollloading: false,
                enroll: action.payload,
               
              };
            case FETCH_ENROLL_FAILURE:
              return {
                ...state,
                enrollloading: false,
                enroll: action.payload,
              };

            case LOGOUT:
              return {
                ...state,
                Loginuser: null, // Reset the Loginuser state
              };
            
      default:
        return state;
    }
    
  };
  export default apiReducer;
  