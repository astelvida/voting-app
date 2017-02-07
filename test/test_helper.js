import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

/*  put jsdom versions of the document and window on the global object, so that
    they will be discovered by React when it accesses document or window.
*/
global.document = doc;
global.window = win;


/*  Take all the window objects and copy them on to the global objects, so that
    they can be used without the .window prefix
*/
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// chaiImmutable adds support for comparing Immutable data types when testing
chai.use(chaiImmutable);
