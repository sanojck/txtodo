import React from 'react'

export default function PageNotFound() {
    return (
        <div style={{ background: '#F4F4F4', height: '100%' }}>
            <div style={{ display: 'flex', padding: '1rem', gap: '1rem' }}>
                Page not found <a href={`${process.env.PUBLIC_URL}/`} >Go to TxToDo Homepage</a>
            </div>
        </div>
    )
}