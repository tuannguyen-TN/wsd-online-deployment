import { serve } from './deps';

const handleRequest = (request) => {
  return new Response('Hello world!');
};

serve(handleRequest, { port: 7777 });
