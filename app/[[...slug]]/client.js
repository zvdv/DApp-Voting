'use client'
 
import React from 'react';
import dynamic from 'next/dynamic';
 
//console.log(typeof '../../app');
const App = dynamic(() => import('../layout.js'), { ssr: false });
 
export function ClientOnly() {
    //console.log(typeof App);
    return <App />;
}
