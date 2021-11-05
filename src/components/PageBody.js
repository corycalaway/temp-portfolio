import React, {useState} from "react";
import About from "./pages/About";
import GamePortfolio from "./pages/GameDevelopment";
import Resume from "./pages/Resume";
import WebPortfolio from "./pages/WebDevelopment";


const PageBody = (props) => {

    

    const renderActivePage = () => {
        
        switch(props.activePage) {
            case "About":
                return <About />;
            case "Game Development":
                return <GamePortfolio />;
            case "Web Development":
                return <WebPortfolio />;
            case "Resume":
                return <Resume />;
        }
    }

    return (
        <>
        <div>
            {renderActivePage()}
        </div>
        </>
    )
}

export default PageBody