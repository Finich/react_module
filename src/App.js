import './App.css';
import {SimpsonMember} from "./Components/Simpsons/Simpson";
import {RickAndMortyChars} from "./Components/RickAndMorty/RickAndMorty";

function App() {
  return (
    <div className="App">
        <div className="outer">

            <div className="wrap">
                <SimpsonMember
                    memberName={'Homer'}
                    memberPicture={'https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_764HomerSimpsonTHESIMPSONSPIN.png'}
                    desc={'Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. '}
                />
                <SimpsonMember
                    memberName={'Merge'}
                    memberPicture={'https://media.npr.org/assets/img/2013/05/07/ap0908140151727_vert-06dfa531201681c1ebe2d126471494fdeb5048ae-s1100-c50.jpg'}
                    desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie.'}
                />
                <SimpsonMember
                    memberName={'Bart'}
                    memberPicture={'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'}
                    desc={'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. '}
                />
                <SimpsonMember
                    memberName={'Lisa'}
                    memberPicture={'https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_761LisaSimpsonTHESIMPSONSPIN.png'}
                    desc={'Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                />
                <SimpsonMember
                    memberName={'Maggie'}
                    memberPicture={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
                    desc={'Margaret Evelyn Lenny "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. '}
                />
            </div>

            <div className={'block'}>Second task</div>

            <div className="wrap">
                <RickAndMortyChars />
            </div>

        </div>
    </div>
  );
}

export {App};
