import React from 'react';
import Book from '../entities/Book';

class UserInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.inputTitle = React.createRef();
        this.inputAuthor = React.createRef();
        this.inputWasRead = React.createRef();
    }

    onNewBook = () => {
        const newBook = new Book(
            this.inputTitle.current.value,
            this.inputAuthor.current.value,
            this.inputWasRead.current.checked,
        );

        this.props.onAddNewBook(newBook);

        this.resetInputs();
    }

    resetInputs = () => {
        this.inputTitle.current.value = "";
        this.inputAuthor.current.value = "";
        this.inputWasRead.current.checked = true;
    }

    render() {
        return (
            <div ClassName="six colum">
                <div ClassName="row">
                    <div ClassName="four colums">
                        <label>Titulo</label>
                        <input ClassName="u-full-width" placeholder="Ingrese titulo" ref={this.inputTitle} type="text"></input>
                    </div>
                    <div ClassName="four colums">
                        <label>Autor</label>
                        <input ClassName="u-full-width" placeholder="Ingrese autor" ref={this.inputAuthor} type="text"></input>
                    </div>
                    <div ClassName="four colums">
                        <label>Leido</label>
                        <input ClassName="u-full-width" ref={this.inputWasRead} type="checkbox" defaultChecked></input>
                    </div>
                    <div ClassName="row">
                        <div ClassName="twelve colums">
                            <button onClick={this.onNewBook} ClassName="button-primary u-full-width" id="buttonAddBook">Añadir libro</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInput;