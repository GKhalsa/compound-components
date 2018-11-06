import React, {Component} from 'react';
import './App.css';


class Tabs extends Component {

    state = {
        activeIndex: 0
    };

    changeActiveIndex = (index) => {
        this.setState({activeIndex: index})
    };

    render(){
        return (
            <div className="tabs__container">

                <div className="tabs">
                    {this.props.data.map((data, index) => {
                        return (
                            <div className={this.state.activeIndex === index ? "tab active": "tab"} key={index} onClick={() => this.changeActiveIndex(index)}>
                                {data.label}
                            </div>
                        )
                    })}
                </div>

                <div className="tabs__content">
                    {this.props.data[this.state.activeIndex].content}
                </div>

            </div>
        )
    }

}

class App extends Component {


    render() {

        const tabData = [
            {label: "Food", content: "Burritos, Pizza, Kale"},
            {label: "Drinks", content: "Topo Chico, Diet Coke"},
            {label: "Best Friends", content: "Dan Abramov, Adele"}
        ];

        return (
            <div className="App">
                <Tabs data={tabData}/>
            </div>
        );
    }
}

export default App;
