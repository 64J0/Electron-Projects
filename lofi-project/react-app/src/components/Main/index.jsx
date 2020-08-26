import React, { useState } from 'react';

import { Content, Menu } from './styles';

export default function Main() {
  const [selectValue, setSelectValue] = useState("5qap5aO4i9A");

  return (
    <Content>
      <Menu>
        <h1>Lo-Fi Radios</h1>

        <select
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="5qap5aO4i9A">
            ChilledCow radio
          </option>
          <option value="ZhstyJSNKME">
            Brazil songs playlist
          </option>
          <option value="_zL0AAf-01I">
            Lonely day
          </option>
        </select>
      </Menu>

      <div id="player">
        <iframe title="youtube-video" width="640" height="360" src={`https://www.youtube.com/embed/${selectValue}?autoplay=1`} allow="autoplay; encrypted-media; picture-in-picture"></iframe>
      </div>
    </Content>
  );
}