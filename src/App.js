import React from "react";
import Header from "./component/header";
import Body from "./component/body";

class App extends React.Component{
    render() {
        return(
            <body className="body">
            <header>
                <Header/>
            </header>
            <p>ㅤ</p>
            <p>ㅤ</p>
            <main>
                <Body/>
            </main>
            </body>
        )
    }
}

export default App;