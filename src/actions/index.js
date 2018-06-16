//Action constants
export const GET_REQUEST_COMMODITIES = 'GET_REQUEST_COMMODITIES';
export const GET_SUCCESS_COMMODITIES = 'GET_SUCCESS_COMMODITIES';
export const GET_FAILURE_COMMODITIES = 'GET_FAILURE_COMMODITIES';

// Action creators return a consistent "command" object.
export const getRequestCommodities = () => ({
  type: GET_REQUEST_COMMODITIES
});
export const getSuccessCommodities = (dataset) => {
  return {
    type: GET_SUCCESS_COMMODITIES,
    payload: dataset
  };
};
export const getFailureCommodities = err => ({
  type: GET_FAILURE_COMMODITIES,
  err
});

export const fetchCommodities = options => dispatch => {
	dispatch(getRequestCommodities())
	const { socket } = options;
  delete options.socket;
  // https://www.quandl.com/api/v3/datasets/WIKI/FB/data.csv?api_key=YOURAPIKEYHERE
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=&APPID=`)
    .then((response) => {
      
      
      if (response.json) {
        response.json().then((value) => {
          console.log("response value", );
          dispatch(getSuccessCommodities(value.list))
        })
        
      }
    })
    socket.emit(GET_SUCCESS_COMMODITIES, options);
}
