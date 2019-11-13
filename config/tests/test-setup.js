// Enzyme.
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// Mock the FormData to avoid errors when sending files.
// https://stackoverflow.com/questions/45842088/react-native-mocking-formdata-in-unit-tests

function FormDataMock() {
  this.append = jest.fn();
}

global.FormData = FormDataMock;
