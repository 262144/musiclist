import React from 'react';

export default function TestComponent(props) {
  const { headline, count, showCount } = props;
  return (
    <div>
      <h1>{props.headline}</h1>
      { props.showCount? <p>{props.count}</p> : null }
    </div>
  );
}
