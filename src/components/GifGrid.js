
import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    

    const {data : images,loading} = useFetchGifs(category);
    console.log(images);
    console.log(loading);
    // console.log(images);
    // getGifs();
    return (
        <Fragment>
            <h3 className="card animate__animated animate__fadeInDown">{category}</h3>
            {loading ? <p className="card animate__animated animate__flash">Cargando</p> : null}
            <div className="card-grid">
                
                
                    {
                        images.map((img) => {
                            return(
                                <GifGridItem 
                                key={img.id}
                                {...img}
                                // img={img}
                                />
                            )
                        })
                    }
            </div>
        </Fragment>
    )
}
