const GET_GREATING = 'hello-rails-react/greeting/GET_GREETING';

const initialValue = {};

const getGreeting = (payload) => ({
  type: GET_GREATING,
  payload,
});

const getGreetingThunk = () => async (dispatch) => {
    const request = await fetch('v1/greetings');
    const response = await request.json();
    const data = await response.greeting;
  if (data) {
    dispatch(getGreeting(data.message));
  }
};

const greetingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_GREATING:
      return {
        ...state,
        greetings: action.payload,
      };
    default:
      return state;
  }
};

export { greetingReducer, getGreetingThunk };