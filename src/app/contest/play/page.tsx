
import React from 'react';
import Quiz from '@/components/app-reusables/contest/Quiz';
import { result } from 'lodash';


const Page = () => {

  const fetchQuiz =  async ()=>{

   const response = await fetch("/api/quiz")
   const result = await response.json()

  }

  


  return <Quiz data={result?.data}  />;
};

export default Page;
