import { Provider } from 'react-redux';
import { store } from "../state/store";
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
<           Component {...pageProps} /> 
        </Provider>            
    )
}