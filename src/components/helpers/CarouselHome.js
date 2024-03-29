import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselCaption, CarouselControl, CarouselIndicators } from 'reactstrap';

export const CarouselHome = () => {

  return (
    <div>
       <Carousel
        activeIndex={0}
        next={function noRefCheck(){}}
        previous={function noRefCheck(){}}
        >
        <CarouselIndicators 
            activeIndex={0}
            items={[
            {
                altText: 'Slide 1',
                caption: 'Slide 1',
                key: 1,
                src: 'https://picsum.photos/id/123/1200/600'
            },
            {
                altText: 'Slide 2',
                caption: 'Slide 2',
                key: 2,
                src: 'https://picsum.photos/id/456/1200/600'
            },
            {
                altText: 'Slide 3',
                caption: 'Slide 3',
                key: 3,
                src: 'https://picsum.photos/id/678/1200/600'
            }
            ]}
            onClickHandler={function noRefCheck(){}}
        />
        <CarouselItem
            onExited={function noRefCheck(){}}
            onExiting={function noRefCheck(){}}
        >
            <img
            alt="Slide 1"
            src="https://picsum.photos/id/123/1200/600"
            />
            <CarouselCaption
            captionHeader="Slide 1"
            captionText="Slide 1"
            />
        </CarouselItem>
        <CarouselItem
            onExited={function noRefCheck(){}}
            onExiting={function noRefCheck(){}}
        >
            <img
            alt="Slide 2"
            src="https://picsum.photos/id/456/1200/600"
            />
            <CarouselCaption
            captionHeader="Slide 2"
            captionText="Slide 2"
            />
        </CarouselItem>
        <CarouselItem
            onExited={function noRefCheck(){}}
            onExiting={function noRefCheck(){}}
        >
            <img
            alt="Slide 3"
            src="https://picsum.photos/id/678/1200/600"
            />
            <CarouselCaption
            captionHeader="Slide 3"
            captionText="Slide 3"
            />
        </CarouselItem>
        <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={function noRefCheck(){}}
        />
        <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={function noRefCheck(){}}
        />
        </Carousel>
    </div>
  )
}
