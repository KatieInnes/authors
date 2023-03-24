import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const updateAuthor = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = authorParam => {
        axios.put('http://localhost:8000/api/authors/' + id, 
        authorParam)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update an author</h1>
            {
                loaded && <AuthorForm onSubmitProp={ updateAuthor } initialName={author.authorName} />
            }
        </div>
    )
}
export default updateAuthor;