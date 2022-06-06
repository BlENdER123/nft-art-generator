import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {SnackbarProvider} from "notistack";
import {StyledEngineProvider} from "@mui/material/styles";

//import Alert from "./components/Alert/Alert";
import "./index.scss";
import "bootstrap";
import App from "./App";

import {Buffer} from "buffer";
global.Buffer = Buffer;

import { rootReducer } from "./sdk/lib/redux";

export const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<StyledEngineProvider injectFirst>
				<SnackbarProvider
					maxSnack={3}
					autoHideDuration={10000}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					content={(key, {message, type}) => (
						<Alert id={key} message={message} type={type} />
					)}
				>
					{/* <React.StrictMode> */}
					<button style={{"zIndex":"100"}} onClick={()=>{
						console.log(store.getState().reducerEditor.projectState);
					}}>LOG</button>
					<App />
					{/* </React.StrictMode> */}
				</SnackbarProvider>
			</StyledEngineProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root"),
);
