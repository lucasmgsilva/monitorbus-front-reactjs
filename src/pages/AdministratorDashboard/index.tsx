import AdministratorControlPanel from './partials/AdministratorControlPanel';
import AdministratorMapTravel from './partials/AdministratorMapTravel';
import { useParams } from 'react-router-dom';

const AdministratorDashboard = () => {
    const {control} = useParams();
    return (
        <>
            <AdministratorControlPanel/>
            {control == 'travels' && 
                <AdministratorMapTravel/>
            }
        </>
    );
}

export default AdministratorDashboard;