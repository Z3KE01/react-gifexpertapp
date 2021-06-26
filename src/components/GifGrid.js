import React/*,{useEffect, useState}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
       
    const {data, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__fadeIn">Loading</p>}
            <div className="card-grid animate__fadeIn">
                {data.map((img)=>
                    <GifGridItem key={img.id} {...img} />
                    )}     
            </div>
        </>
    )
}
