import React from 'react';
import style from './style.module.css'

function App () {
    const [emoji, setEmoji] = React.useState(null);

    const emojiList = {
    '🌺': 'hibiscus',
    '☘️': 'shamrock',
    '🎋': 'tanabata',
    '🎍': 'pine decoration',
    '🌰': 'chestnut',
    '🌳': 'deciduous tree',
    '🌷': 'tulip'
    }

    const emojisWeknow = Object.keys(emojiList);

    const emojiSearchHandler= (input) => {
        if (input.length === 0) return //to prevent it from saying emoji unavailable upon clearing search bar
        else if (input.length > 2) {
            setEmoji('please enter only one emoji at a time');
        } else if (emojiList[input]) {
            setEmoji(emojiList[input]);
        } else {
            setEmoji('translation for this emoji unavailable')
        }
    }

    return (
        <div>
           <h1>Emoji interpreter</h1>
           <input className={style.input}
           onChange={({target}) => emojiSearchHandler(target.value)}
           placeholder='enter the emoji to search'/>
          
           <p className={style.output}>
            {emoji? emoji : 'translation appears here..'}
           </p>
          
            <div>emojis we know: </div>

           <div className={style.emojiContainer}>
               {emojisWeknow.map((emoji,key) => (
                   <span key={key}
                   onClick={() => emojiSearchHandler(emoji)}
                   className={style.emoji}>
                       {emoji}
                   </span>)
               )}
           </div>

           <footer>
               click on any of the above emojis to know their real meaning.
           </footer>
        </div>
    )
}

export default App;