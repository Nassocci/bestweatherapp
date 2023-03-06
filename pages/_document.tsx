import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="iambody">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
