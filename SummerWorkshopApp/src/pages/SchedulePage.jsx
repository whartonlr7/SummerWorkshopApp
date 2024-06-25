import schedule from '../schedule.json';

const SchedulePage = () => {
  return (
    <div>
      Schedule Page
      {schedule.map((event) => (
            <h3 className = 'myBlack font-bold m-3 ml-8'>{event.time}: {event.event}</h3>
          ))}
    </div>
  )
}

export default SchedulePage
