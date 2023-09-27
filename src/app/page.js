'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { useState } from 'react';


Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name='title' placeholder='Title' 
      onChange={(e) => setTask({...task, title: e.target.value})}
      />
      <textarea name="description" placeholder="Description"
      onChange={(e) => setTask({...task, description: e.target.value})}
      ></textarea>
      <button>Submit</button>
    </form>
  )
}
