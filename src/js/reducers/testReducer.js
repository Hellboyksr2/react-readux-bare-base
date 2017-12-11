export default function reducer(state={
    values : ["a", "b", "c"]
}, action) {
    var returnValue = state;
    switch (action.type) {
      case "GET_VALUES": {
        returnValue = {...state};
        break;
      }
      default : {
        returnValue = {...state};
        break;
      }
    }

    return returnValue;
}