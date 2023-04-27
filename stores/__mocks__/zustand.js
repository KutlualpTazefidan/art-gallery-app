import { act } from "@testing-library/react";
const { create: actualCreate } = jest.requireActual("zustand");

const storeResetFns = new Set();

export const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

beforeEach(() => {
  act(() => storeResetFns.forEach((fn) => fn()));
});
