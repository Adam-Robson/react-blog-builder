import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  return (
    <main>
      <Preview title={ title } subtitle={ subtitle } />
      <Editor title={ title } setTitle={ setTitle } subtitle={ subtitle } setSubtitle={ setSubtitle } />
    </main>
  );
}
