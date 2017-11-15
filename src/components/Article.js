import React, { Component } from 'react';

class Article extends Component {
    state = {
        isOpen: true
    }

    render() {
        //при деструктуризации объекта имена свойств должны быть такими же
        const { text: article, foo, flag } = this.props 
        const createdNote = <p> creation date: {(new Date()).toDateString()}</p>
        const titleStyle = { color: 'red' }
        const textStyle = { lineHeight: 1.5, fontSize: 24 }
        const textBody = this.state.isOpen && <p style={textStyle}>{article.body}</p>
        return (
            <div>
                <h2 style={titleStyle}>{article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? "Close" : "Show"}
                    </button>
                </h2>
                {textBody}
                {createdNote}
                {/* <p style={textStyle}>{textBody}</p> */}
                {/* {<p>props foo = {foo}</p>}
                {<p>props test ={flag}</p>} */}

            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article


/* Определяем state  и свойство-обработчик как свойства функции Article. 
 Ссылаемся на this.state & this.handleClick

 props являются внутренним встроенным объектом Article => this.props


 
 */
