import food from './food.jsx'

const foodsName = ['salada', 'pão', 'pizza']

export default function index() {
  const div = [<div>beijo</div>]

  return (
    <div>
      Beijo teste bom bom
      {foodsName.map(f => food({ name: f }))}
    </div>
  )
}
