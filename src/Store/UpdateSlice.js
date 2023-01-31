import { createSlice } from "@reduxjs/toolkit";

const UpdateInitialState = {
  BasicInfo: true,
  Address: false,
  EducationLevel: false,
  MaritalStates: false,
  Emergency: false,
  agreement : false
};

const updateSlice = createSlice({
  name: "update profile",
  initialState: UpdateInitialState,
  reducers: {
      UpdateProfiles(state, action) {
          state.BasicInfo = action.payload.BasicInfo;
          state.Address = action.payload.Address;
          state.EducationLevel = action.payload.EducationLevel;
          state.MaritalStates = action.payload.MaritalStates;
          state.Emergency = action.payload.Emergency;
          state.agreement = action.payload.agreement;
    },
  },
});

export const updateAction = updateSlice.actions;
export default updateSlice.reducer;
