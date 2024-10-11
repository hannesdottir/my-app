import React, { useState, useEffect } from 'react';


const GetQueryParameter = () => {
    
    const [cValue, setCValue] = useState('');

    useEffect(() => {
      console.log('useEffect hook called');
  
      const urlParams = new URLSearchParams(window.location.search);
      console.log('URLSearchParams object created:', urlParams);
  
      const cValue = urlParams.get('c');
      console.log('Value of c parameter:', cValue);
  
      setCValue(cValue || '');
      console.log('cValue state variable updated:', cValue);
    }, []);
  
    return cValue;
  }

export default GetQueryParameter;