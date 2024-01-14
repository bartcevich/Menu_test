import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type foodsState = {
    "label": string,
    "value": {
         [key: string]: number,
        }
    "Image": string,
}

const initialState: foodsState[] = [{
    "label": '111',
    "value": {},
    "Image": '222',
  }];

// export const getFoods = createAsyncThunk<IUser[], undefined, { state: RootState }>(
// 'user/getUsers',
// async (undefined, thunkAPI) => {
//     const token = thunkAPI.getState().auth.auth.token ?? '';
//     return await userRequest.getUsers(token);
// }
// );

export const foodsSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        addFood:  (state, action) => {
            console.log('state=', ...state, 'action=', action.payload);
            state = [
                ...state,
                action.payload, 
            ]
            console.log('state2=', ...state);
          },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addFood(getUsers.fulfilled, (state, action) => {
    //       state.foods = action.payload;
    //     })   
    // },
  });

  export const selectAllFoods = (state: RootState): foodsState[] => state.foods;


  export const { addFood } = foodsSlice.actions;
  export default foodsSlice.reducer;