import { useState } from 'react';


import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');

  return (
    <main>
      <Preview title={ title } />
      <Editor title={ title } setTitle={ setTitle } />
    </main>
  );
}
