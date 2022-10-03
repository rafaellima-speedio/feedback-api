const Connection = require('../db/connection');

class Feedback {
    constructor(cnpj, client_id, type, errors, message, nps) {
      this.cnpj = cnpj;
      this.client_id = client_id;
      this.type = type;
      this.errors = errors;
      this.message = message;
      this.nps = nps;
    }

    save() {
        Feedback.insertOne(this.cnpj, this.client_id, this.type, this.errors, this.message, this.nps);
    }
    
    static insertOne(cnpj, client_id, type, errors, message, nps) {
      var document = {
          cnpj: cnpj,
          client_id: client_id,
          type: type,
          errors: errors,
          message: message,
          nps: nps,
          created_at: Date.now(),
          updated_at: Date.now()
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