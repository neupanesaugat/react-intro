//   style={{
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "1rem",
//   }}
// >
//   <Person
//     image="https://variety.com/wp-content/uploads/2015/02/spider-mannew.jpeg?w=1000&h=667&crop=1"
//     name="Spiderman"
//   />
//   <Person
//     image="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"
//     name="Batman"
//   />
//   <Person
//     image="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x512_center,f_auto,q_auto:best/streams/2013/August/130808/6C8558749-130808-walter-white-tease.jpg"
//     name="Heisenberg"
//   />
import Person from "./Person";
import Player from "./Player";
function App1() {
  return (
    <section>
      <Player />
    </section>
  );
}

export default App1;
