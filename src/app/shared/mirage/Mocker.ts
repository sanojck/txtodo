import { Server, Model, Request } from 'miragejs';
import { Payload_Login } from '../../login/hooks/useLogin';

export default function startMockServer() {
  return new Server({
    models: {
      dqrequest: Model,
    },
    routes() {
      this.urlPrefix = process.env.REACT_APP_API ? process.env.REACT_APP_API : 'http://localhost:3030/';
      this.namespace = '/';
      this.post('/login', post_login);
    },
    seeds(server) {
      // load(server.schema);
    },
  });
}

const post_login = (schema: any, request: Request) => {
  let { name, apiKey }: Payload_Login = JSON.parse(request.requestBody);
  return {
    token: {
      name: name,
      token: apiKey,
      email: `${name}@txtodo.com`,
    },
  };
};
