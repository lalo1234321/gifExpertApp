import React, { Fragment,useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //De esta forma no se hace debido a que es una constante y se debe de renderizar constantemente
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories(cats => [...cats,'New Element']);
    // }
    
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Add</button> */}
            {/* ol es una lista ordenada, li es un listItem */}
            {/* Para recorrer los items no se usan los ciclos porque no devuelven nada, se usa el map */}
            <ol>
                {
                    categories.map((category) => {
                        return (
                            <GifGrid key={category} 
                                category={category}
                            />
                            // <li key={category}>
                            //     {category}
                            // </li>
                        )
                    })
                }
            </ol>
            
        </Fragment>
    );

}

export default GifExpertApp;