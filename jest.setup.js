import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// configurate the adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
