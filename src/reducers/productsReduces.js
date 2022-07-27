//cada reducer tiene su propio state

const initialState = {
  product: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
