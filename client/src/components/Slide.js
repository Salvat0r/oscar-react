import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mojs from 'mo-js'


const burst = new mojs.Burst({
    left: 0, top: 0,
    radius: { 4: 19 },
    angle: 45,
    children: {
        shape: 'line',
        radius: 8,
        scale: 1,
        stroke: '#FD7932',
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        duration: 700,
        easing: 'quad.out',
    }
});

export default class Slide extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    votazione = (e) => {
        e.stopPropagation()
        this.burst()

    }

    render() {

        return(
            <div className="swiper-slide" style={{ backgroundImage: "url(https://via.placeholder.com/800x800.png?text=Film1)" }}>
                <button class="icobutton icobutton--thumbs-up" onClick={this.votazione}>

                    <FontAwesomeIcon
                        icon="thumbs-up"
                        color="#6DB65B"
                        size="3x"

                    />
                    <span class="fa fa-thumbs-up"></span>
                </button>
            </div>
        )

    }
}