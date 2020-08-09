import {
  FETCHPENDING,
  FETCHSUCCESS,
  FETCHERROR,
} from "./action-types/display-actions";

export const fetchpending = () => ({
  type: FETCHPENDING,
});

export const fetchsuccess = (payload) => ({
  type: FETCHSUCCESS,
  payload,
});

export const fetcherror = (error) => ({
  type: FETCHERROR,
  error,
});
