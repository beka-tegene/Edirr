import { configureStore } from "@reduxjs/toolkit";
import UpdateSlice from "./UpdateSlice";

const store = configureStore({
    reducer: {updateProfile: UpdateSlice}
});

export default store