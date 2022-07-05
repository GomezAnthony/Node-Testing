const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema is what defines the structure of the documents.
const blogSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   snippet: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true
   }
}, { timestamps: true });

// A model surronds the data and provides an interface and commiincate with the database
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;