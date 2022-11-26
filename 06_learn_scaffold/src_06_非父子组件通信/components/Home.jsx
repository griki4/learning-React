import React, {Component} from 'react';
import HomeInfo from "./HomeInfo";
import HomeBanner from "./HomeBanner";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeInfo/>
                <HomeBanner/>
            </div>
        );
    }
}

export default Home;
