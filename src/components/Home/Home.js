import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');
  const [textarea, setTextarea] = useState('');
  return (
    <main>
      <Preview title={ title } subtitle={ subtitle } font={ font } align={ align } textarea={ textarea } />
      <Editor title={ title } setTitle={ setTitle } subtitle={ subtitle } setSubtitle={ setSubtitle } font={ font } setFont={ setFont } align={ align } setAlign={ setAlign } textarea={ textarea } setTextarea={ setTextarea } />
    </main>
  );
}
