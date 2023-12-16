import React, { Component } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"

// Carousel images
import img6 from "../../assets/images/small/img-6.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"

const items = [
  {
    src: img6,
    Header : "Some representative placeholder content for the first slide.",
    altText: "FITTESTWARRIORS MAIN EVENTS1",
  },
 
  {
    src: img6,
    Header : "Some representative placeholder content for the first slide.",
    altText: "FITTESTWARRIORS MAIN EVENTS1",
  },
 
  {
    src: img6,
    Header : "Some representative placeholder content for the first slide.",
    altText: "FITTESTWARRIORS MAIN EVENTS1",
  },
 
]

class SlideDark extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
        className="d-flex h-full"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img  className="d-flex h-fit pb-2"
           style={{width:'100vw', height:'75vh' }}
            
            src={item.src}
            alt={item.altText}
          />
          <CarouselCaption
            captionHeader={item.Header}
            captionText={item.altText}
            
            className="carousel-caption d-none d-md-block"
          />
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <Carousel 
        className="my-0 counter-number ico-countdown py-0"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          dark={true}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </React.Fragment>
    )
  }
}

export default SlideDark
