import './JoinUs.css';

export function ContentItem(props) {
    return (
      <div className='join-us-box'>
        {props.children}
      </div>
    );
  }