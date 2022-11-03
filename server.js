const { app, db, PORT } = require('./config/config');
const { SERVER_DB_URI } = require('./constants/constants');
const bootstrap = async () => {
  try {
    await db.connect(SERVER_DB_URI);
    app.listen(PORT, async () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
