import { CreateTodo } from './containers/create'
import { TodoList } from './containers/list'

const View = () => {
  return (
    <div className="max-w-sm mx-auto pt-32">
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default View
