type ButtonProps = {
title : string
}
export function Button({ title }:ButtonProps) {
  return <button type="submit"> {title}</button>;
}
