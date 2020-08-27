import React, { useState } from 'react'



export default ({ messege, id, deleteNote }) => (
    <div className='Note'>
        <p>{messege} | Id {id}</p>
        <div>
            <button onClick={()=>deleteNote (id)}>
                Delete this note 
            </button>
        </div>

    </div>
)