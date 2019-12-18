import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import Card from '../components/Card';

import insta from '../assets/images/insta.png';
import prima from '../assets/images/prima.jpeg';
import ultima from '../assets/images/ultima.jpeg'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Instagram',
                    subTitle: 'New Drawings soon',
                    imgSrc: insta,
                    link: 'https://www.instagram.com/ale.kluh/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'First Draw',
                    subTitle: 'la femme fatale',
                    imgSrc: prima,
                    link: 'https://www.instagram.com/p/B5TFhp1F5YF/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Last Draw',
                    subTitle: 'a soul’s dance',
                    imgSrc: ultima,
                    link: 'https://www.instagram.com/p/B5nxo4mFHeE/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id != id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;