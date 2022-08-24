import { Button } from './../components/Button';

import './../styles/sidebar.scss';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
  
}

export function SideBar(props: {selectedGenreId: number, genres: GenreResponseProps[], handleClickButton:(id: number) => void}) {

   return (
   <nav className="sidebar">
   <span>Watch<p>Me</p></span>
   <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
 </nav>)
}