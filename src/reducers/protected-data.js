// import {
//     FETCH_PROTECTED_DATA_SUCCESS,
//     FETCH_PROTECTED_DATA_ERROR
// } from '../actions/protected-data';

// const initialState = {
//     data: 'Rosebud',
//     error: null
// };

// export default function reducer(state = initialState, action) {
//     if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
//         console.log('protected-data state: ', state)
//         console.log('protected-data action: ', action)
//         return Object.assign({}, state, {
//             data: action.data,
//             error: null
//         });
//     } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
//         return Object.assign({}, state, {
//             error: action.error
//         });
//     }
//     return state;
// }
