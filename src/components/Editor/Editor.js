import './Editor.css';
import '../Home/Home';

export default function Editor({ title, setTitle, subtitle, setSubtitle, font, setFont, align, setAlign, textarea, setTextarea }) {
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={ title } onChange={ (e) => { setTitle(e.target.value); } } />
        <label htmlFor="title" className="caption">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={ (e) => { setSubtitle(e.target.value); } } />
        <label className="caption">Subtitle</label>
      </div>
      <div className="form-control">
        <select value={ font } onChange={ (e) => { setFont(e.target.value); } }>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label className="caption">Font</label>
      </div>
      <div className="form-control">
        <label className="caption">Alignment</label>
        <div className="radio-group" value={ align } onChange={ (e) => { setAlign(e.target.value); } }>
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea value={ textarea } onChange={ (e) => { setTextarea(e.target.value); } } style={{ height: '250px' }} />
        <label className="caption">Text</label>
      </div>
    </div>
  );
}
