// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const AuthorsMain = () => {
//     const [author, setAuthor] = useState("");
    
//     const [errors, setErrors] = useState([]); 
//     const onSubmitHandler = e => {
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/authors', {
//             author
//         })
//             .then(res=>console.log(res))
//             .catch(err=>{
//                 const errorResponse = err.response.data.errors;
//                 const errorArr = []; 
//                 for (const key of Object.keys(errorResponse)) { 
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 setErrors(errorArr);
//             })            
//     }
//     return (
//         <div>
//             <h1>Favorite Authors</h1>
//             <Link to={`/new`}>Add an author</Link>
//             <form onSubmit={onSubmitHandler}>
//                 {errors.map((err, index) => <p key={index}>{err}</p>)}
//                 <p>
//                     <label>Author:</label>
//                     <input type="text" onChange={e => setAuthor(e.target.value)} />
//                 </p>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// };
// export default AuthorsMain;
