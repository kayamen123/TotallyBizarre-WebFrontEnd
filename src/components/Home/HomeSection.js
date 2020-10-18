import React from "react";
import { Carousel } from 'react-bootstrap';
import P1 from '../../assets/P1.jpg';
import P2 from '../../assets/P2.jpg';
import P3 from '../../assets/P3.jpg';
import "./carousel.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function Carousel1(){
    return (
        <div  style={ {height: 1000 }}>
            <FadeInSection key={"snow"}>
        <h2 className="myH2">What is this ?</h2>
        <p className="myP">This is a responsive fixed navbar animated on scroll</p>
        <p className="myP">I took inspiration from  ABDO STEIF (<a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">https://codepen.io/abdosteif/pen/bRoyMb?editors=1100</a>)
        and Dicson <a href="https://codepen.io/dicson/pen/waKPgQ">(https://codepen.io/dicson/pen/waKPgQ)</a></p>
        <p className="myP">I HOPE YOU FIND THIS USEFULL</p>
        <p className="myP">Albi</p>
            <p className="myP">
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
        </p>
        </FadeInSection>
        </div>
    );
}


function CarouselGambar(){
    return(
    <Carousel>
        <Carousel.Item>
            <img
            className="img-carousel"
            src={ P1 }
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img-carousel"
            src={ P2 }
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img-carousel"
            src={ P3 }
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export { Carousel1, CarouselGambar };

