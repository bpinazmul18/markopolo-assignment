import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialDashboardState } from '../Models/Dashboard.ts';

const initialDashboardState: IInitialDashboardState = {
  searching: '',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialDashboardState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<IInitialDashboardState['searching']>) => {
      return {
        ...state,
        searching: action.payload,
      };
    },
  },
});

export const { setQueryParams } = dashboardSlice.actions;
export default dashboardSlice.reducer;
