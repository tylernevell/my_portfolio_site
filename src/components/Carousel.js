import React from 'react';
import github_PNG20 from '../assets/images/github_PNG20.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'First Project',
                    subTitle: 'Subtitle',
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Github',
                    subTitle: 'Subtitle',
                    imgSrc: github_PNG20,
                    link: 'https://github.com/tylernevell',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LinkedIN',
                    subTitle: 'Subtitle',
                    link: '',
                    selected: false
                },
            ]

        }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;