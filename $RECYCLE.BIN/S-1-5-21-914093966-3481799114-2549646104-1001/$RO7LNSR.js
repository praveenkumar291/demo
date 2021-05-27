import NavBar from '.Navbar'
import { Children } from 'react';
const Layout=({children})=()=>{
    return(
        <>

        <NavBar/>
        {Children}

        </>
    )
}
export default Layout;