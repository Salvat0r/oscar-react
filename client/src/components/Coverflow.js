import { StyleRoot } from 'radium';
import React from 'react';
import data from '../data/data';
import Film from './Film';


var Coverflow = require('react-coverflow');


export default class Gallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            properties:data.properties,
            property: data.properties[0],
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

        // eslint-disable-next-line no-unused-vars
        const {properties,property} = this.state;

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
    
            {
                properties.map(property => <Film key={property.index} property={property} />)
            }
                  
        </Coverflow>
        </StyleRoot>

        );
    }
}

