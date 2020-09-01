import React,{useState}from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {
 
    const [categories, setCategories] = useState(['Halo Reach']);
   /*  const handleAdd= ()=>{
       //setCategories([...categories,'Ghost']);
       setCategories(catego=>[...catego,'Ghost']);
    }
 */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
