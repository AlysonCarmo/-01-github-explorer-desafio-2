import { useEffect, useState } from 'react';
import { Button } from './../components/Button';

import './../styles/sidebar.scss';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
  
}



export function SideBar(props: GenreResponseProps[]) {

  //const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  console.log(typeof props) 
  console.log(props)
   return (
   <nav className="sidebar">
   <span>Watch<p>Me</p></span>

   <div className="buttons-container">
    
     
   </div>

 </nav>)
}