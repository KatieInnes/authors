import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import DisplayAll from '../components/DisplayAll';

const Main = () => {
    
    const [authorList, setAuthorList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthorList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])
    
    const removeFromDom = authorId => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorList(authorList.filter(AuthorForm=> AuthorForm._id !== authorId));
        })
        .catch((err)=>console.log(err))
        
    }
    
    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setAuthorList([...authorList, res.data])
            })
            .catch((err)=>console.log(err))
    }
    
    return (
        <div>
            <AuthorForm onSubmitProp={createAuthor} initialName="" />
            <hr />
            <DisplayAll authorList={authorList} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;
