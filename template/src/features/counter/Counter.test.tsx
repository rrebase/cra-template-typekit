import { screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import React from "react";
import counterReducer, { increment, decrement } from "./CounterSlice";
import { renderWithRedux, rootInitialState } from "utils/test-helpers";

test("displays zero as initial value", () => {
  renderWithRedux(<Counter />);
  expect(screen.getByText("0")).toBeVisible();
});

test("calls increment on click", () => {
  const { mockStore } = renderWithRedux(<Counter />);
  fireEvent.click(screen.getByText(/increment/i));
  expect(mockStore.getActions()).toEqual([{ type: increment.type }]);
});

test("calls decrement on click", () => {
  const { mockStore } = renderWithRedux(<Counter />);
  fireEvent.click(screen.getByText(/decrement/i));
  expect(mockStore.getActions()).toEqual([{ type: decrement.type }]);
});

test("increases number by one", () => {
  expect(
    counterReducer({ ...rootInitialState.counter, value: 1 }, increment)
  ).toEqual({ ...rootInitialState.counter, value: 2 });
});

test("decreases number by one", () => {
  expect(
    counterReducer({ ...rootInitialState.counter, value: 1 }, decrement)
  ).toEqual({ ...rootInitialState.counter, value: 0 });
});
