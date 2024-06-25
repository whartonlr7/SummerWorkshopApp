
import sca_logo from '../assets/images/sca_logo.jpeg';

const Person = ({person}) => {

    let employeeName = person.firstName + ' ' + person.lastName;

    if (person.leadership) {
      employeeName = employeeName + '*';
    }

    let location = person.mailingCity + ', ' + person.state

    let imageURL = person.imageURL;

    if (person.imageURL == null) {
        imageURL = sca_logo;
    }

    return (
    <div className='bg-white rounded-xl shadow-md relative'>
        <div className='p-4'>
            <div className='w-full overflow-hidden aspect-square items-end'>
                <img className='object-cover h-full aspect-square items-start' src={imageURL} alt='Sand Cherry Logo'/>
            </div>
            <div className='mb-6'>
                <h2 className='text-xl font-bold'>{employeeName}</h2>
                <h3 className='text-gray-600 my-2'>At Sand Cherry since {person.startYear}</h3>
                <h3 className='text-gray-600 my-2'>Started: {person.startDate}</h3>
                <h3 className='text-gray-600 my-2'>Located: {location}</h3>

            </div>
        </div>
    </div>
    )
}

export default Person
