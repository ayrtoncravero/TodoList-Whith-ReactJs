import React from 'react';
import BookTableItem from './BookTableItem';

function BookTable(props) {
    const { booksLibrary } = props;
    return (
        <div className="six colums">
            <table id="tableBooks" class="u-full-width">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>¿Leido?</th>
                    </tr>
                </thead>
                <tbody>
                    {booksLibrary.map((book, index) => <BookTableItem book={book} key={index} />)}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;