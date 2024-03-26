import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "JIS_SWE_PROJECT_REDUX_STATE_MANAGER_DELETING_IT_WILL_DELETE_ALL_THE_REDUX_STATE",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export const persistor = persistStore(store);
