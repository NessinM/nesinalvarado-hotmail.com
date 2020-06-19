var environment = process.env.NODE_ENV || 'production';
var config = {
  production: {
    port         : 4000,
    env          : environment,
    dev          : false,
    secret       : 'app_2021!',
    mongodb : {
      url : 'mongodb://localhost:27017',
      name: 'self_service',
      use : {
        useUnifiedTopology: true,
        useNewUrlParser   : true
      }
    },
    auth : {
      bcrypt : {
        salt : 8
      }
    }
  },
  development: {
    port             : 4000,
    env              : environment,
    dev              : true,
    secret           : 'liatris_2021',
    mongodb          : {
      url : 'mongodb://localhost:27017',
      name: 'liatris',
      use : {
        useUnifiedTopology: true,
        useNewUrlParser   : true
      }
    },
    auth : {
      mails : {
        config : {
          user    : "nalvarado@datacont.com",
          password: "kirati#12",
          host    : "webmail.datacont.com",
          tls     : true
        }
      },
      bcrypt : {
        salt : 8
      }
    },
    empresa : {
      logo  : 'http://sil.datacont.com/static/logo.png',
      nombre: 'DATACONT SAC',
      color : '#b80813'
    },
    public : {
      base_url : 'http://localhost:8080'
    }
  }
};
export default config[environment];
