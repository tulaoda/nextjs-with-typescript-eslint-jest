import React, { PureComponent } from 'react'
import { Button, Input, List } from 'antd'
import { connect } from 'react-redux'
import { addTodo, asyncAddToDo } from '../redux/actions'

const { Item } = List

interface TodoProps {
    todos?: Array<string>
    addTodo?: (todo: string) => void
    asyncAddToDo?: (todo: string) => void
}
const mapStateToProps = (state) => ({ todos: state.todos })
const mapDispatchToProps = { addTodo, asyncAddToDo }

@connect(mapStateToProps, mapDispatchToProps)
class Todo extends PureComponent<TodoProps, { todo: string }> {
    constructor(props: TodoProps) {
        super(props)
        this.state = {
            todo: '',
        }
    }

    changeTodo = (el) => {
        this.setState({
            todo: el.target.value,
        })
    }

    // 1.2这是给父组件调用的函数
    childMethod = () => {
        return this.state.todo
    }

    render() {
        const { todos, addTodo, asyncAddToDo } = this.props
        const { todo } = this.state
        const liList = todos.map((todo, index) => (
            <Item key={index}>{todo}</Item>
        ))
        return (
            <div>
                <style jsx>
                    {`
                        h1 {
                            color: red;
                        }
                    `}
                </style>
                <div>
                    <Input
                        type="text"
                        defaultValue={todo}
                        onChange={this.changeTodo}
                    />
                    <Button onClick={addTodo.bind(this, todo)} type="primary">
                        添加
                    </Button>
                    <Button onClick={asyncAddToDo.bind(this, todo)}>
                        添加
                    </Button>
                    <h1>测试</h1>
                </div>
                <List>{liList}</List>
            </div>
        )
    }
}

export default Todo
