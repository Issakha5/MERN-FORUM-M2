const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const User = require('./models/User');
const Category = require('./models/Category');
const Forum = require('./models/Forum');
const bcrypt = require('bcrypt')

AdminBro.registerAdapter(AdminBroMongoose);

const cors = require("cors");
const path = require("path");

const config = require('./config');

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client/build")));

app.use('/api/auth', require("./controllers/Auth"));
app.use('/api/category', require("./controllers/Category"));
app.use('/api/forum', require("./controllers/Forum"));
app.use('/api/thread', require("./controllers/Thread"));
app.use(        '/api/post', require("./controllers/Post"));
// Pass all configuration settings to AdminBro

const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin';
const adminBro = new AdminBro({
    resources: [{
        resource:User,
    options: {
          properties: {
            password: { isVisible: false },
            password: {
              type: 'string',
              isVisible: {
                list: false, edit: true, filter: false, show: false,
              },
            },
          },
          actions: {
            new: {
              before: async (request) => {
                if(request.payload.password) {
                  request.payload = {
                    ...request.payload,
                    password: await bcrypt.hash(request.payload.password, 10),
                    password: undefined,
                  }
                }
                return request
              },
            },
            edit: { isAccessible: canModifyUsers },
            delete: { isAccessible: canModifyUsers },
            new: { isAccessible: canModifyUsers },
          }
        }}
        
        ,Category,Forum],
        dashboard: {
          handler: async () => {
            return { some: 'output' }
          },
          component: AdminBro.bundle('./my-dashboard-component')
        },
    rootPath: '/admin',
  })// Build and use a router which will handle all AdminBro routes
  const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const user = await User.findOne({ email })
      if (user.role!=='basic') {
        const matched = await bcrypt.compare(password, user.password)
        if (matched) {
          return user
        }
      }
      return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
  })
  app.use(adminBro.options.rootPath, router)
    
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});     


const PORT = 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));