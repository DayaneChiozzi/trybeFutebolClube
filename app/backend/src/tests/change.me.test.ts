import * as sinon from 'sinon';
import * as chai from 'chai';
import { StatusCodes } from 'http-status-codes';
import chaiHttp from 'chai-http';

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST / login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('Quando o campo e-mail não é informado retornar status 400', async () => {
    const httpResponse = await chai.request(app).post('/login')
        .send({ password: 'qualquerPassword' })

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
  });

  it('retorna  status 200 como response e um token válido na messagem', async () => {
    const httpResponseLogin = await chai.request(app).post('/login')
    .send({ email: 'admin@admin.com', password: 'secret_admin' });

    expect(httpResponseLogin.status).to.equal(StatusCodes.OK);
  })


});
