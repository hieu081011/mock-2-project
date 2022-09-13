import './global.scss'
import Navigation from './Components/Admin/Navigation/Navigation'
import AppBar from './Components/Admin/AppBar/AppBar'
import Router from './Router/Router'
import { useAuth } from './context/ContextProvider'
import Header from './Components/User/Header/Header'
const App = () => {
    const { auth } = useAuth()
    const role = auth?.user?.role
    return (<>
        <div className={role === 'admin' ? 'admin-page-container' : 'user-page-container'}>
            {role === 'admin' ? <>
                <Navigation />
                <AppBar />
            </> : <Header />
            }
            <div className={role === 'admin' ? 'admin-page-content' : 'user-page-content'}>
                <Router />
            </div>
        </div>
    </>
    )
}
export default App