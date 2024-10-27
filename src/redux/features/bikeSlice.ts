import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Bike {
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean; // Required
  cc: number;
  year: number;
  model: string;
  brand: string;
  photo: string;
}

interface BikeState {
  bikes: Bike[];
}

const initialState: BikeState = {
  bikes: [], // Initial empty array
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    addBike: (state, action: PayloadAction<Bike>) => {
      state.bikes.push(action.payload); // Add new bike to the array
    },
  },
});

export const { addBike } = bikeSlice.actions;
export default bikeSlice.reducer;
