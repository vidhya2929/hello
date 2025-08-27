// Importing Card.module.css
import { card } from './Card.module.css'
//  A component 
function Card(props){   // Name will be an upperCamel Case
  console.log(props)
  // {
  //   title: 'title 1',
  //   content: "content 1"                      props are stored like this
  // }
  return(
    <div className={card}>             
    {/*card class from Card.module.css should be enclosed in curly brace */}
      {/* <h1>Card Title</h1>
      <p>Card Content</p> */}

      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Card
// a component returns an HTML file and can be used directly like HTML element

// To use it as title,and content without prop

// export default function Card(){
//   const {title, content} = props;
//   return(
//     <div>
//       <h1>{title}</h1>
//       <p>{content}</p>
//     </div>
//   );
// }

// More Simplified

// function Card({title,content}){
//   return(
//     <div>
//       <h1>{title}</h1>
//       <p>{content}</p>
//     </div>
//   );
// }
// export default Card
