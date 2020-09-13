import React from 'react';

export default function YandexLogout(props) {
  const onClick = () => {
    sessionStorage.setItem('yandexAutoLoginDisabled', 'true');
    props.onSuccess();
  };

  return (
    <button onClick={onClick}>Yandex Logout</button>
  );
}