const Connection = require('../db/connection');

class Feedback {
    constructor(cnpj, client_id, errors, message, nps) {
      this.cnpj = cnpj;
      this.client_id = client_id;
      this.errors = errors;
      this.message = message;
      this.nps = nps;
    }
  
    static insertOne(cnpj, client_id, errors, message, nps) {
      var document = {
          cnpj: cnpj,
          client_id: client_id,
          errors: errors,
          message: message,
          nps: nps,
          created_at: 'Time.now',
          updated_at: 'Time.now'
      }
  
      Connection.getCollection('feedbacks').insertOne(document, (err, result) => {
          if (err) {
              return err;
          }
          return result;
      })
    }
  }

  module.exports = Feedback;