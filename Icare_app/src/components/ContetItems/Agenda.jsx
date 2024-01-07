import './Agenda.css';

export function Agenda( props ) {
    return (
      <div className={props.showButton ? 'agenda-box' : 'agenda-box-out' }>
        Our Agenda
      </div>
    );
  }