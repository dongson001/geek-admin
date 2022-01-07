export default [
  {
    url: '/api/user/login',
    type: 'post',
    response: (config) => {
      const { userName } = config.body;
      const token = new Date();
      // mock error
      if (userName !== 'dz') {
        return {
          code: 60204,
          message: 'Account and password are incorrect.',
        };
      }

      return {
        code: 0,
        data: token,
      };
    },
  },
];
