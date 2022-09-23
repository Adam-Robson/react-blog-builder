import './Preview.css';
import '../Home/Home';

export default function Preview({ title }) {



  return (
    <div>
      {/* <div className="preview" style="text-align: center;"> */}
      <h1>{ title }</h1>
      <h3>Blog Subtitle</h3>
      <p>This is some blog text. </p>
    </div>
  );
}