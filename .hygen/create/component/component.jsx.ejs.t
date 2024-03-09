---
to: <%= absPath %>/<%= component_name %>.jsx
---
import style from './<%= component_name %>.module.css';

export const <%= component_name %> = (props) => {
  console.log('hello from <<%= component_name %> />')
  return (
    <div></div>
  );
};
