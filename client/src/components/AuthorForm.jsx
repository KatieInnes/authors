import React, { useState } from 'react'

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props;
    const [authorName, setAuthorName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ authorName });
    }

    return (
        <form>
            <p>
                <label>First Name</label><br />
                <input type="text" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)}
                />
            </p>
            <input type="submit" />
        </form>
        
    )
}
export default AuthorForm;
        
    