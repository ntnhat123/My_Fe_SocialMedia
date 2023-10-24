import React from 'react';
import Myloading from '../assets/loading.png'

export default function Loading(){
    return (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <img src="https://i.gifer.com/ZKZg.gif" alt="" className='w-24 mx-auto'/>
        </div>
    )
}