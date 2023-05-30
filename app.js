import { serve } from './deps.js';
import { configure, renderFile } from './deps.js';

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { 'Content-Type': 'text/html;charset=UTF-8' },
};

const visit = {
  count: 0,
};

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === '/visits') {
    visit.count++;
    return new Response(await renderFile('count.eta', visit), responseDetails);
  } else if (url.pathname === '/meaning') {
    return new Response(
      'Seeking truths beyond meaning of life, you wil find 43.'
    );
  }

  return new Response('Nothing here yet.');
};

serve(handleRequest, { port: 7777 });
