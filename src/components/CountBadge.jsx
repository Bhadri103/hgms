import React from 'react';

export default function CountBadge({count}) {
  return <span className="page-count-badge"><span className="sr-only">Count: </span>{count}</span>;
}
