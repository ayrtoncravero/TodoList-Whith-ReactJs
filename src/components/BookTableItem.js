import React from 'react';

function BookTableItem(props){
    const { book } = props;
    return(
        <tr>
            <td>{book.getTitle()}</td>
            <td>{book.getAuthor()}</td>
            <td>{book.getWasRead() ? 'Si' : 'No'}</td>
        </tr>
    );
}
export default BookTableItem;

/*class BookTableItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <td>{this.props.book.getTitle()}</td>
                <td>{this.props.book.getAuthor()}</td>
                <td>{this.props.book.getWasRead() ? 'Si' : 'No'}</td>
            </tr>
        )
    }
}*/