import React from 'react'

export default function Heading({ title }) {
    return (
        <div className="row">
            <div className="col-12 text-center mb-4">
                <h1 className="display-3 text-dark">
                    {title}
                </h1>
            </div>
            
        </div>
    )
}
