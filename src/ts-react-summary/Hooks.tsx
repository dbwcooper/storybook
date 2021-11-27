import React from 'react';

interface IUser {
  name: string;
  gender: string;
}

const Hello: React.FC<{ message: string}> = ({ message }) => {
  const [visible, setVisible] = React.useState(false);
  const [user, setUser] = React.useState({
    name: 'Tom',
    gender: 'male',
  } as IUser);
  const ref = React.useRef<HTMLDivElement>(null!);
  const inputRef = React.useRef<HTMLInputElement>(null!);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const handleBtnHover = () => {
    if(btnRef && btnRef.current) {
      console.log('btnRef: ', btnRef.current.textContent)
    }
  }
  const [timestamp, setTimestamp] = React.useState(0);
  React.useEffect(() =>{
    document.title = timestamp.toString();
  })
  return (
    <div ref={ref}>
      <div>{`title: ${message}`}</div>
      <div>{`visible: ${visible}`}</div>
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <div>
        {`username: ${user.name}`}
        {`gender: ${user.gender}`}
      </div>
      <button onClick={() => setUser({ name: 'Tom123', gender: 'male' })}>
        change button
      </button>
      <div style={{ margin: 20 }}>
        <button ref={btnRef} onMouseEnter={() => { handleBtnHover() }} onClick={() => setTimestamp(timestamp + 1 )}>
          clock
        </button>
        <div>
          timing: {timestamp}
        </div>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={() => {
          if(inputRef && inputRef.current) {
            inputRef.current.focus();
          }
        }}>focus</button>
      </div>
    </div>
  );
};


// ts error
Hello.defaultProps = {
  message: 'test'
}

export default Hello;
