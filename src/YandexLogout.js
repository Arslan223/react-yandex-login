import React from 'react';

export default function YandexLogout(props) {
  const onClick = () => {
    sessionStorage.setItem('yandexAutoLoginDisabled', 'true');
    props.onSuccess();
  };

  return (
    <div>
        { React.cloneElement( props.children, { onClick: onClick } ) }
    </div>
  );
}