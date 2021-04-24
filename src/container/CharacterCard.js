import React, {useState} from 'react';
import icon_bookmark_default from '../assets/images/icon_bookmark_default.svg';
import icon_bookmark_selected from '../assets/images/icon_bookmark_selected.svg';
import './CharacterCard.css';

const CharacterCard = ({character}) => {
    
    const [bookmarkIconSrc, setBookmarkIconSrc] = useState(icon_bookmark_default);


  const onBookmark = () => {
    bookmarkIconSrc === icon_bookmark_default
    ? setBookmarkIconSrc(icon_bookmark_selected)
    : setBookmarkIconSrc(icon_bookmark_default);
  }

    return (
        <section className="character">
            <div className="character_image_bookmark_wrapper">
                <img className="character_image"src={character.image} alt="사진"></img>
                <div onClick={onBookmark}>
                    <img className="character_bookmark"src={bookmarkIconSrc}></img></div>   
            </div>
            <div className="character_info">
                <div className="character_info_name">{character.name}</div>
                <div>{character.species}</div>
                <div>{character.gender}</div>
            </div>
        </section>
    );
};

export default CharacterCard;