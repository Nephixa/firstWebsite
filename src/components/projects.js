import React, {useState} from 'react'
import './projects.scss'

function Projects() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="projects bg-projects">
            <div className="placeholder">
                <h2>Budget Cookie Clicker</h2>
                <h3>Number of times clicked: {count}</h3>
                <button onClick={handleClick}>Click me!</button>
            </div>
            
        </div>
    )
}

export default Projects;