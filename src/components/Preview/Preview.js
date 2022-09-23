import './Preview.css';
import '../Home/Home';

export default function Preview({ title, subtitle }) {
  /* <div className="preview" style="text-align: center;"></div> */

  return (
    <div>
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
      <p>This is some blog text. </p>
    </div>
  );
}