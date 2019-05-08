import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();
export default dispatcher;
// dispatcher didn't work for me. not sure why. directly called stores from actions instead (even though I know it's bad practice)