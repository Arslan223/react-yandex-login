import React from 'react';

export default function YandexHiddenFrame(props) {
  return (
    <iframe hidden title="yandex-hidden-frame" src={props.redirectTo}></iframe>
  );
}