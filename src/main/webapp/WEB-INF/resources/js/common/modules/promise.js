//promise
import Promise from 'bluebird';

//create Promise
export default cbf => new Promise((resolve, reject) => cbf(resolve, reject));
