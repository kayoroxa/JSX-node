import food from './food.jsx'

const foodsName = ['salada', 'pão', 'pizza']

export default function index() {
  const div = [<div>beijo</div>]

  return (
    <div>
      Minhas hello beijin
      {foodsName.map(f => food({ name: f })).join('')}
    </div>
  )
}

//global
