import AdministratorControlPanel from './partials/AdministratorControlPanel';
import AdministratorMapTravel from './partials/AdministratorMapTravel';
import { useParams } from 'react-router-dom';
import BusManagement from './partials/BusManagement';

const AdministratorDashboard = () => {
    const {control} = useParams();
    return (
        <>
            <AdministratorControlPanel/>
            {control === 'travels' && 
                <AdministratorMapTravel/>
            }
            {control === 'buses' && 
                <BusManagement/>
            }
        </>
    );
}

export default AdministratorDashboard;