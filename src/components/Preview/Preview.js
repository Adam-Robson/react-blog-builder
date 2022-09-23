import './Preview.css';
import '../Home/Home';

export default function Preview({ title, subtitle, font, align }) {
  /* <div className="preview" style="text-align: center;"></div> */

  return (
    <div className={ `preview ${font}` } style={{ textAlign: `${align}` }}>
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
      <p>This is some blog text. </p>
    </div>
  );
}