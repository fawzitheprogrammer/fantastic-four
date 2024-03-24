import React from 'react';
function truncate(str, num) {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export default truncate;