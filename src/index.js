import './index.html';
import './index.css';
import dva from 'dva';
import model from './models/example'

import router from './router'

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(model);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
