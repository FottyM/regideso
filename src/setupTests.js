import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import sinon from 'sinon'
global.sinon = sinon
// import('sinon-as-promised')
configure({ adapter: new Adapter() })
