import { createSlice } from "@reduxjs/toolkit";

const credit = createSlice({
  name: "credit",
  initialState: {
    credit: {
      cost: 10000000,
      firstPayment: 10,
      rate: 18,
      month: 6,
    },
  },
  reducers: {
    setValue: (state, { payload }) => {
      state.credit = payload;
      //   state.credit.cost = payload.cost;
      //   state.credit.firstPayment = payload.firstPayment;
      //   state.credit.rate = payload.rate;
      //   state.credit.month = payload.month;
    },
  },
});

export const { setValue } = credit.actions;

export default credit.reducer;
