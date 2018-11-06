import React, {Component, createContext} from 'react';
import './App.css';

const TabsContext = createContext();

class Tabs extends Component {

    state = {
        activeIndex: null,
        changeActiveIndex: (activeIndex) => this.setState({activeIndex})
    };

    render() {
        return (
            <TabsContext.Provider value={this.state}>
                <div className="tabs__container">
                    {this.props.children}
                </div>
            </TabsContext.Provider>
        )
    }
}

const TabList = ({children}) => (
    <div className="tabs">
        <TabsContext.Consumer>
            {
                context => {

                    let clonedChildren = React.Children.map(children, (child, index) => {
                        const isActive = index == context.activeIndex;
                        return React.cloneElement(child, {
                            isActive,
                            onActivate: () => context.changeActiveIndex(index)
                        })
                    });

                    return clonedChildren
                }
            }
        </TabsContext.Consumer>
    </div>
);

const Tab = ({isDisabled, isActive, onActivate, children}) => (
    <div onClick={isDisabled ? null : onActivate}
         className={isDisabled ? "tab disabled" : isActive ? "tab active" : "tab"}>

        {children}

    </div>
);


const TabPanel = ({children}) => (
    <div className="tabs__content">
        <TabsContext.Consumer>
            {context => {
                return children[context.activeIndex]
            }}
        </TabsContext.Consumer>
    </div>
);

const Panel = ({children}) => children;


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
                        <Panel>Dan Abramov, Adele</Panel>
                    </TabPanel>
                    
                </Tabs>
            </div>
        );
    }
}

export default App;
