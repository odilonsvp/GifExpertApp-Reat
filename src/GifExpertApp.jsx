import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory )) return;
    // categories.push( newCategory );
    setCategories([ newCategory, ...categories ])
  }

  return (
    <> 
      <h3> GifExpertApp </h3>

      < AddCategory 
        onNewCategory={ (event) => onAddCategory( event )}
      />
      
      {
        categories.map(( category ) => (
          <GifGrid 
            key={ category }
            category={ category }
          />
        ))
      }
      
      
    </>
  )
  
}
