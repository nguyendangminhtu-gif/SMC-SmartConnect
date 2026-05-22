const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'),
  logging: false
});

const AdminUser = sequelize.define('AdminUser', {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
});

const Banner = sequelize.define('Banner', {
  page: { type: DataTypes.STRING, allowNull: false }, // home, about, ...
  title: { type: DataTypes.STRING },
  subtitle: { type: DataTypes.STRING },
  image_url: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING }
});

const AboutUs = sequelize.define('AboutUs', {
  section_name: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING }
});

const Industry = sequelize.define('Industry', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING }
});

const Service = sequelize.define('Service', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING },
  icon: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING }
});

const Project = sequelize.define('Project', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING }
});

const Partner = sequelize.define('Partner', {
  name: { type: DataTypes.STRING, allowNull: false },
  logo_url: { type: DataTypes.STRING }
});

const News = sequelize.define('News', {
  title: { type: DataTypes.STRING, allowNull: false },
  summary: { type: DataTypes.TEXT },
  content: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING }
});

const ContactInfo = sequelize.define('ContactInfo', {
  key: { type: DataTypes.STRING, unique: true, allowNull: false }, // hotline, zalo, email, etc.
  value: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING }
});

const FormSubmission = sequelize.define('FormSubmission', {
  name: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  needs: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: 'new' }
});

const FormField = sequelize.define('FormField', {
  field_name: { type: DataTypes.STRING, allowNull: false }, // e.g. needs_options
  options_json: { type: DataTypes.TEXT } // JSON string of options
});

const Feedback = sequelize.define('Feedback', {
  student_name: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 5 },
  text: { type: DataTypes.TEXT }
});

const FAQ = sequelize.define('FAQ', {
  question: { type: DataTypes.STRING, allowNull: false },
  answer: { type: DataTypes.TEXT }
});

module.exports = {
  sequelize,
  AdminUser,
  Banner,
  AboutUs,
  Industry,
  Service,
  Project,
  Partner,
  News,
  ContactInfo,
  FormSubmission,
  FormField,
  Feedback,
  FAQ
};
