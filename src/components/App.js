import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import 'bulma/css/bulma.css'
import '../style.css'

class App extends React.Component {
    render(){
        return (
            <div>
                <Header title={'Manish'}  />
                <Main title={'React is Fun'}/>
                <Footer />
            </div>
        )
    }
}

export default App