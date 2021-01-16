import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from './components/Sidebar/index.jsx'
import { hot } from 'react-hot-loader/root';
import '../src/Styles.css'

function App() {
    return (
        <>
            <SideBar />
        </>
    )
}

export default hot(App);