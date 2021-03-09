import 'react-pro-sidebar/dist/css/styles.css';
import { hot } from 'react-hot-loader/root';
import '../src/Styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Sidebar/Navbar/index'
import { routes } from "./routes";

function App() {
    return (
        <>
            <Router >

                <Navbar />
                <Switch>
                    {routes.map((item) => {
                        return (<Route path={item.path} exact component={item.component} />)
                    })}

                </Switch>
            </Router >
        </>
    )
}

export default hot(App);