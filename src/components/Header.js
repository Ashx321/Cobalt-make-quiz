import React from 'react'
import { useState } from 'react'

const Header = () => {
     const [question, setQuestion] = useState('')
    return (
        <div>
            <div className="section1">
                <div className="header">
                    <h2>Cobalt</h2>
                    <h5>Create Test</h5>
                </div>
                <div>
                    <h5>SignOut</h5>
                </div>
            </div>
            <div className='section1'>
                <div>
                    <h5>Test Title</h5>
                    <input required type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter the Title" style={{width:"250px"}}/>
                </div>
            </div>
        </div>
    )
}
 
export default Header