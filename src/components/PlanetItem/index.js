// Write your code here
const PlanetItem = props => {
  const {item} = props
  return (
    
    <li>
    <div>
      <p>{item.name}</p>
      </div>
    </li>
  )
}

export default PlanetItem
