import { StyleRoot } from 'radium';
import React from 'react';
var Coverflow = require('react-coverflow');


var fn = function () {
    /* do you want */
}

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 0
        };
    }

    _handleClick() {
        var num = Math.floor((Math.random() * 10) + 1);
        this.setState({
            active: num
        });
    }

    render() {  

        return(
        <StyleRoot>
        <Coverflow
            // width={960}
            // height={480}
            displayQuantityOfSide={2}
            navigation={true}
            enableHeading={false}
            infiniteScroll
            active={this.state.active}
            clickable={true}
            enableScroll={true}
            currentFigureScale={2}
            media={{
                '@media (max-width: 900px)': {
                    width: '100%',
                    height: '70vh'
                },
                '@media (min-width: 900px)': {
                    width: '100%',
                    height: '500px'
                }
            }}
        >
            <div
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
            >
                <img
                    src='https://via.placeholder.com/1000x1000'
                    alt='Film 1'
                    style={{ display: 'block', width: '100%' }}
                />
            </div>
                    <img src='https://via.placeholder.com/1000x1000' alt='Film 2' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src='https://via.placeholder.com/1000x1000' alt='Film 3' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src='https://via.placeholder.com/1000x1000' alt='Film 3' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src='https://via.placeholder.com/1000x1000' alt='Film 3' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src='https://via.placeholder.com/1000x1000' alt='Film 3' data-action="http://andyyou.github.io/react-coverflow/" />
                    <img src='https://via.placeholder.com/1000x1000' alt='Film 3' data-action="http://andyyou.github.io/react-coverflow/" />
        </Coverflow>
        </StyleRoot>

        );
    }
}

