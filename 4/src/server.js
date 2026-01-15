import fastify from "fastify";
import getCompanies from "./utils.js";

export default () => {
  const app = fastify();

  const companies = getCompanies();

  // BEGIN (write your solution here)
    app.get('/companies/:id', (req, reply) => {
    const { id } = req.params;

    const company = companies.find(company => company.id === id);
    
    if (!company) {
      reply.code(404).send('Company not found');
      return;
    }

    return company;
  });
  // END

  return app;
};
