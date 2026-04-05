import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      state.push(action.payload);
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    IncreamentQty : (state , action) =>{
        const itemIndex = state.findIndex((item) => item.id === action.payload.id);
        if (itemIndex !== -1) {
            state[itemIndex].qty += 1;
        }
    },
     DecrementQty : (state , action) =>{
        const itemIndex = state.findIndex((item) => item.id === action.payload.id);
        if (itemIndex !== -1) {
            state[itemIndex].qty -= 1;
        }
    }
  },
});

export const { AddItem ,RemoveItem, IncreamentQty,DecrementQty} = cartSlice.actions;
export default cartSlice.reducer;