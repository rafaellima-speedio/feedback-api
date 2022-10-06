const Connection = require('../db/connection');

class Feedback {
    constructor(cnpj, client_id, errors, message, nps) {
      this.cnpj = cnpj;
      this.client_id = client_id;
      this.errors = errors;
      this.message = message;
      this.nps = nps;
    }

    save() {
        Feedback.insertOne(this.cnpj, this.client_id, this.errors, this.message, this.nps);
    }
    
    static async insertOne(cnpj, client_id, errors, message, nps, origin) {
      var document = {
          cnpj: cnpj,
          client_id: client_id,
          errors: errors,
          message: message,
          nps: nps,
          origin: origin,
          created_at: new Date(),
          updated_at: new Date()
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