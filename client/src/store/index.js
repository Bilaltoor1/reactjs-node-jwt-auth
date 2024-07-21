import { create } from "zustand";
import { authSlice } from "./slices/auth-slice";

export const useAppStore = create()((...a)=>({...authSlice(...a)}))