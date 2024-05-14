// Write your code

import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {propsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <ul>
          {propsList.map(eachItem => (
            <PlanetItem key={eachItem.id} item={eachItem} />
          ))}
        </ul>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
