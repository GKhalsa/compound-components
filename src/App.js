import React, {Component, createContext} from 'react';
import './App.css';


// class Tabs extends Component {
//
//     state = {
//         activeIndex: 0
//     };
//
//     changeActiveIndex = (index) => {
//         this.setState({activeIndex: index})
//     };
//
//     render(){
//         return (
//             <div className="tabs__container">
//
//                 <div className="tabs">
//                     {this.props.data.map((data, index) => {
//                         return (
//                             <div className={this.state.activeIndex === index ? "tab active": "tab"} key={index} onClick={() => this.changeActiveIndex(index)}>
//                                 {data.label}
//                             </div>
//                         )
//                     })}
//                 </div>
//
//                 <div className="tabs__content">
//                     {this.props.data[this.state.activeIndex].content}
//                 </div>
//
//             </div>
//         )
//     }
//
// }

class Tabs extends Component {

    state = {
        activeIndex: null,
        changeActiveIndex: (activeIndex) => this.setState({activeIndex})
    };

    render(){
        return this.props.children
    }
}

class TabList extends Component {
    render(){
        return this.props.children
    }
}

class Tab extends Component {
    render(){
        return this.props.children
    }
}

class TabPanel extends Component {
    render(){
        return this.props.children
    }
}

class Panel extends  Component {
    render(){
        return this.props.children
    }
}

class App extends Component {


    render() {

        return (
            <div className="App">
                <Tabs>

                    <TabList>
                        <Tab>Food</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Best Friends</Tab>
                    </TabList>

                    <TabPanel>
                        <Panel>Burritos, Pizza, Kale</Panel>
                        <Panel>Topo Chico, Diet Coke</Panel>
                        <Panel>Dan Abromov, Adele</Panel>
                    </TabPanel>

                </Tabs>
            </div>
        );
    }
}

export default App;
